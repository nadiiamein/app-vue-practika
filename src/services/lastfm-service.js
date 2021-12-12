export default {
  _apiBase: "http://ws.audioscrobbler.com/2.0/",
  _apiKey: "90369f01aacfac837abe737ad0e7fa69",
  _apiFormat: "json",

  async getResorce(params) {
    const qs = this._convertToQueryString
    ({
      ...params,
      api_key: this._apiKey,
      format: this._apiFormat,
    });

    const res = await fetch(`${this._apiBase}?${qs}`);
    if (!res.ok) {
      throw new Error(`Could not fetch, status ${res.status}`);
    }
    return res.json();
  },

  async getArtistInfo(artist) {
    const params = {
      artist,
      method: "artist.getInfo",
      autocorrect: 1,
      lang: "en",
    };
    const data = await this.getResorce(params);
    return this._transformArtistInfo(data.artist);
  },
  //suchen artist nur mit namen
  async searchArtist(artist){
      const params = {
          artist,
          method: 'artist.search',

      };

      const data = await this.getResorce(params);
      return this._transformArtistsMatches(data.results.artistmatches.artist);
  },

  //suchen anlische artists

  async getSimilarArtists(artist) {
    const params = {
      artist,
      method: "artist.getSimilar",
      autocorrect: 1,
      limit: 100,
    };
    const data = await this.getResorce(params);

    return this._transformSimilarArtists(data.similarartists.artist);
  },

  _transformArtistInfo(artist) {
    return {
      name: artist.name,
      summary: artist.bio.summary,
      tags: this._trasformTags(artist.tags.tag),
    };
  },

  //transform  artist uas function getSimilarArtists
  _transformSimilarArtists(similarArtists) {
    return similarArtists.map((artist) => ({
      name: artist.name,
      match: this._transformMath(artist.match),
      url: artist.url,
    }));
  },

  _transformArtistsMatches(artistMatches) {
      return artistMatches.map( artist => artist.name);
  },

  _trasformTags() {
    return tags.map((tag) => tag.name);
  },

  //transform  match uas function transformSimilarArtists
  _transformMath(match) {
      return Math.round(parseFloat(match) * 100) + '%'
  },

  _convertToQueryString(params) {
    return Object.keys(params)
      .map(
        (key) =>
          `${encodeURIComponent(key)} = ${encodeURIComponent(params[key])}`
      )
      .join("&");
  },
};  