const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#%^&*_+|";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");

let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');




const generatepassword = (l, initialPassword) => {

  let pass = '';
  for(let i = 0; i<l; i++) {
    pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length))

  }
  StrengthChecker(pass);
  return pass;
  
}
function StrengthChecker(PasswordParameter){
  // We then change the badge's color and text based on the password strength

  if(strongPassword.test(PasswordParameter)) {
      strengthBadge.style.backgroundColor = "green"
      strengthBadge.textContent = 'Strong'
  } else if(mediumPassword.test(PasswordParameter)){
      strengthBadge.style.backgroundColor = 'blue'
      strengthBadge.textContent = 'Medium'
  } else{
      strengthBadge.style.backgroundColor = 'red'
      strengthBadge.textContent = 'Weak'
  }
}


password.addEventListener("input", () => {
  strengthBadge.style.display= 'b lock'
  clearTimeout(timeout);

  //We then call the StrengChecker function as a callback then pass the typed password to it

  timeout = setTimeout(() => StrengthChecker(password.value), 500);

  //Incase a user clears the text, the badge is hidden again

  if(password.value.length !== 0){
      strengthBadge.style.display != 'block'
  } else{
      strengthBadge.style.display = 'none'
  }
});

submit.addEventListener("click",() => {

  let initialPassword = empty;

  upperCase.checked ? (initialPassword += uCase): "";
  lowerCase.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";
  console.log(initialPassword)

  password.value = generatepassword(pLength.value,initialPassword)

})

copy.addEventListener("click", () => {
  if (password.value == ""){
    alert("please generate password")
  } 
    else
    {

    password.select()
    document.execCommand("copy")
    alert("password copied to clipborad");
    }

  }

)
