function openModal(element) {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    img.src = element.querySelector('img').src; // Define a fonte da imagem ampliada
    modal.style.display = "block"; // Mostra o modal
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Esconde o modal
}

