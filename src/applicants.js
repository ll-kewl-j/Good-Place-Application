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
    nameCell.textContent = applicant.name;
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