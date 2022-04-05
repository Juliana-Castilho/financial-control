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







//Modal

document.getElementById("abrirmodal").onclick=()=>{
  document.getElementById("fundomodal").style.width="100vw";
  document.getElementById("fundomodal").style.height="93vh";
  document.getElementById("fundomodal").style.opacity="1";
  document.getElementById("fundomodal").style.display="flex";
  document.getElementById("fundomodal").style.top="7vh";
}

document.getElementById("fecharmodal").onclick=()=>{
  document.getElementById("fundomodal").style.display="none";
}



/*
document.getElementById("abrir").onclick = ()=>{
  document.getElementById("menu").style.left="0px";
  document.getElementById("conteudo").style.marginLeft="200px";
}

document.getElementById("fechar").onclick = ()=>{
  document.getElementById("menu").style.left="-200px";
  document.getElementById("conteudo").style.marginLeft="0px";
}
*/