
<template>
  <div id="usuario-info">
    <h1 v-if="info == null" > Nenhum usuário selecionado.</h1>
    <div v-else> 
      <h2> ID: {{ info.id }}</h2>
      <h2> NOME: {{ info.nome}}</h2> 
      <h2> IDADE: {{ info.idade }}</h2> 
    </div>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style>
  #usuario-info {
    height: 100%;
    width: 50%;
    border: solid 4px black;
  }

  #usuario-info h1 {
    padding: 7% 0;
    text-align: center;
  }
</style>