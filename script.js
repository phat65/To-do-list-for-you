const now = new Date();
const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
const day = now.getDate();
const month = now.toLocaleDateString('en-US', { month: 'long' });

document.getElementById("weekday").textContent = weekday;
document.getElementById("day").textContent = day;
document.getElementById("month").textContent = month;


function addtask() {
  document.getElementById("add-task-button").addEventListener("click", function () {
    const input = document.getElementById("new-task-input");
    const tasktext = input.value.trim();

    if (tasktext !== "") {
      const li = document.createElement("li");

      // text
      const taskTextSpan = document.createElement("span");
      taskTextSpan.textContent = tasktext;
      li.appendChild(taskTextSpan);

      // nút Done
      const taskDone = document.createElement("button");
      taskDone.textContent = "Done";
      taskDone.onclick = function () {
        taskTextSpan.style.textDecoration = "line-through";
        li.classList.add("done");
        increaseProgress();
      };

      // nút X
      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.onclick = function () {
        li.remove();
        increaseProgress();
      };

      // thêm nút vào li
      li.appendChild(taskDone);
      li.appendChild(removeButton);

      // thêm li vào danh sách
      document.getElementById("task-list").appendChild(li);

      input.value = "";
      increaseProgress();
    }
  });
}

// tính % theo số task đã done
function increaseProgress() {
  const tasks = document.querySelectorAll("#task-list li");
  const doneTasks = document.querySelectorAll("#task-list li.done");

  const total = tasks.length;
  const done = doneTasks.length;

  let progress = 0;
  if (total > 0) {
    progress = (done / total) * 100;
  }

  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = progress + "%";
  progressBar.innerText = Math.round(progress) + "%";
}

addtask();

