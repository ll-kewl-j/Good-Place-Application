import getApplicant from '../src/get-applicant.js';
const test = QUnit.test;
QUnit.module('applicant created');

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
