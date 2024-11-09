const inputItself = document.querySelector('.input-itself');
const inputAddButton = document.querySelector('.input-submit-button');
const ingredientsContainer = document.querySelector('.ingredients-container');

// INPUT BUTTON

inputAddButton.addEventListener('click', e => {
    e.preventDefault();

    const ingredientItself = document.createElement('div');
    ingredientItself.classList.add('ingredient-itself');
    const ingredientItselfName = document.createElement('p');
    ingredientItselfName.classList.add('ingredient-itself-name');
    ingredientItselfName.textContent = inputItself.value;
    const ingredientItselfButton = document.createElement('button');
    ingredientItselfButton.classList.add('ingredient-itself-button');
    ingredientItselfButton.innerHTML = `
        <svg class="ingredient-itself-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    `;
    ingredientItself.appendChild(ingredientItselfName);
    ingredientItself.appendChild(ingredientItselfButton);
    ingredientsContainer.appendChild(ingredientItself);

    // REMOVING AN INGREDIENT
});