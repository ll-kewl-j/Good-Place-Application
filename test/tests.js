const test = QUnit.test;
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

test('creates applicant from form data', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Erin Gurley',
        age: 100,
        flossed: true,
        wellActually: true,
        origin: ['florida'],
        fryCorrection: true,
        favoriteShow: 'Duck Dynasty',
        microwaveFish: 5,
        whyYou: 'Because I am rad',
    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('age', expected.age);
    formData.set('flossed', 'yes');
    formData.set('well-actually', 'yes');
    formData.set('origin', expected.origin);
    formData.set('fry-correction', 'yes');
    formData.set('favorite-show', expected.favoriteShow);
    formData.set('microwave-fish', expected.microwaveFish);
    formData.set('why-you', expected.whyYou);

    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getApplicant(formData);
    //Assert
    assert.deepEqual(applicant, expected);
});