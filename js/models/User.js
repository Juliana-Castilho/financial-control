class User{
    constructor(id, date, centro, categoria, titulo, descricao, receita, despesa){
        this._id = id
        this._date = date
        this._centro = centro
        this._categoria = categoria
        this._titulo = titulo
        this._descricao = descricao
        this._receita = receita
        this._despesa = despesa
    }

    getId() {
        return this._id;
    }
    getDate() {
        return this._date;
    }
    getCentro() {
        return this._centro;
    }
    getCategoria() {
        return this._categoria;
    }
    getTitulo() {
        return this._titulo;
    }
    getDescricao() {
        return this._descricao;
    }
    getReceita() {
        return this._receita;
    }
    getDespesa() {
        return this._despesa;
    }
}