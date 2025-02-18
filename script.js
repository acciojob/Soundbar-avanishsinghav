let buttonContainer = document.getElementById("buttons");

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let audioElements = {}; // Store audio elements

sounds.forEach(sound => {
    // Create button
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = sound;

    // Create an actual <audio> element in the DOM
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.setAttribute("id", sound); // Set ID for Cypress tests
    buttonContainer.appendChild(audio); // Append <audio> to DOM

    audioElements[sound] = audio; // Store the audio element in JS

    // Add click event to play sound
    button.addEventListener("click", () => {
        stopAllSounds();
        audio.play();
    });

    buttonContainer.appendChild(button);
});

// Create stop button
const stopButton = document.createElement("button");
stopButton.classList.add("stop");
stopButton.innerText = "stop";

stopButton.addEventListener("click", stopAllSounds);
buttonContainer.appendChild(stopButton);

// Stop all sounds
function stopAllSounds() {
    Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}