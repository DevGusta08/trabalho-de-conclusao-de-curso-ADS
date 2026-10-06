const areas = [
  {
    nome: "Exatas",
    materias: [
      {
        nome: "Matemática",
        recomendacoes: [
          {
            tipo: "video",
            titulo: "Funções do 1º grau - Aula completa",
            link: "https://www.youtube.com/watch?v=hdMFlAv5GkU&list=PLTPg64KdGgYjMtxN9pJGBaenIRwNX1EtI",
          },
          {
            tipo: "video",
            titulo: "Grandezas Proporcionais",
            link: "https://youtu.be/XVPo3mD3LIU?si=m3GourL_xwqCbpEE",
          },
          {
            tipo: "video",
            titulo: "Funções do 2° grau",
            link: "https://youtu.be/ZpW9Xb5iyt4?si=2JFyqDLhdXxGl725",
          },
          {
            tipo: "video",
            titulo: "Geometria plana",
            link: "https://youtu.be/EzGf1UEnnsY?si=8TQ8hLUEDtS5Ny5G",
          },
          {
            tipo: "video",
            titulo: "Estatística",
            link: "https://youtu.be/IgoKxQK5hGQ?si=4a1UmEXEsDEh3XA7",
          },
          {
            tipo: "video",
            titulo: "Probabilidade",
            link: "https://youtu.be/iNCkGogNtKI?si=OfId-vxmo3vt8IxJ",
          },
          {
            tipo: "artigo",
            titulo: "Resumo de Geometria Plana para o Enem",
            link: "https://seusaber.com.br/geometria-plana-no-enem-resumo-aula-e-exercicios/",
          },
          {
            tipo: "livro",
            titulo: "Matemática - Fundamentos e Aplicações (Vol. 1)",
            link: "https://www.amazon.com.br/Matem%C3%A1tica-B%C3%A1sica-Fundamentos-Representa%C3%A7%C3%B5es-Aplica%C3%A7%C3%B5es/dp/B0FSCS9QVF/ref=asc_df_B0FSCS9QVF?tag=brbngshpdsk-20&linkCode=df0&hvadid=77309628250062&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=147065&hvtargid=pla-4580909059361335&psc=1&msclkid=e4238896cca91b234e00e229f1a6fbd9",
          },
        ],
      },
      {
        nome: "Física",
        recomendacoes: [
          {
            tipo: "video",
            titulo:  "1° Lei de Newton",
            link: "https://youtu.be/YTcRXSOGij4?si=9NKQN_zGYnd43CLL",
          },
          {
            tipo: "video",
            titulo: "Eletrodinâmica",
            link: "https://youtu.be/NHygBtPHmKM?si=O6uG9WEX7pk341HC",
          },
          {
            tipo: "video",
            titulo: "Termologia",
            link: "https://youtu.be/k55FRnyARg0?si=1YAs8PNgDmyE6gGf",
          }, 
          {
            tipo: "video",
            titulo: "Ondulatória",
            link: "https://youtu.be/0WeaGRPun94?si=XYsaB1A3QY-CZFLZ",
          },
          {
            tipo: "video",
            titulo: "Cinemática",
            link: "https://youtu.be/tAdgPJq2wpg?si=4TS2l_YOqgjEeULW",
          },
          {
            tipo: "video",
            titulo: "Tudo sobre Óptica",
            link: "https://youtu.be/UMn7hAfpU6o?si=V4f6ClToo5OQWqG_",
          },
          {   tipo: "artigo",
            titulo: "O que é a primeira lei de Newton?",
            link: "https://pt.khanacademy.org/science/physics/forces-newtons-laws/newtons-laws-of-motion/a/what-is-newtons-first-law?referrer=share_link",
          },
          {
            tipo: "artigo",
            titulo: "Resumo sobre Eletrodinâmica",
            link: "https://brasilescola.uol.com.br/fisica/eletrodinamica.htm",                   
          }, 
          {
            tipo: "artigo",
            titulo: "O que é Termologia? Resumo",
            link: "https://brasilescola.uol.com.br/fisica/termologia.htm",
          },
          {
            tipo: "artigo",
            titulo: "Fundamentos de Ondulatória",
            link: "https://meuartigo.brasilescola.uol.com.br/fisica/fundamentos-conceituais-ondulatoria-basica.htm",
          },
          {
            tipo: "artigo",
            titulo: "Tudo sobre cinemática",
            link: "https://brasilescola.uol.com.br/fisica/introducao-cinematica.htm",
          },
          {
            tipo: "artigo",
            titulo: "Óptica",
            link: "https://brasilescola.uol.com.br/fisica/optica.htm",
          },
          {
            tipo: "livro",
            titulo: "As três leis de Newton",
            link: "https://www.amazon.com.br/TR%C3%8AS-LEIS-NEWTON-PROBLEMAS-RESOLVIDOS-ebook/dp/B01CX8OTDA",
          },
          { 
            tipo: "livro",
            titulo: "Eletrodinâmica",
            link: "https://www.amazon.com.br/Eletrodin%C3%A2mica-Eleandro-Feij%C3%B3/dp/B0CB4ZPQ6Y",
          },
          {
            tipo: "livro",
            titulo: "Tudo sobre Tormologia",
            link: "https://www.amazon.com.br/Termologia-Fen%C3%B4menos-T%C3%A9rmicos-Exerc%C3%ADcios-Resolvidos-ebook/dp/B08LCTRKPY",
          },
          {
            tipo: "livro",
            titulo: "Ondulatória",
            link: "https://www.amazon.com.br/F%C3%ADsica-pra-quem-precisa-Ondulat%C3%B3ria-ebook/dp/B0G3ND18MG",
          },
          {
            tipo: "livro",
            titulo: "Cinemática",
            link: "https://www.amazon.com.br/F%C3%ADsica-Cl%C3%A1ssica-Cinem%C3%A1tica-Sergio-Calcada/dp/8570568851",
          },
          {
            tipo: "livro",
            titulo: "Óptica",
            link: "https://www.amazon.com.br/%C3%93PTICA-F%C3%8DSICA-Volumen-Luz-Spanish/dp/B0GQW7NVKN",
          },
        ],
      },
    ],
  },
  {
    nome: "Humanas",
    materias: [
      {
        nome: "História",
        recomendacoes: [
          {
            tipo: "video",
            titulo: "Era Vargas - Resumo para o vestibular",
            link: "https://www.youtube.com/watch?v=EXEMPLO2",
          },
          {
            tipo: "artigo",
            titulo: "Linha do tempo da Independência do Brasil",
            link: "https://exemplo.com/artigo-historia",
          },
        ],
      },
    ],
  },
  {
    nome: "Biológicas",
    materias: [
      {
        nome: "Biologia",
        recomendacoes: [
          {
            tipo: "video",
            titulo: "Genética Mendeliana - Aula 1",
            link: "https://www.youtube.com/watch?v=EXEMPLO3",
          },
          {
            tipo: "artigo",
            titulo: "Ecologia: cadeias e teias alimentares",
            link: "https://exemplo.com/artigo-ecologia",
          },
        ],
      },
    ],
  },
  {
    nome: "Linguagens",
    materias: [
      {
        nome: "Português",
        recomendacoes: [
          {
            tipo: "video",
            titulo: "Como estruturar uma redação nota 1000",
            link: "https://www.youtube.com/watch?v=EXEMPLO4",
          },
          {
            tipo: "artigo",
            titulo: "Figuras de linguagem mais cobradas no Enem",
            link: "https://exemplo.com/artigo-figuras",
          },
        ],
      },
    ],
  },
];