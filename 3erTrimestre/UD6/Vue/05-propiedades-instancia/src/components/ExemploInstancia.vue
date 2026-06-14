<template>
  <div>
    <h1>Exemplo das propiedades dunha instancia</h1>
    <br />

    <!-- $data -->
    <p><strong>Datos:</strong>{{ $data }}</p>

    <!-- $props -->
    <p><strong>Props:</strong>{{ $props }}</p>

    <!-- $refs -->
    <input ref="meuInput" placeholder="Escribe algo aquí" />

    <!-- $slots -->
    <div>
      <strong>Slots recibidos:</strong>
      <slot>Slot predeterminado non substituído</slot>
    </div>

    <button @click="incrementar">Incrementar contador</button>
    <button @click="emitirEvento">Emitir Evento</button>

    <p><strong>Contador:</strong>{{ contador }}</p>
    <p><strong>Par ou Impar:</strong>{{ parOuImpar }}</p>
    <p><strong>Mensaxe Emitida:</strong>{{ mensaxe }}</p>
  </div>
</template>

<script>
export default {
  name: "ExemploInstancia",
  props: {
    inicial: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      contador: this.inicial,
      mensaxe: "Non se emitiron eventos aínda",
    };
  },

  computed: {
    parOuImpar() {
      return this.contador % 2 === 0
        ? "O contador é par"
        : "O contador é impar";
    },
  },

  mounted() {
    console.log("O compoñente foi montado");

    //   Exemplo de uso de $refs
    console.log("Elemento ref de input: ", this.$refs.meuInput);

    //   Uso de $attrs para atributos non especificados como props
    console.log("$attrs: ", this.$attrs);
  },

  methods: {
    incrementar() {
      this.contador++;
      this.$forceUpdate();
    },

    emitirEvento() {
      this.$emit(
        "eventoPersonalizado",
        "Evento emitido desde ExemploInstancia"
      );
      this.mensaxe = "Evento emitido";
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
