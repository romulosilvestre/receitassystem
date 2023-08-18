
 /*User History 02:
        
          O usuário do sistema vai digitar na tela de autenticação, o login e a senha.
          Para testar utilize: login:master   senha:123
          Caso o login e senha esteja correto mostre uma mensagem "Bem Vindo ao Sistema"
          Caso contrário mostre a mensagem : dados inválidos     
    */

function autenticar(){   
   const login = document.getElementById("login").value;
   const senha = document.getElementById("senha").value;
   if(login == "master" && senha == "123"){
      alert("Bem Vindo ao nosso sistema");
   }else{
      alert("Dado inválido");
   }
}

