// acessível a todo escopo do arquivo (variável global)
{
    {
        {
            {
                var sera = "Será????"
                console.log(sera);
            }
        }
    }
}
console.log(sera);

// dentro de uma função ela não pode ser acessada
function teste(){
    var local = 123
}

// console.log(local); // não consegue acessar, pois a variável "local" está dentro da function teste()