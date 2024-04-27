"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const favouriteSongSchema = new mongoose_1.default.Schema({
    userId: String,
    songId: String,
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date
}, {
    timestamps: true
});
const FavouriteSong = mongoose_1.default.model("FavouriteSong", favouriteSongSchema, "favourite-songs");
exports.default = FavouriteSong;
