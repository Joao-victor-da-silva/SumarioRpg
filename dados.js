let dados = [
{
    titulo: "Adaga",
    descricao: "Uma arma pequena e versátil, ideal para golpes furtivos e combate em espaços confinados. Sua leveza permite que seja usada como arma secundária em combate com duas armas.",
    dano: "Perfurante",
    preco: "2",
    Atributo: "Destreza",
    Dado: "1d4",
    Alcance: "1.5",
    magia: false
},
{
    titulo: "Clava",
    descricao: "Uma arma contundente com um nó pesado em uma extremidade. Simples e eficaz, a clava é uma boa opção para personagens que preferem uma abordagem mais direta no combate.",
    dano: "Contundente",
    preco: "5",
    Atributo: "Força",
    Dado: "1d6",
    Alcance: "1.5",
    magia: false
},
{
    titulo: "Espada Curta",
    descricao: "Uma espada de uma mão, balanceada para o combate rápido e preciso. Versátil, pode ser usada tanto por lutadores que preferem força quanto por aqueles que preferem destreza.",
    dano: " Cortante ",
    preco: "10",
    Atributo: "Força ou Destreza",
    Dado: "1d6",
    Alcance: "1.5",
    magia: false
},
{
    titulo: "Maça",
    descricao: "Uma arma contundente com uma cabeça esférica. Simples e resistente, a maça é uma boa opção para personagens que buscam uma arma confiável e fácil de usar.",
    dano: "Contundente",
    preco: "5",
    Atributo: "Força",
    Dado: "1d6",
    Alcance: "1.5",
    magia: false
},
{
    titulo: "Arco Longo",
    descricao: "Uma arma de longo alcance, ideal para manter os inimigos à distância. Requer força e prática para ser utilizada com precisão.",
    dano: "Perfurante",
    preco: "50",
    Atributo: "Destreza",
    Dado: "1d8",
    Alcance: "45/180",
    magia: false
},
{
    titulo: "Espada Longa",
    descricao: "Uma espada de duas mãos, capaz de causar grandes danos em um único golpe. Ideal para personagens que buscam um alto poder de ataque.",
    dano: "Cortante",
    preco: "20",
    Atributo: "Força",
    Dado: "1d8",
    Alcance: "1.5",
    magia: false
},
{
    titulo: "Espada Grande",
    descricao: "Uma espada pesada de duas mãos, capaz de causar danos devastadores. Requer grande força para ser utilizada com eficácia.",
    dano: "Cortante",
    preco: "50",
    Atributo: "Força",
    Dado: "2d6",
    Alcance: "1.5",
    magia: false
},
{
    titulo: "Martelo de Guerra",
    descricao: "Uma arma contundente de duas mãos, capaz de causar danos significativos e atordoar inimigos. Ideal para personagens que buscam uma arma versátil e poderosa.",
    dano: "Contundente",
    preco: "30",
    Atributo: "Força",
    Dado: "1d8",
    Alcance: "1.5",
    magia: false
},
{
    titulo: "Dardos",
    descricao: "Pequenos projéteis leves, ideais para ataques rápidos e discretos.",
    dano: "Perfurante	",
    preco: "5/20",
    Atributo: "Destreza	",
    Dado: "1d4",
    Alcance: "5/20",
    magia: false
},
{
    titulo: "Zaratana",
    descricao: "Arma exótica que dispara pequenos projéteis por meio de um tubo, similar a uma pistola de ar comprimido.",
    dano: "Perfurante",
    preco: "20",
    Atributo: "Destreza",
    Dado: "1d6",
    Alcance: "6/18",
    magia: false
},
{
    titulo: "Arco Curto",
    descricao: "Arco menor e mais leve, ideal para espaços confinados e combate em movimento.",
    dano: "Perfurante",
    preco: "25",
    Atributo: "Destreza",
    Dado: "1d6",
    Alcance: "24/96",
    magia: false
},
{
    titulo: "Besta Pesada",
    descricao: "Besta grande e poderosa, ideal para causar grandes danos, mas lenta para manusear.",
    dano: "Perfurante",
    preco: "150",
    Atributo: "Destreza",
    Dado: "1d10",
    Alcance: "30/120",
    magia: false
},
{
    titulo: "Rede",
    descricao: "Arma exótica que dispara pequenos projéteis por meio de um tubo, similar a uma pistola de ar comprimido.",
    dano: "Perfurante",
    preco: "10",
    Atributo: "Destreza",
    Dado: "1d6",
    Alcance: "1.5/4.5",
    magia: false
},
{
    titulo: "Bola de Fogo",
    descricao: "Você conjura uma bola de fogo. A bola tem 1 pé de diâmetro. Faça um ataque à distância com um alcance de 18 metros. No acerto, a criatura alvo sofre 1d6 de dano de fogo.",
    dano: "Fogo",
    escola: "Conjuração",
    nivel: "1",
    Dado: "1d6",
    Alcance: "18",
    magia: true
},
{
    titulo: "Raio de Gelo",
    descricao: "Você dispara um raio de energia congelante para um ponto que você possa ver dentro do alcance de 18 metros. Faça um ataque à distância com um alcance de 18 metros. No acerto, a criatura alvo sofre 1d8 de dano congelante e tem desvantagem em seus testes de Destreza (Acrobacia) até o final do próximo turno.",
    dano: "Congelante",
    escola: "Conjuração",
    nivel: "1",
    Dado: "1d8",
    Alcance: "18",
    magia: true
},
{
    titulo: "Flecha Mágica",
    descricao: "Você convoca uma flecha mágica que você atira em um alvo dentro do alcance de 27/108 metros. Faça um ataque à distância com um alcance de 27/108 metros. No acerto, a criatura alvo sofre 1d8 de dano perfurante.",
    dano: "Perfurante",
    escola: "Evocação",
    nivel: "1",
    Dado: "1d8",
    Alcance: "27/108",
    magia: true
},
{
    titulo: "Mordaça",
    descricao: "Você cria a ilusão de uma força invisível que agarra a boca de uma criatura que você pode ver dentro do alcance de 18 metros. A criatura deve fazer um salvaguarda de Inteligência. Em caso de falha, a criatura fica amordaçada até o final da duração.",
    dano: "Fogo",
    escola: "Ilusão",
    nivel: "1",
    Dado: "1d6",
    Alcance: "18",
    magia: true
},
{
    titulo: "Toque Vívido",
    descricao: "Você toca uma criatura e irradia energia radiante através dela. A criatura alvo sofre 1d8 de dano radiante.",
    dano: "Radiante",
    escola: "Evocação",
    nivel: "1",
    Dado: "1d8",
    Alcance: "Toque",
    magia: true
},
{
    titulo: "Produzir Chama",
    descricao: "Você cria uma chama na sua mão ou em outro objeto que você estiver segurando. A chama dura até 1 minuto ou até você dispersá-la como uma ação bônus. A chama não causa dano, mas fornece luz fraca em um raio de 3 metros.",
    dano: "Fogo",
    escola: "Evocação",
    nivel: "Truque",
    Dado: "1d6",
    Alcance: "3",
    magia: true
},
{
    titulo: "Mãos Mágicas",
    descricao: "Você toca um objeto inanimado não maior que uma criatura Média. Você move o objeto até 1,5 metros para qualquer direção que você escolher.",
    dano: "Fogo",
    escola: "Evocação",
    nivel: "Truque",
    Dado: "1d6",
    Alcance: "Toque",
    magia: true
},
{
    titulo: "Detectar o Mal e o Bem",
    descricao: "Você pode usar esta magia para detectar a presença de qualquer criatura ou objeto que seja bom ou mal dentro de um raio de 18 metros.",
    dano: "Fogo",
    escola: "Divinação",
    nivel: "Truque",
    Dado: "1d6",
    Alcance: "18",
    magia: true
}
];