import getApplicant from './get-applicant.js';
//selecting the nodes we want to use
const goodPlaceApp = document.getElementById('good-place-app');

//wiring up form event listener

goodPlaceApp.addEventListener('submit', (event) => {
    event.preventDefault();   
    const goodPlaceAppData = new FormData(goodPlaceApp);
});
