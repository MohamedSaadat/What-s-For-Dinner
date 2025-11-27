// /*---------------------- All Recipes -----------------------*/
var dinnerMealRecipes = [
  // Shrimp Scampi
  {
    name: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    image: "images/Shrimp Scampi.jpg",
    category: "Seafood",
    level: "Easy",
    require45min: false,
    rating: 4.8,
    reviews: 356,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutrition: {
      calories: 520,
      carbohydrates: 54,
      fiber: 3,
      protein: 36,
      fat: 18,
      sodium: 620,
    },
    chefsTips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
  // Honey Garlic Salmon
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    image: "images/Honey Garlic Salmon.jpg",
    category: "Seafood",
    level: "Easy",
    require45min: false,
    rating: 4.9,
    reviews: 187,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "cloves garlic, minced",
      "tablespoon olive oil",
      "teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition: {
      calories: 380,
      carbohydrates: 28,
      fiber: 0,
      protein: 35,
      fat: 14,
      sodium: 720,
    },
    chefsTips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  // French Onion Soup
  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "images/French Onion Soup.jpg",
    category: "Mediterranean",
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
    category: "Italian",
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
      "Remove skillet category heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
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
    category: "Asian",
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
    category: "Italian",
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
  // Teriyaki Chicken Bowl
  {
    name: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    image: "images/Teriyaki Chicken Bowl.jpg",
    category: "Asian",
    level: "Easy",
    require45min: false,
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
  // Caprese Sandwich
  {
    name: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    image: "images/Caprese Sandwich.jpg",
    category: "Italian",
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
      "Remove skillet category heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
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
  // Caesar Salad
  {
    name: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    image: "images/Caesar Salad.jpg",
    category: "Mediterranean",
    level: "Easy",
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
  // Pad Thai
  {
    name: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    image: "images/Pad Thai.jpg",
    category: "Asian",
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
   // Mediterranean Quinoa Bowl
  {
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "images/Mediterranean Quinoa Bowl.jpg",
    category: "Mediterranean",
    level: "Easy",
    require45min: true,
    rating: 4.8,
    reviews: 356,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutrition: {
      calories: 520,
      carbohydrates: 54,
      fiber: 3,
      protein: 36,
      fat: 18,
      sodium: 620,
    },
    chefsTips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
];

// /*---------------------- functions -----------------------*/
// // button
function randomNumber() {
  var randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
}

// properties
function properties(randomNumberValue) {

  // name
  document.getElementById("name").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].name}
  `;
  // description
  document.getElementById("description").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].description}
  `;
  // image
  document.getElementById("recipeImage").innerHTML = `
        <img src="${dinnerMealRecipes[randomNumberValue].image}" alt="">
    `;
  // category
  document.getElementById(
    "category"
  ).innerHTML = `${dinnerMealRecipes[randomNumberValue].category}`;
  // level
  document.getElementById("level").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].level}
    `;
  // require45min
  if (dinnerMealRecipes[randomNumberValue].require45min) {
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
        <span class="fw-bold mx-1">${dinnerMealRecipes[randomNumberValue].rating}</span>
        <span class="fs-14">(${dinnerMealRecipes[randomNumberValue].reviews} reviews)</span>
    `;
  // prepTime
  document.getElementById("prepTime").innerHTML = `
        <i class="fa-solid fa-clock text-orange-600 fs-24"></i>
        <span class="d-block fs-14">Prep Time</span>
        <span class="d-block fw-bold">${dinnerMealRecipes[randomNumberValue].prepTime} min</span>
    `;
  // cookTime
  document.getElementById("cookTime").innerHTML = `
        <i class="fa-solid fa-fire-burner text-red-600 fs-24"></i>
        <span class="d-block fs-14">Cook Time</span>
        <span class="d-block fw-bold">${dinnerMealRecipes[randomNumberValue].cookTime} min</span>
    `;
  // servings
  document.getElementById("servings").innerHTML = `
        <i class="fa-solid fa-users text-blue-600 fs-24"></i>
        <span class="d-block fs-14">Servings</span>
        <span class="d-block fw-bold">${dinnerMealRecipes[randomNumberValue].servings} people</span>
    `;
}

// Instructions
function ingredients(randomNumberValue) {
  var ingredientsTab = ``;
  for (
    i = 0;
    i < dinnerMealRecipes[randomNumberValue].ingredients.length;
    i++
  ) {
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
function instructions(randomNumberValue) {
  var instructionsTab = ``;
  for (
    var i = 0;
    i < dinnerMealRecipes[randomNumberValue].instructions.length;
    i++
  ) {
    instructionsTab += `
    <li class="mb-3 d-flex align-items-center gap-3">
        <div
            class="number d-flex align-items-center justify-content-center rounded rounded-4">
            ${1 + i}
            </div>
        <div class="text">${
          dinnerMealRecipes[randomNumberValue].instructions[i]
        }</div>
    </li>
    `;
  }
  document.getElementById("instructions").innerHTML = instructionsTab;
}

// nutrition
function nutrition(randomNumberValue) {
  // calories
  document.getElementById("calories").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].nutrition.calories} kcal
    `;
  // carbohydrates
  document.getElementById("carbohydrates").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].nutrition.carbohydrates} g
    `;
  // fiber
  document.getElementById("fiber").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].nutrition.fiber} g
    `;
  // protein
  document.getElementById("protein").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].nutrition.protein} g
    `;
  // fat
  document.getElementById("fat").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].nutrition.fat} g
    `;
  // sodium
  document.getElementById("sodium").innerHTML = `
    ${dinnerMealRecipes[randomNumberValue].nutrition.sodium} mg
    `;
}

// chefsTips
function chefsTips(randomNumberValue) {
  var chefsTipsTab = ``;
  for (
    let i = 0;
    i < dinnerMealRecipes[randomNumberValue].chefsTips.length;
    i++
  ) {
    chefsTipsTab += `
    <div class="tip rounded rounded-3 d-flex align-items-center gap-3 p-3 mb-3">
        <div
            class="icon rounded rounded-circle d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-check fs-12"></i>
        </div>
        <div class="text">
            <p class="fw-semibold m-0">${dinnerMealRecipes[randomNumberValue].chefsTips[i]}</p>
        </div>
    </div>
    `;
  }
  document.getElementById("chefsTips").innerHTML = chefsTipsTab;
}
// /*---------------------- calling -----------------------*/
var randomNumberValue = randomNumber();
properties(randomNumberValue);
ingredients(randomNumberValue);
instructions(randomNumberValue);
nutrition(randomNumberValue);
chefsTips(randomNumberValue);
document.getElementById("randomNumberButton").addEventListener("click", randomNumber);
