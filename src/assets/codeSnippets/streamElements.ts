/* eslint-disable no-template-curly-in-string */

const jsLines = (herotag: string) => [
  "const appendAnimation = (herotag, amount, message) => {",
  "  $(`",
  '      <div id="widget-container" class="container">',
  "        <img",
  '          class="logo"',
  '          src="https://miro.medium.com/max/2480/1*6JcegZHxgP87e8Ny-RBSBg.png"',
  "        />",
  "        <h3>${herotag} sent ${amount} ¤eGLD¤</h3>",
  '        <div class="p-container">',
  "          <p>${message}</p>",
  "        </div>",
  "      </div>",
  "  `).appendTo(document.body);",
  "  setTimeout(() => {",
  '    $("#widget-container").addClass("slide-out");',
  "    setTimeout(() => {",
  '      $("#widget-container").remove();',
  "    }, 1000);",
  "  }, 10000);",
  "};",
  "",
  'const socket = io("https://streamparticles.io", {',
  "  query: {",
  `    streamerHerotag: '${herotag}',`,
  "  },",
  "});",
  "",
  'socket.on("newDonation", (data) => {',
  "  appendAnimation(data.herotag, data.amount, data.message);",
  "});",
];

export const jsSnippet = (herotag: string) => jsLines(herotag).join("\n");

export const htmlSnippet = `
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap" rel="stylesheet"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.1/socket.io.js"></script>
`;

export const cssSnippet = `
#widget-container {
  position: absolute;
  bottom: 3rem;
  right: 2rem;
  width: 20rem;

  animation-duration: 1s;
  animation-name: slideIn;

  background-color: #ffffffc4;
  padding: 1rem;
  border-radius: 9px;
}

@keyframes slideIn {
  from {
    right: -20rem;
  }
  to {
    right: 2rem;
  }
}

.slide-out {
  animation-duration: 1s !important;
  animation-name: slideOut !important;
}

@keyframes slideOut {
  from {
    right: 2rem;
  }
  
  
  to {
    right: -20rem;
  }
}

.logo {
  width: 100%;

  animation: rotateLogo 4s infinite linear;
}

@keyframes rotateLogo {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

h3 {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  text-align: center;
}

.p-container {
  width: 100%;
  overflow: hidden;
}
.p-container > p {
  margin: 0;
  width: max-content;

  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;

  animation: translateText 10s 2s infinite linear;
}

@keyframes translateText {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
`;
