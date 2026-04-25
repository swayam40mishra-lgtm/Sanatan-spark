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

  let i = 0;

  function showNext() {
    if (i < lyrics.length) {
      lyricsBox.innerText = lyrics[i];
      i++;
      setTimeout(showNext, 2500); // timing
    }
  }

  showNext();
}
