window.onload = initListeners;

function initListeners(){
    initFormListeners();
}

function initFormListeners(){
    document.addEventListener("submit",event => submitForm(event));
}

function submitForm(event){
    let form = event.target;

    let action = form.action;
    let method = form.method;
    let body = new FormData(form);
    let onSuccess = form.getAttribute("data-success");
    let onError = form.getAttribute("data-error");

    onSuccess = typeof onSuccess === "string" ? onSuccess : "";
    onError = typeof onSuccess === "string" ? onError : "";

    console.log(body);

    fetch(action,{
        method: method,
        body: body
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.type);
            let toShow = onError;
            if (data.type === "message") {
                toShow = onSuccess;
                form.reset();
            }
            document.getElementById(toShow).classList.remove("d-none");
            setTimeout(() => document.getElementById(toShow).classList.add("d-none"),5000)
        });

    event.preventDefault();
}