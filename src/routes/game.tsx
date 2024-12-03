import { progressStore } from "../store";

const Game: Component<{}, {}> = function() {
  return (
  <div>
    <p>{use(progressStore.count)}</p>
    <div class="flex col gap-sm">
    <button on:click={() => progressStore.count++}>Increment</button>
    <button on:click={() => progressStore.count--}>Decrement</button>
    <button on:click={() => progressStore.count = 0}>Reset</button>
    </div>
  </div>
  )
}

export default Game;
