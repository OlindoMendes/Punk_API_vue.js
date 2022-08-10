<template>
  <div class="container">
    <div class="beers">
      <div class="beer" v-for="beer in beers" :key="beer.id">
        <h4 class="card-title">{{ beer.name }} </h4>
        <img :src="beer.image_url" />
        <p class="card-text">{{ beer.tagline }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import App from "@/App.vue";
export default {
  mounted() {
    this.$store.dispatch("auth/loadBeers");
    console.log(this.beers);
  },
  computed: {
    ...mapGetters({
      beers: "auth/getBeers",
    }),
  },
  components: { App },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.beers {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 18px;
  .beer {
    background: #f9f9f9;
    padding: 7px;
    text-align: center;
    cursor: pointer;
    img {
      width: 20%;
    }
    .fa-star {
      float: right;
      color: #d6d6d6;
      cursor: pointer;
      font-size: 18px;
    }
  }
}
</style>
