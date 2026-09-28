import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
   try {
      console.log("goHome");
      // LOGIC
      // SERVICE MODE
      res.send('Home Page');
   } catch (error) {
      console.log("Error in goHome:", error);
   }
};

restaurantController.getlogin = (req: Request, res: Response) => {
   try {
      res.send('Login Page');
   } catch (error) {
      console.log("Error in getlogin:", error);
   }
};

restaurantController.getSignup = (req: Request, res: Response) => {
   try {
      res.send('Signup Page');
   } catch (error) {
      console.log("Error in getSignup:", error);
   }
};

restaurantController.processLogin = (req: Request, res: Response) => {
   try {
      res.send("DONE");
      console.log('Login Page');
   } catch (err) {
      console.log("Error in processLogin:", err);
   }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
   try {
      console.log("processSignup");
      console.log("req.body:", req.body);

			const newMember: MemberInput = req.body;
			newMember.memberType = MemberType.RESTAURANT; // Set memberType to RESTAURANT


      const memberService = new MemberService();
      const result = await memberService.processSignup(newMember);
      
      res.send(result);
   } catch (err) {
      console.log("Error in processSignup:", err);
      res.send(err);
   }
};

export default restaurantController;