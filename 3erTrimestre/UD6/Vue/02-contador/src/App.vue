<script>
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
  },
};
</script>

<template>
  <h1>Exemplo de Options API en Vue</h1>
  <Contador />
  <!-- <Contador :inicial="5" /> -->
  <!-- Aquí podemos especificar un valor inicial ou non (se non especificamos o contador parte do valor por defecto que especificamos nas props)-->
</template>

<style>
h1 {
  color: aliceblue;
}
</style>
