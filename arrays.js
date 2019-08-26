// console.log('test1');

const dinosaurs = [
  {
    dinoType: 't-rex',
    description: 'Many teeth.',
  },
  {
    dinoType: 'stegosaurus',
    description: 'Spiky back',
  },
  {
    dinoType: 'velociraptor',
    description: 'Will eat your face',
  },
  {
    dinoType: 'bad dino',
    description: 'eats all the food',
  },
  {
    dinoType:'good dino',
    description:'loves Tv',
  },
  {
    dinoType:'sleeply dino',
    description:'sleeps all day',
  }
];

const printToDom = (stringToPrint,divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};


const makeDinos = () => {
  let dinoString = '';
  dinosaurs.forEach((dino) => {
  dinoString += ``;
  dinoString += `<div class="dinosaur">`
  dinoString +=   `<h3>${dino.dinoType}</h3>`;
  dinoString +=   `<p>${dino.description}</p>`
  dinoString += `</div>`
  })
  printToDom(dinoString,'dino-barn');
};
makeDinos();