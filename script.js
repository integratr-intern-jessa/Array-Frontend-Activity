const AddButton = document.querySelector('#addButton');
const inputType = document.querySelector('#append');
      
    AddButton.addEventListener('click', () => {
        const newInputtype = document.createElement('input');
        newInputtype.setAttribute('type', 'text');
        newInputtype.setAttribute('placeholder', 'Type something..');

        inputType.appendChild(newInputtype);
});