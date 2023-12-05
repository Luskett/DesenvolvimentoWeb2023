// Conexão com HTML
// Encapsulando os elementos em uma variável
const filter = document.getElementById('filter');
// Formulário para Add item
const form = document.getElementById('addForm');
// Lista para receber novos items adicionados
const list = document.getElementById('items');
// -------------------------------------------------------------------------------------
filter.addEventListener('keyup', filtrarItem);

form.addEventListener('submit', addItem);

list.addEventListener('click', removeItem);

function filtrarItem(){
    let txt = evento.target.value.toLowerCase(); //Converte para minusculo
    // Buscar todos os itens (li)
    let itens = document.getElementByIdTagName('li');

    // Converter para uma Array o objeto Itens
    Array.from(itens).forEach( function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOF(txt) != -1)
        item.style.display = 'block' {
    } else {
        item.style.display = 'none'
    }
    });
};

// Função para adicionar um novo Item
function addItem(evento){
    evento.preventDefault();
/*
Passo a passo
1- Criar li
2- Atribuir classes
3- Enserir valor
4- Criar btn e colocar classe
5- Inserir texto "X"
*/

// Receber o valor do campo input
const textoItem = document.getElementById('Item').value;

if (textoItem != '' ) {}
const li = document.createElement('li');
li.className = 'list-group-item';

// Inserindo texto no li
li.appendChild(document.createTextNode(textoItem));

// criar elemento button
const btn = document.createElement('button')

// Atribuir classes
btn.className = 'btn btn-danger btn-sm float-end delete';
btn.appendChild(document.createTextNode('X'));

// Unindo botão ao li
li.appendChild(btn);

// Adicionar o li a lista
list.appendChild(li)

// Resetar o formulário
form.reset();

else {
    alert('digite algo')
}
};
function removeItem(evento){
/*
console.log('clicou fora do botão')
console.log(evento.target)
*/
if(evento.target.classList.contains('delete')){
// 
    let li = evento.target.parentElement;
    list.removeChild(li); // Remove o elemento da lista
}
};
