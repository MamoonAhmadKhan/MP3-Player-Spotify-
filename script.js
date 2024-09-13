"use strict";

let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('song-item'));

let songs = [
    {songName: "Aastan hai ye kis shah e Zeeshan ka", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Shah e Mardan e ALI", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ya Hussain", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Is Karam ka karun shukr kaise adaa", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tu kuja Man Kuja", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Madad ya ALI", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tajdar e Haram", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ki MUHAMMAD Se Wafa", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Bekhud kiye dete hain", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Man Kunto Maula", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = songs[i].coverPath;
    e.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = '1';
    }
    else {
        audioElement.pause();
        gif.style.opacity = 0;
    }
});

let progress;
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', function () {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
    });
});

document.getElementById('forw').addEventListener('click', (e) => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
});

document.getElementById('back').addEventListener('click', (e) => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
});





//  DARK-LIGHT FEATURE

let mode1 = document.querySelector('.dark');
let mode2 = document.querySelector('.light');
let sec1 = document.querySelector('.sec1');
let sec2 = document.querySelector('.sec2');
let main = document.getElementById('main');
let engButton = document.getElementById('english');
let login = document.querySelector('.login');
let signup = document.querySelector('.signup');
let body = document.querySelector('.body');

mode2.addEventListener('click', function() {
    body.style.backgroundColor = "white";
    sec1.style.backgroundColor = "rgb(241, 184, 59)";
    sec1.style.color = "black";
    sec2.style.backgroundColor = "rgb(241, 184, 59)";
    sec2.style.color = "black";
    engButton.style.backgroundColor = "transparent";
    engButton.style.color = "black";
    main.style.backgroundImage = "url('light-bg.png')";
    login.style.backgroundColor = "transparent";
    login.style.color = "black";
    signup.style.backgroundColor = "transparent";
    signup.style.color = "black";
    mode1.style.backgroundColor = "transparent";
    mode1.style.color = "black";
    mode2.style.backgroundColor = "transparent";
    mode2.style.color = "black";

    // Add hover effects
    [login, signup, mode1, mode2, engButton].forEach(button => {
        button.onmouseover = function() {
            button.style.backgroundColor = "black";
            button.style.color = "white";
        };
        button.onmouseout = function() {
            button.style.backgroundColor = "transparent";
            button.style.color = "black";
        };
    });

});

mode1.addEventListener('click', function() {
    body.style.backgroundColor = "";
    sec1.style.backgroundColor = "rgb(19, 17, 17)";
    sec1.style.color = "white";
    sec2.style.backgroundColor = "rgb(19, 17, 17)";
    sec2.style.color = "white";
    engButton.style.backgroundColor = "transparent";
    engButton.style.color = "white";
    main.style.backgroundImage = "url('bg-color.png')";
    login.style.backgroundColor = "transparent";
    login.style.color = "white";
    signup.style.backgroundColor = "transparent";
    signup.style.color = "white";
    mode1.style.backgroundColor = "transparent";
    mode1.style.color = "white";
    mode2.style.backgroundColor = "transparent";
    mode2.style.color = "white";

        // Add hover effects
    [login, signup, mode1, mode2, engButton].forEach(button => {
        button.onmouseover = function () {
            button.style.backgroundColor = "white";
            button.style.color = "black";
        }
        button.onmouseout = function () {
            button.style.backgroundColor = "transparent";
            button.style.color = "white";
        }
    });
});