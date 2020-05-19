new Vue ({
    el: "#app",
    data: {
        titulo: "Matador de Monstros",
        status: false,
        jogadores: ['jogador', 'monstro'],
        donoTurno: "",
        gameOver: false,
        fataliteOn: false,
        players: [
            {
                nome: 'jogador',
                vidaAtual: 240,
                vidaTotal: 240,
                ataque: 25,
                colorLog: "#8bcbe4",
                fatalite: false
            },
            {
               nome: 'monstro',
               vidaAtual: 300,
               vidaTotal: 300,
               ataque: 30,
               colorLog: "#b9c7c9",
               fatalite: false
            }
        ],
        log: {
            dono: "",
            tipo: "",
            classe: "",
            texto: "",
            
        },
        logList: []
    },
    computed: {

    },
    methods: {
        iniciarJogo() {
            this.status = true
            this.gameOver = false
            this.donoTurno = this.jogadores[0]
            this.logList = []
            this.players[0].vidaAtual = this.players[0].vidaTotal 
            this.players[1].vidaAtual = this.players[1].vidaTotal 
            
            this.addLog("inicio")

            this.addLog("inicioTurno")
        },
        totalPorcento(valor, valorTotal) {
            return (valor * 100) / valorTotal
        },
        ataque() {
            const player = this.players.find(x => x.nome === this.donoTurno)            

            const playerAlvoNome = this.donoTurno === this.jogadores[0] ?
                this.jogadores[1] : this.jogadores[0]

            const playerAlvo = this.players.find(x => x.nome === playerAlvoNome)

            const taxaAcerto = Math.floor(Math.random() * 100)

            let dano = 0
            
            if (taxaAcerto >= 80) {
                dano = player.ataque + (taxaAcerto / 10)
            }
            else if(taxaAcerto >= 50) {
                dano = player.ataque
            }
            else if(taxaAcerto >= 30) {
                dano = player.ataque / 2
            }
            else {
                this.addLog("falhaAtaque", player.colorLog, playerAlvo.nome, 0, taxaAcerto)
                this.mudarTurno()
                return
            }

            dano = Math.round(dano)

            const vidaRestante = playerAlvo.vidaAtual - dano

            if (vidaRestante <= 0) {
                playerAlvo.vidaAtual = 0
                this.addLog("ataque", player.colorLog, playerAlvo.nome, dano, taxaAcerto)
                this.finalizarJogo()
                return "Fim de Jogo"
            }
            else { 
                if (vidaRestante <= (playerAlvo.vidaTotal / 10)) {
                    playerAlvo.fatalite = true
                }
                else {
                    playerAlvo.fatalite = false
                }
            }
            
            playerAlvo.vidaAtual = vidaRestante

            this.addLog("ataque", player.colorLog, playerAlvo.nome, dano, taxaAcerto)

            this.mudarTurno()
        },
        ataqueEspecial() {
            const player = this.players.find(x => x.nome === this.donoTurno)            

            const playerAlvoNome = this.donoTurno === this.jogadores[0] ?
                this.jogadores[1] : this.jogadores[0]

            const playerAlvo = this.players.find(x => x.nome === playerAlvoNome)

            const taxaAcerto = Math.floor(Math.random() * 100)

            let dano = 0

            if (taxaAcerto > 80) {
                dano = Math.round(player.ataque * 2)
            }
            else {
                this.addLog("falhaAtaqueEspecial", player.colorLog, playerAlvo.nome, 0, taxaAcerto)

                this.mudarTurno()
                return
            }

            const vidaRestante = playerAlvo.vidaAtual - dano

            if (vidaRestante <= 0) {
                playerAlvo.vidaAtual = 0
                this.addLog("ataqueEspecial", player.colorLog, playerAlvo.nome, dano, taxaAcerto)
                this.finalizarJogo()
                return "Fim de Jogo"
            }
            else { 
                if (vidaRestante <= (playerAlvo.vidaTotal / 10)) {
                    playerAlvo.fatalite = true
                }
                else {
                    playerAlvo.fatalite = false
                }
            }

            playerAlvo.vidaAtual = playerAlvo.vidaAtual - dano

            this.addLog("ataqueEspecial", player.colorLog, playerAlvo.nome, dano, taxaAcerto)
            this.mudarTurno()
        
        },
        cura() {
            const player = this.players.find(x => x.nome === this.donoTurno)            

            const vidaGanha = Math.floor(Math.random() * (50 - 20) + 20)

            let diferencaVida = player.vidaTotal - player.vidaAtual

            if ( diferencaVida < vidaGanha ) {
                player.vidaAtual = player.vidaTotal

            }
            else {
                diferencaVida = vidaGanha
                player.vidaAtual = player.vidaAtual + vidaGanha

                player.vidaAtual > (player.vidaTotal / 10) ? player.fatalite = false : null
            }

            this.addLog("cura", player.colorLog, null, diferencaVida, vidaGanha)
            this.mudarTurno()
        },
        mudarTurno() {
            this.fataliteOn = this.players.find(x => x.nome === this.donoTurno).fatalite
            this.donoTurno = this.donoTurno === this.jogadores[0] ?
                this.jogadores[1] : this.jogadores[0]
            
            
            this.addLog("inicioTurno")
        },
        addLog(tipo, colorLog, playerAlvoNome = null, dano = null, taxaAcerto = null) {
            switch (tipo) {

                case "inicio":
                    this.logList.unshift({ 
                        dono: "",
                        acao: "",
                        classe: "#0275d8",
                        texto: "<span style='color: white'>A batalha iniciada!</span>"
                    })
                    break

                case "inicioTurno":
                    this.logList.unshift({
                        dono: this.donoTurno.toUpperCase(),
                        acao: "",
                        classe: "#0275d8",
                        texto: "<span style='color: white'>iniciou o turno!</span>"
                    })
                    break

                case "ataque":
                    this.logList.unshift({ 
                        dono: this.donoTurno.toUpperCase(), 
                        acao: "<b style='color: white'>atacou</b>", 
                        classe: colorLog, 
                        texto: `com sucesso! <b style='color: red'>
                                DANO CAUSADO ${dano}PV (LUCKY ${taxaAcerto}%)</b> 
                                em <b style='color: red'>${playerAlvoNome.toUpperCase()}</b>`
                    })
                    break
                
                case "ataqueEspecial":
                    this.logList.unshift({ 
                        dono: this.donoTurno.toUpperCase(), 
                        acao: "<b style='color: #FFCC00'>deu um ataque ESPECIAL</b>", 
                        classe: colorLog, 
                        texto: `com sucesso! <b style='color: red'>
                                CAUSOU DANO DOBRADO ${dano}PV (LUCKY ${taxaAcerto}%)</b> 
                                em <b style='color: red'>${playerAlvoNome.toUpperCase()}</b>`
                    })
                    break

                case "falhaAtaque":
                    this.logList.unshift({ 
                        dono: this.donoTurno.toUpperCase(), 
                        acao: "<b style='color: white'>errou o ataque!</b>", 
                        classe: colorLog, 
                        texto: ` <b style='color: red'>SEM DANO CAUSADO (LUCKY ${taxaAcerto}%)</b> em 
                                 <b style='color: red'>${playerAlvoNome.toUpperCase()}</b>`
                    })
                    break
                
                case "falhaAtaqueEspecial":
                    this.logList.unshift({ 
                        dono: this.donoTurno.toUpperCase(), 
                        acao: "<b style='color: #FFCC00'>errou o ataque especial!</b>", 
                        classe: colorLog, 
                        texto: `<b style='color: red'>
                                SEM DANO CAUSADO (LUCKY ${taxaAcerto}%)</b> 
                                em <b style='color: red'>${playerAlvoNome.toUpperCase()}</b>`
                    })
                    break

                case "cura":
                    this.logList.unshift({ 
                        dono: this.donoTurno.toUpperCase(), 
                        acao: "<b style='color: #7aa328'>usou CURA!</b>", 
                        classe: colorLog, 
                        texto: `<b style='color: #7aa328'> + ${dano}PV (PV LUCKY ${taxaAcerto})</b>`
                    })
                    break
                default:
                    break
            }
        },
        finalizarJogo() {
            this.gameOver = true
            this.status = false
        }
    }
})