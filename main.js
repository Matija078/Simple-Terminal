const input = document.querySelector('#inputFelt');
const output = document.querySelector('#outputFelt');
const list = document.querySelector("#liste");
input.addEventListener(`keypress`, event => {
    if (event.key === 'Enter' && input.value.length > 0) {
        list.innerHTML += `<br>>${input.value}</br>`;
        input.value = '';
        input.innerHTML += `<br>>${input.value}</br>`
    }
    output.innerHTML = input.value;
});
