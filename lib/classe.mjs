class FormaGeometrica{
    #base
    #altura
    #tipo
    
    get base(){
        return this.#base
    }
    get altura(){
        return this.#base
    }
    get tipo(){
        return this.#base
    }
    set base(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error("Erro: a base precisa ser númerica e ")
        }
        this.#base = valor;
    }
    set altura(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error("Erro: a base precisa ser númerica e ")
        }
        this.#base = valor;
    }
    set tipo(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error("Erro: a base precisa ser númerica e ")
        }
        this.#base = valor;
    }
    set tipo(valor){
        if(!["R", "T", "E"].includes(valor.toUpperCase())){

        }
        this.#tipo = valor.toUpperCase();
    }
    calcArea(){
        switch(this.#tipo){
            case "R":
                return this.#base * this.#altura
            case "T":
                return this.#base * this.#altura / 2
            case "E":
                return (this.#base / 2) * (this.#altura / 2) * Math.PI
        }
    }

}
let formal = new FormaGeometrica()

formal.base = 7
formal.altura = 22.5
formal.tipo = "R"

console.log("Área da formal: ", formal.calcArea())