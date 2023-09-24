const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const current_pos = video.current;
let duration;
let timer;

const bar = document.querySelector('.bar progress');

function loadedData() {
  console.log('loaded')
  duration = video.duration;
  console.log(duration)
}

function play_vid() {
  video.play();
  timerOn();
}

function pause_vid() {
  video.pause();
  timerOff();
}

function stop_vid() {
  video.pause();
  timerOff();
  video.currentTime = 0;
  bar.value = (video.currentTime / duration) * 100;
}

function timerOn() {
  timer = setInterval(function(){
    console.log(video.currentTime);
    bar.value = (video.currentTime / duration) * 100;
  }, 1000)
}


function timerOff() {
  clearInterval(timer)
}



