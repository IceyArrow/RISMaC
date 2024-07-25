document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', function() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                // Scrolling down
                header.style.top = '-100px'; // Adjust to the height of the header
            } else if (scrollTop < lastScrollTop) {
                // Scrolling up
                header.style.top = '0';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });
    }
});
