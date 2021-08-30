
const userButton = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = (users) => {
    users.forEach(user => {
        const image = document.getElementById('image');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const street = document.getElementById('street');
        const streetName = document.getElementById('street-name')
        const country = document.getElementById('country')
        image.src = `${user.picture.large}`;
        name.innerText = `${user.name.first} ${user.name.last}`;
        email.innerText = `${user.email}`;
        street.innerText = `${user.location.street.number}`;
        streetName.innerText = `${user.location.street.name}`;
        country.innerText = `${user.location.country}`
    });
}