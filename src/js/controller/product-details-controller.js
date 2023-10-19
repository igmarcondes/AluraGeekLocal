//Importa o módulo clienteService do arquivo client-service.js
import { clienteService } from "../service/client-service.js";

//Obtém a URL atual da página em que o código está sendo executado
const getUrl = new URL(window.location);

//Obtém o valor do parâmetro id na query string da URL.
const id = getUrl.searchParams.get('id')

//Seleciona um elemento do HTML com um atributo data-product usando o método querySelector.
const sectionProduct = document.querySelector('[data-product]')

//Chama o método productDetails do objeto clienteService com o valor do id como argumento.
clienteService.productDetails(id)

  // a promessa retornada pelo método then é executada
  .then(data => {

    //Quando o resultado da promessa é resolvido, atualiza o conteúdo do elemento HTML selecionado no passo 4 com as informações do produto obtido.

    sectionProduct.innerHTML += `<section class= "${data.section}" data-category>
    <div class="product-box">
    <img src="${data.url}" class="product-img">
    <div class="container-product-box-description">
    <h4 class="product-box-title">${data.name}</h4>
    <p class="product-box-price">R$ ${data.price}</p>
    <p class="product-box-description">${data.description}</p>
    </div>
    </div>
    </section>
    `
  })
//Seleciona um elemento do HTML com um atributo data-similarProducts usando o método querySelector
const sectionSimilarProduct = document.querySelector('[data-similarProducts]');

//Define uma função cardBuild que retorna um elemento HTML contendo informações de um produto similar.
function cardBuild(url, name, price, id) {

  const newProduct = document.createElement('div');
  newProduct.className = 'product-similar';
  newProduct.innerHTML = `<img src="${url}" alt="imagem do produto" class="product-similar-img">
  <h4 class="product-similar-title">${name}</h4>
  <p class="product-similar-price">R$ ${price}</p>
  <a href="..//../pages/product.details.html?id=${id}" class="product-similar-link">Ver produto</a>
  `

  return newProduct;
}

//Chama o método productList do objeto clienteService.
clienteService.productList()
  .then(data => {

    //Quando o resultado da promessa é resolvido, percorre a lista de produtos obtidos e adiciona ao elemento HTML selecionado no passo 7 um elemento HTML construído pela função cardBuild para cada produto que pertence à mesma categoria do produto exibido no passo 6.
    const itemCategories = document.querySelector('[data-category]');

    data.forEach(elemento => {

      if (elemento.section === `${itemCategories.classList.value}`) {
        sectionSimilarProduct.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id))
      }

    })
  })
