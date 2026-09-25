import dotenv from "dotenv"; // intagraes .env
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
        console.log(`Server is running successfully on port ${PORT}`);
    })
})
.catch( err => console.log("Error connecting to MongoDB:", err)); 