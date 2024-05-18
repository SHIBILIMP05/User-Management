import User from "../model/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
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
         const saltRound = 10;
         const salt = await bcrypt.genSalt(saltRound)
         const hashedPassword = await bcrypt.hash(password, salt)
         const data = new User({
            name: name,
            email: email,
            password: hashedPassword,
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

export const login = async (req, res) => {
   try {
      const { email, password } = req.body

      const userData = await User.findOne({ email: email })

      if (!userData) {
         res.json({ exist: false })
      } else {
         console.log("password::::", userData.password);
         const passCheck = await bcrypt.compare(password, userData.password)
         if (!passCheck) {
            res.json({ invalid: true })
         } else {
            const token = jwt.sign(userData, process.env.JwtKey, { expiresIn: "30d" })
            res.json({ token: token, userData: userData })
         }
      }
   } catch (error) {
      console.log(error);
   }
}