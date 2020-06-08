import { conta } from "./conta.js";

export class contaPoupanca extends conta{
    static numeroDeContasPoupanca = 0;
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        numeroDeContasPoupanca++;
    }
    sacar(valor){
        const taxa =1.02;
        return this._sacar(valor, taxa);
    } 
}