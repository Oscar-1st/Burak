import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
   try {
      console.log("goHome");
      res.render('home');
      // send | json | redirect | render
   } catch (error) {
      console.log("Error in goHome:", error);
   }
};

restaurantController.getSignup = (req: Request, res: Response) => {
   try {
      res.render('signup');
   } catch (error) {
      console.log("Error in getSignup:", error);
   }
};

restaurantController.getlogin = (req: Request, res: Response) => {
   try {
      res.render('login');
   } catch (error) {
      console.log("Error in getlogin:", error);
   }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
	try {
		console.log("processSignup");

		const newMember: MemberInput = req.body;
		newMember.memberType = MemberType.RESTAURANT; // Set memberType to RESTAURANT
		const result = await memberService.processSignup(newMember);

		req.session.member = result;
		req.session.save(function() {
			res.send(result);
		});
	} catch (err) {
		console.log("Error in processSignup:", err);
		res.send(err);
	}
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
   try {
      console.log('Login Page');
      const input: LoginInput = req.body;
      const result  = await memberService.processLogin(input);
				
			req.session.member = result;
			req.session.save(function() {
				res.send(result);
			});			
   } catch (err) {
      console.log("Error in processLogin:", err);
      res.send(err);
   }
};



export default restaurantController;