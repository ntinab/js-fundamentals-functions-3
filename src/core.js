// 1. Create a function named timerStatus
function timerStatus(remainingMinutes) {
  if (remainingMinutes === 0) {
    return "Phil's cake is ready!";
  } else if (remainingMinutes > 0) {
    return "The cake is still baking!";
  } else {
    return "You didn't set a timer!";
  }
}

// 2. Create a function named estimatePrepTime
function estimatePrepTime(ingredients, prepTimePerIngredient = 2) {
  const totalPrepTime = ingredients.length * prepTimePerIngredient;
  return totalPrepTime;
}

// 3. Create a function named calculateQuantities
function calculateQuantities(ingredients, numberOfLayers) {
  const sugarNeeded = ingredients.includes('sugar') ? numberOfLayers * 100 : 0;
  const eggsNeeded = ingredients.includes('eggs') ? numberOfLayers * 2 : 0;

  return {
    sugar: sugarNeeded,
    eggs: eggsNeeded
  };
}

// 4. Create a function named improveRecipe
function improveRecipe(recipe, portions) {
  const improvedRecipe = {};

  for (const ingredient in recipe) {
    improvedRecipe[ingredient] = recipe[ingredient] * portions;
  }

  return improvedRecipe;
}

module.exports = {
  timerStatus,
  estimatePrepTime,
  calculateQuantities,
  improveRecipe
};
