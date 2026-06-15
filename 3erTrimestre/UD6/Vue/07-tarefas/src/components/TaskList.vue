<template>
  <ul>
    <!-- Cando se dea o evento 'remove' executa o método 'removeTask', que á sua vez emite un evento para que App.vue o escoite e execute a función desexada -->
    <TaskItem
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @remove="removeTask(index)"
    ></TaskItem>
  </ul>
</template>
<script>
import TaskItem from "./TaskItem.vue";
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  components: {
    TaskItem,
  },

  methods: {
    removeTask(index) {
      this.$emit("remove-task", index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
