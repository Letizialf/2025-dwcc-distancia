<template>
  <ExemploInstancia :inicial="5" @eventoPersonalizado="manexarEvento">
    <p>Slot personalizado: Este texto sustitúe o slot predeterminado</p>
    <p></p>
  </ExemploInstancia>
</template>

<script>
import ExemploInstancia from "./components/ExemploInstancia.vue";

export default {
  name: "App",
  components: {
    ExemploInstancia,
  },

  methods: {
    manexarEvento(mensaxe) {
      console.log("Evento recibido no compoñente pai:", mensaxe);
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
