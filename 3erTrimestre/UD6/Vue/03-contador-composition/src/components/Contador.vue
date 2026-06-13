<template>
  <h1>Contador: {{ contador }}</h1>
  <p>{{ parOuImpar }}</p>

  <button @click="incrementar">Incrementar</button>
  <button @click="reiniciar">Reiniciar Contador</button>

  <p>{{ mensaxe }}</p>
</template>

<script>
// Importamos as funcións necesarias de Composition API
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

export default {
  name: "Contador",
  props: {
    inicial: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    // Declaramos as variables reactivas ---> EQUIVALE AO RETURN DE data() que é o estado reactivo do compoñente
    const contador = ref(props.inicial); //Para definir que unha variable é reactiva úsase ref
    const mensaxe = ref("");

    // Propiedade computada para determinar se o contador é par ou impar:
    const parOuImpar = computed(() => {
      contador.value % 2 === 0 ? "O contador é par" : "O contador é impar";
    });

    // Métodos para incrementar e reiniciar o contador
    const incrementar = () => {
      contador.value++;
    };

    const reiniciar = () => {
      contador.value = props.inicial;
    };

    // Watcher para controlar os cambios no contador
    watch(contador, (novo, vello) => {
      mensaxe.value = `O contador cambiou de ${vello} a ${novo}`;
    });

    // Hooks / Ganchos sobre o ciclo de vida
    onMounted(() => {
      console.log("O compoñente foi montado");
    });

    onUnmounted(() => {
      console.log("O compoñente foi desmontado");
    });

    // Temos que devolver os métodos e as propiedades para poder acceder a elas dende o template
    return {
      contador,
      mensaxe,
      parOuImpar,
      incrementar,
      reiniciar,
    };
  },
};
</script>

<style></style>
