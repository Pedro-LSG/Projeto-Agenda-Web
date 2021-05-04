function validaLogin(){
  var usuario = document.getElementById("usuario");
  var senha = document.getElementById("senha");
    if ((usuario.value === "modelo") && (senha.value === "senha")) {
      window.open("file:///C:/Users/Sara%20Gomes/Desktop/Aulas/12/home_.html");
    } else {
      alert("Credenciais incorretas.");
    }
}

function redirecionaInsert(){
  var usuario = document.getElementById("usuario");
  var senha = document.getElementById("senha");
  //if ((usuario.value === "modelo") && (senha.value === "senha")) {
      window.open("file:///C:/Users/Sara%20Gomes/Desktop/Aulas/12/insert.html");
  //}
}

function redirecionaView(){
  var usuario = document.getElementById("usuario");
  var senha = document.getElementById("senha");
  //if ((usuario.value === "modelo") && (senha.value === "senha")) {
      window.open("file:///C:/Users/Sara%20Gomes/Desktop/Aulas/12/view.html");
  //}
}

function qtdHabilita(){
  var evento = document.getElementById("evento");
  var evento2 = document.getElementById("evento2");
  var evento3 = document.getElementById("evento3");
  var evento4 = document.getElementById("evento4");
  var evento5 = document.getElementById("evento5");
  qtd = document.getElementById("qtdEvento");
  if(qtd.value === "1"){
    evento.disabled = 0;
    evento2.disabled = 1;
    evento3.disabled = 1;
    evento4.disabled = 1;
    evento5.disabled = 1; 
  }
  else if(qtd.value === "2"){
    evento.disabled = 0;
    evento2.disabled = 0;
    evento3.disabled = 1;
    evento4.disabled = 1;
    evento5.disabled = 1;; 
  }
  else if(qtd.value === "3"){
    evento.disabled = 0;
    evento2.disabled = 0;
    evento3.disabled = 0;
    evento4.disabled = 1;
    evento5.disabled = 1;
  }
  else if(qtd.value === "4"){
    evento.disabled = 0;
    evento2.disabled = 0;
    evento3.disabled = 0;
    evento4.disabled = 0;
    evento5.disabled = 1;
  }
  else if(qtd.value === "5"){
    evento.disabled = 0;
    evento2.disabled = 0;
    evento3.disabled = 0; 
    evento4.disabled = 0;
    evento5.disabled = 0;
  }
}


function inserirEvento(){  
  var qtd = document.getElementById("qtdEvento");  
  var evento = document.getElementById("evento");
  var evento2 = document.getElementById("evento2");
  var evento3 = document.getElementById("evento3");
  var evento4 = document.getElementById("evento4");
  var evento5 = document.getElementById("evento5");

  var eventosAgenda = new Array();

  if(qtd.value === "1"){
    eventosAgenda[0] = evento.value;
  }
  else if(qtd.value === "2"){
    eventosAgenda[0] = evento.value;
    eventosAgenda[1] = evento2.value;
  }
  else if(qtd.value === "3"){
    eventosAgenda[0] = evento.value;
    eventosAgenda[1] = evento2.value;
    eventosAgenda[2] = evento3.value;
  }
  else if(qtd.value === "4"){
    eventosAgenda[0] = evento.value;
    eventosAgenda[1] = evento2.value;
    eventosAgenda[2] = evento3.value;
    eventosAgenda[3] = evento4.value;
  }
  else if(qtd.value === "5"){
    eventosAgenda[0] = evento.value;
    eventosAgenda[1] = evento2.value;
    eventosAgenda[2] = evento3.value;
    eventosAgenda[3] = evento4.value;
    eventosAgenda[4] = evento5.value;
  }

  alert("Cadastro efetuado com sucesso.");
}



