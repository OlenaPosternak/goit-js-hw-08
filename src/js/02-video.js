import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(seconds) {
   console.log(`start`, seconds);
   localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
};

player.on('timeupdate', onPlay);

const newTime = localStorage.getItem("videoplayer-current-time");

console.log(`skip`, newTime);

player.setCurrentTime(JSON.parse(newTime));
