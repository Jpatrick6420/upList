// let list = [];
let upList = [];

const addToList = document.getElementById("add");

const currentUpList = document.querySelector(".current-up-list");

const findBtn = document.getElementById("find");

const removeFromList = document.getElementById("remove");

const completed = document.getElementById("completed");

const newPerson = document.getElementById("newPerson");

const liveList = document.getElementById("live-list");
const inLine = document.querySelectorAll(".in-line");

class Employee {
  constructor(name, position, contacted) {
    this.name = name;
    this.position = position;
    this.contacted = contacted;
  }
}

const employees = [];

const conway = new Employee("Conway", "furniture Sales", false);

const justin = new Employee("Justin", "furniture Sales", false);

const hutch = new Employee("Hutch", "furniture Sales", false);

const yvette = new Employee("Yvette", "furniture Sales", false);

const jason = new Employee("Jason", "furniture Sales", false);

const nick = new Employee("Nick", "furniture Sales", false);

const patty = new Employee("Patty", "furniture Sales", false);

const deb = new Employee("Deb", "furniture Sales", false);

const kim = new Employee("Kim", "furniture Sales", false);

const pam = new Employee("Pam", "furniture Sales", false);

const scott = new Employee("Scott", "furniture Sales", false);

const dave = new Employee("Dave", "furniture Sales", false);

const doug = new Employee("Doug", "furniture Sales", false);

const karen = new Employee("Karen", "furniture Sales", false);

const blaine = new Employee("Blaine", "furniture Sales", false);

const keith = new Employee("Keith", "furniture Sales", false);

const leslie = new Employee("Leslie", "furniture Sales", false);

const mark = new Employee("Mark", "furniture Sales", false);

const james = new Employee("James", "furniture Sales", false);

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
  leslie
);

const placeHolder = new Employee("Placeholder", "furniture sales", false);
employees.unshift(placeHolder);

function insertCard(list) {
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

  const employee = employees.findIndex((i) => i.name === name);

  //   console.log(employee, employees[employee]);

  const alreadyOnList = upList.filter((person) => person.name === name);
  if (alreadyOnList.length > 0) return;
  if (employee) {
    currentUpList.innerHTML = "";
    upList.push(employees[employee]);
    insertCard(upList);
    newPerson.value = "";
  }
  console.log(upList);
}
console.log(employees);

function adjustList() {
  upList.shift();
  currentUpList.innerHTML = "";
  insertCard(upList);
}
