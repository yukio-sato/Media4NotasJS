// Após carregar, iniciar os eventos em JS
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("nt1").addEventListener("change",nr_update);
    document.getElementById("nt2").addEventListener("change",nr_update);
    document.getElementById("nt3").addEventListener("change",nr_update);
    document.getElementById("nt4").addEventListener("change",nr_update);
});

// Variável de Função de Atualizar NM
const nr_update = function(){
    let nota1 = Number(document.getElementById("nt1").value);
    let nota2 = Number(document.getElementById("nt2").value);
    let nota3 = Number(document.getElementById("nt3").value);
    let nota4 = Number(document.getElementById("nt4").value);
    let media = Math.round((nota1+nota2+nota3+nota4)/4);
    let mensagem = ""
    // Checador de Valores
    if (media < 5){
        mensagem = "Reprovado";
    }
    else if (media >= 5 && media <= 6){
        mensagem = "Em Recuperação";
    }
    else if (media > 6){
        mensagem = "Aprovado";
    }
    document.getElementById("mathTotal").textContent = "Média: "+media;
    document.getElementById("resulting").textContent = "Resultado: "+mensagem;
}
