import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://AryanCder123:885140637088@cluster0.fhtgmdo.mongodb.net/Food_del').then(()=>console.log("DB connected"));
} 
