const NotFound: Component<{},{}> = function () {
  this.css = `
    text-align: center;
    height: 100vh;

    img {
      max-width: min(15em, 120px);
      display: flex;
      align-self: center;

    }

    * {
      margin: 0;
    }

    h1 {
      font-size: 4em;
    }

    p {
      font-size: 1.25em;
    }
  `;

  return (
    <div class="flex row center">
      <div class="flex col gap-md h-center">
        <img src="/assets/images/animated/computer2.gif" alt="Pirate typing at a computer" />
        <h1>404</h1>
        <p>Marooned on an island, matey?</p>
        <button class="primary" on:click={() => {
          window.location.href = '/';
        }}>Return to the sea</button>
      </div>
    </div>
  )
}

export default NotFound;
