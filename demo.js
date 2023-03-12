let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacter(event) {
  let enteredText = event.target.value;
  let enteredTextLenght = enteredText.length;

  let remainingCharacters = maxAllowedChars - enteredTextLenght;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacter);
