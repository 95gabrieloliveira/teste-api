const ul = document.getElementById("usuarios");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => listaUsuarios(json))

function listaUsuarios(usuarios) {
  usuarios.forEach(({name, username, email}) => {
    const li = document.createElement("li");
    li.innerText = `Nome: ${name}, Usuário: ${username}, E-mail: ${email}`;
    ul.appendChild(li);
  })
}