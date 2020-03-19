new Vue({
	el: '#desafio',
	data: {
		efeito: false,
		classe1: 'destaque',
		classe3: null,
		classe4: '',
		valido: false,
		borda: true,
		cor5: '',
		style5: {
			backgroundColor: 'blue',
			width: '500px',
			height: '250px'

		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 === 'destaque'
				? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {

		},
		mudandoClasse3(event) {
			return  this.classe3 = event.target.value
		},
		setValido(event) {
			this.valido = event.target.value == "true"
				? true : false
		}
	},
	computed: {

	}
})
