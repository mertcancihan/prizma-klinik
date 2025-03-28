// Footer component
function createFooter() {
    return `
    <!-- Footer -->
    <footer class="bg-header text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4" data-translate="footer.about.title">Prizma Klinik</h3>
                    <p class="text-gray-400 mb-4" data-translate="footer.about.text">Modern diş sağlığı hizmetleri ile sağlıklı gülüşler için yanınızdayız.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition" data-translate="footer.social.facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition" data-translate="footer.social.instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition" data-translate="footer.social.twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4" data-translate="footer.hours.title">Hızlı Erişim</h3>
                    <ul class="space-y-2">
                        <li><a href="${getRelativePath()}index.html" class="text-gray-400 hover:text-white transition" data-translate="footer.hours.home">Ana Sayfa</a></li>
                        <li><a href="${getRelativePath()}tedaviler.html" class="text-gray-400 hover:text-white transition" data-translate="footer.hours.treatments">Tedavilerimiz</a></li>
                        <li><a href="${getRelativePath()}hakkimizda.html" class="text-gray-400 hover:text-white transition" data-translate="footer.about.title">Hakkımızda</a></li>
                        <li><a href="${getRelativePath()}ekibimiz.html" class="text-gray-400 hover:text-white transition" data-translate="footer.about.team">Ekibimiz</a></li>
                        <li><a href="${getRelativePath()}iletisim.html" class="text-gray-400 hover:text-white transition" data-translate="footer.contact.title">İletişim</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4" data-translate="footer.social.title">Tedavilerimiz</h3>
                    <ul class="space-y-2">
                        <li><a href="${getRelativePath()}tedaviler/estetik-dis-hekimligi.html" class="text-gray-400 hover:text-white transition" data-translate="footer.social.esthetics">Estetik Diş Hekimliği</a></li>
                        <li><a href="${getRelativePath()}tedaviler/restoratif-endodonti.html" class="text-gray-400 hover:text-white transition" data-translate="footer.social.restoration">Restoratif ve Endodonti</a></li>
                        <li><a href="${getRelativePath()}tedaviler/protetik-tedaviler.html" class="text-gray-400 hover:text-white transition" data-translate="footer.social.prosthetics">Protetik Tedaviler</a></li>
                        <li><a href="${getRelativePath()}tedaviler/ortodontik-tedaviler.html" class="text-gray-400 hover:text-white transition" data-translate="footer.social.orthodontics">Ortodontik Tedaviler</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4" data-translate="footer.contact.title">İletişim</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt mt-1 mr-2"></i>
                            <span data-translate="footer.contact.address">70. Cd. No:19,Andiçen, 06936 Sincan/Ankara</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone-alt mr-2"></i>
                            <span data-translate="footer.contact.phone">+90 506 991 93 17</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope mr-2"></i>
                            <span data-translate="footer.contact.email">prizmaadsp@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p data-translate="footer.copyright">&copy; ${new Date().getFullYear()} Prizma Klinik. Tüm hakları saklıdır.</p>
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