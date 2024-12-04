import { progressStore } from "./store";

export class Game {
  clicks: number;
  clicksToReach: number;
  digAudios: any[];
  bgm: any[];
  activeBGM: any;
  bgmIndex: number;
  bgmPlaying: boolean;

  constructor() {
    this.clicks = 0;
    this.clicksToReach = Math.floor(Math.random() * 10) + 30;
    this.digAudios = [
      new Audio("/assets/audio/sfx/dig1.ogg"),
      new Audio("/assets/audio/sfx/dig2.ogg"),
      new Audio("/assets/audio/sfx/dig3.ogg"),
      new Audio("/assets/audio/sfx/dig4.ogg"),
    ];
    this.bgm = [
      new Audio("/assets/audio/bgm/runescape1.ogg"),
      new Audio("/assets/audio/bgm/runescape2.ogg"),
      new Audio("/assets/audio/bgm/5drunk_raccoon_audio.ogg"),
    ];
    this.bgmIndex = 0;
    this.bgmPlaying = false;
  }

  updateCount() {
    this.clicks++;
    if (this.clicks % 3 == 0 || Math.random() < 0.45) {
      progressStore.count++;
    }
    this.digAudios[Math.floor(Math.random() * this.digAudios.length)].play();
  }

  startBGM() {
    if (this.bgmPlaying) this.stopBGM();
    let index = this.bgmIndex;
    do {
      this.bgmIndex = Math.floor(Math.random() * this.bgm.length);
    } while (this.bgmIndex == index);
    this.activeBGM = this.bgm[this.bgmIndex];
    this.activeBGM.addEventListener("ended", () => {
      this.startBGM();
    });
    try {
      this.activeBGM.play();
      this.bgmPlaying = true;
    } catch (e) {
      throw e; // hot potato!
    }
  }

  stopBGM() {
    for (let i = 0; i < this.bgm.length; i++) {
      this.bgm[i].pause();
      this.bgm[i].currentTime = 0;
    }
  }

  resetDig() {
    this.clicks = 0;
    this.clicksToReach = Math.floor(Math.random() * 10) + 30;
    progressStore.count += Math.ceil(Math.random() * 10) + 1;
  }
}
