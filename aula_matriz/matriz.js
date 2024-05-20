// var alunos = new Array(3)
// alunos.push("Luquetas")
// alunos.push("Tasca")
// alunos.push("D.S. Pastor")

// for(var nomes of alunos){
//     console.log(nomes)
// }
var button, quebra_linha, jogada = 1
var tabuleiro = new Array(3)

divisao = document.createElement("div")
divisao.setAttribute("id", "div1")
document.body.append(divisao)

    for(var i = 0; i< tabuleiro.length; i ++){
        tabuleiro[i] = new Array(3)
}
    for(var i = 0; i< tabuleiro.length; i ++){
        quebra_linha = document.createElement("br")
        document.body.append(quebra_linha)
        for(var j = 0; j< tabuleiro[i].length;j++){
            button = document.createElement("button")
            button.setAttribute("type", "button")
            button.setAttribute("id", "bt"+i+""+j)
            button.setAttribute("class", "btJogo" +i)
            button.setAttribute("onclick", "marcaCasa('bt"+ i + j + "')")
            button.append(document.createTextNode(""))
            document.body.append(button)
        }            
}

// fimdiv = document.createElement("/div")
// document.body.append(fimdiv)

    function marcaCasa(nomeBotao){
        if(jogada % 2 == 0){
            document.getElementById(nomeBotao).innerText = "O"
            document.getElementById(nomeBotao).style.color = "darkblue"
        }else{ document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "maroon"
    }
        document.getElementById(nomeBotao).disabled = true
        jogada ++
        if(jogada >= 5)+
        encerraJogo()
    }

    function encerraJogo(){
        if(document.getElementById("bt00").innerText == document.getElementById("bt01").innerText 
        && document.getElementById("bt01").innerText == document.getElementById("bt02").innerText 
        && document.getElementById("bt00").innerText != ""
        ) 
        {alert("Jogo Finalizado!\nVencedor:" + document.getElementById("bt00").innerText)}
        
        if(document.getElementById("bt10").innerText == document.getElementById("bt11").innerText 
        && document.getElementById("bt11").innerText == document.getElementById("bt12").innerText 
        && document.getElementById("bt10").innerText != ""
        ) 
        {alert("Jogo Finalizado!\nVencedor:" + document.getElementById("bt20").innerText)}
        
        if(document.getElementById("bt20").innerText == document.getElementById("bt21").innerText 
        && document.getElementById("bt21").innerText == document.getElementById("bt22").innerText 
        && document.getElementById("bt20").innerText != ""
        ) 
        {alert("Jogo Finalizado!\nVencedor:" + document.getElementById("bt20").innerText)}

        if(document.getElementById("bt00").innerText == document.getElementById("bt10").innerText 
        && document.getElementById("bt10").innerText == document.getElementById("bt20").innerText 
        && document.getElementById("bt00").innerText != ""
        ) 
        {alert("Jogo Finalizado!\nVencedor:" + document.getElementById("bt00").innerText)}

        if(document.getElementById("bt01").innerText == document.getElementById("bt11").innerText 
        && document.getElementById("bt11").innerText == document.getElementById("bt21").innerText 
        && document.getElementById("bt01").innerText != ""
        ) 
        {alert("Jogo Finalizado!\nVencedor:" + document.getElementById("bt01").innerText)}

        if(document.getElementById("bt02").innerText == document.getElementById("bt12").innerText 
        && document.getElementById("bt12").innerText == document.getElementById("bt22").innerText 
        && document.getElementById("bt02").innerText != ""
        ) 
        {alert("Jogo Finalizado!\nVencedor:" + document.getElementById("bt02").innerText)}

        if(document.getElementById("bt00").innerText == document.getElementById("bt11").innerText 
        && document.getElementById("bt11").innerText == document.getElementById("bt22").innerText 
        && document.getElementById("bt00").innerText != ""
        ) 
        {alert("Jogo Finalizado!\nVencedor:" + document.getElementById("bt00").innerText)}

        if(document.getElementById("bt02").innerText == document.getElementById("bt11").innerText 
        && document.getElementById("bt11").innerText == document.getElementById("bt20").innerText 
        && document.getElementById("bt02").innerText != ""
        ) 
        {alert("Jogo Finalizado!\nVencedor:" + document.getElementById("bt02").innerText)}
    }
    