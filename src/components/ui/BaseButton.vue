<template>
<button v-if="!link" :class="mode">
    <slot></slot> 
</button>
<router-link v-else :to="to" :class="mode">
    <slot></slot>
</router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            typ: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style scoped>
button,
a {
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

a:hover,
a:active,
button:hover,
button:active {
  background-color: #156e5f;
  border-color: #209b86;
}

.flat {
  background-color: transparent;
  color: #209b86;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #209b86;
  color: #ffffff;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #a8e9de;
  color: #ffffff;
}
</style>