const slides = document.querySelector('.slides');
        const images = document.querySelectorAll('.slides img');
        const titles = document.querySelectorAll('.titles h2');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const dotsContainer = document.getElementById('dots');

        let index = 1; // Start at the first logical slide
        const totalImages = images.length;
        const logicalSlides = totalImages - 2; // Exclude duplicates
        const slideWidth = 100;

        // Create dots dynamically
        for (let i = 0; i < logicalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dots .dot');

        function updateDots() {
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === (index - 1) % logicalSlides);
            });
        }

        function updateTitle() {
            titles.forEach((title, idx) => {
                title.classList.toggle('active', idx === (index - 1) % logicalSlides);
            });
        }

        function moveToSlide() {
            slides.style.transition = 'transform 0.5s ease-in-out';
            slides.style.transform = `translateX(-${index * slideWidth}%)`;
            updateDots();
            updateTitle();
        }

        function nextSlide() {
            index++;
            moveToSlide();
            if (index === totalImages - 1) {
                setTimeout(() => {
                    slides.style.transition = 'none';
                    index = 1;
                    slides.style.transform = `translateX(-${index * slideWidth}%)`;
                }, 500);
            }
        }

        function prevSlide() {
            index--;
            moveToSlide();
            if (index === 0) {
                setTimeout(() => {
                    slides.style.transition = 'none';
                    index = totalImages - 2;
                    slides.style.transform = `translateX(-${index * slideWidth}%)`;
                }, 500);
            }
        }

        function goToSlide(slideIndex) {
            index = slideIndex + 1; // Adjust for duplicates
            moveToSlide();
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => goToSlide(idx));
        });

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);