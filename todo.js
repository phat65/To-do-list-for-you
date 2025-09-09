const now = new Date();
const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
const day = now.getDate();
const month = now.toLocaleDateString('en-US', { month: 'long' });

document.getElementById("weekday").textContent = weekday;
document.getElementById("day").textContent = day;
document.getElementById("month").textContent = month;


let progress = 0;

function increaseProgress() {
  if (progress < 100) {
    progress += 10;
    document.getElementById("progress-bar").style.width = progress + "%";
    document.getElementById("progress-bar").innerText = progress + "%";
  }
}