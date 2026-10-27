const areas = [
  {
    nome: "Matemática e suas Tecnologias",
    materias: [
      {
        nome: "Números, operações e matemática financeira",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Números naturais, inteiros, racionais e reais", link: "https://www.todamateria.com.br/conjuntos-numericos/" },
          { tipo: "video", titulo: "Vídeo: Números naturais, inteiros, racionais e reais para o ENEM", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Fundamentos de Matemática Elementar - Conjuntos", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Frações, decimais e operações básicas", link: "https://www.todamateria.com.br/fracoes/" },
          { tipo: "video", titulo: "Vídeo: Frações, decimais e operações básicas", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Matemática Contextualizada - Aritmética", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Potenciação, radiciação e notação científica", link: "https://www.todamateria.com.br/potenciacao/" },
          { tipo: "video", titulo: "Vídeo: Potenciação, radiciação e notação científica", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Matemática para o Ensino Médio", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Divisibilidade, MMC e MDC", link: "https://www.todamateria.com.br/mmc-e-mdc/" },
          { tipo: "video", titulo: "Vídeo: Divisibilidade, MMC e MDC", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Guia Prático de Matemática Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Razão e proporção", link: "https://www.todamateria.com.br/razao-e-proporcao/" },
          { tipo: "video", titulo: "Vídeo: Razão e proporção", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Matemática ENEM Teoria e Prática", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Regra de três simples e composta", link: "https://www.todamateria.com.br/regra-de-tres/" },
          { tipo: "video", titulo: "Vídeo: Regra de três simples e composta", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Matemática Aplicada", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Grandezas diretamente e inversamente proporcionais", link: "https://www.todamateria.com.br/grandezas-proporcionais/" },
          { tipo: "video", titulo: "Vídeo: Grandezas diretamente e inversamente proporcionais", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Fundamentos de Matemática", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Porcentagem e variação percentual", link: "https://www.todamateria.com.br/porcentagem/" },
          { tipo: "video", titulo: "Vídeo: Porcentagem e variação percentual", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Matemática Comercial e Financeira", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Aumentos e descontos sucessivos", link: "https://www.todamateria.com.br/descontos-sucessivos/" },
          { tipo: "video", titulo: "Vídeo: Aumentos e descontos sucessivos", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Matemática Financeira Fácil", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Juros simples e compostos", link: "https://www.todamateria.com.br/juros-simples-e-juros-compostos/" },
          { tipo: "video", titulo: "Vídeo: Juros simples e compostos", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Matemática para Concursos e Vestibulares", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Lucro, prejuízo, custo e receita", link: "https://www.todamateria.com.br/lucro-e-prejuizo/" },
          { tipo: "video", titulo: "Vídeo: Lucro, prejuízo, custo e receita", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Matemática Financeira Aplicada ao ENEM", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Escalas, unidades de medida e conversões", link: "https://www.todamateria.com.br/escalas/" },
          { tipo: "video", titulo: "Vídeo: Escalas, unidades de medida e conversões", link: "https://youtu.be/exemplo_mat" },
          { tipo: "livro", titulo: "Livro: Grandezas e Medidas na Física e Matemática", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Álgebra, equações e funções",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Expressões algébricas e fatoração", link: "https://www.todamateria.com.br/fatoracao-algebrica/" },
          { tipo: "video", titulo: "Vídeo: Expressões algébricas e fatoração", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Fundamentos de Matemática Elementar - Álgebra", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Equações do primeiro e segundo graus", link: "https://www.todamateria.com.br/equacao-do-2-grau/" },
          { tipo: "video", titulo: "Vídeo: Equações do primeiro e segundo graus", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Álgebra Linear e Elementar", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistemas de equações", link: "https://www.todamateria.com.br/sistema-de-equacoes/" },
          { tipo: "video", titulo: "Vídeo: Sistemas de equações", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Matemática - Ensino Médio Vol. 1", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Inequações", link: "https://www.todamateria.com.br/inequacoes/" },
          { tipo: "video", titulo: "Vídeo: Inequações", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Coleção Fundamentos de Matemática", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Função afim e função quadrática", link: "https://www.todamateria.com.br/funcao-do-1-grau/" },
          { tipo: "video", titulo: "Vídeo: Função afim e função quadrática", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Funções e Gráficos no ENEM", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Função exponencial e logarítmica", link: "https://www.todamateria.com.br/funcao-exponencial/" },
          { tipo: "video", titulo: "Vídeo: Função exponencial e logarítmica", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Logaritmos e Exponenciais Descomplicados", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Raízes, gráficos, crescimento e decrescimento", link: "https://www.todamateria.com.br/grafico-de-uma-funcao/" },
          { tipo: "video", titulo: "Vídeo: Raízes, gráficos, crescimento e decrescimento", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Análise Gráfica para Vestibulares", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Máximos e mínimos de funções", link: "https://www.todamateria.com.br/vertice-da-parabola/" },
          { tipo: "video", titulo: "Vídeo: Máximos e mínimos de funções", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Otimização e Funções Quadráticas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sequências numéricas", link: "https://www.todamateria.com.br/sequencias-numericas/" },
          { tipo: "video", titulo: "Vídeo: Sequências numéricas", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Padrões e Sequências Matemáticas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Progressão aritmética (PA) e geométrica (PG)", link: "https://www.todamateria.com.br/progressao-aritmetica/" },
          { tipo: "video", titulo: "Vídeo: Progressão aritmética (PA) e geométrica (PG)", link: "https://youtu.be/exemplo_alg" },
          { tipo: "livro", titulo: "Livro: Sequências e Progressões", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Geometria e trigonometria",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Ângulos, retas e polígonos", link: "https://www.todamateria.com.br/angulos/" },
          { tipo: "video", titulo: "Vídeo: Ângulos, retas e polígonos", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Fundamentos de Matemática Elementar - Geometria Plana", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Triângulos e quadriláteros", link: "https://www.todamateria.com.br/triangulos/" },
          { tipo: "video", titulo: "Vídeo: Triângulos e quadriláteros", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Geometria Plana Descomplicada", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Semelhança de figuras", link: "https://www.todamateria.com.br/semelhanca-de-triangulos/" },
          { tipo: "video", titulo: "Vídeo: Semelhança de figuras", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Proporcionalidade Geométrica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Teorema de Tales", link: "https://www.todamateria.com.br/teorema-de-tales/" },
          { tipo: "video", titulo: "Vídeo: Teorema de Tales", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Teoremas Fundamentais da Geometria", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Teorema de Pitágoras", link: "https://www.todamateria.com.br/teorema-de-pitagoras/" },
          { tipo: "video", titulo: "Vídeo: Teorema de Pitágoras", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Relações no Triângulo Retângulo", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Perímetro e áreas de figuras planas", link: "https://www.todamateria.com.br/areas-de-figuras-planas/" },
          { tipo: "video", titulo: "Vídeo: Perímetro e áreas de figuras planas", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Cálculo de Áreas e Perímetros", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Circunferência e círculo", link: "https://www.todamateria.com.br/circunferencia/" },
          { tipo: "video", titulo: "Vídeo: Circunferência e círculo", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Elementos da Circunferência", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Prismas, pirâmides, cilindros, cones e esferas", link: "https://www.todamateria.com.br/geometria-espacial/" },
          { tipo: "video", titulo: "Vídeo: Prismas, pirâmides, cilindros, cones e esferas", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Fundamentos de Geometria Espacial", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Áreas e volumes de sólidos", link: "https://www.todamateria.com.br/volume-dos-solidos/" },
          { tipo: "video", titulo: "Vídeo: Áreas e volumes de sólidos", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Manual de Volumes e Sólidos Geométricos", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Planificações e vistas de objetos", link: "https://www.todamateria.com.br/planificacao-de-solidos/" },
          { tipo: "video", titulo: "Vídeo: Planificações e vistas de objetos", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Visão Espacial e Desenho Geométrico", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Plano cartesiano", link: "https://www.todamateria.com.br/plano-cartesiano/" },
          { tipo: "video", titulo: "Vídeo: Plano cartesiano", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Geometria Analítica Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Distância entre pontos", link: "https://www.todamateria.com.br/distancia-entre-dois-pontos/" },
          { tipo: "video", titulo: "Vídeo: Distância entre pontos", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Coordenadas no Plano", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Razões trigonométricas", link: "https://www.todamateria.com.br/trigonometria/" },
          { tipo: "video", titulo: "Vídeo: Razões trigonométricas", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Fundamentos de Trigonometria", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Seno, cosseno e tangente", link: "https://www.todamateria.com.br/seno-cosseno-e-tangente/" },
          { tipo: "video", titulo: "Vídeo: Seno, cosseno e tangente", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Trigonometria no Triângulo Retângulo", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Lei dos Senos e Lei dos Cossenos", link: "https://www.todamateria.com.br/lei-dos-senos-e-lei-dos-cossenos/" },
          { tipo: "video", titulo: "Vídeo: Lei dos Senos e Lei dos Cossenos", link: "https://youtu.be/exemplo_geo" },
          { tipo: "livro", titulo: "Livro: Triângulos quaisquer e Leis Trigonométricas", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Estatística, probabilidade e contagem",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Leitura de tabelas e gráficos", link: "https://www.todamateria.com.br/interpretacao-de-graficos/" },
          { tipo: "video", titulo: "Vídeo: Leitura de tabelas e gráficos", link: "https://youtu.be/exemplo_est" },
          { tipo: "livro", titulo: "Livro: Estatística para o Ensino Médio", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Média simples e ponderada", link: "https://www.todamateria.com.br/media-aritmetica-simples-e-ponderada/" },
          { tipo: "video", titulo: "Vídeo: Média simples e ponderada", link: "https://youtu.be/exemplo_est" },
          { tipo: "livro", titulo: "Livro: Medidas de Tendência Central", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Mediana, moda e amplitude", link: "https://www.todamateria.com.br/estatistica-media-mediana-e-moda/" },
          { tipo: "video", titulo: "Vídeo: Mediana, moda e amplitude", link: "https://youtu.be/exemplo_est" },
          { tipo: "livro", titulo: "Livro: Estatística Descritiva Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Análise e comparação de dados", link: "https://www.todamateria.com.br/analise-de-dados/" },
          { tipo: "video", titulo: "Vídeo: Análise e comparação de dados", link: "https://youtu.be/exemplo_est" },
          { tipo: "livro", titulo: "Livro: Leitura Crítica de Dados Estatísticos", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Princípio fundamental da contagem", link: "https://www.todamateria.com.br/principio-fundamental-da-contagem/" },
          { tipo: "video", titulo: "Vídeo: Princípio fundamental da contagem", link: "https://youtu.be/exemplo_est" },
          { tipo: "livro", titulo: "Livro: Análise Combinatória e Probabilidade", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Permutação, arranjo e combinação", link: "https://www.todamateria.com.br/analise-combinatoria/" },
          { tipo: "video", titulo: "Vídeo: Permutação, arranjo e combinação", link: "https://youtu.be/exemplo_est" },
          { tipo: "livro", titulo: "Livro: Técnicas de Contagem", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Probabilidade simples e composta", link: "https://www.todamateria.com.br/probabilidade/" },
          { tipo: "video", titulo: "Vídeo: Probabilidade simples e composta", link: "https://youtu.be/exemplo_est" },
          { tipo: "livro", titulo: "Livro: Teoria das Probabilidades no ENEM", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Eventos independentes e dependentes", link: "https://www.todamateria.com.br/probabilidade-condicional/" },
          { tipo: "video", titulo: "Vídeo: Eventos independentes e dependentes", link: "https://youtu.be/exemplo_est" },
          { tipo: "livro", titulo: "Livro: Probabilidade Condicional Aplicada", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Grandezas, medidas e raciocínio quantitativo",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Sistemas de unidades", link: "https://www.todamateria.com.br/unidades-de-medida/" },
          { tipo: "video", titulo: "Vídeo: Sistemas de unidades", link: "https://youtu.be/exemplo_gran" },
          { tipo: "livro", titulo: "Livro: Física e Matemática: Unidades e Medidas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Comprimento, área, volume, massa e tempo", link: "https://www.todamateria.com.br/conversao-de-unidades/" },
          { tipo: "video", titulo: "Vídeo: Comprimento, área, volume, massa e tempo", link: "https://youtu.be/exemplo_gran" },
          { tipo: "livro", titulo: "Livro: Grandezas Físicas e Geométricas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Densidade e escalas", link: "https://www.todamateria.com.br/densidade/" },
          { tipo: "video", titulo: "Vídeo: Densidade e escalas", link: "https://youtu.be/exemplo_gran" },
          { tipo: "livro", titulo: "Livro: Raciocínio Quantitativo", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Conversão de unidades", link: "https://www.todamateria.com.br/conversao-de-unidades-de-medida/" },
          { tipo: "video", titulo: "Vídeo: Conversão de unidades", link: "https://youtu.be/exemplo_gran" },
          { tipo: "livro", titulo: "Livro: Guia de Conversões ENEM", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Estimativas e ordem de grandeza", link: "https://www.todamateria.com.br/ordem-de-grandeza/" },
          { tipo: "video", titulo: "Vídeo: Estimativas e ordem de grandeza", link: "https://youtu.be/exemplo_gran" },
          { tipo: "livro", titulo: "Livro: Cálculo Mental e Estimativas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Interpretação de gráficos e modelos matemáticos", link: "https://www.todamateria.com.br/modelagem-matematica/" },
          { tipo: "video", titulo: "Vídeo: Interpretação de gráficos e modelos matemáticos", link: "https://youtu.be/exemplo_gran" },
          { tipo: "livro", titulo: "Livro: Modelagem e Interpretação de Dados", link: "https://exemplo-livro.com" }
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
          { tipo: "artigo", titulo: "Artigo: Ecologia e meio ambiente", link: "https://www.todamateria.com.br/ecologia/" },
          { tipo: "video", titulo: "Vídeo: Ecologia e meio ambiente para o ENEM", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Biologia das Populações e Ecossistemas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Ecossistemas, habitat e nicho ecológico", link: "https://www.todamateria.com.br/habitat-e-nicho-ecologico/" },
          { tipo: "video", titulo: "Vídeo: Ecossistemas, habitat e nicho ecológico", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Ecologia Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Cadeias e teias alimentares", link: "https://www.todamateria.com.br/cadeia-alimentar/" },
          { tipo: "video", titulo: "Vídeo: Cadeias e teias alimentares", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Fluxo de Energia na Natureza", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Níveis tróficos e fluxo de energia", link: "https://www.todamateria.com.br/niveis-troficos/" },
          { tipo: "video", titulo: "Vídeo: Níveis tróficos e fluxo de energia", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Dinâmica Trófica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Ciclos da água, carbono, nitrogênio e oxigênio", link: "https://www.todamateria.com.br/ciclos-biogeoquimicos/" },
          { tipo: "video", titulo: "Vídeo: Ciclos da água, carbono, nitrogênio e oxigênio", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Ciclos Biogeoquímicos e Vida", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Relações ecológicas", link: "https://www.todamateria.com.br/relacoes-ecologicas/" },
          { tipo: "video", titulo: "Vídeo: Relações ecológicas", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Interações entre os Seres Vivos", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Dinâmica de populações", link: "https://www.todamateria.com.br/dinamica-de-populacoes/" },
          { tipo: "video", titulo: "Vídeo: Dinâmica de populações", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Ecologia de Populações", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sucessão ecológica", link: "https://www.todamateria.com.br/sucessao-ecologica/" },
          { tipo: "video", titulo: "Vídeo: Sucessão ecológica", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Evolução dos Ecossistemas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Biomas brasileiros", link: "https://www.todamateria.com.br/biomas-brasileiros/" },
          { tipo: "video", titulo: "Vídeo: Biomas brasileiros", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Geografia e Biologia dos Biomas do Brasil", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Biodiversidade e conservação", link: "https://www.todamateria.com.br/biodiversidade/" },
          { tipo: "video", titulo: "Vídeo: Biodiversidade e conservação", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Conservação da Natureza", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Desmatamento, queimadas e fragmentação de habitats", link: "https://www.todamateria.com.br/desmatamento/" },
          { tipo: "video", titulo: "Vídeo: Desmatamento, queimadas e fragmentação de habitats", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Impactos Ambientais no Brasil", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Poluição da água, do ar e do solo", link: "https://www.todamateria.com.br/poluicao-ambiental/" },
          { tipo: "video", titulo: "Vídeo: Poluição da água, do ar e do solo", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Poluição e Saúde Pública", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Efeito estufa, aquecimento global e mudanças climáticas", link: "https://www.todamateria.com.br/efeito-estufa/" },
          { tipo: "video", titulo: "Vídeo: Efeito estufa, aquecimento global e mudanças climáticas", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Clima e Mudanças Globais", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Chuva ácida, eutrofização e bioacumulação", link: "https://www.todamateria.com.br/chuva-acida/" },
          { tipo: "video", titulo: "Vídeo: Chuva ácida, eutrofização e bioacumulação", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Poluição Química dos Ecossistemas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Saneamento, tratamento de água e esgoto", link: "https://www.todamateria.com.br/tratamento-da-agua/" },
          { tipo: "video", titulo: "Vídeo: Saneamento, tratamento de água e esgoto", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Saneamento Básico e Saúde", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sustentabilidade e impactos ambientais", link: "https://www.todamateria.com.br/desenvolvimento-sustentavel/" },
          { tipo: "video", titulo: "Vídeo: Sustentabilidade e impactos ambientais", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Ecologia Humana e Sustentabilidade", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Citologia e metabolismo", link: "https://www.todamateria.com.br/citologia/" },
          { tipo: "video", titulo: "Vídeo: Citologia e metabolismo", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Biologia Celular e Molecular", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Células procariontes e eucariontes", link: "https://www.todamateria.com.br/celulas-procariontes-e-eucariontes/" },
          { tipo: "video", titulo: "Vídeo: Células procariontes e eucariontes", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: A Estrutura Celular", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Células animais e vegetais", link: "https://www.todamateria.com.br/celula-animal-e-celula-vegetal/" },
          { tipo: "video", titulo: "Vídeo: Células animais e vegetais", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Citologia Comparada", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Membrana plasmática e transporte celular", link: "https://www.todamateria.com.br/membrana-plasmatica/" },
          { tipo: "video", titulo: "Vídeo: Membrana plasmática e transporte celular", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Permeabilidade Celular", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Organelas celulares", link: "https://www.todamateria.com.br/organelas-celulares/" },
          { tipo: "video", titulo: "Vídeo: Organelas celulares", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Funções das Organelas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Núcleo, DNA e RNA", link: "https://www.todamateria.com.br/nucleo-celular/" },
          { tipo: "video", titulo: "Vídeo: Núcleo, DNA e RNA", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Genética Molecular Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Mitose e meiose", link: "https://www.todamateria.com.br/mitose-e-meiose/" },
          { tipo: "video", titulo: "Vídeo: Mitose e meiose", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Divisão Celular", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Respiração celular e fermentação", link: "https://www.todamateria.com.br/respiracao-celular/" },
          { tipo: "video", titulo: "Vídeo: Respiração celular e fermentação", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Bioenergética", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Fotossíntese", link: "https://www.todamateria.com.br/fotossintese/" },
          { tipo: "video", titulo: "Vídeo: Fotossíntese", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Metabolismo Energético Vegetal", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Enzimas e metabolismo energético", link: "https://www.todamateria.com.br/enzimas/" },
          { tipo: "video", titulo: "Vídeo: Enzimas e metabolismo energético", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Enzimologia Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Genética e biotecnologia", link: "https://www.todamateria.com.br/genetica/" },
          { tipo: "video", titulo: "Vídeo: Genética e biotecnologia", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Biologia Molecular e Engenharia Genética", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Genes, alelos e cromossomos", link: "https://www.todamateria.com.br/cromossomos/" },
          { tipo: "video", titulo: "Vídeo: Genes, alelos e cromossomos", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Hereditariedade", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Genótipo e fenótipo", link: "https://www.todamateria.com.br/genotipo-e-fenotipo/" },
          { tipo: "video", titulo: "Vídeo: Genótipo e fenótipo", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Expressão Gênica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Leis de Mendel", link: "https://www.todamateria.com.br/leis-de-mendel/" },
          { tipo: "video", titulo: "Vídeo: Leis de Mendel", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Genética Mendeliana", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Dominância e recessividade", link: "https://www.todamateria.com.br/dominancia-e-recessividade/" },
          { tipo: "video", titulo: "Vídeo: Dominância e recessividade", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Padrões de Herança", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Heredogramas", link: "https://www.todamateria.com.br/heredograma/" },
          { tipo: "video", titulo: "Vídeo: Heredogramas", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Análise de Pedigrees", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Grupos sanguíneos e fator Rh", link: "https://www.todamateria.com.br/grupos-sanguineos/" },
          { tipo: "video", titulo: "Vídeo: Grupos sanguíneos e fator Rh", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Imunohematologia Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Herança ligada ao sexo", link: "https://www.todamateria.com.br/heranca-ligada-ao-sexo/" },
          { tipo: "video", titulo: "Vídeo: Herança ligada ao sexo", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Genética do Sexo", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Mutações e alterações cromossômicas", link: "https://www.todamateria.com.br/mutacao-genetica/" },
          { tipo: "video", titulo: "Vídeo: Mutações e alterações cromossômicas", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Alterações Genéticas Humanas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: DNA recombinante e engenharia genética", link: "https://www.todamateria.com.br/engenharia-genetica/" },
          { tipo: "video", titulo: "Vídeo: DNA recombinante e engenharia genética", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Biotecnologia Moderna", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Transgênicos, clonagem e células-tronco", link: "https://www.todamateria.com.br/celulas-tronco/" },
          { tipo: "video", titulo: "Vídeo: Transgênicos, clonagem e células-tronco", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Ética e Biotecnologia", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Testes genéticos e identificação por DNA", link: "https://www.todamateria.com.br/teste-de-dna/" },
          { tipo: "video", titulo: "Vídeo: Testes genéticos e identificação por DNA", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Forense e Genética", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Lamarckismo e darwinismo", link: "https://www.todamateria.com.br/teoria-da-evolucao/" },
          { tipo: "video", titulo: "Vídeo: Lamarckismo e darwinismo", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: A Origem das Espécies (Análise)", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Seleção natural", link: "https://www.todamateria.com.br/selecao-natural/" },
          { tipo: "video", titulo: "Vídeo: Seleção natural", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Mecanismos Evolutivos", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Adaptação e variabilidade genética", link: "https://www.todamateria.com.br/adaptacao-biologia/" },
          { tipo: "video", titulo: "Vídeo: Adaptação e variabilidade genética", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Variabilidade e Evolução", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Especiação", link: "https://www.todamateria.com.br/especiacao/" },
          { tipo: "video", titulo: "Vídeo: Especiação", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Formação de Novas Espécies", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Evidências evolutivas", link: "https://www.todamateria.com.br/evidencias-da-evolucao/" },
          { tipo: "video", titulo: "Vídeo: Evidências evolutivas", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Provas da Evolução", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Resistência bacteriana", link: "https://www.todamateria.com.br/resistencia-bacteriana/" },
          { tipo: "video", titulo: "Vídeo: Resistência bacteriana", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Microbiologia e Evolução", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Evolução humana", link: "https://www.todamateria.com.br/evolucao-humana/" },
          { tipo: "video", titulo: "Vídeo: Evolução humana", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: A Jornada da Espécie Humana", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Fisiologia humana e saúde", link: "https://www.todamateria.com.br/fisiologia-humana/" },
          { tipo: "video", titulo: "Vídeo: Fisiologia humana e saúde", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Sistemas do Corpo Humano", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema digestório e nutrição", link: "https://www.todamateria.com.br/sistema-digestorio/" },
          { tipo: "video", titulo: "Vídeo: Sistema digestório e nutrição", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Nutrição e Digestão", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema respiratório", link: "https://www.todamateria.com.br/sistema-respiratorio/" },
          { tipo: "video", titulo: "Vídeo: Sistema respiratório", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Respiração e Trocas Gasosas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema cardiovascular", link: "https://www.todamateria.com.br/sistema-cardiovascular/" },
          { tipo: "video", titulo: "Vídeo: Sistema cardiovascular", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Circulação Sanguínea Humana", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema urinário", link: "https://www.todamateria.com.br/sistema-urinario/" },
          { tipo: "video", titulo: "Vídeo: Sistema urinário", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Excreção e Homeostase", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema nervoso e órgãos dos sentidos", link: "https://www.todamateria.com.br/sistema-nervoso/" },
          { tipo: "video", titulo: "Vídeo: Sistema nervoso e órgãos dos sentidos", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Neurobiologia Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema endócrino e hormônios", link: "https://www.todamateria.com.br/sistema-endocrino/" },
          { tipo: "video", titulo: "Vídeo: Sistema endócrino e hormônios", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Hormônios e Controle Metabólico", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema imunológico", link: "https://www.todamateria.com.br/sistema-imunologico/" },
          { tipo: "video", titulo: "Vídeo: Sistema imunológico", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Imunologia Prática", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema locomotor", link: "https://www.todamateria.com.br/sistema-locomotor/" },
          { tipo: "video", titulo: "Vídeo: Sistema locomotor", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Ossos, Músculos e Articulações", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sistema reprodutor", link: "https://www.todamateria.com.br/sistema-reprodutor/" },
          { tipo: "video", titulo: "Vídeo: Sistema reprodutor", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Reprodução Humana", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Ciclo menstrual, fecundação e contracepção", link: "https://www.todamateria.com.br/ciclo-menstrual/" },
          { tipo: "video", titulo: "Vídeo: Ciclo menstrual, fecundação e contracepção", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Saúde Sexual e Reprodutiva", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: ISTs e prevenção", link: "https://www.todamateria.com.br/doencas-sexualmente-transmissiveis-dst/" },
          { tipo: "video", titulo: "Vídeo: ISTs e prevenção", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Doenças Infecciosas e Prevenção", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Vacinas e soros", link: "https://www.todamateria.com.br/diferenca-entre-vacina-e-soro/" },
          { tipo: "video", titulo: "Vídeo: Vacinas e soros", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Imunização e Saúde Coletiva", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Homeostase e saúde pública", link: "https://www.todamateria.com.br/homeostase/" },
          { tipo: "video", titulo: "Vídeo: Homeostase e saúde pública", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Saúde Pública no Brasil", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Vírus, bactérias, fungos e protozoários", link: "https://www.todamateria.com.br/microbiologia/" },
          { tipo: "video", titulo: "Vídeo: Vírus, bactérias, fungos e protozoários", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Microbiologia Geral", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Doenças infecciosas e parasitárias", link: "https://www.todamateria.com.br/doencas-infecciosas/" },
          { tipo: "video", titulo: "Vídeo: Doenças infecciosas e parasitárias", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Parasitologia Humana", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Verminoses e ciclos de parasitas", link: "https://www.todamateria.com.br/verminoses/" },
          { tipo: "video", titulo: "Vídeo: Verminoses e ciclos de parasitas", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Helmintos e Ciclos Parasitários", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Prevenção de doenças e epidemias", link: "https://www.todamateria.com.br/epidemias-e-pandemias/" },
          { tipo: "video", titulo: "Vídeo: Prevenção de doenças e epidemias", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Epidemiologia Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Classificação dos seres vivos", link: "https://www.todamateria.com.br/reinos-dos-seres-vivos/" },
          { tipo: "video", titulo: "Vídeo: Classificação dos seres vivos", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Taxonomia e Filogenia", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Botânica: grupos vegetais, tecidos, reprodução e transporte", link: "https://www.todamateria.com.br/botanica/" },
          { tipo: "video", titulo: "Vídeo: Botânica para o ENEM", link: "https://youtu.be/exemplo_bio" },
          { tipo: "livro", titulo: "Livro: Biologia Vegetal - Raven", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Química",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Matéria, energia e propriedades da matéria", link: "https://www.todamateria.com.br/propriedades-da-materia/" },
          { tipo: "video", titulo: "Vídeo: Matéria e Energia no ENEM", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Química Geral - Feltre", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Estados físicos e mudanças de estado", link: "https://www.todamateria.com.br/mudancas-de-estado-fisico/" },
          { tipo: "video", titulo: "Vídeo: Estados físicos e mudanças de estado", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Fenômenos Físicos e Químicos", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Substâncias puras e misturas", link: "https://www.todamateria.com.br/substancias-puras-e-misturas/" },
          { tipo: "video", titulo: "Vídeo: Substâncias puras e misturas", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Sistemas Materiais", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Métodos de separação de misturas", link: "https://www.todamateria.com.br/separacao-de-misturas/" },
          { tipo: "video", titulo: "Vídeo: Métodos de separação de misturas", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Laboratório de Química Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Modelos atômicos", link: "https://www.todamateria.com.br/modelos-atomicos/" },
          { tipo: "video", titulo: "Vídeo: Modelos atômicos", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: A Evolução do Modelo Atômico", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Tabela periódica e propriedades periódicas", link: "https://www.todamateria.com.br/tabela-periodica/" },
          { tipo: "video", titulo: "Vídeo: Tabela periódica e propriedades periódicas", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Periodicidade Química", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Ligações iônicas, covalentes e metálicas", link: "https://www.todamateria.com.br/ligacoes-quimicas/" },
          { tipo: "video", titulo: "Vídeo: Ligações químicas", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Ligações e Estrutura Molecular", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Ácidos, bases, sais e óxidos", link: "https://www.todamateria.com.br/funcoes-inorganicas/" },
          { tipo: "video", titulo: "Vídeo: Ácidos, bases, sais e óxidos", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Funções da Química Inorgânica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: pH e neutralização", link: "https://www.todamateria.com.br/escala-ph/" },
          { tipo: "video", titulo: "Vídeo: pH e neutralização", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Equilíbrio Ácido-Base", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Estequiometria", link: "https://www.todamateria.com.br/estequiometria/" },
          { tipo: "video", titulo: "Vídeo: Estequiometria", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Cálculos Estequiométricos no ENEM", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Soluções e concentração", link: "https://www.todamateria.com.br/solucoes-quimicas/" },
          { tipo: "video", titulo: "Vídeo: Soluções e concentração", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Físico-Química de Soluções", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Termoquímica e entalpia", link: "https://www.todamateria.com.br/termoquimica/" },
          { tipo: "video", titulo: "Vídeo: Termoquímica e entalpia", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Calor e Reações Químicas", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Eletroquímica: pilhas e eletrólise", link: "https://www.todamateria.com.br/eletroquimica/" },
          { tipo: "video", titulo: "Vídeo: Eletroquímica", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Reações de Oxirredução", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Química orgânica e funções orgânicas", link: "https://www.todamateria.com.br/quimica-organica/" },
          { tipo: "video", titulo: "Vídeo: Química orgânica", link: "https://youtu.be/exemplo_qui" },
          { tipo: "livro", titulo: "Livro: Química Orgânica para Vestibulares", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Física",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Cinemática: velocidade média e MRV", link: "https://www.todamateria.com.br/cinematica/" },
          { tipo: "video", titulo: "Vídeo: Cinemática para o ENEM", link: "https://youtu.be/exemplo_fis" },
          { tipo: "livro", titulo: "Livro: Tópicos de Física - Mecânica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Leis de Newton", link: "https://www.todamateria.com.br/leis-de-newton/" },
          { tipo: "video", titulo: "Vídeo: Leis de Newton", link: "https://youtu.be/exemplo_fis" },
          { tipo: "livro", titulo: "Livro: Dinâmica e Aplicações", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Trabalho, potência e energia", link: "https://www.todamateria.com.br/trabalho-e-potencia/" },
          { tipo: "video", titulo: "Vídeo: Trabalho, potência e energia", link: "https://youtu.be/exemplo_fis" },
          { tipo: "livro", titulo: "Livro: Conservação de Energia", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Hidrostática: pressão, densidade e empuxo", link: "https://www.todamateria.com.br/hidrostatica/" },
          { tipo: "video", titulo: "Vídeo: Hidrostática", link: "https://youtu.be/exemplo_fis" },
          { tipo: "livro", titulo: "Livro: Mecânica dos Fluidos Básica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Termologia: temperatura, calor e dilatação", link: "https://www.todamateria.com.br/termologia/" },
          { tipo: "video", titulo: "Vídeo: Termologia", link: "https://youtu.be/exemplo_fis" },
          { tipo: "livro", titulo: "Livro: Calor e Termodinâmica", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Eletricidade: Lei de Ohm e circuitos", link: "https://www.todamateria.com.br/eletricidade/" },
          { tipo: "video", titulo: "Vídeo: Eletricidade", link: "https://youtu.be/exemplo_fis" },
          { tipo: "livro", titulo: "Livro: Eletrodinâmica Prática", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Ondulatória e acústica", link: "https://www.todamateria.com.br/ondulatoria/" },
          { tipo: "video", titulo: "Vídeo: Ondulatória", link: "https://youtu.be/exemplo_fis" },
          { tipo: "livro", titulo: "Livro: Fenômenos Ondulatórios", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Óptica geométrica", link: "https://www.todamateria.com.br/optica-geometrica/" },
          { tipo: "video", titulo: "Vídeo: Óptica geométrica", link: "https://youtu.be/exemplo_fis" },
          { tipo: "livro", titulo: "Livro: Espelhos e Lentes", link: "https://exemplo-livro.com" }
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
          { tipo: "video", titulo: "Vídeo: História Antiga no ENEM", link: "https://youtu.be/exemplo_hist" },
          { tipo: "livro", titulo: "Livro: História Geral e do Brasil", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Feudalismo e Idade Média", link: "https://www.todamateria.com.br/feudalismo/" },
          { tipo: "video", titulo: "Vídeo: Feudalismo e Idade Média", link: "https://youtu.be/exemplo_hist" },
          { tipo: "livro", titulo: "Livro: Sociedade Medieval", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Revolução Industrial e Capitalismo", link: "https://www.todamateria.com.br/revolucao-industrial/" },
          { tipo: "video", titulo: "Vídeo: Revolução Industrial", link: "https://youtu.be/exemplo_hist" },
          { tipo: "livro", titulo: "Livro: A Era das Revoluções - Eric Hobsbawm", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Brasil Colônia e escravidão", link: "https://www.todamateria.com.br/brasil-colonia/" },
          { tipo: "video", titulo: "Vídeo: Brasil Colônia", link: "https://youtu.be/exemplo_hist" },
          { tipo: "livro", titulo: "Livro: Raízes do Brasil - Sergio Buarque", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Era Vargas e populismo", link: "https://www.todamateria.com.br/era-vargas/" },
          { tipo: "video", titulo: "Vídeo: Era Vargas", link: "https://youtu.be/exemplo_hist" },
          { tipo: "livro", titulo: "Livro: História do Brasil República", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Ditadura Militar no Brasil", link: "https://www.todamateria.com.br/ditadura-militar-no-brasil/" },
          { tipo: "video", titulo: "Vídeo: Ditadura Militar no Brasil", link: "https://youtu.be/exemplo_hist" },
          { tipo: "livro", titulo: "Livro: Anos de Chumbo", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Guerra Fria e globalização", link: "https://www.todamateria.com.br/guerra-fria/" },
          { tipo: "video", titulo: "Vídeo: Guerra Fria", link: "https://youtu.be/exemplo_hist" },
          { tipo: "livro", titulo: "Livro: História Contemporânea", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Geografia",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Cartografia: escalas e fusos horários", link: "https://www.todamateria.com.br/cartografia/" },
          { tipo: "video", titulo: "Vídeo: Cartografia para o ENEM", link: "https://youtu.be/exemplo_geof" },
          { tipo: "livro", titulo: "Livro: Leitura de Mapas e Cartografia", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Geografia física e relevo", link: "https://www.todamateria.com.br/relevo/" },
          { tipo: "video", titulo: "Vídeo: Geografia física", link: "https://youtu.be/exemplo_geof" },
          { tipo: "livro", titulo: "Livro: Dinâmica da Terra", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Demografia e urbanização brasileira", link: "https://www.todamateria.com.br/urbanizacao/" },
          { tipo: "video", titulo: "Vídeo: Urbanização brasileira", link: "https://youtu.be/exemplo_geof" },
          { tipo: "livro", titulo: "Livro: A Cidade e o Campo no Brasil", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Geopolítica e globalização", link: "https://www.todamateria.com.br/globalizacao/" },
          { tipo: "video", titulo: "Vídeo: Geopolítica mundial", link: "https://youtu.be/exemplo_geof" },
          { tipo: "livro", titulo: "Livro: Geografia Econômica e Política", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Filosofia e Sociologia",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Filosofia Antiga: Sócrates, Platão e Aristóteles", link: "https://www.todamateria.com.br/filosofia-antiga/" },
          { tipo: "video", titulo: "Vídeo: Filosofia Antiga", link: "https://youtu.be/exemplo_fil" },
          { tipo: "livro", titulo: "Livro: O Mundo de Sofia - Jostein Gaarder", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Contratualismo: Hobbes, Locke e Rousseau", link: "https://www.todamateria.com.br/contratualismo/" },
          { tipo: "video", titulo: "Vídeo: Contratualismo", link: "https://youtu.be/exemplo_fil" },
          { tipo: "livro", titulo: "Livro: Filosofia Política Moderna", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Sociologia clássica: Durkheim, Marx e Weber", link: "https://www.todamateria.com.br/sociologia/" },
          { tipo: "video", titulo: "Vídeo: Sociologia clássica", link: "https://youtu.be/exemplo_soc" },
          { tipo: "livro", titulo: "Livro: Sociologia para o Ensino Médio", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Indústria cultural e cidadania", link: "https://www.todamateria.com.br/industria-cultural/" },
          { tipo: "video", titulo: "Vídeo: Indústria cultural", link: "https://youtu.be/exemplo_soc" },
          { tipo: "livro", titulo: "Livro: Cultura de Massa e Sociedade", link: "https://exemplo-livro.com" }
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
          { tipo: "video", titulo: "Vídeo: Interpretação de textos para o ENEM", link: "https://youtu.be/exemplo_ling" },
          { tipo: "livro", titulo: "Livro: Português Contemporâneo", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Funções da linguagem e gêneros textuais", link: "https://www.todamateria.com.br/funcoes-da-linguagem/" },
          { tipo: "video", titulo: "Vídeo: Funções da linguagem", link: "https://youtu.be/exemplo_ling" },
          { tipo: "livro", titulo: "Livro: Gêneros Textuais e Coesão", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Modernismo brasileiro e Semana de 22", link: "https://www.todamateria.com.br/modernismo-no-brasil/" },
          { tipo: "video", titulo: "Vídeo: Modernismo brasileiro", link: "https://youtu.be/exemplo_lit" },
          { tipo: "livro", titulo: "Livro: Literatura Brasileira - História e Textos", link: "https://exemplo-livro.com" }
        ]
      },
      {
        nome: "Língua Estrangeira, Artes e Educação Física",
        recomendacoes: [
          { tipo: "artigo", titulo: "Artigo: Inglês: Estratégias de leitura e interpretação", link: "https://www.todamateria.com.br/ingles-enem/" },
          { tipo: "video", titulo: "Vídeo: Inglês no ENEM", link: "https://youtu.be/exemplo_ext" },
          { tipo: "livro", titulo: "Livro: Grammar and Reading Comprehension", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Vanguardas europeias e Arte Moderna", link: "https://www.todamateria.com.br/vanguardas-europeias/" },
          { tipo: "video", titulo: "Vídeo: História da Arte", link: "https://youtu.be/exemplo_art" },
          { tipo: "livro", titulo: "Livro: História da Arte - Gombrich", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Esportes, corpo, mídia e cultura corporal", link: "https://www.todamateria.com.br/educacao-fisica/" },
          { tipo: "video", titulo: "Vídeo: Educação Física no ENEM", link: "https://youtu.be/exemplo_ef" },
          { tipo: "livro", titulo: "Livro: Corpo, Cultura e Sociedade", link: "https://exemplo-livro.com" }
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
          { tipo: "artigo", titulo: "Artigo: Estrutura do texto dissertativo-argumentativo", link: "https://www.todamateria.com.br/redacao-enem/" },
          { tipo: "video", titulo: "Vídeo: Como estruturar a Redação do ENEM", link: "https://youtu.be/exemplo_red" },
          { tipo: "livro", titulo: "Livro: Guia Oficial da Redação Nota 1000", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: As 5 competências do ENEM avaliadas pelo INEP", link: "https://www.todamateria.com.br/competencias-da-redacao-do-enem/" },
          { tipo: "video", titulo: "Vídeo: Detalhando as Competências da Redação", link: "https://youtu.be/exemplo_red" },
          { tipo: "livro", titulo: "Livro: Manual de Competências da Redação", link: "https://exemplo-livro.com" },

          { tipo: "artigo", titulo: "Artigo: Proposta de intervenção e direitos humanos", link: "https://www.todamateria.com.br/proposta-de-intervencao-redacao-enem/" },
          { tipo: "video", titulo: "Vídeo: Como fazer a Conclusão/Intervenção perfeita", link: "https://youtu.be/exemplo_red" },
          { tipo: "livro", titulo: "Livro: Repertório Sociocultural Coringa", link: "https://exemplo-livro.com" }
        ]
      }
    ]
  }
];