const bookChapter = document.getElementById("bookChapter");
const buttonPrevious = document.getElementById("button-previous");
const buttonPlayPause = document.getElementById("button-play-pause");
const buttonNext = document.getElementById("button-next");
const audioSong = document.getElementById("audioSong");


const numCharpter = 10;
let currentChapter = 1;
let playing = 0;

function playSong(){
    audioSong.play();
    buttonPlayPause.classList.remove('bi-play');
    buttonPlayPause.classList.add('bi-pause');
}

function stopSong(){
    audioSong.pause();
    buttonPlayPause.classList.remove('bi-pause');
    buttonPlayPause.classList.add('bi-play');
}

function playStop(){
    if(playing === 0){
        playSong();
        playing = 1;
    } else {
        stopSong();
        playing = 0;
    }
}

function changeChapter(){
    bookChapter.innerText = 'Capítulo ' + currentChapter;
}

function nextChapter(){
    if(currentChapter === numCharpter){
        currentChapter = 1;
    } else {
        currentChapter = currentChapter + 1;
    }

    audioSong.src = "./books/dom-casmurro/" + currentChapter + '.mp3';
    playSong();
    playing = 1;
    changeChapter();
}

function previousChapter(){
    if(currentChapter === 1){
        currentChapter = numCharpter;
    } else {
        currentChapter = currentChapter - 1;
    }

    audioSong.src = "./books/dom-casmurro/" + currentChapter + '.mp3';
    playSong();
    playing = 1;
    changeChapter();
}

buttonPrevious.addEventListener('click', previousChapter);
buttonPlayPause.addEventListener('click', playStop);
buttonNext.addEventListener('click', nextChapter);