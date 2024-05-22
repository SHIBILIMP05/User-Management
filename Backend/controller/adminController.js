import userModel from "../model/userModel.js";


export const fetchData = async (req,res)=>{
    try {
        const data = await userModel.find()
        console.log("data==::>",data);
        res.json({userData:data})
    } catch (error) {
        console.log(error);
    }
} 

export const deleteData = async(req,res)=>{
    try {
        const id = req.params.Id
        console.log("id=========>>>>>>:",id);
        await userModel.deleteOne({_id:id})
        const data = await userModel.find()
        console.log("delete =" ,data);
        res.json({data :data})
    } catch (error) {
        console.log(error);
    }
}