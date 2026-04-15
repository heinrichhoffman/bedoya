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
    { texto: "Tudo o que fizerem, façam com amor.", ref: "1 Coríntios 16:14" },
    { texto: "Aonde fores irei, onde pousares pousarei.", ref: "Rute 1:16" },
    { texto: "Mulher virtuosa, quem a achará? O seu valor muito excede ao de rubis.", ref: "Provérbios 31:10" },
    { texto: "Deus está no meio dela; não será abalada.", ref: "Salmos 46:5" },
    { texto: "E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.", ref: "Colossenses 3:14" },
    { texto: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta. O amor nunca perece;", ref: "1 Coríntios 13:4-8a" },
    { texto: "Ninguém jamais viu a Deus; se amarmos uns aos outros, Deus permanece em nós, e o seu amor está aperfeiçoado em nós.", ref: "1 João 4:12" },
    { texto: "Então o Senhor Deus declarou: 'Não é bom que o homem esteja só; farei para ele alguém que o auxilie e lhe corresponda.'", ref: "Gênesis 2:18" },
    { texto: "Sobretudo, amem-se sinceramente uns aos outros, porque o amor perdoa muitíssimos pecados.", ref: "1 Pedro 4:8" },
    { texto: "Maridos, amai as vossas mulheres e não as trateis com aspereza.", ref: "Colossenses 3:19" },
    { texto: "Maridos, ame cada um a sua mulher, assim como Cristo amou a igreja e entregou-se por ela", ref: "Efésios 5:25" },
    { texto: "Não foi o Senhor que os fez um só? Em corpo e em espírito eles lhe pertencem. E por que um só? Porque ele desejava uma descendência consagrada. Portanto, tenham cuidado: Ninguém seja infiel à mulher da sua mocidade.", ref: "Malaquias 2:15" }
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