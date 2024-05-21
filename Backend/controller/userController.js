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

/* USER SIGN UP */

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

/* USER LOGIN */

export const login = async (req, res) => {
   try {

      const admin = {
         email: "admin12@gmail.com",
         password: "123qwe"
      }

      const { email, password } = req.body
      if (email === admin.email) {
         if (password !== admin.password) {
            res.json({ invalid: true })

         } else {
            const adminToken = jwt.sign(admin, process.env.JwtKey, { expiresIn: "30d" })
            res.json({ admin: true , adminToken:adminToken })
         }
      } else {

         const userData = await User.findOne({ email: email })

         if (!userData) {
            res.json({ verify: true })
         } else {
            const passCheck = await bcrypt.compare(password, userData.password)
            if (!passCheck) {
               res.json({ invalid: true })
            } else {
               const userObject = userData.toObject()
               console.log("userObject===>:", userObject);
               const token = jwt.sign(userObject, process.env.JwtKey, { expiresIn: "30d" })
               res.json({ token: token, userData: userObject })
            }
         }
      }
   } catch (error) {
      console.log(error);
   }
}


/* UPDATE USER DETAILS */

export const updateDetails = async (req, res) => {
   try {
      const { id, name, phone, email, location } = req.body
      const oldData = await User.findOne({ _id: id })
      console.log("oldData:::", oldData);
      console.log("imagepathhhhh::", req.body);
      const imagefile = req.file ? req.file.filename : oldData.image
      console.log("image:::", imagefile);
      const updatedUser = await User.findOneAndUpdate(
         { _id: id },
         {
            name: name,
            phone: phone,
            email: email,
            location: location,
            image: imagefile
         },
         { new: true })
      console.log("updated detail ::", updatedUser);
      res.json({ updatedUser: updatedUser })

   } catch (error) {
      console.log(error);
   }
}