import getApplicant from './get-applicant.js';
import applicantApi from './applicant-api.js';

//selecting the nodes we want to use
const goodPlaceApp = document.getElementById('good-place-app');

//wiring up form event listener

goodPlaceApp.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formData = new FormData(goodPlaceApp);
    const applicant = getApplicant(formData);
    //replaced console log with a call to API object to save the API data
    applicantApi.save(applicant);
});
