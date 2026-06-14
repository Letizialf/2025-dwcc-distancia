<script>
import ExemploCicloVida_Composition from "./components/ExemploCicloVida_Composition.vue";
import ExemploCicloVida_Options from "./components/ExemploCicloVida_Options.vue";

export default {
  name: "App",
  components: {
    ExemploCicloVida_Options,
    ExemploCicloVida_Composition,
  },
};
</script>

<template>
  <ExemploCicloVida_Options />

  <ExemploCicloVida_Composition />
</template>

<style></style>
