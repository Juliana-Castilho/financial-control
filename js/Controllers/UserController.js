class UserController{
    constructor(){
        this.addEventBtns();
        this.users = {}
    }

    addLine(user){
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td class='td-id' style="display:none;">${user.getId()}</td>
        <td class='td-data' style="padding: 10px 5px; vertical-align: top;">${new Date(user.getDate()).toLocaleDateString('pt-BR')}</td>
        <td class='td-centro' style="padding: 10px 5px; vertical-align: top;">${user.getCentro()}</td>
        <td class='td-categoria' style="padding: 10px 5px; vertical-align: top;">${user.getCategoria()}</td>
        <td class='td-titulo' style="padding: 10px 5px; vertical-align: top;">${user.getTitulo()}</td>
        <td class='td-descricao' style="padding: 10px 5px; vertical-align: top;width:25%">${user.getDescricao()}</td>`
        if(!user.getDespesa()){
            tr.innerHTML+=`<td class='td-valor' style="padding: 10px 5px; vertical-align: top;">R$ &nbsp;${user.getReceita()}</td>`
        } else{
            tr.innerHTML+=`<td class='td-valor' style="padding: 10px 5px; vertical-align: top;">R$ -${user.getDespesa()}</td>`
        }
        tr.innerHTML+=`
        <td class='table-actions'>
            <span id="edit-btn" class="material-icons-sharp edit-btn">edit</span>
            <span id="delete-btn" class="material-icons-sharp delete-btn">delete</span>
        </td>`
        document.querySelector('.extrato tbody').appendChild(tr);
    }

    register(){
        let formEl = document.querySelector('.register');
        let elements = formEl.elements;
        let user;
        if(JSON.stringify(this.users) == JSON.stringify({})){
            user = new User(0,elements.date.value,elements.centro.value,elements.categoria.value,elements.titulo.value,elements.descricao.value,elements.receita.value,elements.despesa.value);
        } else{
            let lastUser = Object.values({'a':'teste', 'b':'teste2;'})[Object.values({'a':'teste', 'b':'teste2'}).length-1];
            user = new User(lastUser.getId()+1,elements.date.value,elements.centro.value,elements.categoria.value,elements.titulo.value,elements.descricao.value,elements.receita.value,elements.despesa.value);
        }
        this.addLine(user)
        document.querySelector('.form-add').style.display='none'
        formEl.reset()
    }

//Modal
    addEventBtns() {
        
        document.getElementById("abrir-modal").addEventListener('click', ()=>{
            document.getElementById("fundo-modal").style.width="100vw";
            document.getElementById("fundo-modal").style.height="93vh";
            document.getElementById("fundo-modal").style.opacity="1";
            document.getElementById("fundo-modal").style.display="flex";
            document.getElementById("fundo-modal").style.top="7vh";

        })
        document.querySelectorAll('.check')[0].addEventListener('click', ()=>{
            this.register();
        })

        document.getElementById("fechar-modal").addEventListener('click', ()=>{
            document.getElementById("fundo-modal").style.display="none";
        })
    }
}
