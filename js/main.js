let audio1 = new Audio('../assets/audio/bloxycola.mp3'); 
let audio2 = new Audio('../assets/audio/cheeseburger.mp3'); 
let audio3 = new Audio('../assets/audio/pizza.mp3'); 
let audio4 = new Audio('../assets/audio/nomnomnom.mp3'); 
let audio5 = new Audio('../assets/audio/hi.mp3'); 
let audio6 = new Audio('../assets/audio/bye.mp3'); 
let audio7 = new Audio('../assets/audio/angry.mp3'); 
let audio8 = new Audio('../assets/audio/oldoof.mp3'); 
let audio9 = new Audio('../assets/audio/newoof.mp3'); 
let audio10 = new Audio('../assets/audio/congrats.mp3');
let audio11 = new Audio('../assets/audio/explosion.mp3');
let audio12 = new Audio('../assets/audio/baller.mp3');   
console.log('audio1');

function buttonAudio(sound) {
    if (sound == 1) {
        audio1.cloneNode().play()
    } else if (sound == 2) {
        audio2.cloneNode().play()
    } else if (sound == 3) {
        audio3.cloneNode().play()
    } else if (sound == 4) {
        audio4.cloneNode().play()
    } else if (sound == 5) {
        audio5.cloneNode().play()
    } else if (sound == 6) {
        audio6.cloneNode().play()
    } else if (sound == 7) {
        audio7.cloneNode().play()
    } else if (sound == 8) {
        audio8.cloneNode().play()
    } else if (sound == 9) {
        audio9.cloneNode().play()
    } else if (sound == 10) {
        audio10.cloneNode().play()
    } else if (sound == 11) {
        audio11.cloneNode().play()
    } else if (sound == 12) {
        audio12.cloneNode().play()
    }
}