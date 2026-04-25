// ================================
// MAIN BUTTON FUNCTION (CINEMATIC)
// ================================
function handleClosure() {
  const music = document.getElementById("bgMusic");

  // 🎵 Start from beginning (FIXED)
  music.currentTime = 0;

  // Autoplay fix
  music.muted = true;

  music.play().then(() => {
    setTimeout(() => {
      music.muted = false; // smooth unmute
    }, 300);
  }).catch(() => {
    alert("Tap again to start music 🎵");
  });

  // 🎬 Smooth fade-out of page
  const mainContent = document.querySelector(".wrap");
  mainContent.style.transition = "opacity 1.5s ease";
  mainContent.style.opacity = "0";

  // Slight delay → cinematic feel
  setTimeout(() => {
    createFinalScene();
  }, 1400);
}



// ================================
// CREATE FINAL SCENE (CINEMATIC)
// ================================
function createFinalScene() {
  const finalScene = document.createElement("div");
  finalScene.id = "finalScene";

  finalScene.innerHTML = `
    <p class="pre-text">Feel the lyrics</p>
    <h1 class="end-title">The End</h1>
    <p id="lyrics"></p>
  `;

  document.body.appendChild(finalScene);

  // 🎬 staged reveal
  setTimeout(() => {
    document.querySelector(".pre-text").classList.add("show");
  }, 400);

  setTimeout(() => {
    document.querySelector(".end-title").classList.add("show");
  }, 1200);

  setTimeout(() => {
    startLyrics();
  }, 2200);
}



// ================================
// LYRICS FUNCTION (CINEMATIC FLOW)
// ================================
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

      // fade out
      lyricsBox.style.opacity = "0";

      setTimeout(() => {
        lyricsBox.innerText = lyrics[index];

        // fade in
        lyricsBox.style.opacity = "1";

        index++;
      }, 400);

      // dynamic timing (feels natural)
      setTimeout(showNextLine, 3000);
    }
  }

  showNextLine();
}
