const applyStyle = () => {
  const sample = document.getElementById("box-sample");
  const button = document.getElementById("button");
  sample.classList.toggle("box-sample");

  if (sample.classList.contains("box-sample")) {
    button.textContent = "Remove Style";
  } else {
    button.textContent = "Apply Style";
  }
};

// get modal windows error element

const triggerError = () => {
  const windowsError = document.getElementById("windowsError");
  windowsError.style.display = "flex";
  const errorsound = document.getElementById("errorsound");
  errorsound.play().catch((error) => {
    console.log("Audio playback failed:", error);
  });
};

const refreshPage = () => {
  location.reload();
};
const dismissError = () => {
  const windowsError = document.getElementById("windowsError");
  windowsError.style.display = "none";
};

function makeDraggable() {
  const ieWindow = document.getElementById("internet-explorer");
  const header = document.querySelector(".internet-explorer-container");
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;

  header.style.cursor = "move";

  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    initialX = e.clientX - ieWindow.offsetLeft;
    initialY = e.clientY - ieWindow.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    ieWindow.style.left = `${currentX}px`;
    ieWindow.style.top = `${currentY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

document.addEventListener("DOMContentLoaded", makeDraggable);

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splashScreen");
  const mainContent = document.getElementById("windowOS");
  const audio = document.getElementById("startup");

  mainContent.style.display = "none";

  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.transition = "opacity 0.5s";

    setTimeout(() => {
      splash.style.display = "none";
      mainContent.style.display = "block";

      audio.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }, 500);
  }, 3000);
});
function toggleSelectors() {
  const demo = document.getElementById("selector-demo");
  demo.classList.toggle("highlight");
}
