// MAIN BUTTON FUNCTION
function handleClosure() {
  const music = document.getElementById("bgMusic");

  // 🔥 Force play (important for mobile + vercel)
  music.muted = true;   // start muted (browser allows autoplay)
  music.play().then(() => {
    music.muted = false;  // unmute after start
  }).catch(() => {
    alert("Tap again to start music 🎵");
  });

  // Fade out page
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    // Replace with final scene
    document.body.innerHTML = `
      <div id="finalScene">
        <h1 class="end-title">The End</h1>
        <p id="lyrics"></p>
      </div>
    `;

    document.body.style.opacity = "1";

    // Start lyrics after DOM loads
    setTimeout(() => {
      startLyrics();
    }, 300);

  }, 1000);
}


// LYRICS FUNCTION
function startLyrics() {
  const lyrics = [
    "Ja jee le teri zindagi...",
    "Main teri yaadon mein jee lunga...",
    "Jo zakhm kare tanne...",
    "Dil pe ve sil lunga...",
    "Aaj chhod ke chal padi...",
    "Phir roya karegi..."
  ];

  const lyricsBox = document.getElementById("lyrics");

  let index = 0;

  function showNextLine() {
    if (index < lyrics.length) {
      lyricsBox.style.opacity = "0";

      setTimeout(() => {
        lyricsBox.innerText = lyrics[index];
        lyricsBox.style.opacity = "1";
        index++;
      }, 300);

      setTimeout(showNextLine, 2800);
    }
  }

  showNextLine();
}
