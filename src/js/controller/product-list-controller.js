//Importa as funções clienteService e deleteProduct de outros arquivos JavaScript.
import { clienteService } from "../service/client-service.js";
import { deleteProduct } from "./product-delete-controller.js";


//Define uma função chamada cardBuild que recebe seis parâmetros: id, url, deleteImg, editImg, name e price. Esta função cria um elemento div HTML que representa um produto. O conteúdo desse elemento é criado com uma string HTML interpolada que contém as informações do produto e imagens para excluir ou editar o produto. Em seguida, a função atribui o id do produto como um atributo de dados no elemento div criado e o retorna.
function cardBuild(id, url, deleteImg, editImg, name, price) {

  const newProduct = document.createElement('div');

  newProduct.className = 'product-box';
  newProduct.innerHTML = `<img src="${url}" alt="imagem do produto" class="product-box-img">
  <img src="${deleteImg}" alt="deletar produto" class="product-delete">
  <a href='..//../pages/product-edit.html?id=${id}'><img src="${editImg}" alt="editar produto" class="product-edit"></a>
  <h4 class="product-box-title">${name}</h4>
  <p class="product-box-price">R$ ${price}</p>
  <p class="product-id hide">#${id}</p>
  `

  newProduct.dataset.id = id;

  return newProduct;
}

//Seleciona um elemento HTML com a classe .container-allProductsShow
const productSection = document.querySelector('.container-allProductsShow')

//Chama a função clienteService.productList(), que retorna uma lista de produtos. Quando a lista é recebida, a função forEach itera sobre cada elemento na lista e executa o código dentro do bloco de instruções. Para cada elemento, a função cardBuild é chamada e recebe os parâmetros relevantes para criar o elemento do produto. O elemento do produto é, então, anexado ao elemento.
clienteService.productList()
  .then(data => {
    data.forEach(elemento => {
      productSection.appendChild(cardBuild(elemento.id, elemento.url, elemento.deleteImg, elemento.editImg, elemento.name, elemento.price))
    })
  })

// Função Deletar
deleteProduct()
