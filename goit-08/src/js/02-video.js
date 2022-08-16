
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function (e) {

  localStorage.setItem(TIME_KEY, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));


const savedTime = localStorage.getItem(TIME_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
