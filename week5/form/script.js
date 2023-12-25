document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('myForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);


        const name = formData.get('name');
        const email = formData.get('email');

        result.innerHTML = '<p>name: ' + name + '</p>';
        result.innerHTML += '<p>email: ' + email + '</p>';

        for (const [key, value] of formData.entries()) {
            result.appendChild(document.createTextNode(key + ': ' + value + ' ' + '\n'));
        }
    });

});