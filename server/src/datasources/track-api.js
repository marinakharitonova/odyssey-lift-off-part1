const {RESTDataSource} = require("apollo-datasource-rest");

class TrackApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }

    getTracksForHome() {
        return this.get('tracks');
    }

    getAuthor(authorId) {
        return this.get(`author/${encodeURIComponent(authorId)}`);
    }

    getTrack(trackId) {
        return this.get(`track/${encodeURIComponent(trackId)}`);
    }

    getTrackModules(trackId) {
        return this.get(`track/${encodeURIComponent(trackId)}/modules`)
    }

    getModule(moduleId) {
        return this.get(`module/${encodeURIComponent(moduleId)}`)
    }

    incrementTrackViews(trackId) {
        return this.patch(`track/${encodeURIComponent(trackId)}/numberOfViews`);
    }
}

module.exports = TrackApi;