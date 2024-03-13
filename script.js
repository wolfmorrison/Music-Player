const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const skipBtn = document.getElementById('skip-btn');
const volumeSlider = document.getElementById('volume-slider');

// Function to play or pause the audio
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}

// Function to skip to the next track (for demonstration purposes)
function skipTrack() {
    // In a real music player, you would load the next track here
    alert('Skipping to next track');
}

// Event listener for play/pause button
playPauseBtn.addEventListener('click', togglePlayPause);

// Event listener for skip button
skipBtn.addEventListener('click', skipTrack);

// Event listener for volume slider
volumeSlider.addEventListener('input', function() {
    audio.volume = parseFloat(this.value);
});
