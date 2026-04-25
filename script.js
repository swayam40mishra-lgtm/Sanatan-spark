lyricsBox.innerTextfunction handleClosure() {
  // Fade out effect
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    // After fade, show final message
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#07070b;
        color:#fff;
        font-family: Arial, sans-serif;
        text-align:center;
        padding:20px;
      ">
        <div>
          <h1 style="font-size:2.5rem; margin-bottom:10px;">The End</h1>
          <p style="opacity:0.7;">Some chapters end silently… but meaningfully.</p>
        </div>
      </div>
    `;
    document.body.style.opacity = "1";
  }, 1000);
}
function startLyrics() {
  const lyrics = [
    { time: 2, text: "Ja jee le teri zindagi..." },
    { time: 6, text: "Main teri yaadon mein jee lunga..." },
    { time: 10, text: "Jo zakhm kare tanne..." },
    { time: 14, text: "Dil pe ve sil lunga..." },
    { time: 20, text: "Aaj chhod ke chal padi..." },
    { time: 25, text: "Phir roya karegi..." }
  ];

  const lyricsBox = document.getElementById("lyrics");

  lyrics.forEach(line => {
    setTimeout(() => {
      lyricsBox.innerText = line.text;
    }, line.time * 1000);
  });
}
