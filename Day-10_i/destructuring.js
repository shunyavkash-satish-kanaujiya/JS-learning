//Destructuring in Array
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = numbers;
console.log(a, b, c, d, e); // Output: 1 2 3 4 5

//Destructuring in Object
const studentAverage = () => {
  let studentData = {
    name: "rahul",
    age: 18,
    subject: {
      maths: 89,
      science: 95,
      english: 90,
      socialStudies: 80,
      hindi: 80,
    },
  };
  let {
    subject: { maths, science, english, socialStudies, hindi },
  } = studentData;
  let totalSubjects = Object.keys(studentData.subject).length;
  let average =
    (maths + science + english + socialStudies + hindi) / totalSubjects;

  console.log(`The average marks of ${studentData.name} is ${average}%`);
};

studentAverage();
