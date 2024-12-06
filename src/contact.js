function viewContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phone_number = document.createElement("p");
    phone_number.textContent = '(800) 321-7890';

    const address = document.createElement('p');
    address.textContent = '2673 Sunshine Av, New York, USA';

    const email = document.createElement("p");
    email.textContent = 'jazzy.pizza@gmail.com';

    contact.appendChild(phone_number);
    contact.appendChild(address);
    contact.appendChild(email);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(viewContact())
}

export default loadContact;