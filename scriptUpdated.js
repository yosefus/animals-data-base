txt1 = 'Dog12, CAT3, LiOn7, DolphiN11, fish6';
txt2 = 'PIG17, bear29, BiRd8, SNAKE39, donkey14';

var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

const DB = [];

//  בעזרת לופ פשוט
// const newTxt = [...txt1.split(','), ...txt2.split(',')];
// for (let i = 0; i < newTxt.length; i++) {
//   const res = newTxt[i].split(/([0-9]+)/);
//   DB[Number(res[1])] = res[0].trim().toLowerCase();
// }

[...txt1.split(','), ...txt2.split(',')].forEach((item) => {
  const res = item.split(/([0-9]+)/);
  DB[Number(res[1])] = res[0].trim().toLowerCase();
});

function getAPick() {
  return Number(
    prompt(
      'please pick a number 1-2 \r\n 1 to search by animal name, \r\n 2 to search by code  \r\n3 to add a new animal \r\n4 to delete by id  \r\n5 to Exit '
    )
  );
}

do {
  switch ((pick = getAPick())) {
    case 1:
      searchInNames();
      break;
    case 2:
      searchInId();
      break;
    case 3:
      addAnAnimal();
      break;
    case 4:
      deleteAnimal();
      break;
    case 5:
      break;
    default:
      alert('wrong input try again');
  }
} while (pick != 5);

function searchInNames() {
  const animalName = getAnimalName().toLowerCase();
  const index = DB.indexOf(animalName);

  alert(index == -1 ? 'not found' : `your choise is ${animalName} \r\nand the animal id is ${index} `);
}

function searchInId() {
  const animalId = Number(getAnimalId());

  alert(!DB[animalId] ? 'not found' : `your choise is ${animalId} \r\nand the animal id is ${DB[animalId]} `);
}

function getAnimalId() {
  let animalId;
  do {
    animalId = prompt('please write an animal id - only a number');
  } while (!Number(animalId) || animalId === '' || format.test(animalId));
  return Number(animalId);
}

function getAnimalName() {
  let animalName;
  do {
    animalName = prompt('please write an animal name - only a string');
  } while (animalName.length <= 1 || Number(animalName) || animalName === '' || format.test(animalName));
  return animalName;
}

function addAnAnimal() {
  let animalId = getAnimalId();
  while (DB[animalId]) {
    alert('this already animal with that id');
    animalId = getAnimalId();
  }

  let animalName = getAnimalName().toLowerCase();
  while (DB.find((name) => name == animalName)) {
    alert('this already animal with that name');
    animalName = getAnimalName().toLowerCase();
  }

  DB[animalId] = animalName;
  alert('the animal added Successfully');
}

function deleteAnimal() {
  let index = getAnimalId();

  if (!DB[index]) {
    alert('didnt find any');
  } else {
    DB[index] = undefined;
    alert('deleted seccsesfuly');
  }
}
