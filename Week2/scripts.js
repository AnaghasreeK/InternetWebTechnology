function saveRegistrationData() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const sex = document.querySelector('input[name="sex"]:checked').value;
    const dobDay = document.getElementById('dob-day').value;
    const dobMonth = document.getElementById('dob-month').value;
    const dobYear = document.getElementById('dob-year').value;
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked'))
                          .map(checkbox => checkbox.value)
                          .join(', ');
    const address = document.getElementById('address').value;

    const data = `Name: ${name}\nPassword: ${password}\nEmail: ${email}\nPhone: ${phone}\nSex: ${sex}\nDate of Birth: ${dobDay}-${dobMonth}-${dobYear}\nLanguages Known: ${languages}\nAddress: ${address}\n\n`;

    const blob = new Blob([data], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'registration_data.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = '_blank';
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function addToCart(book, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.book === book);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ book, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${book} has been added to the cart.`);
}


document.addEventListener('DOMContentLoaded', function() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    const emptyMessage = document.getElementById('empty-message');
    const totalAmountElement = document.getElementById('total-amount');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartTableBody.innerHTML = '';
        let totalAmount = 0;

        if (cart.length === 0) {
            emptyMessage.style.display = 'block';
            totalAmountElement.style.display = 'none';
        } else {
            emptyMessage.style.display = 'none';
            totalAmountElement.style.display = 'block';

            cart.forEach(item => {
                const amount = item.price * item.quantity;
                totalAmount += amount;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.book}</td>
                    <td>Rs ${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>Rs ${amount.toFixed(2)}</td>
                    <td><button onclick="removeFromCart('${item.book}')">Remove</button></td>
                `;
                cartTableBody.appendChild(row);
            });

            totalAmountElement.textContent = `Total Amount: Rs ${totalAmount.toFixed(2)}`;
        }
    }

    function removeFromCart(book) {
        cart = cart.filter(item => item.book !== book);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }

    window.removeFromCart = removeFromCart;

    updateCart();
});