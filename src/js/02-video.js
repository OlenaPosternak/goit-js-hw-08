import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(seconds) {
    
        console.log(seconds);
   localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
   

};
player.on('play', onPlay);

const newTime = localStorage.getItem("videoplayer-current-time");

console.log(JSON.parse(newTime));


player.setCurrentTime(JSON.parse(newTime)).then(function(seconds) {
    seconds = JSON.parse(newTime);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
