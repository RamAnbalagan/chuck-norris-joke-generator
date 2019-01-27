

document.querySelector('.get-jokes')
        .addEventListener('click',getJokes);


function getJokes(e) {
  const url = 'http://api.icndb.com/jokes/random/'
  const number = document.querySelector('input[type="number"]').value;

  //create a new xhr
  const xhr = new XMLHttpRequest();

  //make the get request
  xhr.open('GET',`${url}${number}`,true);

  //handle onload
  xhr.onload = function () {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);

      let output = '';

      if(response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`
        });
      }
      else {
        output += `<li>Something went wrong</li>`;
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  //confirm and send the actual action
  xhr.send();
  e.preventDefault();
}