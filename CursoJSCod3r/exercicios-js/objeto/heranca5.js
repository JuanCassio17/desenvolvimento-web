console.log(typeof String); // é uma function
console.log(typeof Array); // é uma function
console.log(typeof Object); // é uma function
// todos tem um atributo chamado .prototype

// você pode definir novas funções pelo .prototype
String.prototype.reverse = function(){ // mostrando o inverso de string
    return this.split("").reverse().join("")
}

console.log("Escola Cod3r".reverse()); // acessando o método

// definindo nova função em Array
Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3].first());
console.log(['a', 'b', 'c'].first());

// você também é capaz de alterar funções definidas, mas não faça isso
// sobrescrevendo toString()
String.prototype.toString = function() {
    return "Lascou tudo"
}

console.log("Escola Cod3r".toString());