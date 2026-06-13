<template>
  <h1>Exemplo de hooks sobre o ciclo de vida dun compoñente</h1>

  <p>{{ mensaxe }}</p>
</template>

<script>
export default {
  name: "ExemploClicloVida",
  data() {
    return {
      mensaxe: "O compoñente está activo",
    };
  },

  beforeCreate() {
    console.log("beforeCreate: Datos aínda non inicializados");
  },
  created() {
    console.log("created: Datos inicializados");
  },
  beforeMount() {
    console.log("beforeMount: Ainda non montado no DOM");
  },
  mounted() {
    console.log("mounted: Xa montado no DOM");
  },
  beforeUpdate() {
    console.log("beforeUpdate: Actualización pendente");
  },
  updated() {
    console.log("updated: DOM actualizado");
  },
  beforeUnmount() {
    console.log("beforeUnmount: Preparándose para desmontar o compoñente");
  },
  unmounted() {
    console.log("unmounted: O compoñente foi desmontado");
  },
};
</script>

<style>
h1 {
  color: green;
}
</style>
