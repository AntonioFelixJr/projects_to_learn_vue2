new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(msg, event) {
            console.log(event.type)
            alert(msg + ' Event Type: ' + event.type)
        },
        salvarValor(event) {
            this.valor = event.target.value
        }
    }
})