import mongoose from "mongoose";

const GitHubStatSchema = new mongoose.Schema({
    repositories: Number,
    stars: Number,
    contributions: Number,
    pullRequests: Number,
    followers: Number,
}, { timestamps: true });

export default mongoose.model("GitHubStat", GitHubStatSchema);
