<template>
    <div class="form-search">
         <form class="form-search__form" @submit.prevent="onFormSubmit">
              <input class="form-search__input" v-model="artist" type="text" placeholder="Lied suchen" required>
              <button class="form-search__button">Suche</button>
        
    </form>
    </div>
</template>

<script>


export default {

    emits: ['form-submit'],

data(){
return{
artist: '',
};
},

methods: {
  onFormSubmit() {
      this.$emit('form-submit', this.artist)
  },
}

}
</script>

<style lang="scss" scoped>
.form-search {
        
    &__form {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 1rem;
    }

    &__input {
        font-family: inherit;
        font-size: 1.6rem;
        color: #191C2B;
        display: block;
        width: 95%;
        height: 4rem;
        padding: .8rem 1.3rem;
        border: .1rem solid #ccc;
        border-radius: .6rem;
        background: none;
        outline: none;
        margin: 0;
    }

    &__button {
        font-family: inherit;
        font-size: 1.3rem;
        color: #191C2B;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 125px;
        min-height: 40px;
        padding: 5px 15px;
        border: .1rem solid #191C2B;
        border-radius: .6rem;
        background: none;
        outline: none;
        appearance: none;
        user-select: none;
        cursor: pointer;
        margin: 0px; 
    }
}
</style>