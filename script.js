txt1 = 'Dog12, CAT3, LiOn7, DolphiN11, fish6';
txt2 = 'PIG17, bear29, BiRd8, SNAKE39, donkey14';

const newTxt = [...txt1.split(','), ...txt2.split(',')];

const newLowerCase = newTxt.map((item) => item.toLowerCase());

//  בעזרת לופ פשוט

// let newLowerCase = [];

// for (let i = 0; i < newTxt.length; i++) {
//   newLowerCase.push(newTxt[i].toLowerCase());
// }

const [namesArr, idArr] = [[], []];

newLowerCase.forEach((item) => {
  const res = item.split(/([0-9]+)/);
  namesArr.push(res[0]);
  idArr.push(res[1]);
});

//  בעזרת לופ פשוט

// for (let i = 0; i < newLowerCase.length; i++) {
//   const res = newLowerCase[i].split(/([0-9]+)/);
// namesArr.push(res[0]);
//   idArr.push(res[1]);
// }

function getAPick() {
  return Number(
    prompt(
      'please pick a number 1-2 \r\n 1 to search by animal name, \r\n 2 to search by code  \r\n3 to add a new animal \r\n4 to Exit '
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
      break;
    default:
      alert('wrong input try again');
  }
} while (pick != 4);

function searchInNames() {
  let animalName = getAnimalName();
  const index = namesArr.indexOf(animalName.toLocaleLowerCase());

  if (index == -1) return alert('not found');
  alert(`your choise is ${animalName} \r\nand the animal id is ${idArr[index]} `);
}

function searchInId() {
  let animalId = getAnimalId();

  const index = idArr.indexOf(animalId);

  if (index == -1) return alert('not found');
  alert(`your choise is ${animalId} \r\nand the animal id is ${namesArr[index]} `);
}

function getAnimalId() {
  let animalId;
  do {
    animalId = prompt('please write an animal id - only a number');
  } while (animalId.length < 1 || !Number(animalId) || animalId === '');
  return animalId;
}

function getAnimalName() {
  let animalName;
  do {
    animalName = prompt('please write an animal name - only a string');
  } while (animalName.length <= 1 || Number(animalName) || animalName === '');
  return animalName;
}

function addAnAnimal() {
  let animalId = getAnimalId();

  while (idArr.find((id) => id == animalId)) {
    alert('this already animal with that id');
    animalId = getAnimalId();
  }

  let animalName = getAnimalName().toLowerCase();

  while (namesArr.find((name) => name == animalName)) {
    alert('this already animal with that name');
    animalId = getAnimalName().toLowerCase();
  }

  namesArr.push(animalName);
  idArr.push(animalId);

  alert('the animal added Successfully');
}
