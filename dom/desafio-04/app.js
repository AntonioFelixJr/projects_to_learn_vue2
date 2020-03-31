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

		},
		style6: {
			backgroundColor: 'green',
			width: '250px',
			height: '50px'

		},
		porcento: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 === 'destaque'
				? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			this.porcento = 0
			const intervalo = setInterval(() => {
				this.porcento += 1

				if (this.porcento >= 250) {
					clearInterval(intervalo)
				} 
			}, 25);
		},
		mudandoClasse3(event) {
			return this.classe3 = event.target.value
		},
		setValido(event) {
			this.valido = event.target.value === 'true'
				? true : false
		}
	},
	computed: {

	}
})
