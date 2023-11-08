const addToList = document.getElementById("add");
const currentUpList = document.querySelector(".current-up-list");
const undoAdjustList = document.getElementById("undo");
const removeFromList = document.getElementById("remove");
const completed = document.getElementById("completed");
const newPerson = document.getElementById("newPerson");
const liveList = document.getElementById("live-list");
const time = document.querySelector(".time");
const recentlyTakenUpsList = document.querySelector("#recently-taken-ups");
const resetBtn = document.querySelector("#reset-btn");
const undoResetBtn = document.querySelector("#undo-reset-btn");

let recentUpList = [];
let upList = [];

let undoRecentUpList = [];
let undoUpList = [];

const NUM_OF_UNDOS = 4;

class Employee {
  constructor(name, allowedInLeather) {
    this.name = name;
    this.allowedInLeather = allowedInLeather;
  }
}

function setInitState() {
  undoRecentUpList = recentUpList;
  undoUpList = upList;
  upList = [];
  recentUpList = [];
  currentUpList.innerHTML = "";
}

const employees = [];

const conway = new Employee("Conway", false);
const justin = new Employee("Justin", false);
const hutch = new Employee("Hutch", false);
const yvette = new Employee("Yvette", false);
const jason = new Employee("Jason", false);
const nick = new Employee("Nick", false);
const patty = new Employee("Patty", false);
const deb = new Employee("Deb", false);
const kim = new Employee("Kim", false);
const pam = new Employee("Pam", false);
const scott = new Employee("Scott", false);
const dave = new Employee("Dave", false);
const doug = new Employee("Doug", false);
const karen = new Employee("Karen", false);
const blaine = new Employee("Blaine", false);
const keith = new Employee("Keith", false);
const leslie = new Employee("Leslie", false);
const mark = new Employee("Mark", false);
const james = new Employee("James", false);
const brant = new Employee("Brant", false);
const dean = new Employee("Dean", false);
const robert = new Employee("Robert", false);
const stephen = new Employee("Stephen", false);

employees.push(
  pam,
  conway,
  deb,
  kim,
  nick,
  jason,
  hutch,
  yvette,
  justin,
  patty,
  scott,
  dave,
  doug,
  karen,
  blaine,
  mark,
  james,
  leslie,
  brant,
  keith,
  dean,
  robert,
  stephen
);

function allowedInLeather() {
  upList.forEach((person) => (person.allowedInLeather = false));
  console.log(upList);

  if (upList.length < 4) {
    upList.forEach((person) => (person.allowedInLeather = true));
  }
  if (upList.length >= 4) {
    upList[0].allowedInLeather = true;
    upList[1].allowedInLeather = true;
    upList[2].allowedInLeather = true;
    upList[3].allowedInLeather = true;
  }
}

function insertCard(list) {
  allowedInLeather();
  //
  list.forEach((person) => {
    const html = `<li class=" in-line border-2 px-4  border-l-8 ${
      person.allowedInLeather == true
        ? "border-l-green-500"
        : "border-l-blue-500"
    } my-1"><p>${
      person.name
    }</p><p>Allowed in Leather <emp class='text-purple-600 mx-4'>${
      person.allowedInLeather === true ? "Yes" : "No"
    }</emp></p></li>`;

    currentUpList.insertAdjacentHTML("beforeend", html);
  });
}

function removedFromUpList() {
  const name = newPerson.value.toLowerCase().trim();

  if (!name) return;

  const newList2 = upList.filter((item) => item.name.toLowerCase() !== name);

  upList = newList2;

  currentUpList.innerHTML = "";

  insertCard(newList2);

  //   console.log("uplist", upList);

  newPerson.value = "";
}

function nameFormat(input) {
  const firstLetter = input.value.slice(0, 1).toUpperCase();
  const restOfName = input.value.slice(1).toLowerCase();
  const name = firstLetter + restOfName;
  return name;
}

function addToUpList() {
  const name = nameFormat(newPerson).trim();

  const employee = employees.find((i) => i.name === name);

  const alreadyOnList = upList.filter((person) => person.name === name);

  if (alreadyOnList.length > 0) return;

  if (employee) {
    currentUpList.innerHTML = "";
    upList.push(employee);
    insertCard(upList);
    newPerson.value = "";
  }
}

function adjustList() {
  const recentUp = upList.shift();
  currentUpList.innerHTML = "";
  insertCard(upList);
  recentUpList.push(recentUp);
  if (recentUpList.length > NUM_OF_UNDOS) {
    const trimmedList = recentUpList.slice(recentUpList.length - NUM_OF_UNDOS);
    recentUpList = trimmedList;
  }
}

function undoSkip() {
  if (recentUpList.length === 0) return;
  const employee = recentUpList.pop();

  upList.unshift(employee);

  currentUpList.innerHTML = "";
  insertCard(upList);
}

undoAdjustList.addEventListener("click", undoSkip);

function getTime() {
  const now = new Date();

  time.textContent = `${now.toLocaleDateString("en", {
    month: "long",
    day: "numeric",
  })}`;
}

getTime();

resetBtn.addEventListener("click", function () {
  setInitState();
  undoResetBtn.classList.remove("hidden");
  resetBtn.classList.add("hidden");
  setTimeout(resetUndoResetButton, 4000);
});

const resetUndoResetButton = function () {
  undoRecentUpList = [];
  undoResetBtn.classList.add("hidden");
  resetBtn.classList.remove("hidden");
};

undoResetBtn.addEventListener("click", function () {
  upList = undoUpList;
  recentUpList = undoRecentUpList;
  undoResetBtn.classList.add("hidden");
  resetBtn.classList.remove("hidden");

  insertCard(upList);
});
