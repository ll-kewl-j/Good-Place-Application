import applicantApi from '../src/applicant-api.js';
const test = QUnit.test;

QUnit.module('applicant api');

applicantApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('creates applicant api test', (assert) => {
    testStorage.removeItem('applicants');

    //Arrange
    // Set up your parameters and expectations
    const applicant1 = { name: 'tester1' };
    const applicant2 = { name: 'tester2' };


    //Act 
    // Call the function you're testing and set the result to a const
    applicantApi.save(applicant1);
    applicantApi.save(applicant2);

    const result = applicantApi.get(applicant2.name);
    //Assert
    assert.deepEqual(result, applicant2);
});
test('no applicants in local storage, returns empty array', (assert) => {
    testStorage.removeItem('applicants');
    // arrange
    const expected = [];

    // act
    const applicants = applicantApi.getAll();

    //assert
    assert.deepEqual(applicants, expected);
});
test('two saves return array with two items', (assert) => {
    testStorage.removeItem('applicants');
    // arrange
    const applicant1 = { name: 'tester1' };
    const applicant2 = { name: 'tester2' };
    const expected = [applicant1, applicant2];

    applicantApi.save(applicant1);
    applicantApi.save(applicant2);

    // act
    const applicants = applicantApi.getAll();

    //assert
    assert.deepEqual(applicants, expected);
});


