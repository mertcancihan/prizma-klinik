// Header component
function createHeader() {
    return `
    <!-- Header -->
    <header class="bg-header shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <a href="${getRelativePath()}index.html" class="flex items-center">
                        <img src="images/logo.jpeg" alt="Prizma Klinik Logo" class="w-60">
                        <span class="-top-0.5 relative text-4xl text-white">Klinik</span>
                    </a>
                </div>
                
                <!-- Desktop Navigation -->
                <nav class="hidden md:flex space-x-8">
                    <a href="${getRelativePath()}index.html" class="text-gray-300 font-medium hover:text-white transition nav-link" data-page="home">Ana Sayfa</a>
                    <div class="relative group">
                        <button class="text-gray-300 font-medium hover:text-white transition flex items-center nav-link" data-page="treatments">
                            Tedavilerimiz
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 hidden">
                            <a href="${getRelativePath()}tedaviler/estetik-dis-hekimligi.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" data-treatment="estetik">Estetik Diş Hekimliği</a>
                            <a href="${getRelativePath()}tedaviler/restoratif-endodonti.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" data-treatment="restoratif">Restoratif ve Endodonti</a>
                            <a href="${getRelativePath()}tedaviler/protetik-tedaviler.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" data-treatment="protetik">Protetik Tedaviler</a>
                            <a href="${getRelativePath()}tedaviler/ortodontik-tedaviler.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" data-treatment="ortodontik">Ortodontik Tedaviler</a>
                            <a href="${getRelativePath()}tedaviler/cerrahi-tedaviler.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" data-treatment="cerrahi">Cerrahi Tedaviler</a>
                            <a href="${getRelativePath()}tedaviler/cene-eklemi-tedavileri.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" data-treatment="cene">Çene Eklemi Rahatsızlıkları</a>
                            <a href="${getRelativePath()}tedaviler/cocuk-dis-hekimligi.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" data-treatment="cocuk">Çocuk Diş Hekimliği</a>
                            <a href="${getRelativePath()}tedaviler/dis-eti-hastaliklari.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md" data-treatment="diseti">Diş Eti Hastalıkları</a>
                        </div>
                    </div>
                    <a href="${getRelativePath()}hakkimizda.html" class="text-gray-300 font-medium hover:text-white transition nav-link" data-page="about">Hakkımızda</a>
                    <a href="${getRelativePath()}ekibimiz.html" class="text-gray-300 font-medium hover:text-white transition nav-link" data-page="team">Ekibimiz</a>
                    <a href="${getRelativePath()}iletisim.html" class="text-gray-300 font-medium hover:text-white transition nav-link" data-page="contact">İletişim</a>
                </nav>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden text-gray-300 hover:text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Navigation -->
            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="md:hidden transform transition-all duration-300 ease-in-out mt-4 pb-4 bg-primary-color">
                <a href="${getRelativePath()}index.html" class="block py-2 px-2 text-gray-300 hover:text-white font-medium nav-link" data-page="home">Ana Sayfa</a>
                <div class="relative mobile-dropdown">
                    <button id="mobile-dropdown-button" class="w-full text-left py-2 px-2 text-gray-300 hover:text-white font-medium flex justify-between items-center nav-link" data-page="treatments">
                        Tedavilerimiz
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 mobile-dropdown-icon text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div id="mobile-dropdown-content" class="hidden pl-4 mt-1 bg-opacity-20 bg-white">
                        <a href="${getRelativePath()}tedaviler/estetik-dis-hekimligi.html" class="block py-2 px-2 text-gray-300 hover:text-white" data-treatment="estetik">Estetik Diş Hekimliği</a>
                        <a href="${getRelativePath()}tedaviler/restoratif-endodonti.html" class="block py-2 px-2 text-gray-300 hover:text-white" data-treatment="restoratif">Restoratif ve Endodonti</a>
                        <a href="${getRelativePath()}tedaviler/protetik-tedaviler.html" class="block py-2 px-2 text-gray-300 hover:text-white" data-treatment="protetik">Protetik Tedaviler</a>
                        <a href="${getRelativePath()}tedaviler/ortodontik-tedaviler.html" class="block py-2 px-2 text-gray-300 hover:text-white" data-treatment="ortodontik">Ortodontik Tedaviler</a>
                        <a href="${getRelativePath()}tedaviler/cerrahi-tedaviler.html" class="block py-2 px-2 text-gray-300 hover:text-white" data-treatment="cerrahi">Cerrahi Tedaviler</a>
                        <a href="${getRelativePath()}tedaviler/cene-eklemi-tedavileri.html" class="block py-2 px-2 text-gray-300 hover:text-white" data-treatment="cene">Çene Eklemi Rahatsızlıkları</a>
                        <a href="${getRelativePath()}tedaviler/cocuk-dis-hekimligi.html" class="block py-2 px-2 text-gray-300 hover:text-white" data-treatment="cocuk">Çocuk Diş Hekimliği</a>
                        <a href="${getRelativePath()}tedaviler/dis-eti-hastaliklari.html" class="block py-2 px-2 text-gray-300 hover:text-white" data-treatment="diseti">Diş Eti Hastalıkları</a>
                    </div>
                </div>
                <a href="${getRelativePath()}hakkimizda.html" class="block py-2 px-2 text-gray-300 hover:text-white font-medium nav-link" data-page="about">Hakkımızda</a>
                <a href="${getRelativePath()}ekibimiz.html" class="block py-2 px-2 text-gray-300 hover:text-white font-medium nav-link" data-page="team">Ekibimiz</a>
                <a href="${getRelativePath()}iletisim.html" class="block py-2 px-2 text-gray-300 hover:text-white font-medium nav-link" data-page="contact">İletişim</a>
            </div>
        </div>
    </header>
    `;
}

// Sayfa konumuna göre relatif path döndürür
function getRelativePath() {
    const path = window.location.pathname;
    if (path.includes('/tedaviler/')) {
        return '../';
    }
    return '';
}

// Header'ı sayfaya ekler
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
        
        // Aktif sayfayı işaretle
        highlightActivePage();
        
        // Mobil menü işlevselliği
        setupMobileMenu();
    }
}

// Aktif sayfayı işaretler
function highlightActivePage() {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Ana sayfa kontrolü
        if (link.dataset.page === 'home' && (path.endsWith('/') || path.endsWith('index.html'))) {
            link.classList.add('text-white');
            link.classList.add('font-bold');
            link.classList.remove('text-gray-300');
        }
        // Tedaviler sayfası kontrolü
        else if (link.dataset.page === 'treatments' && (path.includes('tedaviler') || path.includes('tedaviler.html'))) {
            link.classList.add('text-white');
            link.classList.add('font-bold');
            link.classList.remove('text-gray-300');
            
            // Eğer spesifik bir tedavi sayfasındaysak, o tedaviyi işaretle
            if (path.includes('/tedaviler/')) {
                const treatmentLinks = document.querySelectorAll('[data-treatment]');
                const treatmentName = path.split('/').pop().split('.')[0];
                
                treatmentLinks.forEach(treatmentLink => {
                    if (path.includes(treatmentLink.getAttribute('href').split('/').pop())) {
                        treatmentLink.classList.add('text-blue-600', 'bg-blue-50');
                    }
                });
            }
        }
        // Diğer sayfalar için kontrol
        else if (link.dataset.page && path.includes(link.dataset.page)) {
            link.classList.add('text-white');
            link.classList.add('font-bold');
            link.classList.remove('text-gray-300');
        }
    });
}

// Mobil menü işlevselliği
function setupMobileMenu() {
    console.log("setupMobileMenu çalıştı!");

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
        mobileMenu.classList.add('hidden', 'opacity-0', 'pointer-events-none');
    }
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            console.log("Menü butonuna tıklandı!");
            const isMenuOpen = mobileMenu.classList.contains('opacity-0');
            // Tailwind animasyonlu aç/kapat için opacity ve pointer-events kullan
            if (isMenuOpen) {
                console.log("Menü açılıyor...");
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                console.log("Menü kapanıyor...");
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            }
        });
    }

    // Mobil dropdown menü (Tedavilerimiz alt menüsü)
    const mobileDropdownButton = document.getElementById('mobile-dropdown-button');
    const mobileDropdownContent = document.getElementById('mobile-dropdown-content');

    if (mobileDropdownButton && mobileDropdownContent) {
        // **Başlangıçta menüyü kapalı yap**
        mobileDropdownContent.classList.add('opacity-0', 'pointer-events-none', 'h-0', 'overflow-hidden');

        mobileDropdownButton.addEventListener('click', function () {
            console.log("Dropdown butonuna tıklandı!");

            if (mobileDropdownContent.classList.contains('opacity-0')) {
                console.log("Dropdown açılıyor...");
                mobileDropdownContent.classList.remove('opacity-0', 'pointer-events-none', 'h-0', 'overflow-hidden');
                mobileDropdownContent.classList.add('opacity-100', 'pointer-events-auto', 'h-auto');
            } else {
                console.log("Dropdown kapanıyor...");
                mobileDropdownContent.classList.remove('opacity-100', 'pointer-events-auto', 'h-auto');
                mobileDropdownContent.classList.add('opacity-0', 'pointer-events-none', 'h-0', 'overflow-hidden');
            }
        });
    }


    // Masaüstü dropdown menüsü için
    const desktopDropdown = document.querySelector('.group');
    const dropdownButton = desktopDropdown?.querySelector('button');
    const dropdownContent = desktopDropdown?.querySelector('div[class*="absolute"]');

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Masaüstü dropdown açıldı!");
            dropdownContent.classList.toggle('hidden');
        });
    }
}


// Sayfa yüklendiğinde header'ı yükle
document.addEventListener('DOMContentLoaded', loadHeader); 