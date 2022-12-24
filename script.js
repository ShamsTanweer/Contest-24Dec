let dataArr = [
  { id: 1, name: "John", profession: "Developer", age: "18" },
  { id: 2, name: "Jack", profession: "Developer", age: "20" },
  { id: 3, name: "Karen", profession: "Admin", age: "19" },
];

let divData = document.getElementById("arrData");

function generateList(arg) {
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    items += `
        <li>Name: ${arg[i].name} &nbsp;&nbsp;&nbsp;&nbsp;Profession:${arg[i].profession}&nbsp;&nbsp;&nbsp;&nbsp;Age:${arg[i].age}</li>
        `;
  }
  return items;
}

document.getElementById("arrData").innerHTML = `
<ol>${generateList(dataArr)}</ol>
`;

let form1 = document.forms["forSelect"];
let button = document.getElementById("btn");
button.addEventListener("mouseover", (e) => {
  if (!document.getElementById("profession").value) {
    document.getElementById("error").innerHTML = `<p>Select a profession!</p>`;
    return;
  }
});

form1.onsubmit = function (e) {
  e.preventDefault();

  let optionValue = this.profession.value;
  console.log(optionValue);

  if (!this.profession.value) {
    document.getElementById("error").innerHTML = `<p>Select a profession!</p>`;
    return;
  }
  document.getElementById("error").innerHTML = ``;
  let newArr = dataArr.filter(function (ele) {
    return ele.profession == optionValue;
  });
  console.log(newArr);
  document.getElementById("arrData").innerHTML = `
<ol>${generateList(newArr)}</ol>
`;
};

let input = document.getElementsByTagName("input");

let form2 = document.forms["forAdd"];

form2.onsubmit = function (e) {
  e.preventDefault();
  // console.log(input.name.value);
  dataArr.push({
    id: dataArr.length + 1,
    name: input.name.value,
    profession: input.profession.value,
    age: input.age.value,
  });
  console.log(dataArr);
  input.name.value = "";
  input.profession.value = "";
  input.age.value = "";

  document.getElementById("arrData").innerHTML = `
<ol>${generateList(dataArr)}</ol>
`;
};
