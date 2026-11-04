
function escrevendoletra() {
    function ativaFrase(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';

        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.efeito');

    if (titulo) {
        ativaFrase(titulo);
    }
}

escrevendoletra();


function menuMobol() {
    const ativamenu = document.querySelector('.fa-bars');
    const navmenu = document.querySelector('header .navegacao-1');

    if (!ativamenu || !navmenu) return;

    ativamenu.addEventListener('click', () => {
        ativamenu.classList.toggle('fa-x');
        navmenu.classList.toggle('ativado');
    });
}

menuMobol();


function sobreMim() {
    const divexperiencia = document.querySelectorAll('.experiencia_content div');
    const liexperiencia = document.querySelectorAll('.experiencia_content ul li');
    const diveducacao = document.querySelectorAll('.educacao_content div');
    const lieducacao = document.querySelectorAll('.educacao_content ul li');

    if (!divexperiencia.length || !liexperiencia.length ||
        !diveducacao.length || !lieducacao.length) return;

    divexperiencia[0].classList.add('ativo');
    diveducacao[0].classList.add('ativo');
    liexperiencia[0].classList.add('ativo');
    lieducacao[0].classList.add('ativo');

    function slideShow(index) {
        divexperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });

        liexperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });

        divexperiencia[index].classList.add('ativo');
        liexperiencia[index].classList.add('ativo');
    }

    function slideShow2(index) {
        diveducacao.forEach((div) => {
            div.classList.remove('ativo');
        });

        lieducacao.forEach((botao) => {
            botao.classList.remove('ativo');
        });

        diveducacao[index].classList.add('ativo');
        lieducacao[index].classList.add('ativo');
    }

    liexperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index);
        });
    });

    lieducacao.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index);
        });
    });
}

sobreMim();


const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');

function removeClick(index) {
    buttonGeral.forEach((item) => {
        item.classList.remove('ativo');
    });

    buttonGeral[index].classList.add('ativo');
}

function showLista(lista, button = "all") {
    lista.forEach((item) => {
        item.classList.remove('ativo');
    });

    if (button === 'Portfolios') {
        lista[0].classList.add('ativo');
    }

    if (button === 'outras atividades') {
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
    }

    if (button === 'Blogs') {
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if (button === 'all') {
        lista.forEach((item) => {
            item.classList.add('ativo');
        });
    }
}

buttonGeral.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        removeClick(index);

        const currentButton = e.currentTarget;

        if (currentButton.classList.contains('all')) {
            showLista(listaALL, 'all');
        }

        if (currentButton.classList.contains('Portfolios')) {
            showLista(listaALL, 'Portfolios');
        }

        if (currentButton.classList.contains('outras_atividades')) {
            showLista(listaALL, 'outras atividades');
        }

        if (currentButton.classList.contains('Blogs')) {
            showLista(listaALL, 'Blogs');
        }
    });
});

// Exibe todos os projetos inicialmente
showLista(listaALL, 'all');

if (buttonGeral.length) {
    buttonGeral[0].classList.add('ativo');
}
