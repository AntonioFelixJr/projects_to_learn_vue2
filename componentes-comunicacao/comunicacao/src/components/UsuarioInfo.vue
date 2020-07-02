<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome: <strong>{{ nome }}</strong></p>
        <p>Sobrenome: <strong>{{ sobrenome }}</strong></p>
        <p>Idade: <strong>{{ idade }}</strong></p>
        <p>Contador: <strong>{{ contador }}</strong></p>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:['nome', 'sobrenome', 'idade', 'contador'],
    methods: {
        created() {
            barramento.$on('contadorMudou', contador => {
                this.contador = contador
            })
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
