export const listHistory = async () => {
  const div = document.querySelector('#history');
  div.innerHTML = '';
  const request = await fetch('/weather');
  try {
    let iteration = 1;
    const sections = await request.json();
    let docFragment = document.createDocumentFragment();
    const iClasses = ['fa-solid', 'fa-style', 'icon'];
    for (const sec of sections) {
      let parag = document.createElement('p');
      parag.textContent = `Reading #${iteration}`;
      parag.classList.add('header');
      docFragment.appendChild(parag);
      const divInstance = document.createElement('div');
      divInstance.classList.add('instance');
      divInstance.classList.add('hide');
      // Create Location div
      const div1 = document.createElement('div');
      const iElem1 = document.createElement('i');
      iElem1.classList.add('fa-location-dot');
      for (const iClass of iClasses) {
        iElem1.classList.add(`${iClass}`);
      }
      div1.appendChild(iElem1);
      const div1Parag1 = document.createElement('p');
      div1Parag1.classList.add('title');
      div1Parag1.textContent = 'Location';
      div1.appendChild(div1Parag1);
      const div1Parag2 = document.createElement('p');
      div1Parag2.classList.add('value');
      div1Parag2.textContent = sec['loc'];
      div1.appendChild(div1Parag2);
      divInstance.appendChild(div1);
      // Create Temperature div
      const div2 = document.createElement('div');
      const iElem2 = document.createElement('i');
      iElem2.classList.add('fa-temperature-half');
      for (const iClass of iClasses) {
        iElem2.classList.add(`${iClass}`);
      }
      div2.appendChild(iElem2);
      const div2Parag1 = document.createElement('p');
      div2Parag1.classList.add('title');
      div2Parag1.textContent = 'Temp';
      div2.appendChild(div2Parag1);
      const div2Parag2 = document.createElement('p');
      div2Parag2.classList.add('value');
      div2Parag2.textContent = `${sec['temp']}  °F`;
      div2.appendChild(div2Parag2);
      divInstance.appendChild(div2);
      // Create Wind div
      const div3 = document.createElement('div');
      const iElem3 = document.createElement('i');
      iElem3.classList.add('fa-wind');
      for (const iClass of iClasses) {
        iElem3.classList.add(`${iClass}`);
      }
      div3.appendChild(iElem3);
      const div3Parag1 = document.createElement('p');
      div3Parag1.classList.add('title');
      div3Parag1.textContent = 'Wind';
      div3.appendChild(div3Parag1);
      const div3Parag2 = document.createElement('p');
      div3Parag2.classList.add('value');
      div3Parag2.textContent = sec['wind'];
      div3.appendChild(div3Parag2);
      divInstance.appendChild(div3);
      // Create Humidity div
      const div4 = document.createElement('div');
      const iElem4 = document.createElement('i');
      iElem4.classList.add('fa-droplet');
      for (const iClass of iClasses) {
        iElem4.classList.add(`${iClass}`);
      }
      div4.appendChild(iElem4);
      const div4Parag1 = document.createElement('p');
      div4Parag1.classList.add('title');
      div4Parag1.textContent = 'Humidity';
      div4.appendChild(div4Parag1);
      const div4Parag2 = document.createElement('p');
      div4Parag2.classList.add('value');
      div4Parag2.textContent = `${sec['humid']}%`;
      div4.appendChild(div4Parag2);
      divInstance.appendChild(div4);
      // Create Feel div
      const div5 = document.createElement('div');
      const iElem5 = document.createElement('i');
      iElem5.classList.add('fa-user');
      for (const iClass of iClasses) {
        iElem5.classList.add(`${iClass}`);
      }
      div5.appendChild(iElem5);
      const div5Parag1 = document.createElement('p');
      div5Parag1.classList.add('title');
      div5Parag1.textContent = 'Feel';
      div5.appendChild(div5Parag1);
      const div5Parag2 = document.createElement('p');
      div5Parag2.classList.add('value');
      div5Parag2.textContent = sec['feel'];
      div5.appendChild(div5Parag2);
      divInstance.appendChild(div5);
      iteration += 1;
      docFragment.appendChild(divInstance);
      const hr = document.createElement('hr');
      docFragment.appendChild(hr);
    }
    div.appendChild(docFragment);
  } catch (err) {
    throw new Error(`Error, ${err}`);
  }
};
