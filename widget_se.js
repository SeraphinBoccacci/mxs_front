var containerIndex = 0;

const appendAnimation = (herotag, amount, message) => {
  containerIndex++;

  $(`
      <div class="widget-container" id=${`widget-container-${containerIndex}`} class="container">
        <h3>${herotag} sent ${amount} ¤eGLD¤</h3>
        <div class="p-container">
          <p>${message}</p>
        </div>
      </div>
  `).appendTo(document.body);
  
    setTimeout(() => {
    $(`#widget-container-${containerIndex}`).prepend(`
      <audio autoplay src="https://streamparticles.io/audios/audio_2.mp3"></audio>
            <img class="logo"
              src="https://streamparticles.io/images/image_4.gif"
            />
    `);
  }, 700);

  setTimeout(() => {
    $(`#widget-container-${containerIndex}`).addClass("slide-out");

    setTimeout(() => {
      $(`#widget-container-${containerIndex}`).remove();
    }, 1000);
  }, 10700);
};

const socket = io("https://streamparticles.io", {
  query: {
    streamerHerotag: "serabocca06.elrond",
  },
});

socket.on("newDonation", (data) => {
  appendAnimation(data.herotag, data.amount, data.message);
});
