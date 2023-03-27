// Creating an array containing all the names of sounds
const sounds = ['applause', 'boo', 'gasps', 'tada', 'victory', 'wrong'];

// Loop through sounds
sounds.forEach(sound => {

    // Create a button and assign it to a variable
    const btn = document.createElement('button');

    // Give the button a class for styling
    btn.classList.add('btn');

    // Set the innerText to the sound itself
    btn.innerText = sound;

    // We want to add and eventListener to each button of click
    btn.addEventListener('click', () => {

        stopSongs();

        //When we click, the function will select the audio for the specific button based on the sound
        // HTML5 we have a javascript API for audio elements, one of the functions/methods is play  
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
};