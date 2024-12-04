const ColorWell: Component<{ color: string }, {}> = function (props) {
  this.css = `
    display: inline-block;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: ${this.color};
    border: 1px solid var(--fg3);
  `;
  return <div></div>;
}

const UIDemo: Component<{}, {}> = function () {
  this.css = `
    margin: 0.3rem;
  `;
  return (
    <div>
      <h1>Ahoy, matey!</h1>
      <p>Here be the UI demo.</p>
      <h2>Buttons</h2>
      {/* <button class="primary">Aye-aye, captain!</button>
      <br></br>
      <br></br> */}
      <p>Primary buttons rise above the rest.</p>
      <div class="flex row gap-sm">
        <button class="secondary">Nay, captain!</button>
        <button class="primary">Aye-aye, captain!</button>
      </div>
      <br></br>
      <p>While destructive buttons shrink in fear.</p>
      <button class="destructive">Abandon ship!</button>
      <h2>Inputs</h2>
      <input type="text" placeholder="Type here, matey!" />
      <h2>Colors</h2>
      <h3>Backgrounds</h3>
      <div class="flex row gap-sm">
      {["--bg0", "--bg1", "--bg2", "--bg3", "--bg4", "--bg5"].map((color) => (
        <div class="flex row gap-sm">
          <ColorWell color={`var(${color})`} />
          <span>{color}</span>
        </div>
      ))}
      </div>
      <h3>Foregrounds</h3>
      <div class="flex row gap-sm">
      {["--fg0", "--fg1", "--fg2", "--fg3", "--fg4", "--fg5"].map((color) => (
        <div class="flex row gap-sm">
          <ColorWell color={`var(${color})`} />
          <span>{color}</span>
        </div>
      ))}
      </div>
      <br></br>
      <h3>Accents</h3>
      <div class="flex row gap-sm">
      {["--accent0", "--accent1", "--destructive", "--success"].map((color) => (
        <div class="flex row gap-sm">
          <ColorWell color={`var(${color})`} />
          <span>{color}</span>
        </div>
      ))}
      </div>
    </div>
  )
}

export default UIDemo;
