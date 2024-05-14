const Hospital = {
  name: "Alshifa International ",
  location: "Rawalpindi Islamabad",
  sector: "Private",
  surgicalDoctors: ["Ali", "Abdullah", "Rehmat", "Akram", "Ajmal"],
  medicalDoctors: ["sohaib", "Adil", "umer", "talha"],
  orthoDoctors: ["Akbar", "shahzad", "fasil"],
};

//Destructuring arrays inside the object

const Doctors = [
  ...Hospital.surgicalDoctors,
  ...Hospital.medicalDoctors,
  ...Hospital.orthoDoctors,
];

//loop over the array
console.log("Current Index ");
for (doctorname of Doctors) {
  console.log(doctorname);
}

//it is hard to get index number on current entries then we use entries method to get elements
conbsole.log("Get Index Number");
for (docname of Doctors.entries()) {
  console.log(docname);
}

// now we destructure the element to get the current index
console.log("Entries With index Number");
for ([index, entries] of Doctors.entries()) {
  console.log(`staff Member: ${index + 1} and their Name is: ${entries}`);
}
