const imgMain = document.getElementById('image-main');
const imagemDescription = document.querySelectorAll('.imagem-description img');

function meuCallback() {
    const src = this.getAttribute('src');
    imgMain.setAttribute('src', src);
}

imagemDescription.forEach(img => {
    img.addEventListener('click', meuCallback);
});

  
