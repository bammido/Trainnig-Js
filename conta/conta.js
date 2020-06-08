export class conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == conta){
            throw new Error("Você não devaria instanciar um objeto no tipo conta diretamente, pois ela é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agfencia= agencia;
        
    }
    set cliente(nomeCliente){
        if(nomeCliente instanceof cliente){
            this._cliente = nomeCliente;
        } 
        
    }
    get cliente(){
        return this.cliente;
    }
    

    get saldo(){
        return this._saldo;
    }

    //método abstrato
    sacar(valor){
        throw new Error("o método sacar da conta é abstrato");
    }
    _sacar(valor, taxa){
        const valorSacado = taxa*valor
        if(this._saldo>=valorSacado){
            this._saldo-=valorSacado;
            return valorSacado;
        }
        return 0
    }

    depositar(valor){
            if(valor<=0){
                 return;
            }
            this._saldo+=valor;
     }
     tranferir(valor, conta){
         const valorSacado = this.sacar(valor);
         conta.depositar(valorSacado);
    }
}