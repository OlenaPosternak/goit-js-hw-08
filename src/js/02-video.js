
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
   console.log(`start`, data.seconds);
   localStorage.setItem("videoplayer-current-time", data.seconds);
};

// console.log(`skip`, newTime);

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));

player.on('timeupdate', throttle(onPlay,1000));