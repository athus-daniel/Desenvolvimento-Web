//variaveis dos elementos da lista

//atribuindo o formulario a uma variavel
const form = document.getElementById('addForm');
//atribuir a lista a uma variavel
const itemList = document.getElementById('items');
//Atribuição da barra de pesquisa
const filter = document.getElementById

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', buscarItems);
function buscarItems(){
    alert('click')
}

function removeItem() {
    alert('clicou')
}

function addItem() {
    /* alert('vc clicou') */
}












