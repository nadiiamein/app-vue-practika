<template>
  <div class="main-layout">
    <div class="main-layout__wrap">
<headerOne text="Musik suchen"></headerOne>
  <form-search @form-submit="onSearchFormSubmit"></form-search>
  <info-artist v-if="isArtistInfo" v-bind="InfoArtist"></info-artist>
<similar-artist v-if="isSimilarArtist" :artists="SimilarArtist"></similar-artist>
    </div>
  </div>
</template>

<script>
import HeaderOne from './components/HeaderOne.vue';
import FormSearch from './components/FormSearch.vue';
import InfoArtist from './components/InfoArtist.vue';
import SimilarArtist from './components/SimilarArtist.vue';





export default {

    components: {
        HeaderOne,
        FormSearch,
        InfoArtist,
        SimilarArtist,
    },

data() {
return {
  InfoArtist: {},
  SimilarArtist: []
};
  },
  computed: {
    isArtistInfo() {
      return Object.keys(this.InfoArtist).length > 0;
    },
    isSimilarArtist() {
      return this.SimilarArtist.length > 0;
    }
  },

    methods: {
 async onSearchFormSubmit(artist){
const data = await this.$lastfmService.getArtistInfo(artist);
consolr.log(data);
  },
}
}



</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html {
    font-size: .625em;
    box-sizing: border-box;
    text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.87);
    line-height: normal;
    background: #fafafa;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0;
}

.main-layout {
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom: 50px;
    
    &__wrap {
        max-widtH: 74rem;
        padding: 0 20px;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 600px) {
    .main-layout {
        padding-top: 50px;
    }
}
</style>