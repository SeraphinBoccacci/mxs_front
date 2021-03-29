/* eslint-disable quotes */
/* eslint-disable no-template-curly-in-string */

import config from "../../../../../config/config";

const jsLines = (herotag: string) => [
  "var containerIndex = 0;",
  "",
  "const appendAnimation = (herotag, amount, message) => {",
  "  containerIndex++;",
  "  ",
  "  const currentIndex = containerIndex",
  "  ",
  "  const now = new Date().getTime();",
  "",
  "  $(`",
  '      <div class="widget-container" id=${`widget-container-${currentIndex}`} class="container">',
  "        <h3>${herotag} sent ${amount} ¤eGLD¤</h3>",
  '        <div class="p-container">',
  "          <p>${message}</p>",
  "        </div>",
  "      </div>",
  "  `).appendTo(document.body);",
  "  ",
  "    setTimeout(() => {",
  "    $(`#widget-container-${currentIndex}`).prepend(`",
  '      <audio autoplay src="https://streamparticles.io/audios/audio_2.mp3"></audio>',
  '            <img class="logo"',
  '              src="https://streamparticles.io/images/image_4.gif?t=${now}"',
  "            />",
  "    `);",
  "  }, 700);",
  "",
  "  setTimeout(() => {",
  '    $(`#widget-container-${currentIndex}`).addClass("slide-out");',
  "",
  "    setTimeout(() => {",
  "      $(`#widget-container-${currentIndex}`).remove();",
  "    }, 1000);",
  "  }, 10000);",
  "};",
  "",
  `const socket = io("${config.url}", {`,
  "  query: {",
  `    streamerHerotag: '${herotag || "{{herotag}}"}',`,
  "  },",
  "});",
  "",
  'socket.on("newDonation", (data) => {',
  "  appendAnimation(data.herotag, data.amount, data.message);",
  "});",
];

export const jsSnippet = (herotag: string) => jsLines(herotag).join("\n");
