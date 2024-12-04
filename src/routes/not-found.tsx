const NotFound: Component<{},{}> = function () {
  this.css = `
    text-align: center;
    height: 100vh;
  `;

  return (
    <div class="flex row center">
      <div>
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
