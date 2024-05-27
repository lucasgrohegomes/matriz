// var alunos = new Array(3)
// alunos.push("Luquetas")
// alunos.push("Tasca")
// alunos.push("D.S. Pastor")

// for(var nomes of alunos){
//     console.log(nomes)
// }
var button, quebra_linha, jogada = 1
var tabuleiro = new Array(3)

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
        var combinacoes = [
            ["bt00", "bt01", "bt02"],
            ["bt10", "bt11", "bt12"],
            ["bt20", "bt21", "bt22"],
            ["bt00", "bt10", "bt20"],
            ["bt01", "bt11", "bt21"],
            ["bt02", "bt12", "bt22"],
            ["bt00", "bt11", "bt22"],
            ["bt02", "bt11", "bt20"]
        ];

        for (var combinacao of combinacoes) {
            var [a, b, c] = combinacao;
            if (document.getElementById(a).innerText &&
                document.getElementById(a).innerText === document.getElementById(b).innerText &&
                document.getElementById(a).innerText === document.getElementById(c).innerText) {
                alert("Jogo Finalizado!\nVencedor: " + document.getElementById(a).innerText);
                desabilitaBotoes();
                return;
            }
        }
        if (jogada > 9) {
            alert("Jogo Finalizado! Empate.");
        }
    }
    