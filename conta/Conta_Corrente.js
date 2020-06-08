import { cliente } from "../Cliente.js";
import { conta } from "./conta.js";

export class contaCorrente extends conta{
    static numeroDeContasCorrente = 0;  
    constructor( cliente, agencia){
        super(0, cliente, agencia);
        contaCorrente.numeroDeContasCorrente++;
    }
    
    //sobreescrevendo o método sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
        }
    }    
