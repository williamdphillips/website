function typeText(elementId, text, typingSpeed = 150, initialDelay = 1500) {
  const typingElement = document.getElementById(elementId);
  let index = 0;

  function typeCharacter() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeCharacter, typingSpeed);
    } else {
      // Immediately remove cursor after typing is done
      typingElement.classList.add("done-typing");
      removeCursor(); // Ensure this function gets called correctly
    }
  }

  function removeCursor() {
    // Ensure removal happens after one last blink cycle
    setTimeout(() => {
      typingElement.classList.add("remove-cursor");
    }, 700); // Match this delay to the blink animation duration
  }

  setTimeout(typeCharacter, initialDelay);
}
