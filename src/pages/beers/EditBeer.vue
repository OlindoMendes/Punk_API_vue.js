<template>
<base-card>
      <form @submit.prevent="onSubmit">
        <div class="form-control">
          <label for="name">Nome da cerveja</label>
          <input id="name" v-model="name" />
          <label for="tagline">Tagline</label>
          <input  id="tagline" v-model="tagline" />
        </div>
        <p v-if="isValid" class="errors">
          Por favor, entre com um email válido e senha (maior que 6 carateres!)
        </p>
        <base-button>Salvar </base-button>
      </form></base-card>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            tagline:'',
            isValid:false
        }
    },
   
    methods:{
         onSubmit() {
            this.$store.dispatch('auth/editBeer', {name: this.name, tagline: this.tagline})
        }
    }
    }

</script>