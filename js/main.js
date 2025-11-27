// window.onload = randomNumber;
var randomNumber = 0;
var dinnerMealRecipes = [
  // Honey Garlic Salmon
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    image: "images/Honey Garlic Salmon.jpg",
    from: "Mediterranean",
    level: "Intermediate",
    require45min: true,
    rating: 4.7,
    reviews: 267,
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    nutrition: {
      calories: 380,
      carbohydrates: 36,
      fiber: 4,
      protein: 18,
      fat: 18,
      sodium: 980,
    },
    chefsTips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],
  },
  // French Onion Soup
  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "images/French Onion Soup.jpg",
    from: "Mediterranean",
    level: "Intermediate",
    require45min: true,
    rating: 4.7,
    reviews: 267,
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    nutrition: {
      calories: 380,
      carbohydrates: 36,
      fiber: 4,
      protein: 18,
      fat: 18,
      sodium: 980,
    },
    chefsTips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],
  },
  // Creamy Spaghetti Carbonara
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image: "images/Creamy Spaghetti Carbonara.jpg",
    from: "Asian",
    level: "Easy",
    require45min: false,
    rating: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],
    nutrition: {
      calories: 520,
      carbohydrates: 62,
      fiber: 3,
      protein: 28,
      fat: 18,
      sodium: 680,
    },
    chefsTips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  // Thai Green Curry
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    image: "images/Thai Green Curry.jpg",
    from: "Asian",
    level: "Intermediate",
    require45min: false,
    rating: 4.7,
    reviews: 312,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice",
    ],
    nutrition: {
      calories: 420,
      carbohydrates: 22,
      fiber: 5,
      protein: 26,
      fat: 26,
      sodium: 890,
    },
    chefsTips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  // Margherita Pizza
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: "images/Margherita Pizza.jpg",
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
// button
function randomNumber() {
  Math.round(Math.random() * 10);
}
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
// document.getElementById("randomNumberButton").addEventListener("click", randomNumber);
