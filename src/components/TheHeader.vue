<template>
  <header>
    <nav>
      <h1>
        <router-link to="/"><img src="../assets/garupa.jpg" >GARUPA  WEB</router-link>
      </h1>
      <ul>
        <li v-if="!isLoggedIn"><router-link to="auth">Login</router-link></li>
        <li v-else><base-button @click="logout">Logout </base-button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default{
  computed:{
    isLoggedIn(){
      return this.$store.getters.isAuthenticated
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('auth/logOut')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
header {
  width: 100%;
  height: 5rem;
  background-color: #209b86;
  font-family: 'Poppins';

  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #ffffff;
  border-radius: 10px;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
img {
  width: 10%;
}
</style>
