var randomNumber = 0;
// var randomNumber = Math.round(Math.random() * 10);
var dinnerMealRecipes = [
  // Margherita Pizza
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: "images/photo-1574071318508-1cdbab80d002.jpg",
    from: "Italian",
    level: "Intermediate",
    require45min: true,
    rating: 4.9,
    reviews: 512,
    prepTime: 90,
    cookTime: 12,
    servings: 2,
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "tablespoons olive oil",
      "cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan",
    ],
    nutrition: {
      calories: 580,
      carbohydrates: 68,
      fiber: 4,
      protein: 24,
      fat: 22,
      sodium: 920,
    },
    chefsTips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
];

/*---------------------- functions -----------------------*/
// properties
function properties(randomNumber) {
  // name
  document.getElementById("name").innerHTML = `
    ${dinnerMealRecipes[randomNumber].name}
  `;
  // description
  document.getElementById("description").innerHTML = `
    ${dinnerMealRecipes[randomNumber].description}
  `;
  // image
  document.getElementById("recipeImage").innerHTML = `
        <img class="h-100" src="${dinnerMealRecipes[randomNumber].image}" alt="">
    `;
  // from
  document.getElementById("from").innerHTML = `
    ${dinnerMealRecipes[randomNumber].from}
    `;
  // level
  document.getElementById("level").innerHTML = `
    ${dinnerMealRecipes[randomNumber].level}
    `;
  // require45min
  if (dinnerMealRecipes[randomNumber].require45min) {
    document.getElementById("require45min").innerHTML = `
        <div
            class="extended-preparation-time rounded rounded-3 bg-danger-subtle d-flex align-items-center gap-3 p-3">
            <div class="icon">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div class="text">
                <p class="fw-semibold m-0">Extended Preparation Time</p>
                <span class="fs-14 text-danger">This recipe requires more than 45 minutes to
                    prepare.
                    Plan accordingly!</span>
            </div>
        </div>
    `;
  } else {
    document.getElementById("require45min").innerHTML = ``;
  }
  // rating & reviews
  document.getElementById("rating").innerHTML = `
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        <span class="fw-bold mx-1">${dinnerMealRecipes[randomNumber].rating}</span>
        <span class="fs-14">(${dinnerMealRecipes[randomNumber].reviews} reviews)</span>
    `;
  // prepTime
  document.getElementById("prepTime").innerHTML = `
        <i class="fa-solid fa-clock text-orange-600 fs-24"></i>
        <span class="d-block fs-14">Prep Time</span>
        <span class="d-block fw-bold">${dinnerMealRecipes[randomNumber].prepTime} min</span>
    `;
  // cookTime
  document.getElementById("cookTime").innerHTML = `
        <i class="fa-solid fa-fire-burner text-red-600 fs-24"></i>
        <span class="d-block fs-14">Cook Time</span>
        <span class="d-block fw-bold">${dinnerMealRecipes[randomNumber].cookTime} min</span>
    `;
  // servings
  document.getElementById("servings").innerHTML = `
        <i class="fa-solid fa-users text-blue-600 fs-24"></i>
        <span class="d-block fs-14">Servings</span>
        <span class="d-block fw-bold">${dinnerMealRecipes[randomNumber].servings} people</span>
    `;
}

// Instructions
function ingredients(randomNumber) {
  var ingredientsTab = ``;
  for (i = 0; i < dinnerMealRecipes[randomNumber].ingredients.length; i++) {
    ingredientsTab += `
    <li class="mb-2 d-flex align-items-center gap-2">
        <div class="number d-flex align-items-center justify-content-center rounded rounded-circle">
        ${1 + i}
        </div>
        <div class="text">
        ${dinnerMealRecipes[0].ingredients[i]}
        </div>
    </li>`;
  }
  document.getElementById("ingredients").innerHTML = ingredientsTab;
}

// instructions
function instructions(randomNumber) {
  var instructionsTab = ``;
  for (
    var i = 0;
    i < dinnerMealRecipes[randomNumber].instructions.length;
    i++
  ) {
    instructionsTab += `
    <li class="mb-3 d-flex align-items-center gap-3">
        <div
            class="number d-flex align-items-center justify-content-center rounded rounded-4">
            ${1 + i}
            </div>
        <div class="text">${
          dinnerMealRecipes[randomNumber].instructions[i]
        }</div>
    </li>
    `;
  }
  document.getElementById("instructions").innerHTML = instructionsTab;
}

// nutrition
function nutrition(randomNumber) {
  // calories
  document.getElementById("calories").innerHTML = `
    ${dinnerMealRecipes[randomNumber].nutrition.calories} kcal
    `;
  // carbohydrates
  document.getElementById("carbohydrates").innerHTML = `
    ${dinnerMealRecipes[randomNumber].nutrition.carbohydrates} g
    `;
  // fiber
  document.getElementById("fiber").innerHTML = `
    ${dinnerMealRecipes[randomNumber].nutrition.fiber} g
    `;
  // protein
  document.getElementById("protein").innerHTML = `
    ${dinnerMealRecipes[randomNumber].nutrition.protein} g
    `;
  // fat
  document.getElementById("fat").innerHTML = `
    ${dinnerMealRecipes[randomNumber].nutrition.fat} g
    `;
  // sodium
  document.getElementById("sodium").innerHTML = `
    ${dinnerMealRecipes[randomNumber].nutrition.sodium} mg
    `;
}

// chefsTips
function chefsTips(randomNumber) {
  var chefsTipsTab = ``;
  for (let i = 0; i < dinnerMealRecipes[randomNumber].chefsTips.length; i++) {
    chefsTipsTab += `
    <div class="tip rounded rounded-3 d-flex align-items-center gap-3 p-3 mb-3">
        <div
            class="icon rounded rounded-circle d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-check fs-12"></i>
        </div>
        <div class="text">
            <p class="fw-semibold m-0">${dinnerMealRecipes[randomNumber].chefsTips[i]}</p>
        </div>
    </div>
    `;
  }
  document.getElementById("chefsTips").innerHTML = chefsTipsTab;
}
/*---------------------- calling -----------------------*/
properties(randomNumber);
ingredients(randomNumber);
instructions(randomNumber);
nutrition(randomNumber);
chefsTips(randomNumber);
