import { progressStore } from "../store";
import { Game } from "../game";

const GameUI: Component<{}, {
  game: Game;
  bgmPlaying: boolean;
  percent: number;
  updateCount: () => void;
}> = function () {
  this.css = `
    width: 100vw;
    height: 100vh;

    #x-wrapper {
        user-select: none;
        height: 100vh;
    }

    #percent {
        font-size: 2.5em;
        margin: 0;
        margin-top: 0.7em;
        transition-property: opacity, height, margin-top;
        transition-duration: 0.75s;
        transition-timing-function: ease;
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

    #bgm {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      font-size: 1.5rem;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--fg0);
      border-radius: 50%;
      padding: 0;

      span {
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }
  `

  this.bgmPlaying = false;
  this.percent = 100;

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
    const percent = this.root.querySelector('#percent') as HTMLElement;
    this.game.updateCount();
    if (this.game.clicks >= this.game.clicksToReach) {
      xInner.style.pointerEvents = 'none';
      setTimeout(() => {

        xOuter.style.width = '100vw';
        xOuter.style.height = '100vh';
        xOuter.style.borderRadius = '0';

        percent.style.opacity = '0';
        percent.style.height = '0';
        percent.style.marginTop = '0';

        const randomOffset = Math.random() * xOuter.offsetWidth;

        xInner.style.transform = Math.random() < 0.5 ? `translate(-100vw, ${randomOffset}px)` : `translate(${randomOffset}px, -100vh)`;

        setTimeout(() => {
          xInner.style.transition = 'none';
          xInner.style.opacity = '1';
          xInner.style.transform = 'translate(-100vw, 50vh)';
          this.percent = 100;
          setTimeout(() => {
            xInner.style.transition = 'transform 1.25s ease-in-out';
            xInner.style.transform = 'translate(0, 0)';
            setTimeout(() => {
              xOuter.style.width = 'min(80vw, 20em)';
              xOuter.style.height = 'min(80vw, 20em)';
              xOuter.style.borderRadius = '50%';

              percent.style.opacity = '1';
              percent.style.height = 'auto';
              percent.style.marginTop = '0.7em';

              xInner.style.pointerEvents = 'all';
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
      this.percent = 100- Math.floor((this.game.clicks / this.game.clicksToReach) * 100);
    }
  }

  return (
    <div>
      <header class="flex row justify-between">
        <h2>{use(progressStore.count)} Doubloons</h2>
      </header>
      <div id='x-wrapper' class="flex col center">
        <div id='x'>
          <div id='x-inner' on:click={() => {
            this.updateCount();
          }}>X</div>
        </div>
        <h3 id='percent'>{use(this.percent)}%</h3>
      </div>
      <button id="bgm" on:click={() => {
        if (this.game.bgmPlaying) {
          this.game.stopBGM();
        } else {
          this.game.startBGM();
        }
        this.bgmPlaying = this.game.bgmPlaying; // ugh can dreamland not be fucking stupid? (at velzie dot dee)
      }}>
        <span>
          {use(this.bgmPlaying, (p) => (p ? '🔈' : '🔇'))}
        </span>
      </button>
    </div>
  )
}

export default GameUI;
