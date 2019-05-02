//import our utility object
import applicantApi from './applicant-api.js';

//making our cast list
const tbody = document.getElementById('applicants');

const applicants = applicantApi.getAll();

//making our for loop to loop through our applicants
for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const tr = document.createElement('tr');

    
    const nameCell = document.createElement('td');
//create the anchor link
    const link = document.createElement('a');
    
//create a search params object 
    const searchParams = new URLSearchParams();
    
//set the name key with the applicant name as the value
    searchParams.set('name', applicant.name);   

//use the formatted search string as the end of the link href
    link.href = 'applicant.html?' + searchParams.toString();

//also use the applicant's name as the display text for the link
    link.textContent = applicant.name;
    
//add the link to the name cell
    nameCell.appendChild(link);

    tr.appendChild(nameCell);

    const wellActuallyCell = document.createElement('td');
    wellActuallyCell.textContent = applicant.wellActually;
    tr.appendChild(wellActuallyCell);

    const fryCorrectionCell = document.createElement('td');
    fryCorrectionCell.textContent = applicant.fryCorrection;
    tr.appendChild(fryCorrectionCell);

    const favoriteShowCell = document.createElement('td');
    favoriteShowCell.textContent = applicant.favoriteShow;
    tr.appendChild(favoriteShowCell);

    const microwaveFishCell = document.createElement('td');
    microwaveFishCell.textContent = applicant.microwaveFish;
    tr.appendChild(microwaveFishCell);

    tbody.appendChild(tr);

}