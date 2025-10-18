import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

export default mongoose.model("Visit", VisitSchema);
