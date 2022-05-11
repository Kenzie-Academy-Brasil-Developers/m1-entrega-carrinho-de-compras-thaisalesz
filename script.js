const productsCart = []

const body = document.querySelector('body');
const tagMain = document.createElement('main');
body.appendChild(tagMain)

const tagUl = document.createElement('ul')
tagUl.classList.add('productList')
tagMain.appendChild(tagUl)

function criaNovoItemDaLista(nome, preco){
    let novoItem = {}
    novoItem.id = productsCart.length
    novoItem.nome = nome;
    novoItem.price = preco
    
    productsCart.push(novoItem)
}

criaNovoItemDaLista('Arroz', 5.00)
criaNovoItemDaLista('Óleo', 12.00)
criaNovoItemDaLista('Feijão', 9.00)
criaNovoItemDaLista('Macarrão', 3.00)
criaNovoItemDaLista('Café', 8.00)
criaNovoItemDaLista('Tomate', 15.00)


function criaTagsLi(produtos){
    for(let i = 0; i < produtos.length; i++){
        let itemAtual = produtos[i]
        let novaLi = document.createElement('li')
        novaLi.classList.add('productsDetail')
        novaLi.innerHTML = `${itemAtual.nome} R$${(itemAtual.price).toFixed(2)}`
        tagUl.appendChild(novaLi)
    }
}

criaTagsLi(productsCart)

const tagSection = document.createElement('section');
tagMain.appendChild(tagSection)

const paragrafoSoma = document.createElement('p')
const botaoFinaliza = document.createElement('button')
botaoFinaliza.innerHTML = 'Finalizar compra'
tagSection.appendChild(paragrafoSoma)
tagSection.appendChild(botaoFinaliza)

botaoFinaliza.addEventListener('click', function(){
    let soma = 0
    for(let i = 0; i <productsCart.length; i++){
        soma += productsCart[i]['price']
    }
    paragrafoSoma.innerHTML = `Total: R$${soma.toFixed(2)}`;
})
