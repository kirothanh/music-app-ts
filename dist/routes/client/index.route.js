"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topic_route_1 = require("./topic.route");
const song_route_1 = require("./song.route");
const favourite_song_route_1 = require("./favourite-song.route");
const search_route_1 = require("./search.route");
const clientRoutes = (app) => {
    app.use(`/topics`, topic_route_1.topicRoutes);
    app.use(`/songs`, song_route_1.songRoutes);
    app.use(`/favourite-songs`, favourite_song_route_1.favouriteSongRoutes);
    app.use(`/search`, search_route_1.searchRoutes);
};
exports.default = clientRoutes;
