function handleClosure() {
  const music = document.getElementById("bgMusic");

  // Start music
  music.currentTime = 0;
  music.play();

  // Fade out main page
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

    startLyrics();
  }, 1000);
}
