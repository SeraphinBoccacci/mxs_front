/* eslint-disable quotes */
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
