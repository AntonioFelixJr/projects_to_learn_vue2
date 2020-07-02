<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Nome: <input type="text" v-model="nomeAlterado" /></p>
        <p>Sobrenome: <input type="text" v-model="sobrenomeAlterado" /></p>
        <p>Idade: <input type="number" v-model="idadeAlterado" /></p>
        <p>Contador: {{ contador }}</p>
        <button @click="alterarContador">Alterar contador</button>
        <button @click="salvarInfo">Salvar Edição</button>
        <button @click="reiniciarNomeFn">Reiniciar nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props: {
        nome: {
            type: String,
            // default() {
            //     return Array(10).fill(0).join(',')
            // }
            default: 'Nome usuário'
        },
        sobrenome: {
            type: String,
            required: true
        },
        idade: Number,
        reiniciarNomeFn: Function,
        salvarInfoFn: Function,
        contador: Number
    },
    data() {
        return {
            nomeAlterado: this.nome,
            sobrenomeAlterado: this.sobrenome,
            idadeAlterado: this.idade,
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        salvarInfo() {
            this.salvarInfoFn({
                nome: this.nomeAlterado,
                sobrenome: this.sobrenomeAlterado,
                idade: parseInt(this.idadeAlterado)
            })
            //this.$emit('mudouNome',  this.nomeAlterado)
        },
        alterarContador() {
            this.contador += 1
            barramento.$emit('contadorMudou', this.contador)

            // barramento.alterarContador(this.contador)
        }
    },
    watch: {
        nome() {
            this.nomeAlterado = this.nome
        },
        sobrenome() {
            this.sobrenomeAlterado = this.sobrenome
        },
        idade() {
            this.idadeAlterado = this.idade
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
