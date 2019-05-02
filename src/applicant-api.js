
const applicantApi = {
    storage: localStorage,
    save(applicant) {
        // get applicant array
        const applicants = applicantApi.getAll();
        //add this applicant to the array 
        applicants.push(applicant);
        //serialize JSON
        const json = JSON.stringify(applicants);
        //save to local storage
        applicantApi.storage.setItem('applicants', json);
    },
    get(name) {
        //use getAll to fetch applicants
        const applicants = applicantApi.getAll();
        //return
        for(let i = 0; i < applicants.length; i++) {
            const applicant = applicants[i];
            if(applicant.name === name) {
                return applicant;
            }
        }
    },
    getAll() {
        //get from local storage
        const json = applicantApi.storage.getItem('applicants');
        //deserialize to object
        let applicants = JSON.parse(json);
        if(!applicants) {
            applicants = [];
        }
        return applicants;
    }

};

export default applicantApi;