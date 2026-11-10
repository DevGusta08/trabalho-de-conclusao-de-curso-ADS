const fs = require('fs');

const caminho = process.argv[2] || 'public/js/dados-dashboard.js';
let texto = fs.readFileSync(caminho, 'utf8');

const escapar = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// 1) Playlists reais, uma por matéria (entram no topo dos vídeos da matéria)
const MESTRES_MAT = {
  titulo: 'Playlist: Matemática do zero para ENEM e vestibulares (Mestres do ENEM)',
  link: 'https://www.youtube.com/playlist?list=PL8Sb1J47vKz5roPScagXaUkk-maGYZy4c',
};

const PLAYLISTS = {
  'Números, operações e matemática financeira': {
    titulo: 'Playlist: Matemática Básica, curso completo (Professor Ferretto)',
    link: 'https://www.youtube.com/playlist?list=PLTPg64KdGgYhYpS5nXdFgdqEZDOS5lARB',
  },
  'Álgebra, equações e funções': {
    titulo: 'Playlist: Função do 1º grau, curso completo (Professor Ferretto)',
    link: 'https://www.youtube.com/playlist?list=PLTPg64KdGgYjMtxN9pJGBaenIRwNX1EtI',
  },
  'Geometria e trigonometria': {
    titulo: 'Playlist: Geometria Plana, curso completo (Professor Ferretto)',
    link: 'https://www.youtube.com/playlist?list=PLTPg64KdGgYhy8stGM4z2_Hzb3zTfA77Z',
  },
  'Estatística, probabilidade e contagem': MESTRES_MAT,
  'Grandezas, medidas e raciocínio quantitativo': MESTRES_MAT,
  'Biologia': {
    titulo: 'Playlist: Biologia do zero para ENEM e vestibulares (Mestres do ENEM)',
    link: 'https://www.youtube.com/playlist?list=PL8Sb1J47vKz6CAVoJA-J3UCrhBT0HJbX4',
  },
  'Química': {
    titulo: 'Playlist: Química do zero para ENEM e vestibulares (Mestres do ENEM)',
    link: 'https://www.youtube.com/playlist?list=PL8Sb1J47vKz7VYQxr3IoEsi6sF7eudvc3',
  },
  'Física': {
    titulo: 'Playlist: Curso completo de Física para o ENEM (Professor Boaro)',
    link: 'https://www.youtube.com/playlist?list=PLzjR7HXQnrcfiBQRzQbnsQaOEGaY5t9hs',
  },
  'Redação Nota 1000 ENEM': {
    titulo: 'Playlist: Redação ENEM, aulas gratuitas (Curso Enem Gratuito)',
    link: 'https://www.youtube.com/playlist?list=PLQVUQftDIJQErJmPAGyHrdtxrgLklj6a_',
  },
};

let playlists = 0;
for (const [materia, p] of Object.entries(PLAYLISTS)) {
  const inicio = new RegExp('(nome: "' + escapar(materia) + '",\\s*recomendacoes: \\[)(\\r?\\n)(\\s*)');
  const achou = texto.match(inicio);
  if (!achou) {
    console.warn('Matéria não encontrada:', materia);
    continue;
  }
  const depois = texto.slice(achou.index + achou[0].length);
  if (depois.startsWith('{ tipo: "video", titulo: "' + p.titulo + '"')) continue; // já inserida
  texto = texto.replace(inicio, (_, abre, quebra, espaco) =>
    abre + quebra + espaco +
    '{ tipo: "video", titulo: "' + p.titulo + '", link: "' + p.link + '" },' +
    quebra + espaco);
  playlists++;
}

// 2) Vídeos e livros restantes: link de busca + título que diz o que o clique faz
let buscas = 0;
texto = texto.replace(
  /tipo: "(video|livro)", titulo: "(?:Vídeo|Livro): ([^"]+)", link: "[^"]*"/g,
  (_, tipo, assunto) => {
    buscas++;
    const busca = /enem/i.test(assunto) ? assunto : assunto + ' ENEM';
    const url = tipo === 'video'
      ? 'https://www.youtube.com/results?search_query=' + encodeURIComponent(busca)
      : 'https://www.google.com/search?tbm=bks&q=' + encodeURIComponent(assunto);
    const rotulo = tipo === 'video' ? 'Vídeos sobre' : 'Livros sobre';
    return 'tipo: "' + tipo + '", titulo: "' + rotulo + ': ' + assunto + '", link: "' + url + '"';
  }
);

fs.writeFileSync(caminho, texto, 'utf8');
console.log('Playlists inseridas:', playlists);
console.log('Links de busca gerados:', buscas);