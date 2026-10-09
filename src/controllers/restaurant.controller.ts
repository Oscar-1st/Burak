import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Error";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
    // send | json | redirect | render
  } catch (error) {
    console.log("Error in goHome:", error);
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log("Error in getSignup:", error);
    res.redirect("/admin");
  }
};

restaurantController.getlogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (error) {
    console.log("Error in getlogin:", error);
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("processSignup");
		const file = req.file;
		if(!file) 
			throw new Errors(HttpCode.BAD_REQUEST, Message.SOMEThING_WENT_WRONG);

    const newMember: MemberInput = req.body;
		newMember.memberImage = file?.path;  // Set the memberImage property to the uploaded file path
    newMember.memberType = MemberType.RESTAURANT; // Set memberType to RESTAURANT
    const result = await memberService.processSignup(newMember);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error in processSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMEThING_WENT_WRONG;
    res.send(
      `<script>alert('${message}'); window.location.replace('/admin/login');</script>`,
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("Login Page");
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error in processLogin:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMEThING_WENT_WRONG;
    res.send(
      `<script>alert('${message}'); window.location.replace('/admin/login');</script>`,
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("Logout");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error in logout:", err);
    res.send(err);
    res.redirect("/admin");
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("Checking Authentication");
    if (req.session?.member)
      res.send(
        `<script>alert('Hi, ${req.session.member.memberNick}')</script>`,
      );
    else res.send(`<script>alert('${Message.NOT_AUTHENTICATED}')</script>`);
  } catch (err) {
    console.log("Error in processLogin:", err);
    res.send(err);
  }
};

restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction,
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next(); // Proceed to the next middleware or route handler
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script>alert('${message}'); window.location.replace('/admin/login');</script>`,
    );
  }
};

export default restaurantController;
