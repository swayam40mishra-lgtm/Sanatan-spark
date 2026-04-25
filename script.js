// ================================
// MAIN BUTTON FUNCTION
// ================================
function handleClosure() {
  const music = document.getElementById("bgMusic");

  // 🎵 Start from 1 second
  music.currentTime = 1;

  // 🔥 Autoplay fix (mobile + browser)
  music.muted = true;

  music.play().then(() => {
    music.muted = false;
  }).catch(() => {
    alert("Tap again to start music 🎵");
  });

  // Fade out original content
  const mainContent = document.querySelector(".wrap");
  mainContent.style.transition = "opacity 1s ease";
  mainContent.style.opacity = "0";

  // After fade, show final scene
  setTimeout(() => {
    createFinalScene();
  }, 1000);
}



// ================================
// CREATE FINAL SCENE (NO DOM DELETE)
// ================================
function createFinalScene() {
  const finalScene = document.createElement("div");
  finalScene.id = "finalScene";

  finalScene.innerHTML = `
    <h1 class="end-title">The End</h1>
    <p id="lyrics"></p>
  `;

  document.body.appendChild(finalScene);

  // Start lyrics after slight delay
  setTimeout(() => {
    startLyrics();
  }, 400);
}



// ================================
// LYRICS FUNCTION
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
      // Fade out
      lyricsBox.style.opacity = "0";

      setTimeout(() => {
        // Change text
        lyricsBox.innerText = lyrics[index];

        // Fade in
        lyricsBox.style.opacity = "1";

        index++;
      }, 300);

      setTimeout(showNextLine, 2800);
    }
  }

  showNextLine();
}
