<template>
  <div id="app">
    <h1>Lista de tarefas</h1>
    <TaskInput @add-task="addTask"></TaskInput>
    <TaskList :tasks="tasks" @remove-task="removeTask"></TaskList>
  </div>
</template>

<script>
import TaskInput from "./components/TaskInput.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskInput,
    TaskList,
  },

  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    addTask(task) {
      this.tasks.push(task); //Engade a tarefa á lista
    },

    removeTask(index) {
      this.tasks.splice(index, 1); //Elimina a tarefa polo seu índice
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
</style>
