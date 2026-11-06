//დავალება 1:
const temperature = 25;

if (temperature > 30) {
  console.log("გარეთ ცხელა ☀️");
} else if (temperature === 25) {
  console.log("იდეალური ამინდია 🍃");
} else {
  console.log("გარეთ ცივა 🧥");
}

//დავალება 2
const car = {
  brand: "Mercedec",
  model: "c300",
  year: 2025,
  isElectric: true,
};
console.log(car.brand);
console.log(car.model);
car["year"] = 2026;
console.log(car["year"]);

car.color = "black";
console.log(car);

//დავალება 3
const languages = ["HTML", "CSS", "Python"];
languages.push("Javascript");
languages.unshift("TypeScript");
languages.pop();
const isJsIncluded = languages.includes("Javascript");
console.log(isJsIncluded);

//დავალება 4
// ობიექტი იქმნება მეხსიერებაში, ხოლო student1 ინახავს არა თავად ობიექტს,
// არამედ მის მისამართს (რეფერენსს).
let student1 = { name: "Nino", score: 95 };

// აქ ობიექტი არ კოპირდება! student2-ს ენიჭება იგივე რეფერენსი,
// ანუ ორივე ცვლადი ერთსა და იმავე ობიექტზე მიუთითებს მეხსიერებაში.
let student2 = student1;

// student2-ის გავლით ვცვლით იმავე ობიექტს, რომელზეც student1-იც მიუთითებს.
student2.score = 100;

// დაბეჭდავს 100-ს, რადგან student1 და student2 ერთი და იგივე ობიექტია.
console.log(student1.score);

//დავალება 5
const aiProject = {
  title: "Women in AI Reader",
  version: 2.0,
  author: "Student",
};

const { title, version } = aiProject;
console.log(title, version);
