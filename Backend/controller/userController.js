
export const starting = async(req,res)=>{
   try {
    console.log("starting function running");
    res.json({start:"application started"})
   } catch (error) {
    console.log(error);
   }
}

