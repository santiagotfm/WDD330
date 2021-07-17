// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the form contains valid data, we let it submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent =
      `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }
  // Set the styling appropriately
  emailError.className = 'error active';
}

async function getUsers() {
  let url = 'users.json';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

// const users = await getUsers();
// localStorage.setItem("users", JSON.stringify(usersList));


// let usersList = [];

if (localStorage.getItem('users')) {
  usersList = JSON.parse(localStorage.getItem('users'));
  // console.log(users);
  console.log(usersList);
}

renderUsers(usersList);

async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(user => {

    if (usersList[user.id] != null) {
      user.email = usersList[user.id].email;
    }

    let htmlSegment = `<div class="user">
    <h2>${user.firstName} ${user.lastName}</h2>
    <div class="email"><a id="${user.id}" href="email:${user.email}">${user.email}</a></div>
    <input class="newEmail" id="${user.id}" type="text" name="email">
    <button class="editEmail" id="${user.id}">Change Email</button>
    </div>`;

    html += htmlSegment;

    let container = document.querySelector('.container');
    container.innerHTML = html;

    if (usersList.length < 2) {
      usersList.push(user);
      console.log(usersList);
      localStorage.setItem("users", JSON.stringify(usersList));
    }
  });

  if (document.querySelector('.editEmail') != null) {
    let selectedButtons = document.querySelectorAll('.editEmail');

    selectedButtons.forEach((selectedButton) => {
      selectedButton.addEventListener("click", (e) => {
        let selectedId = selectedButton.id;
        let newEmail = document.querySelector('input[id="' + selectedId + '"]');
        document.querySelector('a[id="' + selectedId + '"]').innerHTML = newEmail.value;
        document.querySelector('a[id="' + selectedId + '"]').href = "email:" + newEmail.value;
        document.querySelector('input[id="' + selectedId + '"]').value = "";
        console.log(document.querySelector('a[id="' + selectedId + '"]').innerHTML);
        usersList[selectedId].email = document.querySelector('a[id="' + selectedId + '"]').innerHTML;
        console.log(usersList[selectedId].email);
        localStorage.setItem("users", JSON.stringify(usersList));
        console.log(usersList);
      });
    });
  }
}

document.querySelector('#show').addEventListener("click", (e) => {
  usersList.splice(email);
  renderUsers();
  console.log(usersList);
});