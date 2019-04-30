const test = QUnit.test;

QUnit.module('applicant api');

test('creates applicant api test', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const applicant = {
        name: 'SongeBob'
    };

    //Act 
    // Call the function you're testing and set the result to a const
 
    //Assert
    assert.deepEqual(result, applicant);
});
