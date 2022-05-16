// Change the layout of the display div from flex-row to flex-column (inherted)
export const ChangeLayout = (): void => {
  const display = document.querySelector('.display')!;
  const divList = display.querySelectorAll('div')!;

  for (const div of divList) {
    div.classList.toggle('hide');
  }

  display.classList.toggle('felx-row');

  for (const div of divList) {
    div.querySelector('p')!.classList.toggle('hide');
    div.classList.toggle('hide');
    div.classList.toggle('limitWidth');
  }
};

// Extend the display data div
export const extndDisplay = (): void => {
  const display = document.querySelector('.display')!;

  if (!display.classList.contains('extend')) {
    display.classList.toggle('extend');
    setTimeout(extndDisplay, 2000);
  } else {
    ChangeLayout();
  }
};

// Add the animation to the icons and display div
export const displayAnimation = (): void => {
  const display = document.querySelector('.display')!;
  const divList = display.querySelectorAll('div')!;
  const selectElement = document.querySelector('select')!;
  const inputElement = document.querySelector('input')!;

  if (!divList[0].querySelector('i')!.classList.contains('fa-beat-fade')) {
    for (const div of divList) {
      div.querySelector('i')!.classList.toggle('fa-beat-fade');
    }
    // Wait for data to be fetched by the API before continuing with the animation
    if (display.classList.contains('felx-row')) {
      // Set a reasonable time FOR the first iteration
      setTimeout(displayAnimation, 5000);
    } else {
      // Set a lower delay AFTER the 1st iteration
      setTimeout(displayAnimation, 1000);
    }
  } else {
    for (const div of divList) {
      div.querySelector('i')!.classList.toggle('fa-beat-fade');
    }
    if (!(selectElement.value === '') && !(inputElement.value === '')) {
      // Determine if this is the 1st iteration of the application
      if (display.classList.contains('felx-row')) {
        extndDisplay(); // Only Extend display div @ 1st iteration
      }
    } else {
      alert('Please make sure to select a country & Enter a zipcode!');
    }
  }
};
