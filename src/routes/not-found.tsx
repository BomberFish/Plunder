const NotFound: Component<{},{}> = function () {
  this.css = `
    align-content: center;
  `;

  return (
    <div>
      <h1>404</h1>
      <p>Marooned on an island, matey?</p>
      <button class="primary" on:click={() => {
        window.location.href = '/';
      }}>Return to the sea</button>
    </div>
  )
}

export default NotFound;
