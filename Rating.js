const numberButtons = document.querySelectorAll('.number-btn');
        const submitButton = document.getElementById('submit-btn');

        numberButtons.forEach(button => {
            button.addEventListener('click', function() {
                localStorage.setItem('selectedScore', this.getAttribute('data-score'));
            });
        });

        submitButton.addEventListener('click', function() {
            window.location.href = 'rating2.html';
        });
