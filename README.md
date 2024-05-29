
# 🚀 Business Card
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)![](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)

## 🌐 Visão Geral
Esse projeto faz parte da formação básica ONE - Oracle Next Education 2024. O escopo do projeto é de desenvolver um modal de apresentação com base em design do Figma.

Não se preocupe, porque você não vai precisar editar nada no Figma ou nem mesmo baixar o aplicativo. Basta acessar [esse link](https://www.figma.com/file/NrzJacC887svMVfF9oC2jM/Portfolio-Projeto-2?node-id=8%3A2&mode=dev) e você já vai conseguir visualizar o layout! Lá, você também poderá visualizar todos os valores para espaçamento, cores do projeto, tamanhos de texto, e muito mais! Ele foi desenvolvido pela Joana Soares da equipe Alura & Oracle.

## 📋 Funcionalidades
Projeto básico que lida apenas com funcionalidades de estilo e estrutura. Aqui você encontrar duas páginas uma `home` e uma `about me`, onde a primeira contém links de contato e uma breve apresentação do mantenedor do projeto. E a segunda um texto mais descritivo.

- Layout responsivo para diferentes tamanhos de tela;

##  Técnicas e tecnologias utilizadas
A estruturação das páginas foi pensada de forma garantir o melhor uso das classes utilitárias do **tailwind** e minimizar folhas de estilo avulsas. Também tive uma atenção especial para as metas tags de compartilhamento em redes sociais. No mais, houve a inserção de alguns comentários no decorrer do html, mas fique a vontade para exclui-los caso ache desnecessário.

- Tailwind
- Html5
- Css3

## 📁 Clonar repositório

Clone este repositório via Bash, usando:

✅ HTTPS:

```bash
git clone https://github.com/SamColt36/business-card```

✅ SSH:

```bash
git clone git@github.com:SamColt36/business-card```

✅ GitHub CLI:

```bash
gh repo clone SamColt36/business-card
```

✅ Download ZIP.

## 📶 Status

O projeto encontra-se em:

> Finalizado

## 🌐 Acessar o projeto

Acesse a última versão disponível pelo [link](https://business-card-nu-seven.vercel.app/)🔗.

## 📂 Estrutura de diretórios

Foi pensada uma estrutura que segue o seguinte diagrama. Os arquivos compilados por padrão vão para o diretório `docs/`.

    -docs/
    ---images/
    -src/
    ---pages/
    ---styles/
    ---scripts/
    -*.config.js
    -README.md
    -LICENSE
    -.gitignore

## 🔧 Instalação

O projeto utiliza o _webpack_ como empacotador de códigos. O _Webpack_ nada mais é do que um empacotador de módulos/códigos. Seu grande diferencial é que ele foi criado para juntar arquivos de JavaScript que são utilizados dentro de um navegador. Sua principal utilidade é para projetos voltados para web focados em módulos de sua aplicação.

Para fazer a instalação das dependências usadas nesse projeto, tais como: _webpack_ e o _tailwindcss_, é necessário ter o NodeJS instalado. Até a data atual, esse último pode ser obtido através do link:

> [Node.js — Download Node.js® (nodejs.org)](https://nodejs.org/en/download)

<img title="a Node" alt="Banner NodeJs" src="./docs/images/node-banner.png"
style="max-width: 600px">

Para obter as referências das dependências usadas o arquivo _package.json_ pode ser usado, e para mais detalhes use o _package-lock.json_, ambos na raiz do projeto.

_Foi usada a sintaxe do CJS nos quando aos arquivos de configuração._

## 🛠️ Abrir e rodar

Após as devidas instalações e configurações presentes nos arquivos `*.config.js`, caso queira alterar o projeto é necessário recompilar os arquivos para gerar uma nova saída (por _default_ no diretório `docs/`). Pensando nisso, o arquivo _package.json_ conta com dois _scripts_:

```json
"scripts": {
	"build": "webpack --config webpack.config.js",
	"watch": "webpack --watch"
},
```

- **build**: Apenas compila e gera as saídas
- **watch**: Assiste as mudanças no código e compila.

Por fim e não menos importante, rode no terminal um desses dois _scripts_ usando:

```bash
$ npm run build
```

ou

```bash
$ npm run watch
```

## 👥 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE ou acesse [MIT License (mit-license.org)](https://mit-license.org/) para obter detalhes.
