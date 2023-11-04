let list = [];
let upList = [];

const addToList = document.getElementById("add");

const mockList = document.querySelector(".mock-list");

const findBtn = document.getElementById("find");

const removeFromList = document.getElementById("remove");

const completed = document.getElementById("completed");

const newPerson = document.getElementById("newPerson");
console.log(list);

const liveList = document.getElementById("live-list");

function add() {
  const name = newPerson.value.toLowerCase();
  if (list.includes(name)) return;
  list.push(name);
  liveList.innerHTML = `${list.join(", ")}`;
  newPerson.value = "";
}

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

const pam = new Employee("Pam", "furniture Sales", true);

const scott = new Employee("Scott", "furniture Sales", false);

const dave = new Employee("Dave", "furniture Sales", false);

const doug = new Employee("Doug", "furniture Sales", true);

const karen = new Employee("Karen", "furniture Sales", true);

const blaine = new Employee("Blaine", "furniture Sales", true);

const keith = new Employee("Keith", "furniture Sales", true);

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
  karen
);

function insertCard(list) {
  list.forEach((person) => {
    const html = `<li class=" border-2 px-4  border-l-8 ${
      person.contacted == true ? "border-l-green-500" : "border-l-blue-500"
    } my-1"><p>${person.name}</p><p>contacted ${person.contacted}</p></li>`;

    mockList.insertAdjacentHTML("beforeend", html);
  });
}

//console.log(employees)

findBtn.addEventListener("click", function () {
  const upName = newPerson.value.toLowerCase();

  const newList = employees.filter(
    (item) => item.name.toLowerCase() === upName
  );

  upList = upList.concat(newList);

  insertCard(newList);

  newPerson.value = "";

  console.log(`upList : ${upList}`);
  console.log(`newList : ${newList}`);
});

function clearHTML(list) {
  list.innerHTML = "";
}

function removeFromUpList() {
  const name = newPerson.value.toLowerCase();

  console.log(name);
  if (!name) return;

  //const verification = upList.filter(item=> item.name.toLowerCase() === name);

  //if(verification.length > 0) return;

  console.log(upList);

  const newList2 = upList.filter((item) => item.name.toLowerCase() !== name);

  console.log(newList2);

  upList = newList2;

  insertCard(newList2);

  console.log("uplist", upList);

  newPerson.value = "";
}

function addToUpList() {
  const firstLetter = newPerson.value.slice(0, 1).toUpperCase();
  const restOfName = newPerson.value.slice(1).toLowerCase();
  const name = firstLetter + restOfName;

  const employee = employees.findIndex((i) => i.name === name);

  console.log(employee, employees[employee]);

  if (employee) {
    upList.push(employees[employee]);
    insertCard(upList);
    newPerson.value = "";
    console.log(upList);
  }
}
