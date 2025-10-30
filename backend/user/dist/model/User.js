import mongoose, { Schema, Document } from "mongoose";
const UserScheema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}, {
    timestamps: true,
});
export const User = mongoose.model("User", UserScheema);
//# sourceMappingURL=User.js.map