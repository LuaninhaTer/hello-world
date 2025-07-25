let nomeUsuario = '';
while (nomeUsuario === '') nomeUsuario = prompt('Qual o seu nome?');

const nomeUsuarioSpan = document.getElementById('nome-usuario');
nomeUsuarioSpan.textContent = nomeUsuario || 'seja muito bem-vindo!';