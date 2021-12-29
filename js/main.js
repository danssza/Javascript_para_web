function botao(){
    // alert("Obrigado!")
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    // console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    // ABRE UMA NOVA GUIA COM O ENDEREÇO MARCADO
    window.open("https://www.google.com.br/");
    // VAI DIRETO PARA O ENDEREÇO
    window.location.href = "https://www.google.com.br/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Muito bom!";
    // alert("Trocar texto")
}
// OUTRA FORMA INTERESSANTE
function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Obrigado :)";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/* function soma(n1, n2){
    return n1 + n2;
}
// ÓDIO PORQUE ESSA PARTE DO CÓDIGO NÃO FUNCIONOU MESMO COPIANDO CADA LINHA COMO ESTAVA NA VÍDEO AULA
// var validar = 0;
function validaIdade(idade){
    var validar;
    if (validar > 17){
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade)); */
//ÓDIO ATÉ AQUI/////////////////////////////////////////////////////////////////////
// alert(soma(5, 10));

/* var data = new Date();
alert(data.getHours()); */

/* var count;
for (count = 0; count <= 5; count++){
    alert(count);
} */

/* var count = 0;
while(count < 5){
    console.log(count);
    count ++;
} */

/* var idade = Number(prompt("Digite sua idade:"));
if (idade >= 18){
    alert("Maior de idade");
} else{
    alert("Menor de idade");
} */

/* var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome); */

/* var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome); */

/* var nome = "Daniel Silva Souza";
var idade = 24;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"

// alert(`Bem vindo ${nome}`);
console.log(nome + " tem " + idade + " anos.");
console.log(frase.replace("Japão", "Brasil"));
// alert(frase.replace("Japão", "Brasil")); */

// var lista = ["maçã", "pera", "laranja"];
// lista.push("uva");   push() adiciona um item ao final do array
// lista.pop();         pop() remove o último item do array
// console.log(lista);
// console.log(lista.length); Mostra a quantidade de itens do array
// console.log(lista.reverse()); Inverte a ordem dos itens do array
// console.log(lista.join(" - ")); Muda o símbolo de separação dos itens