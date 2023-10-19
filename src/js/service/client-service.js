// Rota para obter todos os itens (productList)
const productList = () => {
  return fetch('http://localhost:5500/items') // Usando a URL do servidor local
    .then(resposta => {
      return resposta.json()
    })
}

// Rota para adicionar um novo item (createProduct)
const createProduct = (url, section, name, price, description) => {
  fetch('http://localhost:5500/items', { // Usando a URL do servidor local
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      alt: "imagem do produto",
      name: name,
      price: price,
      section: section,
      description: description,
      deleteImg: "../img/adding-product/delete.svg",
      editImg: "../img/adding-product/edit.svg"
    })
  })
}

// Rota para obter um item por ID (productDetails)
const productDetails = (id) => {
  return fetch(`http://localhost:5500/items/${id}`) // Usando a URL do servidor local
    .then(resposta => {
      return resposta.json()
    })
}

// Rota para editar um item por ID (updateProduct)
const updateProduct = (id, url, alt, section, name, price, description) => {
  fetch(`http://localhost:5500/items/${id}`, { // Usando a URL do servidor local
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      section: section,
      name: name,
      price: price,
      description: description,
      deleteImg: "../img/adding-product/delete.svg",
      editImg: "../img/adding-product/edit.svg"
    })
  })
}

// Rota para excluir um item por ID (productDelete)
const productDelete = (id) => {
  return fetch(`http://localhost:5500/items/${id}`, { // Usando a URL do servidor local
    method: 'DELETE'
  })
}

export const clienteService = {
  productList,
  createProduct,
  productDelete,
  productDetails,
  updateProduct
}
