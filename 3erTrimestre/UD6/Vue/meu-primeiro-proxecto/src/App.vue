<template>
  <!-- Creamos a instancia do compoñente chamándoo polo nome que lle asignamos ao exportalo no propio compoñente-->
  <OlaMundo />
</template>

<script>
// Importamos os compoñentes que imos usar
import OlaMundo from "./components/OlaMundo.vue";

// Exportamos o compoñente principal con todos os sub-compoñentes para poder importalo en main.js e que se ligue no index.html
export default {
  name: "App",
  components: {
    OlaMundo,
  },
};
</script>
