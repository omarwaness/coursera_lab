
function submitFeedback() {
    // constants to store the information
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experince = document.getElementById('experince').value;

    alert('Thank you for your valuable feedback');

    // display the information after the submission
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperince').innerHTML = experince;

    // only display after submission
    document.getElementById('userInfo').style.display = 'block';
}


// assign the button to this vriable
const submitButton = document.getElementById('submitBtn');
// how use a unction vriable outside???
submitButton.onclick = submitFeedback;


// press enter to submit the info alternative to pressing the submit button
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });