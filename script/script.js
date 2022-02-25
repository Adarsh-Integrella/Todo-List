const textInput = document.querySelector(`input[type="text"]`);
const submitButton = document.querySelector(`input[type="submit"]`);
const tasksList = document.querySelector(".allTaskList");
const error = document.getElementById("error");

const createElement = (time) => {
  let element = `
        <div class="task">
            ${textInput.value}
            <div id="time"> Task added on: 
            ${time}
            </div>
            <button class="button">Delete</button>
        </div>
    `;
  return element;
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  error.innerText = "";

  if (textInput.value === "") {
    error.innerText = "Task cannot be empty.";
  } else {
    let date = new Date();
    const time = date.toLocaleString();
    tasksList.innerHTML += createElement(time);
  }
  textInput.value = "";
  removebutton();
});

const removebutton = () => {
  let button = document.querySelectorAll(".button");
  button.forEach((button) => {
    button.addEventListener("click", (x) => {
      x.target.parentElement.remove();
    });
  });
};
