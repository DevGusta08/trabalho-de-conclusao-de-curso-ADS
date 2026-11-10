const areas = [
  {
    nome: "Matemática e suas Tecnologias",
    materias: [
      {
        nome: "Números, operações e matemática financeira",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Matemática Básica, curso completo (Professor Ferretto)", link: "https://www.youtube.com/playlist?list=PLTPg64KdGgYhYpS5nXdFgdqEZDOS5lARB" },
          { tipo: "artigo", titulo: "Artigo: Números naturais, inteiros, racionais e reais", link: "https://www.todamateria.com.br/conjuntos-numericos/" },
          { tipo: "video", titulo: "Vídeos sobre: Números naturais, inteiros, racionais e reais para o ENEM", link: "https://www.youtube.com/results?search_query=N%C3%BAmeros%20naturais%2C%20inteiros%2C%20racionais%20e%20reais%20para%20o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fundamentos de Matemática Elementar - Conjuntos", link: "https://www.google.com/search?tbm=bks&q=Fundamentos%20de%20Matem%C3%A1tica%20Elementar%20-%20Conjuntos" },

          { tipo: "artigo", titulo: "Artigo: Frações, decimais e operações básicas", link: "https://www.todamateria.com.br/fracoes/" },
          { tipo: "video", titulo: "Vídeos sobre: Frações, decimais e operações básicas", link: "https://www.youtube.com/results?search_query=Fra%C3%A7%C3%B5es%2C%20decimais%20e%20opera%C3%A7%C3%B5es%20b%C3%A1sicas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática Contextualizada - Aritmética", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20Contextualizada%20-%20Aritm%C3%A9tica" },

          { tipo: "artigo", titulo: "Artigo: Potenciação, radiciação e notação científica", link: "https://www.todamateria.com.br/potenciacao/" },
          { tipo: "video", titulo: "Vídeos sobre: Potenciação, radiciação e notação científica", link: "https://www.youtube.com/results?search_query=Potencia%C3%A7%C3%A3o%2C%20radicia%C3%A7%C3%A3o%20e%20nota%C3%A7%C3%A3o%20cient%C3%ADfica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática para o Ensino Médio", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20para%20o%20Ensino%20M%C3%A9dio" },

          { tipo: "artigo", titulo: "Artigo: Divisibilidade, MMC e MDC", link: "https://www.todamateria.com.br/mmc-e-mdc/" },
          { tipo: "video", titulo: "Vídeos sobre: Divisibilidade, MMC e MDC", link: "https://www.youtube.com/results?search_query=Divisibilidade%2C%20MMC%20e%20MDC%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Guia Prático de Matemática Básica", link: "https://www.google.com/search?tbm=bks&q=Guia%20Pr%C3%A1tico%20de%20Matem%C3%A1tica%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Razão e proporção", link: "https://www.todamateria.com.br/razao-e-proporcao/" },
          { tipo: "video", titulo: "Vídeos sobre: Razão e proporção", link: "https://www.youtube.com/results?search_query=Raz%C3%A3o%20e%20propor%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática ENEM Teoria e Prática", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20ENEM%20Teoria%20e%20Pr%C3%A1tica" },

          { tipo: "artigo", titulo: "Artigo: Regra de três simples e composta", link: "https://www.todamateria.com.br/regra-de-tres/" },
          { tipo: "video", titulo: "Vídeos sobre: Regra de três simples e composta", link: "https://www.youtube.com/results?search_query=Regra%20de%20tr%C3%AAs%20simples%20e%20composta%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática Aplicada", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20Aplicada" },

          { tipo: "artigo", titulo: "Artigo: Grandezas diretamente e inversamente proporcionais", link: "https://www.todamateria.com.br/grandezas-proporcionais/" },
          { tipo: "video", titulo: "Vídeos sobre: Grandezas diretamente e inversamente proporcionais", link: "https://www.youtube.com/results?search_query=Grandezas%20diretamente%20e%20inversamente%20proporcionais%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fundamentos de Matemática", link: "https://www.google.com/search?tbm=bks&q=Fundamentos%20de%20Matem%C3%A1tica" },

          { tipo: "artigo", titulo: "Artigo: Porcentagem e variação percentual", link: "https://www.todamateria.com.br/porcentagem/" },
          { tipo: "video", titulo: "Vídeos sobre: Porcentagem e variação percentual", link: "https://www.youtube.com/results?search_query=Porcentagem%20e%20varia%C3%A7%C3%A3o%20percentual%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática Comercial e Financeira", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20Comercial%20e%20Financeira" },

          { tipo: "artigo", titulo: "Artigo: Aumentos e descontos sucessivos", link: "https://www.todamateria.com.br/descontos-sucessivos/" },
          { tipo: "video", titulo: "Vídeos sobre: Aumentos e descontos sucessivos", link: "https://www.youtube.com/results?search_query=Aumentos%20e%20descontos%20sucessivos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática Financeira Fácil", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20Financeira%20F%C3%A1cil" },

          { tipo: "artigo", titulo: "Artigo: Juros simples e compostos", link: "https://www.todamateria.com.br/juros-simples-e-juros-compostos/" },
          { tipo: "video", titulo: "Vídeos sobre: Juros simples e compostos", link: "https://www.youtube.com/results?search_query=Juros%20simples%20e%20compostos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática para Concursos e Vestibulares", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20para%20Concursos%20e%20Vestibulares" },

          { tipo: "artigo", titulo: "Artigo: Lucro, prejuízo, custo e receita", link: "https://www.todamateria.com.br/lucro-e-prejuizo/" },
          { tipo: "video", titulo: "Vídeos sobre: Lucro, prejuízo, custo e receita", link: "https://www.youtube.com/results?search_query=Lucro%2C%20preju%C3%ADzo%2C%20custo%20e%20receita%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática Financeira Aplicada ao ENEM", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20Financeira%20Aplicada%20ao%20ENEM" },

          { tipo: "artigo", titulo: "Artigo: Escalas, unidades de medida e conversões", link: "https://www.todamateria.com.br/escalas/" },
          { tipo: "video", titulo: "Vídeos sobre: Escalas, unidades de medida e conversões", link: "https://www.youtube.com/results?search_query=Escalas%2C%20unidades%20de%20medida%20e%20convers%C3%B5es%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Grandezas e Medidas na Física e Matemática", link: "https://www.google.com/search?tbm=bks&q=Grandezas%20e%20Medidas%20na%20F%C3%ADsica%20e%20Matem%C3%A1tica" }
        ]
      },
      {
        nome: "Álgebra, equações e funções",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Função do 1º grau, curso completo (Professor Ferretto)", link: "https://www.youtube.com/playlist?list=PLTPg64KdGgYjMtxN9pJGBaenIRwNX1EtI" },
          { tipo: "artigo", titulo: "Artigo: Expressões algébricas e fatoração", link: "https://www.todamateria.com.br/fatoracao-algebrica/" },
          { tipo: "video", titulo: "Vídeos sobre: Expressões algébricas e fatoração", link: "https://www.youtube.com/results?search_query=Express%C3%B5es%20alg%C3%A9bricas%20e%20fatora%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fundamentos de Matemática Elementar - Álgebra", link: "https://www.google.com/search?tbm=bks&q=Fundamentos%20de%20Matem%C3%A1tica%20Elementar%20-%20%C3%81lgebra" },

          { tipo: "artigo", titulo: "Artigo: Equações do primeiro e segundo graus", link: "https://www.todamateria.com.br/equacao-do-2-grau/" },
          { tipo: "video", titulo: "Vídeos sobre: Equações do primeiro e segundo graus", link: "https://www.youtube.com/results?search_query=Equa%C3%A7%C3%B5es%20do%20primeiro%20e%20segundo%20graus%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Álgebra Linear e Elementar", link: "https://www.google.com/search?tbm=bks&q=%C3%81lgebra%20Linear%20e%20Elementar" },

          { tipo: "artigo", titulo: "Artigo: Sistemas de equações", link: "https://www.todamateria.com.br/sistema-de-equacoes/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistemas de equações", link: "https://www.youtube.com/results?search_query=Sistemas%20de%20equa%C3%A7%C3%B5es%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Matemática - Ensino Médio Vol. 1", link: "https://www.google.com/search?tbm=bks&q=Matem%C3%A1tica%20-%20Ensino%20M%C3%A9dio%20Vol.%201" },

          { tipo: "artigo", titulo: "Artigo: Inequações", link: "https://www.todamateria.com.br/inequacoes/" },
          { tipo: "video", titulo: "Vídeos sobre: Inequações", link: "https://www.youtube.com/results?search_query=Inequa%C3%A7%C3%B5es%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Coleção Fundamentos de Matemática", link: "https://www.google.com/search?tbm=bks&q=Cole%C3%A7%C3%A3o%20Fundamentos%20de%20Matem%C3%A1tica" },

          { tipo: "artigo", titulo: "Artigo: Função afim e função quadrática", link: "https://www.todamateria.com.br/funcao-do-1-grau/" },
          { tipo: "video", titulo: "Vídeos sobre: Função afim e função quadrática", link: "https://www.youtube.com/results?search_query=Fun%C3%A7%C3%A3o%20afim%20e%20fun%C3%A7%C3%A3o%20quadr%C3%A1tica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Funções e Gráficos no ENEM", link: "https://www.google.com/search?tbm=bks&q=Fun%C3%A7%C3%B5es%20e%20Gr%C3%A1ficos%20no%20ENEM" },

          { tipo: "artigo", titulo: "Artigo: Função exponencial e logarítmica", link: "https://www.todamateria.com.br/funcao-exponencial/" },
          { tipo: "video", titulo: "Vídeos sobre: Função exponencial e logarítmica", link: "https://www.youtube.com/results?search_query=Fun%C3%A7%C3%A3o%20exponencial%20e%20logar%C3%ADtmica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Logaritmos e Exponenciais Descomplicados", link: "https://www.google.com/search?tbm=bks&q=Logaritmos%20e%20Exponenciais%20Descomplicados" },

          { tipo: "artigo", titulo: "Artigo: Raízes, gráficos, crescimento e decrescimento", link: "https://www.todamateria.com.br/grafico-de-uma-funcao/" },
          { tipo: "video", titulo: "Vídeos sobre: Raízes, gráficos, crescimento e decrescimento", link: "https://www.youtube.com/results?search_query=Ra%C3%ADzes%2C%20gr%C3%A1ficos%2C%20crescimento%20e%20decrescimento%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Análise Gráfica para Vestibulares", link: "https://www.google.com/search?tbm=bks&q=An%C3%A1lise%20Gr%C3%A1fica%20para%20Vestibulares" },

          { tipo: "artigo", titulo: "Artigo: Máximos e mínimos de funções", link: "https://www.todamateria.com.br/vertice-da-parabola/" },
          { tipo: "video", titulo: "Vídeos sobre: Máximos e mínimos de funções", link: "https://www.youtube.com/results?search_query=M%C3%A1ximos%20e%20m%C3%ADnimos%20de%20fun%C3%A7%C3%B5es%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Otimização e Funções Quadráticas", link: "https://www.google.com/search?tbm=bks&q=Otimiza%C3%A7%C3%A3o%20e%20Fun%C3%A7%C3%B5es%20Quadr%C3%A1ticas" },

          { tipo: "artigo", titulo: "Artigo: Sequências numéricas", link: "https://www.todamateria.com.br/sequencias-numericas/" },
          { tipo: "video", titulo: "Vídeos sobre: Sequências numéricas", link: "https://www.youtube.com/results?search_query=Sequ%C3%AAncias%20num%C3%A9ricas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Padrões e Sequências Matemáticas", link: "https://www.google.com/search?tbm=bks&q=Padr%C3%B5es%20e%20Sequ%C3%AAncias%20Matem%C3%A1ticas" },

          { tipo: "artigo", titulo: "Artigo: Progressão aritmética (PA) e geométrica (PG)", link: "https://www.todamateria.com.br/progressao-aritmetica/" },
          { tipo: "video", titulo: "Vídeos sobre: Progressão aritmética (PA) e geométrica (PG)", link: "https://www.youtube.com/results?search_query=Progress%C3%A3o%20aritm%C3%A9tica%20(PA)%20e%20geom%C3%A9trica%20(PG)%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Sequências e Progressões", link: "https://www.google.com/search?tbm=bks&q=Sequ%C3%AAncias%20e%20Progress%C3%B5es" }
        ]
      },
      {
        nome: "Geometria e trigonometria",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Geometria Plana, curso completo (Professor Ferretto)", link: "https://www.youtube.com/playlist?list=PLTPg64KdGgYhy8stGM4z2_Hzb3zTfA77Z" },
          { tipo: "artigo", titulo: "Artigo: Ângulos, retas e polígonos", link: "https://www.todamateria.com.br/angulos/" },
          { tipo: "video", titulo: "Vídeos sobre: Ângulos, retas e polígonos", link: "https://www.youtube.com/results?search_query=%C3%82ngulos%2C%20retas%20e%20pol%C3%ADgonos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fundamentos de Matemática Elementar - Geometria Plana", link: "https://www.google.com/search?tbm=bks&q=Fundamentos%20de%20Matem%C3%A1tica%20Elementar%20-%20Geometria%20Plana" },

          { tipo: "artigo", titulo: "Artigo: Triângulos e quadriláteros", link: "https://www.todamateria.com.br/triangulos/" },
          { tipo: "video", titulo: "Vídeos sobre: Triângulos e quadriláteros", link: "https://www.youtube.com/results?search_query=Tri%C3%A2ngulos%20e%20quadril%C3%A1teros%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Geometria Plana Descomplicada", link: "https://www.google.com/search?tbm=bks&q=Geometria%20Plana%20Descomplicada" },

          { tipo: "artigo", titulo: "Artigo: Semelhança de figuras", link: "https://www.todamateria.com.br/semelhanca-de-triangulos/" },
          { tipo: "video", titulo: "Vídeos sobre: Semelhança de figuras", link: "https://www.youtube.com/results?search_query=Semelhan%C3%A7a%20de%20figuras%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Proporcionalidade Geométrica", link: "https://www.google.com/search?tbm=bks&q=Proporcionalidade%20Geom%C3%A9trica" },

          { tipo: "artigo", titulo: "Artigo: Teorema de Tales", link: "https://www.todamateria.com.br/teorema-de-tales/" },
          { tipo: "video", titulo: "Vídeos sobre: Teorema de Tales", link: "https://www.youtube.com/results?search_query=Teorema%20de%20Tales%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Teoremas Fundamentais da Geometria", link: "https://www.google.com/search?tbm=bks&q=Teoremas%20Fundamentais%20da%20Geometria" },

          { tipo: "artigo", titulo: "Artigo: Teorema de Pitágoras", link: "https://www.todamateria.com.br/teorema-de-pitagoras/" },
          { tipo: "video", titulo: "Vídeos sobre: Teorema de Pitágoras", link: "https://www.youtube.com/results?search_query=Teorema%20de%20Pit%C3%A1goras%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Relações no Triângulo Retângulo", link: "https://www.google.com/search?tbm=bks&q=Rela%C3%A7%C3%B5es%20no%20Tri%C3%A2ngulo%20Ret%C3%A2ngulo" },

          { tipo: "artigo", titulo: "Artigo: Perímetro e áreas de figuras planas", link: "https://www.todamateria.com.br/areas-de-figuras-planas/" },
          { tipo: "video", titulo: "Vídeos sobre: Perímetro e áreas de figuras planas", link: "https://www.youtube.com/results?search_query=Per%C3%ADmetro%20e%20%C3%A1reas%20de%20figuras%20planas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Cálculo de Áreas e Perímetros", link: "https://www.google.com/search?tbm=bks&q=C%C3%A1lculo%20de%20%C3%81reas%20e%20Per%C3%ADmetros" },

          { tipo: "artigo", titulo: "Artigo: Circunferência e círculo", link: "https://www.todamateria.com.br/circunferencia/" },
          { tipo: "video", titulo: "Vídeos sobre: Circunferência e círculo", link: "https://www.youtube.com/results?search_query=Circunfer%C3%AAncia%20e%20c%C3%ADrculo%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Elementos da Circunferência", link: "https://www.google.com/search?tbm=bks&q=Elementos%20da%20Circunfer%C3%AAncia" },

          { tipo: "artigo", titulo: "Artigo: Prismas, pirâmides, cilindros, cones e esferas", link: "https://www.todamateria.com.br/geometria-espacial/" },
          { tipo: "video", titulo: "Vídeos sobre: Prismas, pirâmides, cilindros, cones e esferas", link: "https://www.youtube.com/results?search_query=Prismas%2C%20pir%C3%A2mides%2C%20cilindros%2C%20cones%20e%20esferas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fundamentos de Geometria Espacial", link: "https://www.google.com/search?tbm=bks&q=Fundamentos%20de%20Geometria%20Espacial" },

          { tipo: "artigo", titulo: "Artigo: Áreas e volumes de sólidos", link: "https://www.todamateria.com.br/volume-dos-solidos/" },
          { tipo: "video", titulo: "Vídeos sobre: Áreas e volumes de sólidos", link: "https://www.youtube.com/results?search_query=%C3%81reas%20e%20volumes%20de%20s%C3%B3lidos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Manual de Volumes e Sólidos Geométricos", link: "https://www.google.com/search?tbm=bks&q=Manual%20de%20Volumes%20e%20S%C3%B3lidos%20Geom%C3%A9tricos" },

          { tipo: "artigo", titulo: "Artigo: Planificações e vistas de objetos", link: "https://www.todamateria.com.br/planificacao-de-solidos/" },
          { tipo: "video", titulo: "Vídeos sobre: Planificações e vistas de objetos", link: "https://www.youtube.com/results?search_query=Planifica%C3%A7%C3%B5es%20e%20vistas%20de%20objetos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Visão Espacial e Desenho Geométrico", link: "https://www.google.com/search?tbm=bks&q=Vis%C3%A3o%20Espacial%20e%20Desenho%20Geom%C3%A9trico" },

          { tipo: "artigo", titulo: "Artigo: Plano cartesiano", link: "https://www.todamateria.com.br/plano-cartesiano/" },
          { tipo: "video", titulo: "Vídeos sobre: Plano cartesiano", link: "https://www.youtube.com/results?search_query=Plano%20cartesiano%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Geometria Analítica Básica", link: "https://www.google.com/search?tbm=bks&q=Geometria%20Anal%C3%ADtica%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Distância entre pontos", link: "https://www.todamateria.com.br/distancia-entre-dois-pontos/" },
          { tipo: "video", titulo: "Vídeos sobre: Distância entre pontos", link: "https://www.youtube.com/results?search_query=Dist%C3%A2ncia%20entre%20pontos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Coordenadas no Plano", link: "https://www.google.com/search?tbm=bks&q=Coordenadas%20no%20Plano" },

          { tipo: "artigo", titulo: "Artigo: Razões trigonométricas", link: "https://www.todamateria.com.br/trigonometria/" },
          { tipo: "video", titulo: "Vídeos sobre: Razões trigonométricas", link: "https://www.youtube.com/results?search_query=Raz%C3%B5es%20trigonom%C3%A9tricas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fundamentos de Trigonometria", link: "https://www.google.com/search?tbm=bks&q=Fundamentos%20de%20Trigonometria" },

          { tipo: "artigo", titulo: "Artigo: Seno, cosseno e tangente", link: "https://www.todamateria.com.br/seno-cosseno-e-tangente/" },
          { tipo: "video", titulo: "Vídeos sobre: Seno, cosseno e tangente", link: "https://www.youtube.com/results?search_query=Seno%2C%20cosseno%20e%20tangente%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Trigonometria no Triângulo Retângulo", link: "https://www.google.com/search?tbm=bks&q=Trigonometria%20no%20Tri%C3%A2ngulo%20Ret%C3%A2ngulo" },

          { tipo: "artigo", titulo: "Artigo: Lei dos Senos e Lei dos Cossenos", link: "https://www.todamateria.com.br/lei-dos-senos-e-lei-dos-cossenos/" },
          { tipo: "video", titulo: "Vídeos sobre: Lei dos Senos e Lei dos Cossenos", link: "https://www.youtube.com/results?search_query=Lei%20dos%20Senos%20e%20Lei%20dos%20Cossenos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Triângulos quaisquer e Leis Trigonométricas", link: "https://www.google.com/search?tbm=bks&q=Tri%C3%A2ngulos%20quaisquer%20e%20Leis%20Trigonom%C3%A9tricas" }
        ]
      },
      {
        nome: "Estatística, probabilidade e contagem",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Matemática do zero para ENEM e vestibulares (Mestres do ENEM)", link: "https://www.youtube.com/playlist?list=PL8Sb1J47vKz5roPScagXaUkk-maGYZy4c" },
          { tipo: "artigo", titulo: "Artigo: Leitura de tabelas e gráficos", link: "https://www.todamateria.com.br/interpretacao-de-graficos/" },
          { tipo: "video", titulo: "Vídeos sobre: Leitura de tabelas e gráficos", link: "https://www.youtube.com/results?search_query=Leitura%20de%20tabelas%20e%20gr%C3%A1ficos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Estatística para o Ensino Médio", link: "https://www.google.com/search?tbm=bks&q=Estat%C3%ADstica%20para%20o%20Ensino%20M%C3%A9dio" },

          { tipo: "artigo", titulo: "Artigo: Média simples e ponderada", link: "https://www.todamateria.com.br/media-aritmetica-simples-e-ponderada/" },
          { tipo: "video", titulo: "Vídeos sobre: Média simples e ponderada", link: "https://www.youtube.com/results?search_query=M%C3%A9dia%20simples%20e%20ponderada%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Medidas de Tendência Central", link: "https://www.google.com/search?tbm=bks&q=Medidas%20de%20Tend%C3%AAncia%20Central" },

          { tipo: "artigo", titulo: "Artigo: Mediana, moda e amplitude", link: "https://www.todamateria.com.br/estatistica-media-mediana-e-moda/" },
          { tipo: "video", titulo: "Vídeos sobre: Mediana, moda e amplitude", link: "https://www.youtube.com/results?search_query=Mediana%2C%20moda%20e%20amplitude%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Estatística Descritiva Básica", link: "https://www.google.com/search?tbm=bks&q=Estat%C3%ADstica%20Descritiva%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Análise e comparação de dados", link: "https://www.todamateria.com.br/analise-de-dados/" },
          { tipo: "video", titulo: "Vídeos sobre: Análise e comparação de dados", link: "https://www.youtube.com/results?search_query=An%C3%A1lise%20e%20compara%C3%A7%C3%A3o%20de%20dados%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Leitura Crítica de Dados Estatísticos", link: "https://www.google.com/search?tbm=bks&q=Leitura%20Cr%C3%ADtica%20de%20Dados%20Estat%C3%ADsticos" },

          { tipo: "artigo", titulo: "Artigo: Princípio fundamental da contagem", link: "https://www.todamateria.com.br/principio-fundamental-da-contagem/" },
          { tipo: "video", titulo: "Vídeos sobre: Princípio fundamental da contagem", link: "https://www.youtube.com/results?search_query=Princ%C3%ADpio%20fundamental%20da%20contagem%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Análise Combinatória e Probabilidade", link: "https://www.google.com/search?tbm=bks&q=An%C3%A1lise%20Combinat%C3%B3ria%20e%20Probabilidade" },

          { tipo: "artigo", titulo: "Artigo: Permutação, arranjo e combinação", link: "https://www.todamateria.com.br/analise-combinatoria/" },
          { tipo: "video", titulo: "Vídeos sobre: Permutação, arranjo e combinação", link: "https://www.youtube.com/results?search_query=Permuta%C3%A7%C3%A3o%2C%20arranjo%20e%20combina%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Técnicas de Contagem", link: "https://www.google.com/search?tbm=bks&q=T%C3%A9cnicas%20de%20Contagem" },

          { tipo: "artigo", titulo: "Artigo: Probabilidade simples e composta", link: "https://www.todamateria.com.br/probabilidade/" },
          { tipo: "video", titulo: "Vídeos sobre: Probabilidade simples e composta", link: "https://www.youtube.com/results?search_query=Probabilidade%20simples%20e%20composta%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Teoria das Probabilidades no ENEM", link: "https://www.google.com/search?tbm=bks&q=Teoria%20das%20Probabilidades%20no%20ENEM" },

          { tipo: "artigo", titulo: "Artigo: Eventos independentes e dependentes", link: "https://www.todamateria.com.br/probabilidade-condicional/" },
          { tipo: "video", titulo: "Vídeos sobre: Eventos independentes e dependentes", link: "https://www.youtube.com/results?search_query=Eventos%20independentes%20e%20dependentes%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Probabilidade Condicional Aplicada", link: "https://www.google.com/search?tbm=bks&q=Probabilidade%20Condicional%20Aplicada" }
        ]
      },
      {
        nome: "Grandezas, medidas e raciocínio quantitativo",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Matemática do zero para ENEM e vestibulares (Mestres do ENEM)", link: "https://www.youtube.com/playlist?list=PL8Sb1J47vKz5roPScagXaUkk-maGYZy4c" },
          { tipo: "artigo", titulo: "Artigo: Sistemas de unidades", link: "https://www.todamateria.com.br/unidades-de-medida/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistemas de unidades", link: "https://www.youtube.com/results?search_query=Sistemas%20de%20unidades%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Física e Matemática: Unidades e Medidas", link: "https://www.google.com/search?tbm=bks&q=F%C3%ADsica%20e%20Matem%C3%A1tica%3A%20Unidades%20e%20Medidas" },

          { tipo: "artigo", titulo: "Artigo: Comprimento, área, volume, massa e tempo", link: "https://www.todamateria.com.br/conversao-de-unidades/" },
          { tipo: "video", titulo: "Vídeos sobre: Comprimento, área, volume, massa e tempo", link: "https://www.youtube.com/results?search_query=Comprimento%2C%20%C3%A1rea%2C%20volume%2C%20massa%20e%20tempo%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Grandezas Físicas e Geométricas", link: "https://www.google.com/search?tbm=bks&q=Grandezas%20F%C3%ADsicas%20e%20Geom%C3%A9tricas" },

          { tipo: "artigo", titulo: "Artigo: Densidade e escalas", link: "https://www.todamateria.com.br/densidade/" },
          { tipo: "video", titulo: "Vídeos sobre: Densidade e escalas", link: "https://www.youtube.com/results?search_query=Densidade%20e%20escalas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Raciocínio Quantitativo", link: "https://www.google.com/search?tbm=bks&q=Racioc%C3%ADnio%20Quantitativo" },

          { tipo: "artigo", titulo: "Artigo: Conversão de unidades", link: "https://www.todamateria.com.br/conversao-de-unidades-de-medida/" },
          { tipo: "video", titulo: "Vídeos sobre: Conversão de unidades", link: "https://www.youtube.com/results?search_query=Convers%C3%A3o%20de%20unidades%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Guia de Conversões ENEM", link: "https://www.google.com/search?tbm=bks&q=Guia%20de%20Convers%C3%B5es%20ENEM" },

          { tipo: "artigo", titulo: "Artigo: Estimativas e ordem de grandeza", link: "https://www.todamateria.com.br/ordem-de-grandeza/" },
          { tipo: "video", titulo: "Vídeos sobre: Estimativas e ordem de grandeza", link: "https://www.youtube.com/results?search_query=Estimativas%20e%20ordem%20de%20grandeza%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Cálculo Mental e Estimativas", link: "https://www.google.com/search?tbm=bks&q=C%C3%A1lculo%20Mental%20e%20Estimativas" },

          { tipo: "artigo", titulo: "Artigo: Interpretação de gráficos e modelos matemáticos", link: "https://www.todamateria.com.br/modelagem-matematica/" },
          { tipo: "video", titulo: "Vídeos sobre: Interpretação de gráficos e modelos matemáticos", link: "https://www.youtube.com/results?search_query=Interpreta%C3%A7%C3%A3o%20de%20gr%C3%A1ficos%20e%20modelos%20matem%C3%A1ticos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Modelagem e Interpretação de Dados", link: "https://www.google.com/search?tbm=bks&q=Modelagem%20e%20Interpreta%C3%A7%C3%A3o%20de%20Dados" }
        ]
      }
    ]
  },
  {
    nome: "Ciências da Natureza e suas Tecnologias",
    materias: [
      {
        nome: "Biologia",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Biologia do zero para ENEM e vestibulares (Mestres do ENEM)", link: "https://www.youtube.com/playlist?list=PL8Sb1J47vKz6CAVoJA-J3UCrhBT0HJbX4" },
          { tipo: "artigo", titulo: "Artigo: Ecologia e meio ambiente", link: "https://www.todamateria.com.br/ecologia/" },
          { tipo: "video", titulo: "Vídeos sobre: Ecologia e meio ambiente para o ENEM", link: "https://www.youtube.com/results?search_query=Ecologia%20e%20meio%20ambiente%20para%20o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Biologia das Populações e Ecossistemas", link: "https://www.google.com/search?tbm=bks&q=Biologia%20das%20Popula%C3%A7%C3%B5es%20e%20Ecossistemas" },

          { tipo: "artigo", titulo: "Artigo: Ecossistemas, habitat e nicho ecológico", link: "https://www.todamateria.com.br/habitat-e-nicho-ecologico/" },
          { tipo: "video", titulo: "Vídeos sobre: Ecossistemas, habitat e nicho ecológico", link: "https://www.youtube.com/results?search_query=Ecossistemas%2C%20habitat%20e%20nicho%20ecol%C3%B3gico%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Ecologia Básica", link: "https://www.google.com/search?tbm=bks&q=Ecologia%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Cadeias e teias alimentares", link: "https://www.todamateria.com.br/cadeia-alimentar/" },
          { tipo: "video", titulo: "Vídeos sobre: Cadeias e teias alimentares", link: "https://www.youtube.com/results?search_query=Cadeias%20e%20teias%20alimentares%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fluxo de Energia na Natureza", link: "https://www.google.com/search?tbm=bks&q=Fluxo%20de%20Energia%20na%20Natureza" },

          { tipo: "artigo", titulo: "Artigo: Níveis tróficos e fluxo de energia", link: "https://www.todamateria.com.br/niveis-troficos/" },
          { tipo: "video", titulo: "Vídeos sobre: Níveis tróficos e fluxo de energia", link: "https://www.youtube.com/results?search_query=N%C3%ADveis%20tr%C3%B3ficos%20e%20fluxo%20de%20energia%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Dinâmica Trófica", link: "https://www.google.com/search?tbm=bks&q=Din%C3%A2mica%20Tr%C3%B3fica" },

          { tipo: "artigo", titulo: "Artigo: Ciclos da água, carbono, nitrogênio e oxigênio", link: "https://www.todamateria.com.br/ciclos-biogeoquimicos/" },
          { tipo: "video", titulo: "Vídeos sobre: Ciclos da água, carbono, nitrogênio e oxigênio", link: "https://www.youtube.com/results?search_query=Ciclos%20da%20%C3%A1gua%2C%20carbono%2C%20nitrog%C3%AAnio%20e%20oxig%C3%AAnio%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Ciclos Biogeoquímicos e Vida", link: "https://www.google.com/search?tbm=bks&q=Ciclos%20Biogeoqu%C3%ADmicos%20e%20Vida" },

          { tipo: "artigo", titulo: "Artigo: Relações ecológicas", link: "https://www.todamateria.com.br/relacoes-ecologicas/" },
          { tipo: "video", titulo: "Vídeos sobre: Relações ecológicas", link: "https://www.youtube.com/results?search_query=Rela%C3%A7%C3%B5es%20ecol%C3%B3gicas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Interações entre os Seres Vivos", link: "https://www.google.com/search?tbm=bks&q=Intera%C3%A7%C3%B5es%20entre%20os%20Seres%20Vivos" },

          { tipo: "artigo", titulo: "Artigo: Dinâmica de populações", link: "https://www.todamateria.com.br/dinamica-de-populacoes/" },
          { tipo: "video", titulo: "Vídeos sobre: Dinâmica de populações", link: "https://www.youtube.com/results?search_query=Din%C3%A2mica%20de%20popula%C3%A7%C3%B5es%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Ecologia de Populações", link: "https://www.google.com/search?tbm=bks&q=Ecologia%20de%20Popula%C3%A7%C3%B5es" },

          { tipo: "artigo", titulo: "Artigo: Sucessão ecológica", link: "https://www.todamateria.com.br/sucessao-ecologica/" },
          { tipo: "video", titulo: "Vídeos sobre: Sucessão ecológica", link: "https://www.youtube.com/results?search_query=Sucess%C3%A3o%20ecol%C3%B3gica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Evolução dos Ecossistemas", link: "https://www.google.com/search?tbm=bks&q=Evolu%C3%A7%C3%A3o%20dos%20Ecossistemas" },

          { tipo: "artigo", titulo: "Artigo: Biomas brasileiros", link: "https://www.todamateria.com.br/biomas-brasileiros/" },
          { tipo: "video", titulo: "Vídeos sobre: Biomas brasileiros", link: "https://www.youtube.com/results?search_query=Biomas%20brasileiros%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Geografia e Biologia dos Biomas do Brasil", link: "https://www.google.com/search?tbm=bks&q=Geografia%20e%20Biologia%20dos%20Biomas%20do%20Brasil" },

          { tipo: "artigo", titulo: "Artigo: Biodiversidade e conservação", link: "https://www.todamateria.com.br/biodiversidade/" },
          { tipo: "video", titulo: "Vídeos sobre: Biodiversidade e conservação", link: "https://www.youtube.com/results?search_query=Biodiversidade%20e%20conserva%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Conservação da Natureza", link: "https://www.google.com/search?tbm=bks&q=Conserva%C3%A7%C3%A3o%20da%20Natureza" },

          { tipo: "artigo", titulo: "Artigo: Desmatamento, queimadas e fragmentação de habitats", link: "https://www.todamateria.com.br/desmatamento/" },
          { tipo: "video", titulo: "Vídeos sobre: Desmatamento, queimadas e fragmentação de habitats", link: "https://www.youtube.com/results?search_query=Desmatamento%2C%20queimadas%20e%20fragmenta%C3%A7%C3%A3o%20de%20habitats%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Impactos Ambientais no Brasil", link: "https://www.google.com/search?tbm=bks&q=Impactos%20Ambientais%20no%20Brasil" },

          { tipo: "artigo", titulo: "Artigo: Poluição da água, do ar e do solo", link: "https://www.todamateria.com.br/poluicao-ambiental/" },
          { tipo: "video", titulo: "Vídeos sobre: Poluição da água, do ar e do solo", link: "https://www.youtube.com/results?search_query=Polui%C3%A7%C3%A3o%20da%20%C3%A1gua%2C%20do%20ar%20e%20do%20solo%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Poluição e Saúde Pública", link: "https://www.google.com/search?tbm=bks&q=Polui%C3%A7%C3%A3o%20e%20Sa%C3%BAde%20P%C3%BAblica" },

          { tipo: "artigo", titulo: "Artigo: Efeito estufa, aquecimento global e mudanças climáticas", link: "https://www.todamateria.com.br/efeito-estufa/" },
          { tipo: "video", titulo: "Vídeos sobre: Efeito estufa, aquecimento global e mudanças climáticas", link: "https://www.youtube.com/results?search_query=Efeito%20estufa%2C%20aquecimento%20global%20e%20mudan%C3%A7as%20clim%C3%A1ticas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Clima e Mudanças Globais", link: "https://www.google.com/search?tbm=bks&q=Clima%20e%20Mudan%C3%A7as%20Globais" },

          { tipo: "artigo", titulo: "Artigo: Chuva ácida, eutrofização e bioacumulação", link: "https://www.todamateria.com.br/chuva-acida/" },
          { tipo: "video", titulo: "Vídeos sobre: Chuva ácida, eutrofização e bioacumulação", link: "https://www.youtube.com/results?search_query=Chuva%20%C3%A1cida%2C%20eutrofiza%C3%A7%C3%A3o%20e%20bioacumula%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Poluição Química dos Ecossistemas", link: "https://www.google.com/search?tbm=bks&q=Polui%C3%A7%C3%A3o%20Qu%C3%ADmica%20dos%20Ecossistemas" },

          { tipo: "artigo", titulo: "Artigo: Saneamento, tratamento de água e esgoto", link: "https://www.todamateria.com.br/tratamento-da-agua/" },
          { tipo: "video", titulo: "Vídeos sobre: Saneamento, tratamento de água e esgoto", link: "https://www.youtube.com/results?search_query=Saneamento%2C%20tratamento%20de%20%C3%A1gua%20e%20esgoto%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Saneamento Básico e Saúde", link: "https://www.google.com/search?tbm=bks&q=Saneamento%20B%C3%A1sico%20e%20Sa%C3%BAde" },

          { tipo: "artigo", titulo: "Artigo: Sustentabilidade e impactos ambientais", link: "https://www.todamateria.com.br/desenvolvimento-sustentavel/" },
          { tipo: "video", titulo: "Vídeos sobre: Sustentabilidade e impactos ambientais", link: "https://www.youtube.com/results?search_query=Sustentabilidade%20e%20impactos%20ambientais%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Ecologia Humana e Sustentabilidade", link: "https://www.google.com/search?tbm=bks&q=Ecologia%20Humana%20e%20Sustentabilidade" },

          { tipo: "artigo", titulo: "Artigo: Citologia e metabolismo", link: "https://www.todamateria.com.br/citologia/" },
          { tipo: "video", titulo: "Vídeos sobre: Citologia e metabolismo", link: "https://www.youtube.com/results?search_query=Citologia%20e%20metabolismo%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Biologia Celular e Molecular", link: "https://www.google.com/search?tbm=bks&q=Biologia%20Celular%20e%20Molecular" },

          { tipo: "artigo", titulo: "Artigo: Células procariontes e eucariontes", link: "https://www.todamateria.com.br/celulas-procariontes-e-eucariontes/" },
          { tipo: "video", titulo: "Vídeos sobre: Células procariontes e eucariontes", link: "https://www.youtube.com/results?search_query=C%C3%A9lulas%20procariontes%20e%20eucariontes%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: A Estrutura Celular", link: "https://www.google.com/search?tbm=bks&q=A%20Estrutura%20Celular" },

          { tipo: "artigo", titulo: "Artigo: Células animais e vegetais", link: "https://www.todamateria.com.br/celula-animal-e-celula-vegetal/" },
          { tipo: "video", titulo: "Vídeos sobre: Células animais e vegetais", link: "https://www.youtube.com/results?search_query=C%C3%A9lulas%20animais%20e%20vegetais%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Citologia Comparada", link: "https://www.google.com/search?tbm=bks&q=Citologia%20Comparada" },

          { tipo: "artigo", titulo: "Artigo: Membrana plasmática e transporte celular", link: "https://www.todamateria.com.br/membrana-plasmatica/" },
          { tipo: "video", titulo: "Vídeos sobre: Membrana plasmática e transporte celular", link: "https://www.youtube.com/results?search_query=Membrana%20plasm%C3%A1tica%20e%20transporte%20celular%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Permeabilidade Celular", link: "https://www.google.com/search?tbm=bks&q=Permeabilidade%20Celular" },

          { tipo: "artigo", titulo: "Artigo: Organelas celulares", link: "https://www.todamateria.com.br/organelas-celulares/" },
          { tipo: "video", titulo: "Vídeos sobre: Organelas celulares", link: "https://www.youtube.com/results?search_query=Organelas%20celulares%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Funções das Organelas", link: "https://www.google.com/search?tbm=bks&q=Fun%C3%A7%C3%B5es%20das%20Organelas" },

          { tipo: "artigo", titulo: "Artigo: Núcleo, DNA e RNA", link: "https://www.todamateria.com.br/nucleo-celular/" },
          { tipo: "video", titulo: "Vídeos sobre: Núcleo, DNA e RNA", link: "https://www.youtube.com/results?search_query=N%C3%BAcleo%2C%20DNA%20e%20RNA%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Genética Molecular Básica", link: "https://www.google.com/search?tbm=bks&q=Gen%C3%A9tica%20Molecular%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Mitose e meiose", link: "https://www.todamateria.com.br/mitose-e-meiose/" },
          { tipo: "video", titulo: "Vídeos sobre: Mitose e meiose", link: "https://www.youtube.com/results?search_query=Mitose%20e%20meiose%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Divisão Celular", link: "https://www.google.com/search?tbm=bks&q=Divis%C3%A3o%20Celular" },

          { tipo: "artigo", titulo: "Artigo: Respiração celular e fermentação", link: "https://www.todamateria.com.br/respiracao-celular/" },
          { tipo: "video", titulo: "Vídeos sobre: Respiração celular e fermentação", link: "https://www.youtube.com/results?search_query=Respira%C3%A7%C3%A3o%20celular%20e%20fermenta%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Bioenergética", link: "https://www.google.com/search?tbm=bks&q=Bioenerg%C3%A9tica" },

          { tipo: "artigo", titulo: "Artigo: Fotossíntese", link: "https://www.todamateria.com.br/fotossintese/" },
          { tipo: "video", titulo: "Vídeos sobre: Fotossíntese", link: "https://www.youtube.com/results?search_query=Fotoss%C3%ADntese%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Metabolismo Energético Vegetal", link: "https://www.google.com/search?tbm=bks&q=Metabolismo%20Energ%C3%A9tico%20Vegetal" },

          { tipo: "artigo", titulo: "Artigo: Enzimas e metabolismo energético", link: "https://www.todamateria.com.br/enzimas/" },
          { tipo: "video", titulo: "Vídeos sobre: Enzimas e metabolismo energético", link: "https://www.youtube.com/results?search_query=Enzimas%20e%20metabolismo%20energ%C3%A9tico%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Enzimologia Básica", link: "https://www.google.com/search?tbm=bks&q=Enzimologia%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Genética e biotecnologia", link: "https://www.todamateria.com.br/genetica/" },
          { tipo: "video", titulo: "Vídeos sobre: Genética e biotecnologia", link: "https://www.youtube.com/results?search_query=Gen%C3%A9tica%20e%20biotecnologia%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Biologia Molecular e Engenharia Genética", link: "https://www.google.com/search?tbm=bks&q=Biologia%20Molecular%20e%20Engenharia%20Gen%C3%A9tica" },

          { tipo: "artigo", titulo: "Artigo: Genes, alelos e cromossomos", link: "https://www.todamateria.com.br/cromossomos/" },
          { tipo: "video", titulo: "Vídeos sobre: Genes, alelos e cromossomos", link: "https://www.youtube.com/results?search_query=Genes%2C%20alelos%20e%20cromossomos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Hereditariedade", link: "https://www.google.com/search?tbm=bks&q=Hereditariedade" },

          { tipo: "artigo", titulo: "Artigo: Genótipo e fenótipo", link: "https://www.todamateria.com.br/genotipo-e-fenotipo/" },
          { tipo: "video", titulo: "Vídeos sobre: Genótipo e fenótipo", link: "https://www.youtube.com/results?search_query=Gen%C3%B3tipo%20e%20fen%C3%B3tipo%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Expressão Gênica", link: "https://www.google.com/search?tbm=bks&q=Express%C3%A3o%20G%C3%AAnica" },

          { tipo: "artigo", titulo: "Artigo: Leis de Mendel", link: "https://www.todamateria.com.br/leis-de-mendel/" },
          { tipo: "video", titulo: "Vídeos sobre: Leis de Mendel", link: "https://www.youtube.com/results?search_query=Leis%20de%20Mendel%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Genética Mendeliana", link: "https://www.google.com/search?tbm=bks&q=Gen%C3%A9tica%20Mendeliana" },

          { tipo: "artigo", titulo: "Artigo: Dominância e recessividade", link: "https://www.todamateria.com.br/dominancia-e-recessividade/" },
          { tipo: "video", titulo: "Vídeos sobre: Dominância e recessividade", link: "https://www.youtube.com/results?search_query=Domin%C3%A2ncia%20e%20recessividade%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Padrões de Herança", link: "https://www.google.com/search?tbm=bks&q=Padr%C3%B5es%20de%20Heran%C3%A7a" },

          { tipo: "artigo", titulo: "Artigo: Heredogramas", link: "https://www.todamateria.com.br/heredograma/" },
          { tipo: "video", titulo: "Vídeos sobre: Heredogramas", link: "https://www.youtube.com/results?search_query=Heredogramas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Análise de Pedigrees", link: "https://www.google.com/search?tbm=bks&q=An%C3%A1lise%20de%20Pedigrees" },

          { tipo: "artigo", titulo: "Artigo: Grupos sanguíneos e fator Rh", link: "https://www.todamateria.com.br/grupos-sanguineos/" },
          { tipo: "video", titulo: "Vídeos sobre: Grupos sanguíneos e fator Rh", link: "https://www.youtube.com/results?search_query=Grupos%20sangu%C3%ADneos%20e%20fator%20Rh%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Imunohematologia Básica", link: "https://www.google.com/search?tbm=bks&q=Imunohematologia%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Herança ligada ao sexo", link: "https://www.todamateria.com.br/heranca-ligada-ao-sexo/" },
          { tipo: "video", titulo: "Vídeos sobre: Herança ligada ao sexo", link: "https://www.youtube.com/results?search_query=Heran%C3%A7a%20ligada%20ao%20sexo%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Genética do Sexo", link: "https://www.google.com/search?tbm=bks&q=Gen%C3%A9tica%20do%20Sexo" },

          { tipo: "artigo", titulo: "Artigo: Mutações e alterações cromossômicas", link: "https://www.todamateria.com.br/mutacao-genetica/" },
          { tipo: "video", titulo: "Vídeos sobre: Mutações e alterações cromossômicas", link: "https://www.youtube.com/results?search_query=Muta%C3%A7%C3%B5es%20e%20altera%C3%A7%C3%B5es%20cromoss%C3%B4micas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Alterações Genéticas Humanas", link: "https://www.google.com/search?tbm=bks&q=Altera%C3%A7%C3%B5es%20Gen%C3%A9ticas%20Humanas" },

          { tipo: "artigo", titulo: "Artigo: DNA recombinante e engenharia genética", link: "https://www.todamateria.com.br/engenharia-genetica/" },
          { tipo: "video", titulo: "Vídeos sobre: DNA recombinante e engenharia genética", link: "https://www.youtube.com/results?search_query=DNA%20recombinante%20e%20engenharia%20gen%C3%A9tica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Biotecnologia Moderna", link: "https://www.google.com/search?tbm=bks&q=Biotecnologia%20Moderna" },

          { tipo: "artigo", titulo: "Artigo: Transgênicos, clonagem e células-tronco", link: "https://www.todamateria.com.br/celulas-tronco/" },
          { tipo: "video", titulo: "Vídeos sobre: Transgênicos, clonagem e células-tronco", link: "https://www.youtube.com/results?search_query=Transg%C3%AAnicos%2C%20clonagem%20e%20c%C3%A9lulas-tronco%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Ética e Biotecnologia", link: "https://www.google.com/search?tbm=bks&q=%C3%89tica%20e%20Biotecnologia" },

          { tipo: "artigo", titulo: "Artigo: Testes genéticos e identificação por DNA", link: "https://www.todamateria.com.br/teste-de-dna/" },
          { tipo: "video", titulo: "Vídeos sobre: Testes genéticos e identificação por DNA", link: "https://www.youtube.com/results?search_query=Testes%20gen%C3%A9ticos%20e%20identifica%C3%A7%C3%A3o%20por%20DNA%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Forense e Genética", link: "https://www.google.com/search?tbm=bks&q=Forense%20e%20Gen%C3%A9tica" },

          { tipo: "artigo", titulo: "Artigo: Lamarckismo e darwinismo", link: "https://www.todamateria.com.br/teoria-da-evolucao/" },
          { tipo: "video", titulo: "Vídeos sobre: Lamarckismo e darwinismo", link: "https://www.youtube.com/results?search_query=Lamarckismo%20e%20darwinismo%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: A Origem das Espécies (Análise)", link: "https://www.google.com/search?tbm=bks&q=A%20Origem%20das%20Esp%C3%A9cies%20(An%C3%A1lise)" },

          { tipo: "artigo", titulo: "Artigo: Seleção natural", link: "https://www.todamateria.com.br/selecao-natural/" },
          { tipo: "video", titulo: "Vídeos sobre: Seleção natural", link: "https://www.youtube.com/results?search_query=Sele%C3%A7%C3%A3o%20natural%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Mecanismos Evolutivos", link: "https://www.google.com/search?tbm=bks&q=Mecanismos%20Evolutivos" },

          { tipo: "artigo", titulo: "Artigo: Adaptação e variabilidade genética", link: "https://www.todamateria.com.br/adaptacao-biologia/" },
          { tipo: "video", titulo: "Vídeos sobre: Adaptação e variabilidade genética", link: "https://www.youtube.com/results?search_query=Adapta%C3%A7%C3%A3o%20e%20variabilidade%20gen%C3%A9tica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Variabilidade e Evolução", link: "https://www.google.com/search?tbm=bks&q=Variabilidade%20e%20Evolu%C3%A7%C3%A3o" },

          { tipo: "artigo", titulo: "Artigo: Especiação", link: "https://www.todamateria.com.br/especiacao/" },
          { tipo: "video", titulo: "Vídeos sobre: Especiação", link: "https://www.youtube.com/results?search_query=Especia%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Formação de Novas Espécies", link: "https://www.google.com/search?tbm=bks&q=Forma%C3%A7%C3%A3o%20de%20Novas%20Esp%C3%A9cies" },

          { tipo: "artigo", titulo: "Artigo: Evidências evolutivas", link: "https://www.todamateria.com.br/evidencias-da-evolucao/" },
          { tipo: "video", titulo: "Vídeos sobre: Evidências evolutivas", link: "https://www.youtube.com/results?search_query=Evid%C3%AAncias%20evolutivas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Provas da Evolução", link: "https://www.google.com/search?tbm=bks&q=Provas%20da%20Evolu%C3%A7%C3%A3o" },

          { tipo: "artigo", titulo: "Artigo: Resistência bacteriana", link: "https://www.todamateria.com.br/resistencia-bacteriana/" },
          { tipo: "video", titulo: "Vídeos sobre: Resistência bacteriana", link: "https://www.youtube.com/results?search_query=Resist%C3%AAncia%20bacteriana%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Microbiologia e Evolução", link: "https://www.google.com/search?tbm=bks&q=Microbiologia%20e%20Evolu%C3%A7%C3%A3o" },

          { tipo: "artigo", titulo: "Artigo: Evolução humana", link: "https://www.todamateria.com.br/evolucao-humana/" },
          { tipo: "video", titulo: "Vídeos sobre: Evolução humana", link: "https://www.youtube.com/results?search_query=Evolu%C3%A7%C3%A3o%20humana%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: A Jornada da Espécie Humana", link: "https://www.google.com/search?tbm=bks&q=A%20Jornada%20da%20Esp%C3%A9cie%20Humana" },

          { tipo: "artigo", titulo: "Artigo: Fisiologia humana e saúde", link: "https://www.todamateria.com.br/fisiologia-humana/" },
          { tipo: "video", titulo: "Vídeos sobre: Fisiologia humana e saúde", link: "https://www.youtube.com/results?search_query=Fisiologia%20humana%20e%20sa%C3%BAde%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Sistemas do Corpo Humano", link: "https://www.google.com/search?tbm=bks&q=Sistemas%20do%20Corpo%20Humano" },

          { tipo: "artigo", titulo: "Artigo: Sistema digestório e nutrição", link: "https://www.todamateria.com.br/sistema-digestorio/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema digestório e nutrição", link: "https://www.youtube.com/results?search_query=Sistema%20digest%C3%B3rio%20e%20nutri%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Nutrição e Digestão", link: "https://www.google.com/search?tbm=bks&q=Nutri%C3%A7%C3%A3o%20e%20Digest%C3%A3o" },

          { tipo: "artigo", titulo: "Artigo: Sistema respiratório", link: "https://www.todamateria.com.br/sistema-respiratorio/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema respiratório", link: "https://www.youtube.com/results?search_query=Sistema%20respirat%C3%B3rio%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Respiração e Trocas Gasosas", link: "https://www.google.com/search?tbm=bks&q=Respira%C3%A7%C3%A3o%20e%20Trocas%20Gasosas" },

          { tipo: "artigo", titulo: "Artigo: Sistema cardiovascular", link: "https://www.todamateria.com.br/sistema-cardiovascular/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema cardiovascular", link: "https://www.youtube.com/results?search_query=Sistema%20cardiovascular%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Circulação Sanguínea Humana", link: "https://www.google.com/search?tbm=bks&q=Circula%C3%A7%C3%A3o%20Sangu%C3%ADnea%20Humana" },

          { tipo: "artigo", titulo: "Artigo: Sistema urinário", link: "https://www.todamateria.com.br/sistema-urinario/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema urinário", link: "https://www.youtube.com/results?search_query=Sistema%20urin%C3%A1rio%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Excreção e Homeostase", link: "https://www.google.com/search?tbm=bks&q=Excre%C3%A7%C3%A3o%20e%20Homeostase" },

          { tipo: "artigo", titulo: "Artigo: Sistema nervoso e órgãos dos sentidos", link: "https://www.todamateria.com.br/sistema-nervoso/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema nervoso e órgãos dos sentidos", link: "https://www.youtube.com/results?search_query=Sistema%20nervoso%20e%20%C3%B3rg%C3%A3os%20dos%20sentidos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Neurobiologia Básica", link: "https://www.google.com/search?tbm=bks&q=Neurobiologia%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Sistema endócrino e hormônios", link: "https://www.todamateria.com.br/sistema-endocrino/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema endócrino e hormônios", link: "https://www.youtube.com/results?search_query=Sistema%20end%C3%B3crino%20e%20horm%C3%B4nios%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Hormônios e Controle Metabólico", link: "https://www.google.com/search?tbm=bks&q=Horm%C3%B4nios%20e%20Controle%20Metab%C3%B3lico" },

          { tipo: "artigo", titulo: "Artigo: Sistema imunológico", link: "https://www.todamateria.com.br/sistema-imunologico/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema imunológico", link: "https://www.youtube.com/results?search_query=Sistema%20imunol%C3%B3gico%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Imunologia Prática", link: "https://www.google.com/search?tbm=bks&q=Imunologia%20Pr%C3%A1tica" },

          { tipo: "artigo", titulo: "Artigo: Sistema locomotor", link: "https://www.todamateria.com.br/sistema-locomotor/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema locomotor", link: "https://www.youtube.com/results?search_query=Sistema%20locomotor%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Ossos, Músculos e Articulações", link: "https://www.google.com/search?tbm=bks&q=Ossos%2C%20M%C3%BAsculos%20e%20Articula%C3%A7%C3%B5es" },

          { tipo: "artigo", titulo: "Artigo: Sistema reprodutor", link: "https://www.todamateria.com.br/sistema-reprodutor/" },
          { tipo: "video", titulo: "Vídeos sobre: Sistema reprodutor", link: "https://www.youtube.com/results?search_query=Sistema%20reprodutor%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Reprodução Humana", link: "https://www.google.com/search?tbm=bks&q=Reprodu%C3%A7%C3%A3o%20Humana" },

          { tipo: "artigo", titulo: "Artigo: Ciclo menstrual, fecundação e contracepção", link: "https://www.todamateria.com.br/ciclo-menstrual/" },
          { tipo: "video", titulo: "Vídeos sobre: Ciclo menstrual, fecundação e contracepção", link: "https://www.youtube.com/results?search_query=Ciclo%20menstrual%2C%20fecunda%C3%A7%C3%A3o%20e%20contracep%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Saúde Sexual e Reprodutiva", link: "https://www.google.com/search?tbm=bks&q=Sa%C3%BAde%20Sexual%20e%20Reprodutiva" },

          { tipo: "artigo", titulo: "Artigo: ISTs e prevenção", link: "https://www.todamateria.com.br/doencas-sexualmente-transmissiveis-dst/" },
          { tipo: "video", titulo: "Vídeos sobre: ISTs e prevenção", link: "https://www.youtube.com/results?search_query=ISTs%20e%20preven%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Doenças Infecciosas e Prevenção", link: "https://www.google.com/search?tbm=bks&q=Doen%C3%A7as%20Infecciosas%20e%20Preven%C3%A7%C3%A3o" },

          { tipo: "artigo", titulo: "Artigo: Vacinas e soros", link: "https://www.todamateria.com.br/diferenca-entre-vacina-e-soro/" },
          { tipo: "video", titulo: "Vídeos sobre: Vacinas e soros", link: "https://www.youtube.com/results?search_query=Vacinas%20e%20soros%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Imunização e Saúde Coletiva", link: "https://www.google.com/search?tbm=bks&q=Imuniza%C3%A7%C3%A3o%20e%20Sa%C3%BAde%20Coletiva" },

          { tipo: "artigo", titulo: "Artigo: Homeostase e saúde pública", link: "https://www.todamateria.com.br/homeostase/" },
          { tipo: "video", titulo: "Vídeos sobre: Homeostase e saúde pública", link: "https://www.youtube.com/results?search_query=Homeostase%20e%20sa%C3%BAde%20p%C3%BAblica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Saúde Pública no Brasil", link: "https://www.google.com/search?tbm=bks&q=Sa%C3%BAde%20P%C3%BAblica%20no%20Brasil" },

          { tipo: "artigo", titulo: "Artigo: Vírus, bactérias, fungos e protozoários", link: "https://www.todamateria.com.br/microbiologia/" },
          { tipo: "video", titulo: "Vídeos sobre: Vírus, bactérias, fungos e protozoários", link: "https://www.youtube.com/results?search_query=V%C3%ADrus%2C%20bact%C3%A9rias%2C%20fungos%20e%20protozo%C3%A1rios%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Microbiologia Geral", link: "https://www.google.com/search?tbm=bks&q=Microbiologia%20Geral" },

          { tipo: "artigo", titulo: "Artigo: Doenças infecciosas e parasitárias", link: "https://www.todamateria.com.br/doencas-infecciosas/" },
          { tipo: "video", titulo: "Vídeos sobre: Doenças infecciosas e parasitárias", link: "https://www.youtube.com/results?search_query=Doen%C3%A7as%20infecciosas%20e%20parasit%C3%A1rias%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Parasitologia Humana", link: "https://www.google.com/search?tbm=bks&q=Parasitologia%20Humana" },

          { tipo: "artigo", titulo: "Artigo: Verminoses e ciclos de parasitas", link: "https://www.todamateria.com.br/verminoses/" },
          { tipo: "video", titulo: "Vídeos sobre: Verminoses e ciclos de parasitas", link: "https://www.youtube.com/results?search_query=Verminoses%20e%20ciclos%20de%20parasitas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Helmintos e Ciclos Parasitários", link: "https://www.google.com/search?tbm=bks&q=Helmintos%20e%20Ciclos%20Parasit%C3%A1rios" },

          { tipo: "artigo", titulo: "Artigo: Prevenção de doenças e epidemias", link: "https://www.todamateria.com.br/epidemias-e-pandemias/" },
          { tipo: "video", titulo: "Vídeos sobre: Prevenção de doenças e epidemias", link: "https://www.youtube.com/results?search_query=Preven%C3%A7%C3%A3o%20de%20doen%C3%A7as%20e%20epidemias%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Epidemiologia Básica", link: "https://www.google.com/search?tbm=bks&q=Epidemiologia%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Classificação dos seres vivos", link: "https://www.todamateria.com.br/reinos-dos-seres-vivos/" },
          { tipo: "video", titulo: "Vídeos sobre: Classificação dos seres vivos", link: "https://www.youtube.com/results?search_query=Classifica%C3%A7%C3%A3o%20dos%20seres%20vivos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Taxonomia e Filogenia", link: "https://www.google.com/search?tbm=bks&q=Taxonomia%20e%20Filogenia" },

          { tipo: "artigo", titulo: "Artigo: Botânica: grupos vegetais, tecidos, reprodução e transporte", link: "https://www.todamateria.com.br/botanica/" },
          { tipo: "video", titulo: "Vídeos sobre: Botânica para o ENEM", link: "https://www.youtube.com/results?search_query=Bot%C3%A2nica%20para%20o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Biologia Vegetal - Raven", link: "https://www.google.com/search?tbm=bks&q=Biologia%20Vegetal%20-%20Raven" }
        ]
      },
      {
        nome: "Química",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Química do zero para ENEM e vestibulares (Mestres do ENEM)", link: "https://www.youtube.com/playlist?list=PL8Sb1J47vKz7VYQxr3IoEsi6sF7eudvc3" },
          { tipo: "artigo", titulo: "Artigo: Matéria, energia e propriedades da matéria", link: "https://www.todamateria.com.br/propriedades-da-materia/" },
          { tipo: "video", titulo: "Vídeos sobre: Matéria e Energia no ENEM", link: "https://www.youtube.com/results?search_query=Mat%C3%A9ria%20e%20Energia%20no%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Química Geral - Feltre", link: "https://www.google.com/search?tbm=bks&q=Qu%C3%ADmica%20Geral%20-%20Feltre" },

          { tipo: "artigo", titulo: "Artigo: Estados físicos e mudanças de estado", link: "https://www.todamateria.com.br/mudancas-de-estado-fisico/" },
          { tipo: "video", titulo: "Vídeos sobre: Estados físicos e mudanças de estado", link: "https://www.youtube.com/results?search_query=Estados%20f%C3%ADsicos%20e%20mudan%C3%A7as%20de%20estado%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fenômenos Físicos e Químicos", link: "https://www.google.com/search?tbm=bks&q=Fen%C3%B4menos%20F%C3%ADsicos%20e%20Qu%C3%ADmicos" },

          { tipo: "artigo", titulo: "Artigo: Substâncias puras e misturas", link: "https://www.todamateria.com.br/substancias-puras-e-misturas/" },
          { tipo: "video", titulo: "Vídeos sobre: Substâncias puras e misturas", link: "https://www.youtube.com/results?search_query=Subst%C3%A2ncias%20puras%20e%20misturas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Sistemas Materiais", link: "https://www.google.com/search?tbm=bks&q=Sistemas%20Materiais" },

          { tipo: "artigo", titulo: "Artigo: Métodos de separação de misturas", link: "https://www.todamateria.com.br/separacao-de-misturas/" },
          { tipo: "video", titulo: "Vídeos sobre: Métodos de separação de misturas", link: "https://www.youtube.com/results?search_query=M%C3%A9todos%20de%20separa%C3%A7%C3%A3o%20de%20misturas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Laboratório de Química Básica", link: "https://www.google.com/search?tbm=bks&q=Laborat%C3%B3rio%20de%20Qu%C3%ADmica%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Modelos atômicos", link: "https://www.todamateria.com.br/modelos-atomicos/" },
          { tipo: "video", titulo: "Vídeos sobre: Modelos atômicos", link: "https://www.youtube.com/results?search_query=Modelos%20at%C3%B4micos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: A Evolução do Modelo Atômico", link: "https://www.google.com/search?tbm=bks&q=A%20Evolu%C3%A7%C3%A3o%20do%20Modelo%20At%C3%B4mico" },

          { tipo: "artigo", titulo: "Artigo: Tabela periódica e propriedades periódicas", link: "https://www.todamateria.com.br/tabela-periodica/" },
          { tipo: "video", titulo: "Vídeos sobre: Tabela periódica e propriedades periódicas", link: "https://www.youtube.com/results?search_query=Tabela%20peri%C3%B3dica%20e%20propriedades%20peri%C3%B3dicas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Periodicidade Química", link: "https://www.google.com/search?tbm=bks&q=Periodicidade%20Qu%C3%ADmica" },

          { tipo: "artigo", titulo: "Artigo: Ligações iônicas, covalentes e metálicas", link: "https://www.todamateria.com.br/ligacoes-quimicas/" },
          { tipo: "video", titulo: "Vídeos sobre: Ligações químicas", link: "https://www.youtube.com/results?search_query=Liga%C3%A7%C3%B5es%20qu%C3%ADmicas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Ligações e Estrutura Molecular", link: "https://www.google.com/search?tbm=bks&q=Liga%C3%A7%C3%B5es%20e%20Estrutura%20Molecular" },

          { tipo: "artigo", titulo: "Artigo: Ácidos, bases, sais e óxidos", link: "https://www.todamateria.com.br/funcoes-inorganicas/" },
          { tipo: "video", titulo: "Vídeos sobre: Ácidos, bases, sais e óxidos", link: "https://www.youtube.com/results?search_query=%C3%81cidos%2C%20bases%2C%20sais%20e%20%C3%B3xidos%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Funções da Química Inorgânica", link: "https://www.google.com/search?tbm=bks&q=Fun%C3%A7%C3%B5es%20da%20Qu%C3%ADmica%20Inorg%C3%A2nica" },

          { tipo: "artigo", titulo: "Artigo: pH e neutralização", link: "https://www.todamateria.com.br/escala-ph/" },
          { tipo: "video", titulo: "Vídeos sobre: pH e neutralização", link: "https://www.youtube.com/results?search_query=pH%20e%20neutraliza%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Equilíbrio Ácido-Base", link: "https://www.google.com/search?tbm=bks&q=Equil%C3%ADbrio%20%C3%81cido-Base" },

          { tipo: "artigo", titulo: "Artigo: Estequiometria", link: "https://www.todamateria.com.br/estequiometria/" },
          { tipo: "video", titulo: "Vídeos sobre: Estequiometria", link: "https://www.youtube.com/results?search_query=Estequiometria%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Cálculos Estequiométricos no ENEM", link: "https://www.google.com/search?tbm=bks&q=C%C3%A1lculos%20Estequiom%C3%A9tricos%20no%20ENEM" },

          { tipo: "artigo", titulo: "Artigo: Soluções e concentração", link: "https://www.todamateria.com.br/solucoes-quimicas/" },
          { tipo: "video", titulo: "Vídeos sobre: Soluções e concentração", link: "https://www.youtube.com/results?search_query=Solu%C3%A7%C3%B5es%20e%20concentra%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Físico-Química de Soluções", link: "https://www.google.com/search?tbm=bks&q=F%C3%ADsico-Qu%C3%ADmica%20de%20Solu%C3%A7%C3%B5es" },

          { tipo: "artigo", titulo: "Artigo: Termoquímica e entalpia", link: "https://www.todamateria.com.br/termoquimica/" },
          { tipo: "video", titulo: "Vídeos sobre: Termoquímica e entalpia", link: "https://www.youtube.com/results?search_query=Termoqu%C3%ADmica%20e%20entalpia%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Calor e Reações Químicas", link: "https://www.google.com/search?tbm=bks&q=Calor%20e%20Rea%C3%A7%C3%B5es%20Qu%C3%ADmicas" },

          { tipo: "artigo", titulo: "Artigo: Eletroquímica: pilhas e eletrólise", link: "https://www.todamateria.com.br/eletroquimica/" },
          { tipo: "video", titulo: "Vídeos sobre: Eletroquímica", link: "https://www.youtube.com/results?search_query=Eletroqu%C3%ADmica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Reações de Oxirredução", link: "https://www.google.com/search?tbm=bks&q=Rea%C3%A7%C3%B5es%20de%20Oxirredu%C3%A7%C3%A3o" },

          { tipo: "artigo", titulo: "Artigo: Química orgânica e funções orgânicas", link: "https://www.todamateria.com.br/quimica-organica/" },
          { tipo: "video", titulo: "Vídeos sobre: Química orgânica", link: "https://www.youtube.com/results?search_query=Qu%C3%ADmica%20org%C3%A2nica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Química Orgânica para Vestibulares", link: "https://www.google.com/search?tbm=bks&q=Qu%C3%ADmica%20Org%C3%A2nica%20para%20Vestibulares" }
        ]
      },
      {
        nome: "Física",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Curso completo de Física para o ENEM (Professor Boaro)", link: "https://www.youtube.com/playlist?list=PLzjR7HXQnrcfiBQRzQbnsQaOEGaY5t9hs" },
          { tipo: "artigo", titulo: "Artigo: Cinemática: velocidade média e MRV", link: "https://www.todamateria.com.br/cinematica/" },
          { tipo: "video", titulo: "Vídeos sobre: Cinemática para o ENEM", link: "https://www.youtube.com/results?search_query=Cinem%C3%A1tica%20para%20o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Tópicos de Física - Mecânica", link: "https://www.google.com/search?tbm=bks&q=T%C3%B3picos%20de%20F%C3%ADsica%20-%20Mec%C3%A2nica" },

          { tipo: "artigo", titulo: "Artigo: Leis de Newton", link: "https://www.todamateria.com.br/leis-de-newton/" },
          { tipo: "video", titulo: "Vídeos sobre: Leis de Newton", link: "https://www.youtube.com/results?search_query=Leis%20de%20Newton%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Dinâmica e Aplicações", link: "https://www.google.com/search?tbm=bks&q=Din%C3%A2mica%20e%20Aplica%C3%A7%C3%B5es" },

          { tipo: "artigo", titulo: "Artigo: Trabalho, potência e energia", link: "https://www.todamateria.com.br/trabalho-e-potencia/" },
          { tipo: "video", titulo: "Vídeos sobre: Trabalho, potência e energia", link: "https://www.youtube.com/results?search_query=Trabalho%2C%20pot%C3%AAncia%20e%20energia%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Conservação de Energia", link: "https://www.google.com/search?tbm=bks&q=Conserva%C3%A7%C3%A3o%20de%20Energia" },

          { tipo: "artigo", titulo: "Artigo: Hidrostática: pressão, densidade e empuxo", link: "https://www.todamateria.com.br/hidrostatica/" },
          { tipo: "video", titulo: "Vídeos sobre: Hidrostática", link: "https://www.youtube.com/results?search_query=Hidrost%C3%A1tica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Mecânica dos Fluidos Básica", link: "https://www.google.com/search?tbm=bks&q=Mec%C3%A2nica%20dos%20Fluidos%20B%C3%A1sica" },

          { tipo: "artigo", titulo: "Artigo: Termologia: temperatura, calor e dilatação", link: "https://www.todamateria.com.br/termologia/" },
          { tipo: "video", titulo: "Vídeos sobre: Termologia", link: "https://www.youtube.com/results?search_query=Termologia%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Calor e Termodinâmica", link: "https://www.google.com/search?tbm=bks&q=Calor%20e%20Termodin%C3%A2mica" },

          { tipo: "artigo", titulo: "Artigo: Eletricidade: Lei de Ohm e circuitos", link: "https://www.todamateria.com.br/eletricidade/" },
          { tipo: "video", titulo: "Vídeos sobre: Eletricidade", link: "https://www.youtube.com/results?search_query=Eletricidade%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Eletrodinâmica Prática", link: "https://www.google.com/search?tbm=bks&q=Eletrodin%C3%A2mica%20Pr%C3%A1tica" },

          { tipo: "artigo", titulo: "Artigo: Ondulatória e acústica", link: "https://www.todamateria.com.br/ondulatoria/" },
          { tipo: "video", titulo: "Vídeos sobre: Ondulatória", link: "https://www.youtube.com/results?search_query=Ondulat%C3%B3ria%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Fenômenos Ondulatórios", link: "https://www.google.com/search?tbm=bks&q=Fen%C3%B4menos%20Ondulat%C3%B3rios" },

          { tipo: "artigo", titulo: "Artigo: Óptica geométrica", link: "https://www.todamateria.com.br/optica-geometrica/" },
          { tipo: "video", titulo: "Vídeos sobre: Óptica geométrica", link: "https://www.youtube.com/results?search_query=%C3%93ptica%20geom%C3%A9trica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Espelhos e Lentes", link: "https://www.google.com/search?tbm=bks&q=Espelhos%20e%20Lentes" }
        ]
      }
    ]
  },
  {
    nome: "Ciências Humanas e suas Tecnologias",
    materias: [
      {
        nome: "História",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Grécia Antiga e Roma", link: "https://www.todamateria.com.br/grecia-antiga/" },
          { tipo: "video", titulo: "Vídeos sobre: História Antiga no ENEM", link: "https://www.youtube.com/results?search_query=Hist%C3%B3ria%20Antiga%20no%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: História Geral e do Brasil", link: "https://www.google.com/search?tbm=bks&q=Hist%C3%B3ria%20Geral%20e%20do%20Brasil" },

          { tipo: "artigo", titulo: "Artigo: Feudalismo e Idade Média", link: "https://www.todamateria.com.br/feudalismo/" },
          { tipo: "video", titulo: "Vídeos sobre: Feudalismo e Idade Média", link: "https://www.youtube.com/results?search_query=Feudalismo%20e%20Idade%20M%C3%A9dia%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Sociedade Medieval", link: "https://www.google.com/search?tbm=bks&q=Sociedade%20Medieval" },

          { tipo: "artigo", titulo: "Artigo: Revolução Industrial e Capitalismo", link: "https://www.todamateria.com.br/revolucao-industrial/" },
          { tipo: "video", titulo: "Vídeos sobre: Revolução Industrial", link: "https://www.youtube.com/results?search_query=Revolu%C3%A7%C3%A3o%20Industrial%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: A Era das Revoluções - Eric Hobsbawm", link: "https://www.google.com/search?tbm=bks&q=A%20Era%20das%20Revolu%C3%A7%C3%B5es%20-%20Eric%20Hobsbawm" },

          { tipo: "artigo", titulo: "Artigo: Brasil Colônia e escravidão", link: "https://www.todamateria.com.br/brasil-colonia/" },
          { tipo: "video", titulo: "Vídeos sobre: Brasil Colônia", link: "https://www.youtube.com/results?search_query=Brasil%20Col%C3%B4nia%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Raízes do Brasil - Sergio Buarque", link: "https://www.google.com/search?tbm=bks&q=Ra%C3%ADzes%20do%20Brasil%20-%20Sergio%20Buarque" },

          { tipo: "artigo", titulo: "Artigo: Era Vargas e populismo", link: "https://www.todamateria.com.br/era-vargas/" },
          { tipo: "video", titulo: "Vídeos sobre: Era Vargas", link: "https://www.youtube.com/results?search_query=Era%20Vargas%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: História do Brasil República", link: "https://www.google.com/search?tbm=bks&q=Hist%C3%B3ria%20do%20Brasil%20Rep%C3%BAblica" },

          { tipo: "artigo", titulo: "Artigo: Ditadura Militar no Brasil", link: "https://www.todamateria.com.br/ditadura-militar-no-brasil/" },
          { tipo: "video", titulo: "Vídeos sobre: Ditadura Militar no Brasil", link: "https://www.youtube.com/results?search_query=Ditadura%20Militar%20no%20Brasil%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Anos de Chumbo", link: "https://www.google.com/search?tbm=bks&q=Anos%20de%20Chumbo" },

          { tipo: "artigo", titulo: "Artigo: Guerra Fria e globalização", link: "https://www.todamateria.com.br/guerra-fria/" },
          { tipo: "video", titulo: "Vídeos sobre: Guerra Fria", link: "https://www.youtube.com/results?search_query=Guerra%20Fria%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: História Contemporânea", link: "https://www.google.com/search?tbm=bks&q=Hist%C3%B3ria%20Contempor%C3%A2nea" }
        ]
      },
      {
        nome: "Geografia",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Cartografia: escalas e fusos horários", link: "https://www.todamateria.com.br/cartografia/" },
          { tipo: "video", titulo: "Vídeos sobre: Cartografia para o ENEM", link: "https://www.youtube.com/results?search_query=Cartografia%20para%20o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Leitura de Mapas e Cartografia", link: "https://www.google.com/search?tbm=bks&q=Leitura%20de%20Mapas%20e%20Cartografia" },

          { tipo: "artigo", titulo: "Artigo: Geografia física e relevo", link: "https://www.todamateria.com.br/relevo/" },
          { tipo: "video", titulo: "Vídeos sobre: Geografia física", link: "https://www.youtube.com/results?search_query=Geografia%20f%C3%ADsica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Dinâmica da Terra", link: "https://www.google.com/search?tbm=bks&q=Din%C3%A2mica%20da%20Terra" },

          { tipo: "artigo", titulo: "Artigo: Demografia e urbanização brasileira", link: "https://www.todamateria.com.br/urbanizacao/" },
          { tipo: "video", titulo: "Vídeos sobre: Urbanização brasileira", link: "https://www.youtube.com/results?search_query=Urbaniza%C3%A7%C3%A3o%20brasileira%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: A Cidade e o Campo no Brasil", link: "https://www.google.com/search?tbm=bks&q=A%20Cidade%20e%20o%20Campo%20no%20Brasil" },

          { tipo: "artigo", titulo: "Artigo: Geopolítica e globalização", link: "https://www.todamateria.com.br/globalizacao/" },
          { tipo: "video", titulo: "Vídeos sobre: Geopolítica mundial", link: "https://www.youtube.com/results?search_query=Geopol%C3%ADtica%20mundial%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Geografia Econômica e Política", link: "https://www.google.com/search?tbm=bks&q=Geografia%20Econ%C3%B4mica%20e%20Pol%C3%ADtica" }
        ]
      },
      {
        nome: "Filosofia e Sociologia",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Filosofia Antiga: Sócrates, Platão e Aristóteles", link: "https://www.todamateria.com.br/filosofia-antiga/" },
          { tipo: "video", titulo: "Vídeos sobre: Filosofia Antiga", link: "https://www.youtube.com/results?search_query=Filosofia%20Antiga%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: O Mundo de Sofia - Jostein Gaarder", link: "https://www.google.com/search?tbm=bks&q=O%20Mundo%20de%20Sofia%20-%20Jostein%20Gaarder" },

          { tipo: "artigo", titulo: "Artigo: Contratualismo: Hobbes, Locke e Rousseau", link: "https://www.todamateria.com.br/contratualismo/" },
          { tipo: "video", titulo: "Vídeos sobre: Contratualismo", link: "https://www.youtube.com/results?search_query=Contratualismo%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Filosofia Política Moderna", link: "https://www.google.com/search?tbm=bks&q=Filosofia%20Pol%C3%ADtica%20Moderna" },

          { tipo: "artigo", titulo: "Artigo: Sociologia clássica: Durkheim, Marx e Weber", link: "https://www.todamateria.com.br/sociologia/" },
          { tipo: "video", titulo: "Vídeos sobre: Sociologia clássica", link: "https://www.youtube.com/results?search_query=Sociologia%20cl%C3%A1ssica%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Sociologia para o Ensino Médio", link: "https://www.google.com/search?tbm=bks&q=Sociologia%20para%20o%20Ensino%20M%C3%A9dio" },

          { tipo: "artigo", titulo: "Artigo: Indústria cultural e cidadania", link: "https://www.todamateria.com.br/industria-cultural/" },
          { tipo: "video", titulo: "Vídeos sobre: Indústria cultural", link: "https://www.youtube.com/results?search_query=Ind%C3%BAstria%20cultural%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Cultura de Massa e Sociedade", link: "https://www.google.com/search?tbm=bks&q=Cultura%20de%20Massa%20e%20Sociedade" }
        ]
      }
    ]
  },
  {
    nome: "Linguagens, Códigos e suas Tecnologias",
    materias: [
      {
        nome: "Língua Portuguesa e Literatura",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Interpretação e compreensão textual", link: "https://www.todamateria.com.br/interpretacao-de-textos/" },
          { tipo: "video", titulo: "Vídeos sobre: Interpretação de textos para o ENEM", link: "https://www.youtube.com/results?search_query=Interpreta%C3%A7%C3%A3o%20de%20textos%20para%20o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Português Contemporâneo", link: "https://www.google.com/search?tbm=bks&q=Portugu%C3%AAs%20Contempor%C3%A2neo" },

          { tipo: "artigo", titulo: "Artigo: Funções da linguagem e gêneros textuais", link: "https://www.todamateria.com.br/funcoes-da-linguagem/" },
          { tipo: "video", titulo: "Vídeos sobre: Funções da linguagem", link: "https://www.youtube.com/results?search_query=Fun%C3%A7%C3%B5es%20da%20linguagem%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Gêneros Textuais e Coesão", link: "https://www.google.com/search?tbm=bks&q=G%C3%AAneros%20Textuais%20e%20Coes%C3%A3o" },

          { tipo: "artigo", titulo: "Artigo: Modernismo brasileiro e Semana de 22", link: "https://www.todamateria.com.br/modernismo-no-brasil/" },
          { tipo: "video", titulo: "Vídeos sobre: Modernismo brasileiro", link: "https://www.youtube.com/results?search_query=Modernismo%20brasileiro%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Literatura Brasileira - História e Textos", link: "https://www.google.com/search?tbm=bks&q=Literatura%20Brasileira%20-%20Hist%C3%B3ria%20e%20Textos" }
        ]
      },
      {
        nome: "Língua Estrangeira, Artes e Educação Física",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Inglês: Estratégias de leitura e interpretação", link: "https://www.todamateria.com.br/ingles-enem/" },
          { tipo: "video", titulo: "Vídeos sobre: Inglês no ENEM", link: "https://www.youtube.com/results?search_query=Ingl%C3%AAs%20no%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Grammar and Reading Comprehension", link: "https://www.google.com/search?tbm=bks&q=Grammar%20and%20Reading%20Comprehension" },

          { tipo: "artigo", titulo: "Artigo: Vanguardas europeias e Arte Moderna", link: "https://www.todamateria.com.br/vanguardas-europeias/" },
          { tipo: "video", titulo: "Vídeos sobre: História da Arte", link: "https://www.youtube.com/results?search_query=Hist%C3%B3ria%20da%20Arte%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: História da Arte - Gombrich", link: "https://www.google.com/search?tbm=bks&q=Hist%C3%B3ria%20da%20Arte%20-%20Gombrich" },

          { tipo: "artigo", titulo: "Artigo: Esportes, corpo, mídia e cultura corporal", link: "https://www.todamateria.com.br/educacao-fisica/" },
          { tipo: "video", titulo: "Vídeos sobre: Educação Física no ENEM", link: "https://www.youtube.com/results?search_query=Educa%C3%A7%C3%A3o%20F%C3%ADsica%20no%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Corpo, Cultura e Sociedade", link: "https://www.google.com/search?tbm=bks&q=Corpo%2C%20Cultura%20e%20Sociedade" }
        ]
      }
    ]
  },
  {
    nome: "Redação",
    materias: [
      {
        nome: "Redação Nota 1000 ENEM",
        recomendacoes: [
          { tipo: "video", titulo: "Playlist: Redação ENEM, aulas gratuitas (Curso Enem Gratuito)", link: "https://www.youtube.com/playlist?list=PLQVUQftDIJQErJmPAGyHrdtxrgLklj6a_" },
          { tipo: "artigo", titulo: "Artigo: Estrutura do texto dissertativo-argumentativo", link: "https://www.todamateria.com.br/redacao-enem/" },
          { tipo: "video", titulo: "Vídeos sobre: Como estruturar a Redação do ENEM", link: "https://www.youtube.com/results?search_query=Como%20estruturar%20a%20Reda%C3%A7%C3%A3o%20do%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Guia Oficial da Redação Nota 1000", link: "https://www.google.com/search?tbm=bks&q=Guia%20Oficial%20da%20Reda%C3%A7%C3%A3o%20Nota%201000" },

          { tipo: "artigo", titulo: "Artigo: As 5 competências do ENEM avaliadas pelo INEP", link: "https://www.todamateria.com.br/competencias-da-redacao-do-enem/" },
          { tipo: "video", titulo: "Vídeos sobre: Detalhando as Competências da Redação", link: "https://www.youtube.com/results?search_query=Detalhando%20as%20Compet%C3%AAncias%20da%20Reda%C3%A7%C3%A3o%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Manual de Competências da Redação", link: "https://www.google.com/search?tbm=bks&q=Manual%20de%20Compet%C3%AAncias%20da%20Reda%C3%A7%C3%A3o" },

          { tipo: "artigo", titulo: "Artigo: Proposta de intervenção e direitos humanos", link: "https://www.todamateria.com.br/proposta-de-intervencao-redacao-enem/" },
          { tipo: "video", titulo: "Vídeos sobre: Como fazer a Conclusão/Intervenção perfeita", link: "https://www.youtube.com/results?search_query=Como%20fazer%20a%20Conclus%C3%A3o%2FInterven%C3%A7%C3%A3o%20perfeita%20ENEM" },
          { tipo: "livro", titulo: "Livros sobre: Repertório Sociocultural Coringa", link: "https://www.google.com/search?tbm=bks&q=Repert%C3%B3rio%20Sociocultural%20Coringa" }
        ]
      }
    ]
  }
];