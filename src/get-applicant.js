function getApplicant(formData) {
    //convert data into variables
    const age = parseInt(formData.get('age'));
    const flossed = formData.get('flossed') === 'yes';
    console.log(formData.get('flossed'));
    const wellActually = formData.get('well-actually') === 'yes';
    const fryCorrection = formData.get('fry-correction') === 'yes';
    const microwaveFish = parseInt(formData.get('microwave-fish'));
    
    //make our object literal
    const applicant = {
        name: formData.get('name'),
        age: age,
        flossed: flossed,
        wellActually: wellActually,
        origin: formData.getAll('origin'),
        fryCorrection: fryCorrection,
        favoriteShow: formData.get('favorite-show'),
        microwaveFish: microwaveFish,
        whyYou: formData.get('why-you')
    };
    return applicant;
}

export default getApplicant;