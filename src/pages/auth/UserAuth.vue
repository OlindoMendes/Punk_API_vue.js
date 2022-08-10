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
    },
    switchAuthMode() {
      console.log(this.mode);
      if (this.mode === "login") {
        this.mode = "signup";
      } else this.mode = "login";
    },
    handleError() {
      this.error = false;
    },
  },
  components: { BaseBadge },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}
</style>
