let recentUpList = [];
let upList = [];

let undoRecentUpList = [];
let undoUpList = [];

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

const NUM_OF_UNDOS = 4;

class Employee {
  constructor(name, contacted) {
    this.name = name;
    this.contacted = contacted;
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
  keith
);

function allowedInLeather() {
  upList.forEach((person) => (person.contacted = false));
  console.log(upList);

  if (upList.length < 4) {
    upList.forEach((person) => (person.contacted = true));
  }
  if (upList.length >= 4) {
    upList[0].contacted = true;
    upList[1].contacted = true;
    upList[2].contacted = true;
    upList[3].contacted = true;
  }
}

function insertCard(list) {
  allowedInLeather();
  //
  list.forEach((person) => {
    const html = `<li class=" in-line border-2 px-4  border-l-8 ${
      person.contacted == true ? "border-l-green-500" : "border-l-blue-500"
    } my-1"><p>${person.name}</p><p>contacted ${person.contacted}</p></li>`;

    currentUpList.insertAdjacentHTML("beforeend", html);
  });
}

function removedFromUpList() {
  const name = newPerson.value.toLowerCase();

  if (!name) return;

  const newList2 = upList.filter((item) => item.name.toLowerCase() !== name);

  upList = newList2;

  currentUpList.innerHTML = "";

  insertCard(newList2);

  //   console.log("uplist", upList);

  newPerson.value = "";
}

function addToUpList() {
  const firstLetter = newPerson.value.slice(0, 1).toUpperCase();
  const restOfName = newPerson.value.slice(1).toLowerCase();
  const name = firstLetter + restOfName;

  const employee = employees.find((i) => i.name === name);

  //   console.log(employee, employees[employee]);

  const alreadyOnList = upList.filter((person) => person.name === name);

  if (alreadyOnList.length > 0) return;

  if (employee) {
    currentUpList.innerHTML = "";
    upList.push(employee);
    insertCard(upList);
    newPerson.value = "";
  }
  console.log(upList);
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

  console.log(employee);

  upList.unshift(employee);

  console.log(upList);

  currentUpList.innerHTML = "";
  insertCard(upList);
}

undoAdjustList.addEventListener("click", undoSkip);

function getTime() {
  const now = new Date();

  time.textContent = `${now.toLocaleTimeString()}`;
}

setInterval(getTime, 1000);

resetBtn.addEventListener("click", function () {
  setInitState();
  undoResetBtn.classList.remove("hidden");
  resetBtn.classList.add("hidden");
});
undoResetBtn.addEventListener("click", function () {
  upList = undoUpList;
  recentUpList = undoRecentUpList;
  undoResetBtn.classList.add("hidden");
  resetBtn.classList.remove("hidden");

  insertCard(upList);
});
