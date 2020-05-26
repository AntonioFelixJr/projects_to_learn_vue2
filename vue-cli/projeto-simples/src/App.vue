<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '!!!'">Alterar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Aprendendo VUE-CLI'
    }
  }
}
</script>

<style scoped>
  #app {
    background-color: chocolate;
    color: white;
  }
</style>
