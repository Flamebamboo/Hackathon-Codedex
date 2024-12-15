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

const triggerSoundsVirus = () => {
  const virus = document.getElementById("windowsSoundsVirus");

  updateProgressBar();
  virus.style.display = "flex"; //display the virus modal in flex cuz we use flexbox props in css as well
};

const closeSoundsVirus = () => {
  const virus = document.getElementById("windowsSoundsVirus");
  virus.style.display = "none";
};

function updateProgressBar() {
  let progressBar = document.getElementById("progress");
  let width = 0;
  let interval = setInterval(function () {
    if (width >= 100) {
      closeSoundsVirus();
      clearInterval(interval);
      applySoundsVirus();
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }, 100);
}

function applySoundsVirus() {
  const randomDuration = Math.floor(Math.random() * 8000);
  setInterval(() => {
    virusMemeSounds();
  }, randomDuration);
}

function virusMemeSounds() {
  const memeSound = [
    "Audio/ChillGuy.mp3",
    "Audio/Goofy.mp3",
    "Audio/Polar.mp3",
    "Audio/Virus1.mp3",
    "Audio/Virus2.mp3",
  ];

  const randomSound = Math.floor(Math.random() * memeSound.length);
  const selectedSound = memeSound[randomSound];
  const audio = new Audio(selectedSound);
  audio.play();
}

//ads
function applyAdware() {
  const adware = document.getElementById("windowsAdwareVirus");
  adware.style.display = "flex";
  adwareProgress();
}

function closeAdware() {
  const adware = document.getElementById("windowsAdwareVirus");
  adware.style.display = "none";
  triggerAds();
}

function triggerAds() {
  setInterval(() => {
    createAds();
  }, 50);
}

function createAds() {
  const ad = document.createElement("div");
  ad.className = "fake-ad";

  //fuckkkkkkkkkk why is it not working
  ad.style.top = `${Math.random() * 80}vh`;
  ad.style.left = `${Math.random() * 80}vw`;

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "close-ad";
  closeButton.onclick = () => {
    document.body.removeChild(ad);
  };

  ad.appendChild(closeButton);
  ad.appendChild(document.createTextNode("Buy Codedex Now!"));
  document.body.appendChild(ad);
}

function adwareProgress() {
  let progressBar = document.getElementById("progressAdware");
  let width = 0;
  let intervalSpeed = 200;

  //need to change the speed of the progress bar
  function updateProgress() {
    if (width >= 100) {
      closeAdware();
    } else {
      if (width === 30) {
        intervalSpeed = 15;
      }
      width++;
      progressBar.style.width = width + "%";
      setTimeout(updateProgress, intervalSpeed);
    }
  }

  updateProgress();
}

const refreshPage = () => {
  location.reload();
};
const dismissError = () => {
  const windowsError = document.getElementById("windowsError");
  windowsError.style.display = "none";
};

function makeDraggable() {
  const ieWindows = document.querySelectorAll(".internet-explorer");
  ieWindows.forEach((ieWindow) => {
    const header = ieWindow.querySelector(".internet-explorer-container");
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

function getRealTime() {
  const clock = document.getElementById("clock");
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amORpm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  const stringTime = `${hours}:${minutes} ${amORpm}`;

  clock.textContent = stringTime;
}

setInterval(getRealTime, 60000);

getRealTime();

const openNotes = () => {
  const internetExplorerNotes = document.getElementById(
    "internetExplorerNotes"
  );
  internetExplorerNotes.style.display = "block";
};

function closeNotes() {
  const internetExplorerNotes = document.getElementById(
    "internetExplorerNotes"
  );
  internetExplorerNotes.style.display = "none";
}
