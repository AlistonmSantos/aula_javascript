
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar");
}

function redirecionar() {
    //window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}

function voltar(elemento) {
    //document.getElementById("mousemove").
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página Carregada")
}

function funcaoChange (elemento) {
    alert(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

/*
function validaIdad(idade) {
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
/*

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade))


//alert(soma(5, 10));


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for (count = 0; count <=5; count++){
    alert(count);
}
*/
/*
var count = 0;
while (count <= 5) {
    console.log(count)
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Qual sua idade?") //esse comando realiza uma pergunta
//var idade = 18;
if(idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/


/*
var frutas = [{nome:"Maça", cor:"Vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta ={nome:"Maça", cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera","laranja"];
//lista.push("Uva") //Coloca um item a mais
//lista.pop("laranja") - retira um item

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Aliston Santos"
//var idade = 26;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade +" Anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase())
//alert(frase.replace("Japão", "Brasil"))