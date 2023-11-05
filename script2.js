function remove() {
  list.shift();

  liveList.innerHTML = `${list.join(", ")}`;
}

function adjustList() {
  const name = newPerson.value.toLowerCase();

  const newList = list.filter((item) => item !== name);

  list = newList;
  liveList.innerHTML = `${list.join(", ")}`;
  newPerson.value = "";
}
function add() {
  const name = newPerson.value.toLowerCase();
  if (list.includes(name)) return;
  list.push(name);
  liveList.innerHTML = `${list.join(", ")}`;
  newPerson.value = "";
}
// const arr = employees.filter((employee) =>
//   employee.name.toLowerCase().includes("on")
// );

// let set = [];
// console.log(arr);

// pam.contacted = false;

// console.log(arr);

// set = [...arr];

// //insertCard(set)
