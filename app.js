const clickButton = document.getElementById('click');
const changeName = document.getElementById('name');
const content = document.getElementById('input');


clickButton.addEventListener('click', () => {

    changeName.textContent = content.value;
    content.value = '';
});