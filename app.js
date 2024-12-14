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
};

const dismissError = () => {
  const windowsError = document.getElementById("windowsError");
  windowsError.style.display = "none";
};
