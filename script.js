// Carregamento do site
window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 500);
};

// =========================================
// MÁQUINA DE NAVEGAÇÃO 100% VALIDADAS
// =========================================
function virarPagina(pageNum) {
    if(window.event) window.event.stopPropagation(); 
    
    const paper = document.getElementById('p' + pageNum);
    paper.classList.add('flipped');
    
    setTimeout(() => {
        if(pageNum === 1) paper.style.zIndex = 1;
    }, 500);
}

function voltarPagina(pageNum) {
    if(window.event) window.event.stopPropagation(); 
    
    const paper = document.getElementById('p' + pageNum);
    paper.classList.remove('flipped');
    
    setTimeout(() => {
        if(pageNum === 1) paper.style.zIndex = 3;
    }, 500);
}

// =========================================
// MÁQUINA DE VERSÍCULOS
// =========================================
const versiculos = [
    { texto: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.", ref: "1 Coríntios 13:4" },
    { texto: "Tudo o que fizerem, façam com amor.", ref: "1 Coríntios 16:14" },
    { texto: "Aonde fores irei, onde pousares pousarei.", ref: "Rute 1:16" },
    { texto: "Mulher virtuosa, quem a achará? O seu valor muito excede ao de rubis.", ref: "Provérbios 31:10" },
    { texto: "Deus está no meio dela; não será abalada.", ref: "Salmos 46:5" },
    { texto: "E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.", ref: "Colossenses 3:14" }
];

function novoVersiculo() {
    const textoElement = document.getElementById('versiculo-texto');
    const refElement = document.getElementById('versiculo-ref');
    
    textoElement.style.opacity = 0;
    refElement.style.opacity = 0;
    
    setTimeout(() => {
        const sorteio = versiculos[Math.floor(Math.random() * versiculos.length)];
        textoElement.innerText = `"${sorteio.texto}"`;
        refElement.innerText = sorteio.ref;
        textoElement.style.opacity = 1;
        refElement.style.opacity = 1;
    }, 400);
}

document.getElementById('versiculo-texto').style.transition = "opacity 0.4s";
document.getElementById('versiculo-ref').style.transition = "opacity 0.4s";