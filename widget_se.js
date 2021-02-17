const appendAnimation = (herotag, amount, message) => {
  $(`
      <div id="widget-container" class="container">
	<audio autoplay src="https://streamparticles.io/audios/audio_1.mp3"></audio>
        <img class="logo"
          src="https://streamparticles.io/images/image_1.gif"
        />
        <h3>${herotag} sent ${amount} ¤eGLD¤</h3>
        <div class="p-container">
          <p>${message}</p>
        </div>
      </div>
  `).appendTo(document.body);
  setTimeout(() => {
    $("#widget-container").addClass("slide-out");
    setTimeout(() => {
      $("#widget-container").remove();
    }, 1000);
  }, 10000);
};

const socket = io("https://streamparticles.io", {
  query: {
    streamerHerotag: 'serabocca06.elrond',
  },
});

socket.on("newDonation", (data) => {
  appendAnimation(data.herotag, data.amount, data.message);
});
