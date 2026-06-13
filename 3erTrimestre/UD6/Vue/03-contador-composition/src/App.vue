<script>
// import HelloWorld from './components/HelloWorld.vue'
import Contador from "./components/Contador.vue";
// Exportamos App para que sexa accesible dende main.js
export default {
  name: "App",
  components: {
    Contador,
  },
};
</script>

<template>
  <!-- <HelloWorld /> -->
  <Contador />
</template>
