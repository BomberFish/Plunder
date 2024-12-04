import { settingsStore, progressStore } from "./store";

export class Game {
  clicks: number;
  clicksToReach: number;
  digAudios: any[];

  constructor() {
    this.clicks = 0;
    this.clicksToReach = Math.floor(Math.random() * 10) + 30;
    this.digAudios = [
      new Audio("/assets/audio/sfx/dig1.ogg"),
      new Audio("/assets/audio/sfx/dig2.ogg"),
      new Audio("/assets/audio/sfx/dig3.ogg"),
      new Audio("/assets/audio/sfx/dig4.ogg"),
    ];
  }

  updateCount() {
    this.clicks++;
    if (this.clicks % 3 == 0 || Math.random() < 0.45) {
      progressStore.count++;
    }
    this.digAudios[Math.floor(Math.random() * this.digAudios.length)].play();
  }

  resetDig() {
    this.clicks = 0;
    this.clicksToReach = Math.floor(Math.random() * 10) + 30;
    progressStore.count += Math.ceil(Math.random() * 10) + 1;
  }
}
