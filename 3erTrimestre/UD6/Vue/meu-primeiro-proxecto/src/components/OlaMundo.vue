<template>
  <!-- Aqui vai o HTML do compoñente -->
  <div>
    <h1>Ola Mundo!</h1>

    <!-- Este input está ligado á propiedade 'mensaxe', que é un dato que recolle este compoñente, ao ligalo facemos que o valor do input se almacene na variable que declaramos no return de data() -->
    <input v-model="mensaxe" placeholder="Escribe algo aquí" />

    <!-- Aquí accedemos á propiedade e amosamos o valor -->
    <p>O que escribiches: {{ mensaxe }}</p>
  </div>
</template>

<script>
export default {
  name: "MeuComponente", //Nome do compoñente polo que imos chamar en App.vue ao exportalo
  data() {
    //Esta é a información que queremos enviar como lóxica do compoñente
    return {
      mensaxe: "",
    };
  },
};
</script>

<style>
/* Aquí van os estilos CSS específicos deste compoñente*/

h1 {
  color: pink;
}
</style>
