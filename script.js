function handleClosure() {
  const music = document.getElementById("bgMusic");

  // 🔥 Wait until video is ready
  music.addEventListener("loadedmetadata", () => {
    music.currentTime = 1; // start from 1 second
  });

  // autoplay fix (mobile friendly)
  music.muted = true;

  music.play().then(() => {
    music.muted = false;
  }).catch(() => {
    alert("Tap again to start music 🎵");
  });

  // Fade out page
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    document.body.innerHTML = `
      <div id="finalScene">
        <h1 class="end-title">The End</h1>
        <p id="lyrics"></p>
      </div>
    `;

    document.body.style.opacity = "1";

    setTimeout(() => {
      startLyrics();
    }, 300);

  }, 1000);
}
