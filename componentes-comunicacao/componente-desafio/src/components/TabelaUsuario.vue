
<template>
  <table class="lista">
    <thead>
      <tr>
        <td><strong>#ID</strong></td>
        <td><strong>Nome</strong></td>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="user in users" :key="user.id" @click="userSelecionado(user.id, user.nome, user.idade)">
        <td >{{ user.id }}</td>
        <td>{{ user.nome }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    users: [Array, Object]
  },
  methods: {
    userSelecionado(id, nome, idade) {
      this.$emit('clickUser',{id, nome, idade})      
    }
  }
}
</script>

<style>
  .lista {
    width: 50%;
    border-spacing: 0px;
    border-collapse: separate;
  }
  .lista thead {
    color: whitesmoke;
    background-color: #000;
  }

  .lista td {
    padding: 15px;
    border-bottom: 1px solid  #CCC;
  }

  .lista tbody tr:hover {
    background-color: #ccc;
  }
</style>