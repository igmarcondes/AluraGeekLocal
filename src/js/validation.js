//Este código define três variáveis: emailLogin, passwordLogin e login, que correspondem a elementos HTML com os atributos data-email, data-password e data-login, respectivamente. Em seguida, ele adiciona um ouvinte de eventos de clique ao botão de login.
const emailLogin = document.querySelector('[data-email]');
const passwordLogin = document.querySelector('[data-password]');
const login = document.querySelector('[data-login]');


login.addEventListener('click', (event) => {
  event.preventDefault();


  //Quando o botão de login é clicado, o código verifica se o valor do campo de email é "admin@alurageek.com" e se o valor do campo de senha é "12345". Se ambos forem verdadeiros, o código redireciona o usuário para a página de produtos, definida pela URL "../pages/products.html". Caso contrário, nada acontece e o usuário permanece na página atual.
  if (emailLogin.value === 'admin@alurageek.com' && passwordLogin.value === '12345') {
    window.location.href = '../pages/products.html'
  }
})
