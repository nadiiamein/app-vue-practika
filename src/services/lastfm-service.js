export default {
  _apiBase: "http://ws.audioscrobbler.com/2.0/",
  _apiKey: "90369f01aacfac837abe737ad0e7fa69",
  _apiFormat: "json",

  async getResorce(params) {
    const qs = this._convertToQueryString;
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

  _transformArtistInfo(artist) {
      return {
          name: artist.name,
          summary: artist.bio.summary,
          tags: this._trasformTags(artist.tags.tag)
      };

  },

  _trasformTags() {
      return tags.map(tag => tag.name);
  },

  _convertToQueryString(params) {
    return Object.keys(params)
      .map( key =>`${encodeURIComponent(key)} = ${encodeURIComponent(params[key])}`)
      .join("&");
  },
};