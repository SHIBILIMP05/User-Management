import User from "../model/userModel.js";
import jwt from 'jsonwebtoken'
export const starting = async (req, res) => {
   try {
      console.log("starting function running");
      res.json({ start: "application started" })
   } catch (error) {
      console.log(error);
   }
}



export const signupDetail = async (req, res) => {
   try {
      const { name, email, password } = req.body
      const exist = await User.findOne({ email: email })

      if (exist) {
         res.json({ exist: true })
      } else {

         const data = new User({
            name: name,
            email: email,
            password: password,
            is_verified: true,
            is_admin: false
         })
         const userData = await data.save()

         const userObject = userData.toObject()

         const token = jwt.sign(userObject, process.env.JwtKey, { expiresIn: "30d" })

         res.json({ token: token, userData: userObject })
      }

   } catch (error) {
      console.log(error);
   }
}

export const login = async(req,res)=>{
   try {
      const {email,password}=req.body
      console.log(email);
   } catch (error) {
      console.log(error);
   }
}