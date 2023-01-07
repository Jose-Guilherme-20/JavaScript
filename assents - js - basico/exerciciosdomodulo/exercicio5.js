/* Crie um função 
que valide usuário e senha.
Usuário correto: José
Senha Correta :123456 */

function validar(usuário, senha) {
  let acesso = false;

  if (usuário == "José" && senha == 123456) {
    acesso = true;
  }
  return acesso;
}
let acesso = validar("Joao", 123456);

console.log(acesso);
