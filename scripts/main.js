const inputItself = document.querySelector('.input-itself');
const inputAddButton = document.querySelector('.input-submit-button');
const ingredientsContainer = document.querySelector('.ingredients-container');
const popUpMessageContainer = document.querySelector('.pop-up-error-message');
const allIngredients = [];

// INPUT BUTTON

inputAddButton.addEventListener('click', e => {
    e.preventDefault();

    if (inputItself.value.length > 0) {
        ingredientsContainer.innerHTML += `
            <div class="ingredient-itself">
                <p class="ingredient-itself-name">${inputItself.value}</p>
                <button class="ingredient-itself-button">
                    <svg class="ingredient-itself-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        `;

        // POP UP MESSAGE
        popUpMessageContainer.classList.remove('pop-up-error-message-active');

        // EMPTYING THE INPUT'S VALUE
        inputItself.value = '';

        // REMOVING AN INGREDIENT
        const ingredientItself = document.querySelectorAll('.ingredient-itself');
        const removeAnIngredientButton = document.querySelectorAll('.ingredient-itself-button');

        for (let i = 0; i < removeAnIngredientButton.length; i++) {
            removeAnIngredientButton[i].addEventListener('click', () => {
                ingredientsContainer.removeChild(ingredientItself[i]);
            });
        };
    } else {
        popUpMessageContainer.classList.add('pop-up-error-message-active');
    };
});


// SEARCH

inputItself.addEventListener('input', () => {
    getFoodRecipe();
});

window.addEventListener('DOMContentLoaded', getFoodRecipe)

async function getFoodRecipe() {
    const response = await fetch('https://api.spoonacular.com/recipes/complexSearch');
    const jsonData = await response.json();
    console.log(jsonData);
}