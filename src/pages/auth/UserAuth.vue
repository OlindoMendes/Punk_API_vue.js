<template>
  <div>
    <base-card>
      <form @submit.prevent="signUp">
        <div class="form-control">
          <label for="email">E - mail</label>
          <input type="email" id="email" v-model.trim="email" />
          <label for="email">Senha</label>
          <input type="password" id="senha" v-model.trim="password" />
        </div>
        <p v-if="isValid" class="errors">
          Por favor, entre com um email válido e senha (maior que 6 carateres!)
        </p>

        <base-button>{{ captionButton }}</base-button>
        <button class="flat" type="button" mode="flat" @click="switchAuthMode">{{captionButtonMode
        }}</button>
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
        return "Login";
      } else {
        return "Registrar";
      }
    },
    captionButtonMode() {
      if (this.mode === "login") {
        return "Registre-se aqui!";
      } else {
        return "Faça o Login!";
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
        mode: this.mode
      };

      try {
        if (this.mode === "login") {
          await this.$store.dispatch("auth/login", actionPayload);
          this.$router.push("/beers");
          this.clearForm();
        } else {
          await this.$store.dispatch("auth/signUp", actionPayload);
          this.$router.push("/beers");
          this.clearForm();
          this.isLoading = false;
        }
      } catch (error) {
        this.error =
          error.message ||
          "Falha ao autenticar, tente mais tarde. Verifique os seus dados!";
      }
    },
    clearForm() {
      this.email = "";
      this.password = "";
    },
    switchAuthMode() {
      console.log('aqui')
      if (this.mode === "login") {
        this.mode = "signup";
      } else this.mode = "login";
      
    },
  },
  components: { BaseBadge },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
form {
  margin: 1rem;
  padding: 1rem;
  font-family: "Poppins";
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.flat {
  background-color: transparent;
  color: #209b86;
  border: none;
  border-radius: 30px;
}

.outline {
  background-color: transparent;
  border-color: #209b86;
  color: #ffffff;
}

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #209b86;
  border: 1px solid #209b86;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin: 5px;
  display: inline-block;
}


.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #a8e9de;
  color: #ffffff;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.15rem;
}

input:focus {
  border-color: #a8e9de;
  background-color: #faf6ff;
  outline: none;
}

p {
  font-size: 10.5px;
}

.errors {
  font-weight: bold;
  color: red;
}
</style>
