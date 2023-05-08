// IIFE -> Immediately Invoked Function Expression

// função auto invocada
// função que você declara mesmo sem nome (anônima)
// e você já invoca essa função no momento em que declara
// um dos objetivos é fugir do escopo global (principalmente no browser)


// você pode definir constantes, variáveis sem usar o escopo global
// vai estar disponível tudo dentro dessa função
(function() {
    console.log("Será executado na hora");
    console.log("Foge do escopo mais abrangente");
})() // não esqueça dos parênteses () no final


