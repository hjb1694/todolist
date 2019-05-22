
let newId = 1;


function delItem(itemId){

    const items = document.querySelectorAll('.list-item');

    items.forEach(item => {
        if(item.dataset.id == itemId){

            item.remove();
        }
    });


}


const addItem = e => {
    e.preventDefault();
    const inputBox = document.querySelector('.header__text-box');
    const item = inputBox.value;
    const listItem = document.createElement('div');
    listItem.className = 'list-item';
    listItem.dataset.id = newId;
    const listItemDesc = document.createElement('div');
    listItemDesc.className = 'list-item__desc';
    listItemDesc.textContent = item;
    const listItemDel = document.createElement('div');
    listItemDel.className = 'list-item__delete';
    const delIcon = document.createElement('i');
    delIcon.classList.add('list-item__icon');
    delIcon.classList.add('far');
    delIcon.classList.add('fa-times-circle');
    delIcon.title = 'remove item';
    listItem.appendChild(listItemDesc);
    listItemDel.appendChild(delIcon);
    listItem.appendChild(listItemDel);
    
    delIcon.addEventListener('click',delItem.bind(null, newId));

    inputBox.value = null;
    document.querySelector('.list-container').insertAdjacentElement('beforeend',listItem);

    ++newId;
}



document.querySelector('.header__subbut').addEventListener('click',addItem);