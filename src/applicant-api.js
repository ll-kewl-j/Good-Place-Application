
const applicantApi = {
    save(applicant) {
        //serialize JSON
        const json = JSON.stringify(applicant);
        //save to local storage
        localStorage.setItem('applicant', json);
    },
    get() {
        //get from local stoage
        const json = localStorage.getItem('applicant');
        //deserialize
        const applicant = JSON.parse(json);
        //return
        return applicant;
    }

};

export default applicantApi;