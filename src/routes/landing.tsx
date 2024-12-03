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
        max-width: 100px;
        margin-top: 20px;
      }

      div {
        max-width: 25em;
      }
    `;

    return (
      <div class="flex flex-col center">
        <div>
        <h1>Plunder</h1>
        <p>Plunder is an incremental game where you're a pirate who has to plunder islands to get gold and resources.</p>
        <img src="/assets/images/animated/booty.gif" alt="Pirate opening a gold-filled chest" />
        <br></br>
        <br></br>
          <button on:click={() => {
            window.location.href = '/play';
          }} class="primary">Play</button>
        </div>
      </div>
    )
};

export default Landing;
