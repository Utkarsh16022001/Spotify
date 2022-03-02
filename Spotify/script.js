console.log("Welcome to Spotify")
//initialize the Variables
let songIndex=0;
let audioElement = new Audio('songs/2.mp3');
//audioElement.play();
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myPrograssBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

//array
let songs=[
    {songName:"Ae dil hai Mushkil", filePath:"songs/2.mp3", coverPath: "cover/2.jfif"},
    {songName:"Tu hi Yaar Mera", filePath:"songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName:"Bulleya", filePath:"songs/4.mp3", coverPath: "cover/4.jfif"},
    {songName:"Tera Yaar hoon main", filePath:"songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName:"Tum Hi Ho", filePath:"songs/6.mp3", coverPath: "cover/6.jpg"},
    {songName:"Hawayein", filePath:"songs/7.mp3", coverPath: "cover/7.jpg"},
    {songName:"Quafirana", filePath:"songs/8.mp3", coverPath: "cover/8.jpg"},
    {songName:"Pal Pal Dil Ke Pass", filePath:"songs/9.mp3", coverPath: "cover/9.jpg"},
    {songName:"Chal Ghar Chalen", filePath:"songs/10.mp3", coverPath: "cover/10.jpg"},
    {songName:"Bekhayali", filePath:"songs/11.mp3", coverPath: "cover/11.jpg"},
    {songName:"Chodd Diya", filePath:"songs/12.mp3", coverPath: "cover/12.jpg"},
    {songName:"Milne Hai Mughsa Aayi", filePath:"songs/13.mp3", coverPath: "cover/13.jpg"},
    {songName:"Ghungroo", filePath:"songs/14.mp3", coverPath: "cover/14.jpg"},
]


//handle play-pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


// Listen to Events
//audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
   // progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
   // console.log(progress);
   //myProgressBar.value = (progress);
//})

//myProgressBar.addEventListener('change', ()=>{
   // audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
//})


// to play-pause each song
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+2}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+2}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 12
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+2}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})