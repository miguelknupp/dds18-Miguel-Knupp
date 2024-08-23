console.log("ksa")

// var array = ["texto", 10, true, null, undefined]

// for(var i = 0; i < 5; i++){

//     console.log(array[i]);
    
// }

var nome = ["juninho", "charmander", "yugi", "crhistiano"]
var nota1 = [10,9,5,10]
var nota2 = [3,8,3,10]

function media (n1,n2){
    return((n1+n2)/ 2)
}

function resultado(){
    var mediaAtual = media(n1,n2)
    
    if(mediaAtual < 5){
        var lascou = "reprovado"
    }
    else if(mediaAtual > 5 && mediaAtual < 7){
        var lascou = " recuperação"
    }else{
        var lascou = " aprovado"
    }
}
function resultadoGeral(){

    for(var index in nome){
        var n1 = nota1[index]
        var n2 = nota2[index]
        var mediaAtual = media(n1,n2)
    }

    console.log("o aluno", nome[index], "teve media", mediaAtual, " e esta", lascou);
    

}

resultadoGeral()