window.onload = initImageViewer;

function initImageViewer(){
    let hasGalleries = document.getElementsByClassName("gallery-container").length > 0;
    if(hasGalleries) {
        insertModalElement("modal-img-viewer-container");
        let images = document.getElementsByClassName("gallery-img");
        let modal = document.getElementById("modal-img-viewer-container");
        for(let image of images)
            image.onclick = () => showModalImage(modal, image);
        modal.onclick = () => modal.style.display = "none";
    }

}

function insertModalElement(id) {
    document.getElementsByTagName("body")[0].innerHTML +=  '<div id="' + id + '" class="modal">' +
                                '   <span class="close">&times;</span>' +
                                '   <img class="modal-content" alt="">' +
                                '   <div class="caption"></div>' +
                                '</div>';
}

function showModalImage(container, image){
    container.style.display = "block";
    container.getElementsByTagName("img")[0].src = image.src;
    container.getElementsByTagName("div")[0].innerHTML = image.alt;
}