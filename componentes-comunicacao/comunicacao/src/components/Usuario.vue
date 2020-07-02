<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <hr>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Sobrenome é <strong>{{ sobrenome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <p>Contador é <strong>{{ contador }}</strong></p>
        <button @click="alterarNome">Alterar nome</button>
        <div class="componentes">
            <app-usuario-info :contador="contador" :nome="nome" :sobrenome="sobrenome" :idade="idade"/>
            <app-usuario-editar :contador="contador" :salvarInfoFn="salvarInfo" :reiniciarNomeFn="reiniciarNome" @mudouNome="nome = $event" :nome="nome" :sobrenome="sobrenome" :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { 
        AppUsuarioInfo,
        AppUsuarioEditar
    },
    data() {
        return {
            nome: 'Antonio',
            sobrenome: 'Felix',
            idade: 23,
            contador: 10,
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Vitória'
        },
        reiniciarNome() {
            this.nome = 'Antonio'
        },
        salvarInfo(info) {
            this.nome = info.nome
            this.sobrenome = info.sobrenome
            this.idade = info.idade
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
