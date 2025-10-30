import mongoose from "mongoose";
const connectdb = async () => {
    const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/userdb";
    if (!dbURI) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }
    try {
        await mongoose.connect(dbURI, {
            dbName: "chatappmicroserviceapp",
        });
        console.log("Connected to MongoDB successfully");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
export default connectdb;
//# sourceMappingURL=db.js.map