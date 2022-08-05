import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(seconds) {
   console.log(`start`, seconds);
   localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
};


const newTime = localStorage.getItem("videoplayer-current-time");

console.log(`skip`, newTime);

player.setCurrentTime(JSON.parse(newTime));

player.on('timeupdate', onPlay);