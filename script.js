// Global original array
var arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.


// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}


// Print all the employees which have the profession of developer.
function PrintDeveloper() {
  //Write your code here , just console.log
  for(let i=0; i<arr.length; i++){
    // check if value of profession key of each object is developer or not
    if(arr[i].profession.toLowerCase() == "developer"){
      // if yes print on console it
      console.log(arr[i]);
    }
  }

  // for (let obj of arr){
  //   if(obj.profession == "developer"){
  //     console.log(obj);
  //   }
  // }
  
}

// Make another such employee object and append that in this array.
function addData() {
  //Write your code here, just console.log
  // Made another employee object and append that in this array
  let employee = {id:4,name:"susan", age:"20", profession:"intern"};
  //append new object at the end of array by using push method of array
  arr.push(employee);

  consoleArr();
}


// Remove the object where the profession is admin.
function removeAdmin() {
  //Write your code here, just console.log

  for(let i=0; i<arr.length; i++){
    // // check if value of profession key of each object is "admin" or not
    if(arr[i].profession.toLowerCase() == "admin"){
      // if yes remove the object from array
      arr.splice(i, 1);
    }
  }
  consoleArr();

}

// Make another array of such employees and concat that in the original array.
function concatenateArray() {
  //Write your code here, just console.log

  // Declare another array of such employees
  let newEmployeeArray = [
    { id: 5, name: 'pawan', age: 18, profession: 'team lead' },
    { id: 6, name: 'shraddha', age: 20, profession: 'developer' },
    { id: 7, name: 'sharon', age: 19, profession: 'admin' },
  ];
  // concat new array in the original array using concat method.
  arr = arr.concat(newEmployeeArray);
  consoleArr();
}


