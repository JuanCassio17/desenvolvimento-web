/*
**JSON server**
- O JSON server é um pacote npm
- Ele simula uma API, e isso nos possibilita fazer requisições HTTP
- Podemos entender isso como uma etapa de preparação para APIs reais
- Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no backend
*/

// instale o json-server: npm i json-server
// crie uma pasta "data" e um arquivo "db.json" para simular os dados da API
// em package.json crie em "scripts" : "server": "json-server --watch data/db.json" 1-> para rodar: npm run server

/* 
Exemplo do arquivo .json

{
    "products": [
        {
            "id": 1,
            "name": "Camisa",
            "price": 59.9
        },        {
            "id": 2,
            "name": "Calça",
            "price": 159.9
        }
    ]
}

*/

/*
**A importância do useEffect

- O useEffect faz com que determinada ação seja executada apenas uma vez
- Isso é interessante pois os componentes estão sempre se re-renderizando, então precisamos ter ações únicas as vezes
- O useEffect ainda possui um array de dependências, que deve conter os dados que ativem a execução da função de forma automática
- O useEffect estará presente sempre nas requisições assíncronas

*/

/*
**Resgatando dados com React

- Para trazer os dados vamos ter que utilizar vários recursos
- Primeiramente ter um local para salvá-los (useState)
- Renderizar a chamada a API apenas uma vez (useEffect)
- Um meio de fazer a requisição assíncrona (Fetch API) ou Axios

*/

import React from "react"
import { useState, useEffect } from "react"


const url = "http://localhost:3000/products"

const App = () => {

    const [products, setProducts] = useState([]); // inicializa com o useState para setar os valores. Inicia com array vazio []
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    // 1 - Resgatando dados

    // useEffect(async() => {

    //     const res = await fetch(url) // usando o fetch para chamar os dados da API através da url

    //     const data = await res.json() // convertendo os dados em json
 
    //     setProducts(data) // passando os dados para variável products em useState()

    // },[]) // por padrão deixa o array vazio

    // melhorando o código useEffect para evitar os warning

    useEffect(() => { // o ideal é tirar o async daqui e inserir na função abaixo
        async function fetchData() {
            
            const res = await fetch(url)
            
            const data = await res.json()

            setProducts(data)
        }

        fetchData() // chame a função dentro do useEffect
    }, [])

    console.log(products);

    // 2 - add de produtos
    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name, // como o value é o mesmo nome do state não precisa colocar "name: name"
            price // como o value é o mesmo nome do state não precisa colocar "price: price"
        };

        console.log(product);
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product) // ele identifica os dados de product (name, price)
        });

        // 3 - Carregamento dinâmico (não precisa recarregar a página para ver os novos dados)
        const addedProduct = await res.json() // transformando os dados em json
        setProducts((prevProducts) => [...prevProducts, addedProduct])
        setName("") // limpando os inputs
        setPrice("") // limpando os inputs

    }

    return (
        <div className="App">
            <h1>Lista de produtos</h1>
            <ul>
                {products.map((product) => ( // use o map para chamar cada elemento da API
                    <li key={product.id}>{product.name} - R${product.price}</li>
                ))}
            </ul>
            <div className="add-product">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/> {/* faz a conexão com o useState através do value */}
                    </label>
                    <label>
                        Preço:
                        <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/> {/* faz a conexão com o useState através do value */}
                    </label>
                    <input type="submit" value="criar"/>
                </form>
            </div>
        </div>
    )
}


/*
**Adicionando dados

- Para adicionar um item vamos precisar resgatar os dados do form com o useState
- Reunir eles em uma função após o submit e enviar um request de POST para a nossa API
- O processo é bem parecido com o resgate de dados, mas agora estamos enviando dados

*/

/*
**Carregamento dinâmico de dados

- Se a requisição foi feita com sucesso, podemos adicionar o item a lista após o request
- Isso torna nossa aplicação mais performática
- Utilizaremos o set do useState para isso
- Em resumo, dá pra adicionar um valor e não precisar atualizar a página para vê-lo

*/