import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

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

restaurantController.processSignup = (req: Request, res: Response) => {
   try {
      console.log("processSignup");
      res.send("DONE");
      console.log('Signup Page');
   } catch (err) {
      console.log("Error in processSignup:", err);
   }
};

export default restaurantController;