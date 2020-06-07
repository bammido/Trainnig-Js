export class sistemaAutenticacao{
    static login(autenticavel, senha){
        if (sistemaAutenticacao.ehatenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    
    static ehatenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}