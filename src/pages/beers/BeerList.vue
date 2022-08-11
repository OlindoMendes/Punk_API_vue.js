<template>
  <div class="container">
    
    <div class="mt-3">

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        :first-number="first"
        :last-number="last"
        align="fill"
        @change="changePage"
      ></b-pagination>
      
    </div>
    <div class="beers">
      <div class="beer" v-for="beer in beers" :key="beer.id">
      <a @click="deleteBeer(beer.id)"><b-icon
          class="fa-star"
          icon="trash"
          scale="1"
          variant="danger"
          shift-h="2"
        ></b-icon></a>
        <router-link :to="{name: 'editbeer', params:{id: beer.id}}" ><b-icon
          class="fa-star"
          icon="pencil"
          scale="1"
          variant="primary"
          shift-h="-5"
        ></b-icon></router-link>
        <img :src="beer.image_url" />
        <h4 class="card-title">{{ beer.name }}</h4>
        <p class="card-text">{{ beer.tagline }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      rows: 5,
      perPage: 1,
      currentPage: 1,
      first: null,
      last: null,
    };
  },
  mounted() {
    this.$store.dispatch("auth/loadBeers");
  },
  computed: {
    ...mapGetters({
      beers: "auth/getBeers",
    }),
  },
  methods: {
    changePage() {
      console.log("clique");
      if (this.currentPage === 1) {
        this.first = true;
      } else {
        this.first = false;
      }
      this.$store.dispatch("auth/getBeers", {
        rows: this.rows,
        perPage: this.perPage,
        current: this.currentPage,
      });
    },
    deleteBeer(id) {
      this.$store.dispatch("auth/beerDelete", id);
      this.$bvToast.toast("Exclcuindo bebida...", {
          title: `Excluindo...`,
          variant: "danger",
          solid: true,
        })
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.container {
  font-family: "Roboto";

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
    .card-title{
        margin: 10px;
    }
  }
}
</style>
