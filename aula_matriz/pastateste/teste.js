function criarLogin(){
    let usu = document.getElementById("user").value
    let sen = document.getElementById("pass").value
    localStorage.setItem("user", usu)
    localStorage.setItem("pass", sen)
    localStorage.clear()

}

function verificarLogin(){
    let usu = document.getElementById("user").value
    let sen = document.getElementById("pass").value
    let usu2 = localStorage.getItem("user")
    let sen2 = localStorage.getItem("pass")
    if(usu2 == usu && sen2 == sen){
        alert("Login efetuado com sucesso.")
    }
    else{
        alert("Acesso negado.")
    }
}