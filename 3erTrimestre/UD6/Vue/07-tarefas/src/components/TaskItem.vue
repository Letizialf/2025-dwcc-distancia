<template>
  <li>
    {{ task }}
    <button @click="$emit('remove')">Eliminar</button>
  </li>
</template>
<script>
export default {
  props: {
    task: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: red;
  color: aliceblue;
  border: none;
  cursor: pointer;
}
</style>
