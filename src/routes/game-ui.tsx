import { progressStore } from "../store";
import { Game } from "../game";

const GameUI: Component<{}, {
  game: Game;
  updateCount: () => void;
}> = function () {
  this.css = `
    #x-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        height: 100vh;
    }

    #x {
        width: min(80vw, 20em);
        height: min(80vw, 20em);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        // background-color: navajowhite;
        background-image: radial-gradient(circle, navajowhite, #ffcc6699);
        // box-shadow: 0 0 10px 5px #ffcc6699;
        border-radius: 50%;
        transition: scale 0.1s ease-out,
                    transform 0.1s ease-out,
                    width 0.75s ease,
                    height 0.75s ease,
                    border-radius 0.75s ease;
    }

    #x-inner {
        color: #990000;
        font-size: 7em;
        margin: 0;
        transition: opacity 0.2s,
                    transform 1.25s ease-in-out;
    }

    header {
      background-color: var(--bg0);
      width: 100vw;
      padding: 0.75em 1em;
      margin: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;

      h2 {
        font-size: 1.5em;
        margin: 0;
        color: var(--fg0);
      }
    }
  `

  // this.clicks = 0;
  // this.clicksToReach = Math.floor(Math.random() * 10) + 30;
  // this.digAudios = [
  //   new Audio('/assets/audio/sfx/dig1.ogg'),
  //   new Audio('/assets/audio/sfx/dig2.ogg'),
  //   new Audio('/assets/audio/sfx/dig3.ogg'),
  //   new Audio('/assets/audio/sfx/dig4.ogg'),
  // ]

  this.game = new Game();

  this.mount = () => {
    console.log(this.game.clicksToReach);
  }

  this.updateCount = () => {
    const xInner = this.root.querySelector('#x-inner') as HTMLElement;
    const xOuter = this.root.querySelector('#x') as HTMLElement;
    this.game.updateCount();
    if (this.game.clicks >= this.game.clicksToReach) {

      setTimeout(() => {

        xOuter.style.width = '100%';
        xOuter.style.height = '100%';
        xOuter.style.borderRadius = '0';

        const randomOffset = Math.random() * xOuter.offsetWidth;

        xInner.style.transform = Math.random() < 0.5 ? `translate(-100vw, ${randomOffset}px)` : `translate(${randomOffset}px, -100vh)`;


        setTimeout(() => {
          xInner.style.transition = 'none';
          xInner.style.opacity = '1';
          xInner.style.transform = 'translate(-100vw, 50vh)';
          setTimeout(() => {
            xInner.style.transition = 'transform 1.25s ease-in-out';
            xInner.style.transform = 'translate(0, 0)';
            setTimeout(() => {
              xOuter.style.width = 'min(80vw, 20em)';
              xOuter.style.height = 'min(80vw, 20em)';
              xOuter.style.borderRadius = '50%';
            }, 1250);
          }, 50);
        }, 1250);

        this.game.resetDig();

      }, 250);
    } else {
      xOuter.style.transform = 'scale(1.025)';
      setTimeout(() => {
        xOuter.style.transform = 'scale(1)';
      }, 100);
      xInner.style.opacity = 1.2 - (this.game.clicks / this.game.clicksToReach) + '';
    }
  }

  return (
    <div>
      <header class="flex row justify-between">
        <h2>{use(progressStore.count)} Doubloons</h2>
      </header>
      <div id='x-wrapper'>
        <div id='x'>
          <div id='x-inner' on:click={() => {
            this.updateCount();
          }}>X</div>
        </div>
      </div>
    </div>
  )
}

export default GameUI;
