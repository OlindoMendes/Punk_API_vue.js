<template>
  <div>
    <base-card>
      <form @submit.prevent="signUp">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="email">Senha</label>
          <input type="password" id="senha" v-model.trim="password" />
        </div>
        <p v-if="isValid" class="errors">
          Por favor, entre com um email válido e senha (maior que 6 carateres!)
        </p>
        
        <base-button>{{ captionButton }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          captionButtonMode
        }}</base-button>
      </form></base-card
    >
  </div>
</template>

<script>
import BaseBadge from "@/components/ui/BaseBadge.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      isValid: null,
      mode: "login",
      isLoading: false,
      error: null,
      dada: null
    };
  },
  computed: {
    captionButton() {
      if (this.mode === "login") {
        console.log(this.mode);
        return "Login";
      } else {
        return "Signup";
      }
    },
    captionButtonMode() {
      if (this.mode === "login") {
        console.log(this.mode);
        return "Sign Up instead";
      } else {
        return "Login instead";
      }
    },
  },
  methods: {
    async signUp() {
      this.dada = this.$store.getters['auth/getBeers']
      this.isValid = false;
      if (
        this.emailAddress === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.isValid = true;
        return;
      }
      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === "login") {
          console.log('aqui')
          await this.$store.dispatch("auth/login", actionPayload);
        } else {
          await this.$store.dispatch("auth/signUp", actionPayload);
          this.isLoading = false;
        }
      } catch (error) {
        this.error =
          error.message ||
          "Falha ao autenticar, tente mais tarde. Verifique os seus dados!";
      }
      this.email = ''
      this.password = ''
    },
    switchAuthMode() {
      
      if (this.mode === "login") {
        this.mode = "signup";
        console.log(this.mode)
      } else this.mode = "login";
      console.log(this.mode)
    },
    handleError() {
      this.error = false;
    },
  },
  components: { BaseBadge },
};
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
form {
  margin: 1rem;
  padding: 1rem;
  font-family: 'Poppins';
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.15rem;
}

input:focus{
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}
</style>
