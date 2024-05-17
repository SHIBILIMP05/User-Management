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
      const { name, email, password, confirmPassword } = req.body
      const exist = await User.findOne({ email: email })

      if (exist) {
         res.json({ exist: true })
      } else {

         const data = new User({
            name: name,
            email: email,
            password: password,
            is_verified: true
         })
         const userData = await data.save()
         console.log(userData)
         const token = jwt.sign(userData,process.env.JwtKey,{expiresIn:"30d"})
         res.json({token:token,userData})
      }

   } catch (error) {
      console.log(error);
   }
}