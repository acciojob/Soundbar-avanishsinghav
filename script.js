//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const Stopbuttons = document.querySelectorAll(".stop");

let currentAudio = null;
buttons.forEach(button=>{
	button.addEventListener("click",()=>{
		if(currentAudio){
			currentAudio.pause();
		}
		const soundfile = button.getAttribute('data-sound');
		currentAudio = new Audio(`sounds/${soundfile}`);
		currentAudio.play();
	})
})

Stopbuttons.addEventListener("click",()=>{
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
})