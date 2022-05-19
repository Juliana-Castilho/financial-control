//Abrir e Fechar menu lateral
const abrirToggle = document.getElementById('abrir');
const fecharToggle = document.getElementById('fechar');
const activeToggle = 'ativo';

function ativarToggle() {
  abrirToggle.onclick = () => {
    abrirToggle.classList.toggle(activeToggle);
    abrirToggle.style.display="none";
    fecharToggle.style.display="block";
    document.getElementById("menu").style.left="0px";
    document.getElementById("conteudo").style.marginLeft="200px";
  }
  fecharToggle.onclick = () => {
    fecharToggle.classList.toggle(activeToggle);
    fecharToggle.style.display="none";
    abrirToggle.style.display="block";
    document.getElementById("menu").style.left="-200px";
    document.getElementById("conteudo").style.marginLeft="0px";
  }
  
}
ativarToggle();
/*
//Modal
const fundoModal = document.getElementById("fundo-modal");

document.getElementById("abrir-modal").onclick=()=>{
  fundoModal.style.width="100vw";
  fundoModal.style.height="93vh";
  fundoModal.style.opacity="1";
  fundoModal.style.display="flex";
  fundoModal.style.top="7vh";
}

document.getElementById("fechar-modal").onclick=()=>{
  fundoModal.style.display="none";
}

Modal errado/antigo:
const fundoModal = document.getElementById("fundo-modal");

document.getElementById("abrir-modal").onclick=()=>{
  fundoModal.style.width="100vw";
  fundoModal.style.height="93vh";
  fundoModal.style.opacity="1";
  fundoModal.style.display="flex";
  fundoModal.style.top="7vh";
}

document.getElementById("fechar-modal").onclick=()=>{
  fundoModal.style.display="none";
}*/