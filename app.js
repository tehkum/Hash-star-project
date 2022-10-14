var form = document.querySelector("#data");

function submitHandler(event){
    event.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then((html) => {
        window.open('1.html', '_blank');
    });
}

form.addEventListener("submit", submitHandler);