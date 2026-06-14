<template>
  <div>
    <input
      type="text"
      v-model="newTask"
      placeholder="Escribe unha tarefa..."
      @keyup.enter="submitTask"
    />
    <button @click="submitTask">Engadir tarefa</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },

  methods: {
    submitTask() {
      if (this.newTask.trim()) {
        this.$emit("add-task", this.newTask.trim()); //Emite o evento que executa o método addTask
        this.newTask = ""; //Limpa o input
      }
    },
  },
};
</script>
<style scoped>
input {
  margin-right: 10px;
}
</style>
