<template>
  <div id="app">
    <TabelaUsuario @clickUser="infoUser = $event" :users="users" />
    <InfoUsuario  :info="infoUser" />
  </div>
</template>

<script>
import TabelaUsuario from './components/TabelaUsuario.vue'
import InfoUsuario from './components/InfoUsuario.vue'

export default {
  name: 'App',
  components: {
    TabelaUsuario,
    InfoUsuario
  },
  data() {
    return {
      infoUser: null,
      users: [
        {id: 1,nome: 'Antonio Felix',idade: 23},
        {id: 2,nome: 'Vitória Felix',idade: 19},
        {id: 3,nome: 'Maria de Fátima ',idade: 57},
        {id: 4,nome: 'Edvaldo Sena',idade: 45}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height: 200px;
}
</style>
