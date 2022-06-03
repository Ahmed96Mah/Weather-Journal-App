// Add the animation to the icons and display div
export const displayAnimation = (): void => {
  const display = document.querySelector('.display')!;
  const symbols = display.querySelectorAll('.icon')!;
  const selectElement = document.querySelector('select')!;
  const inputElement = document.querySelector('input')!;
  const bar = document.querySelector('#bar')!;
  const progress = document.querySelector('#progress')!;

  if (!(selectElement.value === '') && !(inputElement.value === '')) {
    // Make sure that both coutry and zipcode are provided FIRST!
    if (!symbols[0].classList.contains('fa-beat-fade')) {
      for (const symbol of symbols) {
        symbol.classList.toggle('fa-beat-fade');
      }

      bar.classList.toggle('hide');
      bar.classList.toggle('show');
      progress.classList.toggle('full');

      // Wait for data to be fetched by the API before continuing with the animation
      setTimeout(displayAnimation, 4000);
    } else {
      for (const symbol of symbols) {
        symbol.classList.toggle('fa-beat-fade');
      }

      bar.classList.toggle('hide');
      bar.classList.toggle('show');
      progress.classList.toggle('full');
    }
  } else {
    alert('Please make sure to select a country & Enter a zipcode!');
  }
};
