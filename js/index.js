$(function () {
  $("#loading").animate({ opacity: "0px" }, 200, function () {
    $("#loading").remove();
  });
  let sideInnerwidth = $("#sideNav").outerWidth();
  $("#sideNav").css("left", -sideInnerwidth);
  $("#sideNav i.fa-xmark").css("display", "none");

  $("#sideNav i.fa-xmark").click(function () {
    $("#sideNav").animate({ left: -sideInnerwidth }, 500);
    $("#sideNav i.fa-xmark").css("display", "none");
    $("#sideNav i.fa-bars").css("display", "block");
    $('li.hid1').animate({opacity:'0'},20,function(){
      $('li.hid2').animate({opacity:'0'},20,function(){
        $('li.hid3').animate({opacity:'0'},20,function(){
          $('li.hid4').animate({opacity:'0'},20,function(){
            $('li.hid5').animate({opacity:'0'},20,function(){
        
            })
          })
        })
      })
    })
  });
  $("#sideNav i.fa-bars").click(function () {
    if ($(".side-inner").css("left") != sideInnerwidth) {
      $("#sideNav").animate({ left: "0px" }, 500);
      $("#sideNav i.fa-bars").css("display", "none");
      $("#sideNav i.fa-xmark").css("display", "block");
       $('li.hid1').animate({opacity:'1'},200,function(){
        $('li.hid2').animate({opacity:'1'},200,function(){
          $('li.hid3').animate({opacity:'1'},200,function(){
            $('li.hid4').animate({opacity:'1'},200,function(){
              $('li.hid5').animate({opacity:'1'},200,function(){
          
              })
            })
          })
        })
      })
    }
  });
});

allRecipes = [];
async function getmeals() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let finalData = await response.json();
  allRecipes = finalData.meals;

  displayMeals(allRecipes);
}
allCategory = [];
async function getCategory() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let finalData = await response.json();
  allCategory = finalData.categories;

  displayCategory(allCategory);
}
let categoriess=[]
async function getCategoryMeals(catMeal) {

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catMeal}`)
  let finalData =await response.json();
   categoriess =finalData.meals;
   console.log(categoriess);
  displayMeals(categoriess)
  }
async function getDetials(mealID) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  );
  let finalData = await response.json();
  let allDetials = finalData.meals[0];

  displayDetails(allDetials);
}
let allArea = [];
async function getArea() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let finalData = await response.json();
  allArea = finalData.meals;

  displayArea(allArea);
}
let allAreaMeals = [];
async function getAreaMeals(area) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  let finalData = await response.json();
  allAreaMeals = finalData.meals;

  displayAreaMeals(allAreaMeals);
}
let allIngredient = [];
async function getIngredient() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let finalData = await response.json();
  allIngredient = finalData.meals;

  displayIngred(allIngredient);
}
let allIngredientMeals = [];
async function getIngredientMeals(category) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${category}`
  );
  let finalData = await response.json();
  allIngredientMeals = finalData.meals;
console.log('akfjdklajsl');
 displayIngredMeals(allIngredientMeals);
}
async function searchByName(term) {
 
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
  response = await response.json()

  response.meals ? displayMealsSrc(response.meals) : displayMealsSrc([])


}

async function searchByFLetter(term) {
  
  term == "" ? term = "a" : "";
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
  response = await response.json()

  response.meals ? displayMealsSrc(response.meals) : displayMealsSrc([])

}

getmeals()
// getDetials()
// getIngredientMeals('chicken')
// getCategoryMeals('Seafood')

function displayMeals(arr) {

  contain = ``;
  for (let i = 0; i < arr.length; i++) {
    contain += `

   <div onclick="getDetials('${arr[i].idMeal}')" class="relative imageLayer  cursor-pointer">

        <img src="${arr[i].strMealThumb}" class="w-full rounded-lg" alt="">

        <div id="mealDetials" class="absolute top-0 bottom-0 end-0 start-0 layer rounded-lg">
          <h3 class="absolute top-32 text-3xl fw-bolder ms-4">${arr[i].strMeal}</h3>
        </div>

      </div>`;
  }
  document.getElementById("rowMeals").innerHTML = contain;
  document.getElementById('contactID').innerHTML=``;
 

}
function displayMealsSrc(arr) {

  contain = ``;
  for (let i = 0; i < arr.length; i++) {
    contain += `

   <div onclick="getDetials('${arr[i].idMeal}')" class="relative imageLayer  cursor-pointer">

        <img src="${arr[i].strMealThumb}" class="w-full rounded-lg" alt="">

        <div id="mealDetials" class="absolute top-0 bottom-0 end-0 start-0 layer rounded-lg">
          <h3 class="absolute top-32 text-3xl fw-bolder ms-4">${arr[i].strMeal}</h3>
        </div>

      </div>`;
  }
  document.getElementById("rowMeals").innerHTML = contain;
  document.getElementById('contactID').innerHTML=``;
 
 
 

}

function displayCategory(arr) {
  
  contain = ``;
  for (let i = 0; i < arr.length; i++) {
    contain += `
    <div onclick="getCategoryMeals('${arr[i].strCategory}')" class="relative imageLayer cursor-pointer">
 
         <img src="${arr[i].strCategoryThumb}" class="w-full rounded-lg" alt="">
 
         <div class="absolute top-0 bottom-0 end-0 start-0 layer rounded-lg text-center p-1">
        
           <h3 class="text-center text-3xl fw-bolder mb-1">${arr[i].strCategory}</h3>
          
           <p class= "line-clamp-3" >${arr[i].strCategoryDescription}</p>

           
         </div>
 
       </div>`;
  }
  document.getElementById("rowMeals").innerHTML = contain;
  document.getElementById('contactID').innerHTML=``;
  document.getElementById('searchID').innerHTML=``;


}

function displayDetails(arr) {
  let coar = ``;
  for (let y = 0; y < 10; y++) {
    coar += ` <li class="px-10 py-2 bg-sky-200 rounded-lg  text-black">
        
             ${arr[`strMeasure${y}`]} ${arr[`strIngredient${y}`]}
        
            </li>`;
   }

  contain = `
    <div class="col-span-1 ">
    <img src="${arr.strMealThumb}"   class="w-full rounded-lg">
    <h3 class="text-3xl font-bold ">${arr.strMeal}</h3>
  </div>
   <div class="col-span-3 text-white ms-14">
      <h3 class="text-3xl font-bold mb-7">Instructions</h3>
      <p> ${arr.strInstructions}</p>
      <h4 class="text-2xl font-semibold mt-3">Area : ${arr.strArea}</h4>   
      <h4 class="text-2xl font-semibold">Category : ${arr.strCategory}</h4>   
      <div>
        <h4 class="text-2xl font-semibold mb-5">Recipes : </h4> 
        <ul class='flex flex-wrap gap-3 m-3'>${coar}</ul>

      </div>
      <div>
        <h4 class="text-2xl font-semibold mt-10 mb-5">Tags : </h4>  
        <span class="px-10 py-2 bg-red-200 rounded-lg text-black">${arr.strTags}</span> 

      </div>
      <div class="flex mt-10 ">
        <span class="px-10 py-2 bg-green-500 rounded-lg text-black"><a href="${arr.strSource}">Source</a> </span> 
        <span class="px-10 py-2 ms-4 bg-red-500 rounded-lg text-black"><a href="${arr.strYoutube}">Youtube</a> </span> 

      </div> 
  </div>`;
  document.getElementById("rowMeals").innerHTML = contain;
  document.getElementById('contactID').innerHTML=``;
  document.getElementById('searchID').innerHTML=``;


}

function displayArea(arr) {
  contain = ``;
  for (let i = 0; i < arr.length; i++) {
    contain += `
    <div  onclick="getAreaMeals('${arr[i].strArea}')" class="cursor-pointer rounded-2 text-center  text-white">
    <i class="fa-solid fa-house-laptop text-[80px] font-extrabold"></i>
      <h3 class="text-3xl">${arr[i].strArea}</h3>

  </div>`;
  }
  document.getElementById("rowMeals").innerHTML = contain;
  document.getElementById('contactID').innerHTML=``;
  document.getElementById('searchID').innerHTML=``;


}
function displayAreaMeals(arr) {
  contain = ``;
  for (let i = 0; i < arr.length; i++) {
    contain += `
    <div onclick="getDetials(${arr[i].idMeal})" class="relative imageLayer  cursor-pointer">

    <img src="${arr[i].strMealThumb}" class="w-full rounded-lg" alt="">

    <div id="mealDetials" class="absolute top-0 bottom-0 end-0 start-0 layer rounded-lg">
      <h3 class="absolute top-32 text-3xl fw-bolder ms-4">${arr[i].strMeal}</h3>
    </div>

  </div>`;
  }
  document.getElementById("rowMeals").innerHTML = contain;
  document.getElementById('contactID').innerHTML=``;
  document.getElementById('searchID').innerHTML=``;


}


function displayIngred(arr) {
  contain = ``;
  for (let i = 0; i <25; i++) {
    contain += `
  <div  onclick="getIngredientMeals('${arr[i].strIngredient}')" class="text-center text-white cursor-pointer">
 
  <i class="fa-solid fa-drumstick-bite fa- text-[80px] font-extrabold"></i>
    <h3 class="text-center text-3xl fw-bolder mb-1">${arr[i].strIngredient}</h3>
   
    <p >${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>

    
  </div>

</div>
  
  `;
  }
  document.getElementById("rowMeals").innerHTML = contain;
  document.getElementById('contactID').innerHTML=``;
  document.getElementById('searchID').innerHTML=``;


}


function displayIngredMeals(arr) {
  contain = ``;
  for (let i = 0; i < arr.length; i++) {
    contain += `
    <div onclick="getDetials(${arr[i].idMeal})" class="relative imageLayer  cursor-pointer">

    <img src="${arr[i].strMealThumb}" class="w-full rounded-lg" alt="">

    <div id="mealDetials" class="absolute top-0 bottom-0 end-0 start-0 layer rounded-lg">
      <h3 class="absolute top-32 text-3xl fw-bolder ms-4">${arr[i].strMeal}</h3>
    </div>

  </div>`;
  }
  document.getElementById("rowMeals").innerHTML = contain;
  document.getElementById('contactID').innerHTML=``;
  document.getElementById('searchID').innerHTML=``;


}
function displaySearch(){

  let contain=`
  


`
document.getElementById('rowMeals').innerHTML=` `;
document.getElementById('contactID').innerHTML=contain;

}

let submitBtn;
function displayContact(){
  let contain =`
  <div class="w-full mx-auto flex flex-wrap justify-between gap-5 items-center container">

  <div class=" md:w-[49%] w-full mx-auto text-white">
    <input onkeyup="inputsValidation()" id="nameInput" type="text" class="p-3 rounded-lg bg-black border border-white border-5  w-full " placeholder="Enter Your Name">
    <div id="nameAlert" class="bg-red-400 bg-opacity-70  w-full p-3 rounded-lg  mt-2 hidden">
    Special characters and numbers not allowed
  </div>
  </div>
  <div class=" md:w-[49%] w-full mx-auto text-white">
    <input onkeyup="inputsValidation()" id="emailInput" type="email" class="p-3 rounded-lg bg-black border border-white border-5  w-full " placeholder="Enter Your Email ">
    <div  id="emailAlert" class="bg-red-400 bg-opacity-70  w-full p-3 rounded-lg  mt-2 hidden">
      Email not valid *exemple@yyy.zzz
  </div>
  </div>
  <div class=" md:w-[49%] w-full mx-auto text-white">
    <input onkeyup="inputsValidation()" id="phoneInput" type="number" class="p-3 rounded-lg bg-black border border-white border-5  w-full " placeholder="Enter Your Phone ">
    <div id="phoneAlert" class="bg-red-400 bg-opacity-70  w-full p-3 rounded-lg  mt-2 hidden">
    Enter valid Phone Number
  </div>
  </div>
  <div class=" md:w-[49%] w-full mx-auto text-white">
    <input onkeyup="inputsValidation()" id="ageInput" type="number" class="p-3 rounded-lg bg-black border border-white border-5  w-full " placeholder="Enter Your Age ">
    <div id="ageAlert" class="bg-red-400 bg-opacity-70  w-full p-3 rounded-lg  mt-2 hidden">
    Enter valid age
  </div>
  </div>
  <div class=" md:w-[49%] w-full mx-auto text-white">
    <input onkeyup="inputsValidation()" id="passwordInput" type="password" class="p-3 rounded-lg bg-black border border-white border-5  w-full " placeholder="Enter Your Password ">
    <div id="passwordAlert" class="bg-red-400 bg-opacity-70  w-full p-3 rounded-lg  mt-2 hidden">
    Enter valid password *Minimum eight characters, at least one letter and one number:*
  </div>
  </div>
  <div class=" md:w-[49%] w-full mx-auto text-white">
    <input onkeyup="inputsValidation()" id="repassword" type="password" class="p-3 rounded-lg bg-black border border-white border-5  w-full " placeholder="Repassword ">
    <div id="repasswordAlert" class="bg-red-400 bg-opacity-70  w-full p-3 rounded-lg  mt-2 hidden">
    Enter valid repassword  
    </div>
  </div>
    <button id="submitBtn" disabled="true" type="submit" class="px-7 py-3 mt-5 rounded-xl  border-2 border-red-700 text-red-700 mx-auto bg-black">Submit</button>


    

        </div>`
        document.getElementById('rowMeals').innerHTML=` `;
        document.getElementById('searchID').innerHTML=``;
        document.getElementById('contactID').innerHTML=contain;




submitBtn = document.getElementById("submitBtn")


document.getElementById("nameInput").addEventListener("focus", () => {
    nameInputTouched = true
})

document.getElementById("emailInput").addEventListener("focus", () => {
    emailInputTouched = true
})

document.getElementById("phoneInput").addEventListener("focus", () => {
    phoneInputTouched = true
})

document.getElementById("ageInput").addEventListener("focus", () => {
    ageInputTouched = true
})

document.getElementById("passwordInput").addEventListener("focus", () => {
    passwordInputTouched = true
})

document.getElementById("repasswordInput").addEventListener("focus", () => {
    repasswordInputTouched = true
})
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
if (nameInputTouched) {
    if (nameValidation()) {
        document.getElementById("nameAlert").classList.replace("block", "hidden")

    } else {
        document.getElementById("nameAlert").classList.replace("hidden", "block")

    }
}
if (emailInputTouched) {

    if (emailValidation()) {
        document.getElementById("emailAlert").classList.replace("block", "hidden")
    } else {
        document.getElementById("emailAlert").classList.replace("hidden", "block")

    }
}

if (phoneInputTouched) {
    if (phoneValidation()) {
        document.getElementById("phoneAlert").classList.replace("block", "hidden")
    } else {
        document.getElementById("phoneAlert").classList.replace("hidden", "block")

    }
}

if (ageInputTouched) {
    if (ageValidation()) {
        document.getElementById("ageAlert").classList.replace("block", "hidden")
    } else {
        document.getElementById("ageAlert").classList.replace("hidden", "block")

    }
}

if (passwordInputTouched) {
    if (passwordValidation()) {
        document.getElementById("passwordAlert").classList.replace("block", "hidden")
    } else {
        document.getElementById("passwordAlert").classList.replace("hidden", "block")

    }
}
if (repasswordInputTouched) {
    if (repasswordValidation()) {
        document.getElementById("repasswordAlert").classList.replace("block", "hidden")
    } else {
        document.getElementById("repasswordAlert").classList.replace("hidden", "block")

    }
}


if (nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()) {
    submitBtn.removeAttribute("disabled")
} else {
    submitBtn.setAttribute("disabled", true)
}
}

function nameValidation() {
return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}




$(function () {
  $("#categoryLink").click(function () {
    getCategory();
  });
  $("#areaLink").click(function(){
    getArea();
  })
  $("#IngredLink").click(function(){
    getIngredient();
  })
  $("#ContactUs").click(function(){
    displayContact();
  })
  $("#searchLink").click(function(){
    $('.srcInput').css({'display':'block'})
    displaySearch();
  })
  
});