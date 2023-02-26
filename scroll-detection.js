const observer = new IntersectionObserver(entries => {

    observer.observe(document.querySelector('.scroll-detection'));

    entries.forEach(entry => {
        const element = document.querySelector('.menu');

        if (entry.isIntersecting) {
        } else {
            //entry.target.classList.add('test-animation');
            element.classList.toggle('animation1');
            return;
        }
        element.classList.remove('animation1');

    });

    entries.forEach(entry => {
        const element = document.querySelector('.chevron');

        if (entry.isIntersecting) {
        } else {
            //entry.target.classList.add('test-animation');
            element.classList.toggle('animation2');
            return;
        }
        element.classList.remove('animation2');

    });
});

observer.observe(document.querySelector('.scroll-detection'))
