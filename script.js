document.addEventListener('DOMContentLoaded', function() {
    feather.replace();

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        menuOpen = !menuOpen;

        mobileMenuToggle.innerHTML = `<i data-feather="${menuOpen ? 'x' : 'menu'}"></i>`;
        feather.replace();
    });

});
