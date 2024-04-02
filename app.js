//? 1. Her defe ferqli rengde ekrana cixmali (console.log(${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye);)

/*
 let birthday = new Date("06-08-1997");
setInterval(() => {
  let now = new Date();
  let between = now - birthday;
  let il = Math.trunc(between / (1000 * 60 * 60 * 24 * 365));
  let ay = Math.trunc((between / (1000 * 60 * 60 * 24)) % 30);
  let saniye = Math.trunc(between / 1000) % 60;
  let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
  let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
  let gun = Math.trunc(between / (1000 * 60 * 60 * 24 * 365));
  //  console.clear();

  let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  console.log(
    `%c${il} il ${ay} ay ${gun} gün ${saat} saat ${deqiqe} dakika ${saniye} saniyedir ki həyatdasan `,
    `color: ${randomColor}`
  );
}, 1000);
*/

//? 2. Evde yazdiginiz students datasinda searching yazmaq.
// ?Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.
/*
let students = [
  {
    id: 1,
    name: "Çiçək",
    surname: "Rustemova",
    html: 100,
    css: 95,
    Javascript: 95,
    hobby: "puzzle",
    profession: "business",
  },
  {
    id: 2,
    name: "Leyla",
    surname: "Nagiyeva",
    html: 100,
    css: 75,
    Javascript: 65,
    hobby: "puzzle",
    profession: "developer",
  },
  {
    id: 3,
    name: "Ekber",
    surname: "Eliyev",
    html: 80,
    css: 75,
    Javascript: 95,
    hobby: ["watch film", "walking"],
    profession: "teacher",
  },
  {
    id: 4,
    name: "Ceyran",
    surname: "Selimova",
    html: 80,
    css: 65,
    Javascript: 95,
    hobby: "listen music",
    profession: "accountant",
  },
  {
    id: 5,
    name: "Nicat",
    surname: "Bayramov",
    html: 90,
    css: 75,
    Javascript: 75,
    hobby: "read book",
    profession: "tester",
  },
];
let printStudent = [];
let dataName = prompt("Bir ad daxil edin: ");
let searchName = students.filter((student) => student.name === dataName);
searchName.map((student) => {
  printStudent.push(
    `${student.name} ${student.surname} ${student.profession}dir`
  );
});
console.log(printStudent.join(", "));
*/

//? 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
/*
let text = prompt("Bir soz daxil edin:");
let length = text.length;

for (let i = 1; i <= length * 2 - 1; i++) {
  let textIndex;
  if (i <= length) {
    textIndex = text.substring(0, i); //0ci indexden basla amma i alma
    console.log(textIndex);
  } else {
    textIndex = text.substring(0, length * 2 - i);
    console.log(textIndex);
  }
}
*/

//?4. toLocaleDateString(); ->arashdir
/*
let date = new Date(2024, 2, 25);

// kompun ve brauzerin ayarlarina uygun olaraq tarixi gosterir "en-US" (ay.gun.il)
console.log(date.toLocaleDateString());
//basqa olkeni secmek ucun qeyd edirik
console.log(date.toLocaleDateString('tr-TR'));  //gun ay il
console.log(date.toLocaleDateString('az-AZ'));  //il ay gun
*/
