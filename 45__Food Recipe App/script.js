const MaincontainerEl = document.querySelector('.main-container')
const container = document.querySelector('.container')
// const meal_container = document.querySelector('.meals-container')

async function getRandommeal(){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const resdata = await resp.json()
    const randomMeal = resdata.meals[0]
    addRandomMealstocard(randomMeal)
    console.log(randomMeal)
    
}

async function getMealsbyId(id){
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const resdata = await resp.json()
    const Meal = resdata.meals[0]
    
    return Meal
}

function addRandomMealstocard(meal){
    mydata(meal)
    const RandomMealContainer = document.createElement('div')
    RandomMealContainer.classList.add('random-meal-container')

    RandomMealContainer.innerHTML = `
     <img src="${meal.strMealThumb}" alt="">
    <div class="bottom">
        <h5>${meal.strMeal}</h5>
        <i class="fa-regular fa-heart"></i>
    </div> 
    
    `
    MaincontainerEl.appendChild(RandomMealContainer)
    const Heartbtn = document.querySelector('.fa-heart')

    Heartbtn.addEventListener('click',function(){
        if(Heartbtn.classList.contains('fa-regular')){
            Heartbtn.setAttribute('class','fa-solid fa-heart')
            AddmealtoLocalstorage(meal.idMeal)
        }
        else{
            Heartbtn.setAttribute('class','fa-regular fa-heart')
            RemoveMealfromLocalstorage(meal.idMeal)
        }
    })
}

getRandommeal()

function AddmealtoLocalstorage(mealId){
    const MealIDs = mydata()
    localStorage.setItem('MealIDs',JSON.stringify([...MealIDs,mealId]))
    // console.log(MealIDs)
    
}

function RemoveMealfromLocalstorage(mealId){
    const MealIDs = mydata()
    localStorage.setItem('MealIDs',JSON.stringify(MealIDs.filter(id => id !== mealId)))}

function mydata(){
    const mydata = JSON.parse(localStorage.getItem('MealIDs'))
    return mydata === null ? [] : mydata
}

async function fetchFavMeals(){
    meals_container
    const mealsArray = mydata()
    let meals = []

    for(let i = 0 ; i< mealsArray.length ; i++){
        const mealId = mealsArray[i]
        meal = await getMealsbyId(mealId)
        
        Addmealtofav(meal)
        meals.push(meal)
    }
    
}

// function AddFavrecipetoCard(meal){
//     const mealscontainer = document.createElement('div')
//     mealscontainer.classList.add('meals-container')

//     mealscontainer.innerHTML = `
//     <div class="meals">
//     <img src="${meal.strMealThumb}"
//         alt="">
//     <p>${meal.strMeal}</p>
//     <i class="fa-solid fa-xmark"></i>
// </div>
    
//     `
//     container.appendChild(mealscontainer)
//     console.log(container)
//     fetchFavMeals()
//     MaincontainerEl.append(container)
// }

function Addmealtofav(meal){
    const mealcontainer = document.createElement('div')
    mealcontainer.classList.add('meals-container')
        mealcontainer.innerHTML = `
    <div class="meals">
    <img src="${meal.strMealThumb}"
        alt="">
    <p>${(meal.strMeal.slice(0,5))}...</p>
    <i class="fa-solid fa-xmark"></i>
</div>
    
    `
    fetchFavMeals(meal)
}


