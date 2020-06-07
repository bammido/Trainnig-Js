import {cliente} from "./Cliente.js"

import {contaCorrente} from "./conta/Conta_Corrente.js"
import {contaPoupanca} from "./conta/conta-Poupanca.js"
import {contaSalario} from "./conta/Conta-Salario.js"

import { gerente } from  "./funcionarios/gerente.js"
import {diretor} from  "./funcionarios/diretor.js"
import {funcionario} from "./funcionarios/funcionario.js"
import {sistemaAutenticacao} from "./sistema-de-atenticacao.js"

const diretor1 = new diretor("Miguel", 10000, 12345678900);
diretor1.cadastrarSenha("123456789");

const gerente1 = new gerente("Vitor", 3000, 10987654321);
gerente1.cadastrarSenha("123");

const cliente1= new cliente("Julia", 789561379, "456");

const gerenteestaLogado = sistemaAutenticacao.login(gerente1, "123");
const diretorestaLogado = sistemaAutenticacao.login(diretor1, "123");

const clienteestaLogado = sistemaAutenticacao.login(cliente1, "456");


console.log("gerente",gerenteestaLogado);
console.log("diretor",diretorestaLogado);
console.log("cliente",clienteestaLogado);