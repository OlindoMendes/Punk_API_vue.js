<template>
<base-card>
      <form @submit.prevent="onSubmit">
        <div class="form-control">
          <label for="name">Nome da cerveja</label>
          <input id="name" v-model="beerInfo.name" />
          <label for="tagline">Tagline</label>
          <input  id="tagline" v-model="beerInfo.tagline" />
        </div>
        <base-button>Salvar </base-button>
      </form></base-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    mounted() {
    this.$store.dispatch("auth/loadBeers");
  },
    computed: {
    ...mapGetters({
      beers: "auth/getBeers",
    }),
    beerInfo() {
            return this.beers.find(beer => beer.id == this.$route.params.id)
        }
    },
   
    methods:{
         onSubmit() {
            this.$store.dispatch('auth/editBeer', {name: this.beerInfo.name, tagline: this.beerInfo.tagline})
            this.$router.push('/beers')
        }
    }
    }

</script>