const images = document.querySelectorAll('.imagem-pequena img');
const mainImage = document.getElementById('img-main');
let indiceImagemAtual = 0;

function changeMainImage(img) {
    mainImage.src = img.src;
    updateActiveClass(img);
}

function updateActiveClass(imagem_selecionada) {
    images.forEach((img) => img.classList.remove('active'));
    if (imagem_selecionada) {
        imagem_selecionada.classList.add('active');
    }
}

function navegar_Imagem(mudar) {
    indiceImagemAtual = (indiceImagemAtual + mudar + images.length) % images.length;
    mainImage.src = images[indiceImagemAtual].src;
    updateActiveClass(images[indiceImagemAtual]);
}

updateActiveClass(images[indiceImagemAtual]);


function navigateImage() {
    const PrevBtn = document.getElementById('prev-btn');
    const NextBtn = document.getElementById('next-btn');


    PrevBtn.addEventListener('click', () => {
        navegar_Imagem(-1);
    });


    NextBtn.addEventListener('click', () => {
        navegar_Imagem(1); //
    });
}

navigateImage();




let itemName, itemPrice, itemImage;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    itemName = urlParams.get('name');
    itemPrice = parseFloat(urlParams.get('price'));
    itemImage = urlParams.get('image');

    const imageMain = document.getElementById('img-main');
    const titlePrincipal = document.getElementById('title-principal');
    const priceItem = document.getElementById('price-item');
    const ImagePequeno = document.getElementById('img-main-pequena');
    const totalPriceElement = document.getElementById('total-price');
    const installmentsElement = document.getElementById('installments');
    const installmentPriceElement = document.getElementById('installment-price');

    const formattedPrice = itemPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    priceItem.textContent = formattedPrice;
    imageMain.src = '' + itemImage;
    ImagePequeno.src = '' + itemImage;
    titlePrincipal.textContent = itemName;

    const numberOfInstallments = 3;
    const Porcentagem_de_prestacao = 0.03;

    const total_com_Porcentagem = itemPrice * (1 + Porcentagem_de_prestacao);
    const Preço_da_prestacao = total_com_Porcentagem / numberOfInstallments;

    // Formata os valores das parcelas com o símbolo "R$", espaços e duas casas decimais
    const formattedTotalWithPercentage = total_com_Porcentagem.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const Preço_de_Parcela_formatado = Preço_da_prestacao.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    totalPriceElement.textContent = formattedTotalWithPercentage;
    installmentsElement.textContent = `${numberOfInstallments}x`;
    installmentPriceElement.textContent = Preço_de_Parcela_formatado;

});














document.addEventListener('DOMContentLoaded', function () {

    const btnPurchase = document.querySelector('.btn-purchase');
    const escoderCarrinho = document.querySelector('.escoder-carrinho');
    const bxUser2 = document.querySelector('#bx-user2');
    const contagemDEproduto = document.querySelector('.contagem_de_produto');
    const carrinhoItems = document.querySelector('.carrinho-items');
    const carrinhoContainer = document.querySelector('.carrinho-container');
    const carinhoVazioElement = document.querySelector('.carinho-vazio');



    function initCart() {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        return cartData ? cartData : [];
    }

    let carrinhoItens = initCart();
    let carrinhoZero = carrinhoItens.length;


    function atualizarContagem() {
        contagemDEproduto.innerText = carrinhoZero;
    }


    function atualizarCarrinho() {
        carrinhoItems.innerHTML = '';
        if (carrinhoItens.length === 0) {
            carinhoVazioElement.style.display = 'block';
        } else {
            carinhoVazioElement.style.display = 'none';
        }

        carrinhoItens.forEach(function (produto, index) {
            const produtoElement = document.createElement('div');
            produtoElement.classList.add('conteiner-produto-confirm');

            produtoElement.innerHTML = `
              




                <img id="imagemDacompra" src="${produto.itemImage}" ${produto.itemName}" width="100">
                <a href="#">
                    <p id="titleCompraCar">${produto.itemName}</p>
                </a>
                <span class="removerProduto" data-index="${index}"><i  class='bx bxs-x-circle'></i></span>
                <div class="btn-add-confirm">
                    <button id="btn-more-carrinho">-</button>
                    <input type="text" id="btn-quantidade-confirm" min="1" max="10" value="1">
                    <button id="btn-less-carrinho">+</button>
                </div>
                <div class="valores-carrinho">
                    <div class="valores-carrinho1">
                        <p id="price-pix"> R$ ${produto.itemPrice.toFixed(2)}</p>
                        <p id="price-pix2">avista</p>
                    </div>
                    <div class="valores-carrinho2">
                        <p id="price-card"> R$  ${produto.itemCartao.toFixed(2)}</p>
                        <p id="price-item2">no cartão</p>
                    </div>
                </div>
            `;

            carrinhoItems.appendChild(produtoElement);
        });
    }



    carrinhoItems.addEventListener('click', function (event) {
        if (event.target.classList.contains('removerProduto') || event.target.parentElement.classList.contains('removerProduto')) {
            let index;
            if (event.target.classList.contains('removerProduto')) {
                index = parseInt(event.target.getAttribute('data-index'));
            } else {
                index = parseInt(event.target.parentElement.getAttribute('data-index'));
            }

            carrinhoItens.splice(index, 1);


            localStorage.setItem('cart', JSON.stringify(carrinhoItens));
            atualizarCarrinho();

            carrinhoZero--;
            atualizarContagem();
        }
    });




    window.addEventListener('load', function () {
        atualizarCarrinho();
        atualizarContagem();
    });

    btnPurchase.addEventListener('click', function () {


        carrinhoZero++;
        atualizarContagem();



        const Porcentagem_de_prestacao = 0.03;

        const total_com_Porcentagem = itemPrice * (1 + Porcentagem_de_prestacao);


        const produto = {
            itemName: itemName,
            itemImage: itemImage,
            itemPrice: itemPrice,
            itemCartao: total_com_Porcentagem
        };


        carrinhoItens.push(produto);


        localStorage.setItem('cart', JSON.stringify(carrinhoItens));


        atualizarCarrinho();
    });

    bxUser2.addEventListener('click', function () {
        carrinhoContainer.style.display = 'block';


        atualizarCarrinho();
    });





    escoderCarrinho.addEventListener('click', function () {
        carrinhoContainer.style.display = 'none';

        if (carrinhoItens.length === 0) {
            carinhoVazioElement.style.display = 'block';
        }
    });






});















// Obtenha referências aos elementos
const btnLess = document.getElementById('btn-less');
const btnMore = document.getElementById('btn-more');
const btnQuantidadeConfirm = document.getElementById('btn-quantidade');

// Adicione um ouvinte de evento de clique ao botão "btn-less"
btnLess.addEventListener('click', function () {
    // Obtenha o valor atual do campo de entrada
    let quantidade = parseInt(btnQuantidadeConfirm.value);
    // Verifique se a quantidade está dentro do limite (entre min e max)
    if (quantidade < parseInt(btnQuantidadeConfirm.max)) {
        // Incremente o valor em 1 (ou em qualquer valor desejado)
        quantidade++;
    }

    // Defina o novo valor no campo de entrada
    btnQuantidadeConfirm.value = quantidade;
});

btnMore.addEventListener('click', function () {
    let quantidade = parseInt(btnQuantidadeConfirm.value);

    // Verifique se a quantidade está dentro do limite (entre min e max)
    if (quantidade < parseInt(btnQuantidadeConfirm.max)) {
        // Incremente o valor em 1 (ou em qualquer valor desejado)
        quantidade--;


    }


    btnQuantidadeConfirm.value = quantidade;
})
































const btnPurchase = document.querySelector('.btn-purchase');

btnPurchase.addEventListener('click', function () {
    const janela_modal = document.querySelector('.janela_modal');
    const inf_modal = document.getElementById('info-modal');

    janela_modal.style.display = "block";
    inf_modal.style.display = "block"
})



function RemoverMOdal() {
    const inf_modal = document.getElementById('info-modal');
    const janela_modal = document.querySelector('.janela_modal');

    inf_modal.style.display = "none"
    janela_modal.style.display = "none"
}


















