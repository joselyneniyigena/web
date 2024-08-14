function showDetails(name, price, description) {
    document.getElementById('part-name').innerText = name;
    document.getElementById('part-price').innerText = `Price: ${price}`;
    document.getElementById('part-description').innerText = description;
    document.getElementById('part-details').style.display = 'block';
}


function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
}
const detailsBtns = document.querySelectorAll('.details-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

detailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


