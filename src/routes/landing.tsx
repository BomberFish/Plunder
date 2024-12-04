const Landing: Component<{}, {}> = function () {
    this.css = `
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: 100vh;
      justify-content: center;

      img {
        width: 100%;
        max-width: min(25em, 200px);
        margin-top: 20px;
      }

      div {
        max-width: 25em;
      }

      h1 {
        font-size: 4em;
        margin-bottom: 0.25em;
      }

      p {
        font-size: 1.25em;
        margin-bottom: 0.5em;
      }

      button {
        font-size: 1.25em;
      }
    `;

    return (
      <div class="flex flex-col center">
        <div>
        <h1>Plunder</h1>
        <p>An incremental game where you're a pirate who has to plunder islands to get gold and resources.</p>
        <img src="/assets/images/animated/booty.gif" alt="Pirate opening a gold-filled chest" />
        <br></br>
        <br></br>
          <button on:click={() => {
            window.location.href = '/play';
          }} class="primary">Play</button>
          <br></br>
          <br></br>
          <small>Built with <a href="https://dreamland.js.org" target="_blank">dreamland.js</a> in 🇨🇦 by <a href="https://bomberfish.ca" target="_blank">BomberFish</a></small>
          <br></br>
          <small>Made for Hack Club's <a href="https://highseas.hackclub.com" target="_blank">High Seas</a> 2024</small>
        </div>
      </div>
    )
};

export default Landing;
