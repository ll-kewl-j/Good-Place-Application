//import our utility object for getting data
import applicantApi from './applicant-api.js';

//reference all the DOM elements we need to update
const name = document.getElementById('name');
const age = document.getElementById('age');
const flossed = document.getElementById('flossed');
const wellActually = document.getElementById('well-actually');
const origin = document.getElementById('origin');
const fryCorrection = document.getElementById('fry-correction');
const favoriteShow = document.getElementById('favorite-show');
const microwaveFish = document.getElementById('microwave-fish');
const whyYou = document.getElementById('why-you');

// get applicant name
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');


//get our applicant data from the api
const applicant = applicantApi.get(id);

//no applicant? no can do, head back to home page
if(!applicant) {
    window.location = './';
}

//mediate data into the elements
name.textContent = applicant.name;
age.textContent = applicant.age;
flossed.textContent = applicant.flossed;
wellActually.textContent = applicant.wellActually;
origin.textContent = applicant.origin;
fryCorrection.textContent = applicant.fryCorrection;
favoriteShow.textContent = applicant.favoriteShow;
microwaveFish.textContent = applicant.microwaveFish;
whyYou.textContent = applicant.whyYou;


