

const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('input');

// PLAY / PAUSE
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update button icon
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// SKIP FUNCTION
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// VOLUME & SPEED
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// PROGRESS BAR UPDATE
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percent + '%';
}

// CLICK TO SEEK
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// EVENT LISTENERS
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

progress.addEventListener('click', scrub);