function generateRandom() {
  const button = document.querySelector('button');
  const loader = document.querySelector('.loader');
  const randomNumber = document.getElementById('randomNumber');
  const errorMessage = document.getElementById('errorMessage');

  // Show the loader and hide the random number and error message
  loader.style.display = 'block';
  randomNumber.style.display = 'none';
  errorMessage.style.display = 'none';

  fetch('/6digi/random-number')
    .then(response => response.text())
    .then(data => {
      // Hide the loader and show the random number
      loader.style.display = 'none';
      randomNumber.innerHTML = `<span style="color: green;">${data}</span>`;
      randomNumber.style.display = 'block';
    })
    .catch(error => {
      // Hide the loader and show the error message
      loader.style.display = 'none';
      errorMessage.style.display = 'block';
      errorMessage.innerHTML = 'Oops! Something went wrong. Please try again later.';
    });
}
