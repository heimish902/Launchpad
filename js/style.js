//  drumKit
let audiofile = []

audiofile.push(new Audio('audio/01_kick_drum.wav'));
audiofile.push(new Audio('audio/02_closed_hihat.wav'));
audiofile.push(new Audio('audio/03_open_hihat.wav'));
audiofile.push(new Audio('audio/04_clap.wav'));
audiofile.push(new Audio('audio/05_snap.wav'));
audiofile.push(new Audio('audio/06_crash.wav'));
audiofile.push(new Audio('audio/07_tom1.wav'));
audiofile.push(new Audio('audio/08_tom2.wav'));
audiofile.push(new Audio('audio/09_tambourine.wav'));


// loop play & stop
let loop = new Audio('audio/loop.mp3');

$('#jsPlay').on('click', playBtn);
$('#jsStop').on('click', stopBtn);


function playBtn(){
  loop.play();
}

function stopBtn(){
  loop.pause();
  loop.currentTime = 0;  // 처음부터 재생
}

// keyboard
$(document).on('keydown', pressKey);
$(document).on('keyup', removeKey);

function pressKey(e){
  $('#cell' + e.key).addClass('playing') 
  
  let numKey = Number(e.key)

  // 숫자키가 아닌 다른 키를 눌렀을 때 변화 없도록 하기 위함
  if(numKey <= 9 && numKey >= 1){  
    let kit = audiofile[numKey - 1]
    kit.currentTime = 0;
    kit.play();
  }
}

function removeKey(e){
  $('.cell').removeClass('playing')
}