<template>
  <div>
    <h3>Contido do compoñente para a práctica de directivas en Vue</h3>

    <!-- v-bind -->
    <img :src="urlImaxe" alt="Exemplo de v-bind abreviado" />
    <br />
    <img v-bind:src="urlImaxe" alt="Exemplo de v-bind" />
    <br /><br />

    <!-- v-model -->
    <input v-model="nome" placeholder="Escribe o teu nome" />
    <p>Este é o teu nome: {{ nome }}</p>

    <!-- v-if / v-else -->
    <button @click="alternarValor">Alternar valor de 'mostra'</button>
    <p v-if="mostra">Este texto só se amosa se 'mostra' é verdadeiro</p>
    <p v-else="">Este texto só se amosa se 'mostra' é falso</p>

    <!-- v-for -->
    <ul>
      <li v-for="(elemento, index) in lista" :key="index">{{ elemento }}</li>
    </ul>

    <!-- v-html -->
    <div v-html="contidoHTML"></div>
  </div>
</template>

<script>
export default {
  name: "Directivas",

  data() {
    return {
      urlImaxe: "https://via.placeholder.com/150",
      nome: "nome",
      mostra: true,
      lista: ["Elemento 1", "Elemento 2", "Elemento 3"],
      contidoHTML: "<strong> Este texto está renderizado como HTML </strong>",
    };
  },

  methods: {
    alternarValor() {
      this.mostra = !this.mostra;

      //   if (this.mostra) {
      //     this.mostra = false;
      //   } else {
      //     this.mostra = true;
      //   }
    },
  },
};
</script>

<style>
h1 {
  color: #42b983;
  margin-bottom: 10px;
}

button {
  margin: 5px;
  padding: 10px;
  border: none;
  background-color: #42b983;
  color: aliceblue;
  cursor: pointer;
}

button:hover {
  background-color: #2c7a73;
}
</style>
