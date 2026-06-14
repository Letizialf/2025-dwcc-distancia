<template>
  <div>
    <h1>
      Exemplo de Hooks sobre o ciclo de vida dun compoñente con Composition API
    </h1>
    <p>{{ mensaxe }}</p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, onUpdated } from "vue";

export default {
  name: "ExemploCicloVida_Composition",
  setup() {
    const mensaxe = ref("O compoñente está activo");

    console.log("setup: Inicialización");

    onMounted(() => {
      console.log("onMounted: O compoñente está montado");
    });

    onUnmounted(() => {
      console.log("onUnmounted: O compoñente foi desmontado");
    });

    onUpdated(() => {
      console.log("onUpdated: DOM actualizado");
    });

    return { mensaxe };
  },
};
</script>

<style></style>
