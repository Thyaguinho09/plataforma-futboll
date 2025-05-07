// Simulando banco de dados de jogadores
const jogadores = {
    "Pedro": {
        nome: "Pedro",
        foto: "https://example.com/foto-pedro.jpg",
        info: "Atacante do Flamengo, 26 anos, brasileiro."
    },
    "Arrascaeta": {
        nome: "Arrascaeta",
        foto: "https://example.com/foto-arrascaeta.jpg",
        info: "Meia do Flamengo, uruguaio, 29 anos."
    },
    "Gerson": {
        nome: "Gerson",
        foto: "https://example.com/foto-gerson.jpg",
        info: "Volante do Flamengo, 27 anos, brasileiro."
    },
    "Endrick": {
        nome: "Endrick",
        foto: "https://example.com/foto-endrick.jpg",
        info: "Atacante do Palmeiras, 18 anos, promessa do futebol brasileiro."
    },
    "Raphael Veiga": {
        nome: "Raphael Veiga",
        foto: "https://example.com/foto-veiga.jpg",
        info: "Meia do Palmeiras, 28 anos, brasileiro."
    },
    "Gustavo Gómez": {
        nome: "Gustavo Gómez",
        foto: "https://example.com/foto-gomez.jpg",
        info: "Zagueiro do Palmeiras, 30 anos, paraguaio."
    }
};

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    if (nome && jogadores[nome]) {
        document.getElementById('nome-jogador').textContent = jogadores[nome].nome;
        document.getElementById('foto-jogador').src = jogadores[nome].foto;
        document.getElementById('info-jogador').textContent = jogadores[nome].info;
    }
};
