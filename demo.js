const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacter(event) {
  const enteredText = event.target.value;
  const enteredTextLenght = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLenght;

  if (remainingCharacters < 10) {
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.add("warning");
  } else {
    productNameInputElement.classList.remove("warning");
    remainingCharsElement.classList.remove("warning");
  }

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacter);
