CSS - 


#widget-container {
  position: absolute;
  bottom: 3rem;
  right: 2rem;
  width: 25rem;

  animation-duration: 1s;
  animation-name: slideIn;

  padding: 1rem;
  border-radius: 9px;
}

@keyframes slideIn {
  from {
    right: -27rem;
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
    right: -27rem;
  }
}

.logo {
  width: 100%;
  margin: 0;
}

h3 {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  text-align: center;
  
  font-size: 2.5rem;
  
  margin: -1rem auto 1rem;
  
  -webkit-text-stroke: 2px #111111;
  color: #ffffff;
}

.p-container {
  width: 100%;
  overflow: hidden;
}
.p-container > p {
  margin: 0 auto;
  width: max-content;

  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  
  -webkit-text-stroke: 1.4px #111111;
  color: #ffffff;

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


JS - 

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
