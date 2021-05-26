function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

const form = document.querySelector('#myform');

form.addEventListener('submit', function(e){
  e.preventDefault();

  function limpar(){
    nome.value = '';
    email.value = '';
    message.value = '';
  }

  function validate(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
  
    let text;
    if(nome.length < 5){
      text = "Favor entrar com um nome válido";
      error_message.innerHTML = text;
      return false;
    }
  
    if(email.indexOf("@") === -1 || email.length < 6){
      text = "Favor entrar com um email válido";
      error_message.innerHTML = text;
      return false;
    }
  
    if(message.length <= 30){
      text = "Favor escrever até 30 caracteres ou mais";
      error_message.innerHTML = text;
      return false;
    }
  
    togglePopup();
    error_message.style.display = "none";
    limpar();
  }

  validate();
});

