function handleClosure() {
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
