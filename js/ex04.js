function verificar(){
    var usuario, senha

    usuario= document.getElementById("usuario").value
    senha= document.getElementById("senha").value

    if(usuario=="Emanueli" && senha=="2026"){
        alert("Acesso permitido")
    }else{
        alert("Acesso negado")
    }
}