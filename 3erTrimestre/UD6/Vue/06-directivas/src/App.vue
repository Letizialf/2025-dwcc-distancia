<template>
  <h1>Exemplo do uso de directivas en Vue</h1>
  <!-- <img src="./assets/beautiful-house-with-nature-elements.jpg" alt="" /> -->

  <Directivas />
</template>

<script>
import Directivas from "./components/Directivas.vue";
export default {
  name: "App",
  components: {
    Directivas,
  },
};
</script>
