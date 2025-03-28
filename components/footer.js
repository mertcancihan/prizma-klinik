// Footer component
function createFooter() {
    return `
    <!-- Footer -->
    <footer class="bg-header text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Prizma Klinik</h3>
                    <p class="text-gray-400 mb-4">Modern diş sağlığı hizmetleri ile sağlıklı gülüşler için yanınızdayız.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Hızlı Erişim</h3>
                    <ul class="space-y-2">
                        <li><a href="${getRelativePath()}index.html" class="text-gray-400 hover:text-white transition">Ana Sayfa</a></li>
                        <li><a href="${getRelativePath()}tedaviler.html" class="text-gray-400 hover:text-white transition">Tedavilerimiz</a></li>
                        <li><a href="${getRelativePath()}hakkimizda.html" class="text-gray-400 hover:text-white transition">Hakkımızda</a></li>
                        <li><a href="${getRelativePath()}ekibimiz.html" class="text-gray-400 hover:text-white transition">Ekibimiz</a></li>
                        <li><a href="${getRelativePath()}iletisim.html" class="text-gray-400 hover:text-white transition">İletişim</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Tedavilerimiz</h3>
                    <ul class="space-y-2">
                        <li><a href="${getRelativePath()}tedaviler/estetik-dis-hekimligi.html" class="text-gray-400 hover:text-white transition">Estetik Diş Hekimliği</a></li>
                        <li><a href="${getRelativePath()}tedaviler/restoratif-endodonti.html" class="text-gray-400 hover:text-white transition">Restoratif ve Endodonti</a></li>
                        <li><a href="${getRelativePath()}tedaviler/protetik-tedaviler.html" class="text-gray-400 hover:text-white transition">Protetik Tedaviler</a></li>
                        <li><a href="${getRelativePath()}tedaviler/ortodontik-tedaviler.html" class="text-gray-400 hover:text-white transition">Ortodontik Tedaviler</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">İletişim</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt mt-1 mr-2"></i>
                            <span>Atatürk Cad. No:123 Merkez/İstanbul</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone-alt mr-2"></i>
                            <span>+90 506 991 93 17</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope mr-2"></i>
                            <span>prizmaadsp@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; ${new Date().getFullYear()} Prizma Klinik. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </footer>
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

// Footer'ı sayfaya ekler
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
}

// Sayfa yüklendiğinde footer'ı yükle
document.addEventListener('DOMContentLoaded', loadFooter); 