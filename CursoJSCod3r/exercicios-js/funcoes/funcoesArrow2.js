function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(() => { 
        this.idade++ // "this" no contexo léxico. Ele considera o atributo "idade" de pessoa.
        console.log(this.idade);
    }, 1000)
}

new Pessoa