class I18n {
  constructor() {
    this.currentLanguage = 'tr'; // Default language
    this.supportedLanguages = ['tr', 'en'];
    this.translations = {
      tr: {
        "site": {
          "title": "Prizma Klinik - Diş Hekimliği Kliniği",
          "name": "Prizma Klinik",
          "tagline": "Diş Hekimliği Kliniği"
        },
        "header": {
          "free_call": "Ücretsiz Arama",
          "phone": "+90 212 345 67 89",
          "address": "Örnek Mahallesi, Sağlık Sokak No:15 Beşiktaş/İstanbul",
          "open_hours": "Açık Saatler",
          "schedule": "Pzt - Cum: 09:00 - 18:00",
          "schedule_saturday": "Cmt: 09:00 - 15:00",
          "schedule_sunday": "Pzr: Kapalı"
        },
        "navigation": {
          "home": "Ana Sayfa",
          "about": "Hakkımızda",
          "doctor": "Doktorlar",
          "treatments": "Tedaviler",
          "pricing": "Fiyatlar",
          "blog": "Blog",
          "contact": "İletişim",
          "language": "Dil"
        },
        "hero": {
          "slide1": {
            "title": "Mutlu Kalmanıza <span>Yardımcı Oluyoruz</span>",
            "subtitle": "Her gün hizmet verdiğimiz hastalara umut ve gülümseme getiriyoruz",
            "button": "Çalışmalarımızı görüntüle"
          },
          "slide2": {
            "title": "Gülümseme <br>Kalıcı Bir İzlenim Bırakır",
            "subtitle": "Sağlığınız kapsamlı, uygun fiyatlı tıbbi hizmetlerle bizim önceliğimizdir.",
            "button": "Çalışmalarımızı görüntüle"
          }
        },
        "about": {
          "welcome": "Prizma Klinik'e Hoş Geldiniz",
          "title": "Hastane ortamında akut hastalığı olan hastaların bakımı ile ilgili tıbbi uzmanlık",
          "description1": "Duden adlı küçük bir nehir yerlerinden akar ve gerekli regelia ile besler. Bu, cümlelerin kavrulmuş parçalarının ağzınıza uçtuğu cennet benzeri bir ülkedir. Güçlü İşaret bile kör metinler hakkında hiçbir kontrole sahip değildir, neredeyse yazımsız bir yaşamdır.",
          "description2": "Duden adlı küçük bir nehir yerlerinden akar ve gerekli regelia ile besler. Bu, cümlelerin kavrulmuş parçalarının ağzınıza uçtuğu cennet benzeri bir ülkedir.",
          "founder": "Dr. Ahmet Yılmaz",
          "founder_title": "CEO, Kurucu"
        },
        "sections": {
          "dental_services": {
            "title": "Diş Hekimliği Hizmetleri",
            "description": "Duden adlı küçük bir nehir yerlerinden akar ve besler",
            "button": "Hizmetleri Gör"
          },
          "consultation": {
            "title": "Ücretsiz Konsültasyon",
            "first_name": "Ad",
            "last_name": "Soyad",
            "department": "Bölüm",
            "departments": {
              "default": "Bölüm Seçin",
              "neurology": "Nöroloji",
              "cardiology": "Kardiyoloji",
              "dental": "Diş Hekimliği",
              "ophthalmology": "Göz Hastalıkları",
              "other": "Diğer Hizmetler"
            },
            "date": "Tarih",
            "time": "Saat",
            "button": "Randevu Al"
          },
          "find_doctor": {
            "title": "Doktor Bul",
            "description": "Duden adlı küçük bir nehir yerlerinden akar ve besler",
            "button": "Doktorlarımızla tanışın"
          }
        },
        "services": {
          "title": "Hizmetler",
          "subtitle": "Kliniğimizin Hizmetleri",
          "description": "Ayrı yaşıyorlar. Duden adlı küçük bir nehir yerlerinden akar ve gerekli regelia ile besler. Bu cennet benzeri bir ülkedir",
          "items": {
            "dental_implants": {
              "title": "Diş İmplantları",
              "description": "Güçlü İşaret bile kör metinler hakkında hiçbir kontrole sahip değildir, neredeyse yazımsız bir yaşamdır."
            },
            "cosmetic_dentistry": {
              "title": "Kozmetik Diş Hekimliği",
              "description": "Güçlü İşaret bile kör metinler hakkında hiçbir kontrole sahip değildir, neredeyse yazımsız bir yaşamdır."
            },
            "dental_care": {
              "title": "Diş Bakımı",
              "description": "Güçlü İşaret bile kör metinler hakkında hiçbir kontrole sahip değildir, neredeyse yazımsız bir yaşamdır."
            },
            "teeth_whitening": {
              "title": "Diş Beyazlatma",
              "description": "Güçlü İşaret bile kör metinler hakkında hiçbir kontrole sahip değildir, neredeyse yazımsız bir yaşamdır."
            }
          }
        },
        "pricing": {
          "title": "Fiyatlandırma",
          "subtitle": "Fiyatlarımız",
          "description": "Ayrı yaşıyorlar. Duden adlı küçük bir nehir yerlerinden akar ve gerekli regelia ile besler. Bu cennet benzeri bir ülkedir",
          "per_session": "/ seans",
          "plans": {
            "basic": {
              "title": "Temel",
              "price": "750₺",
              "features": [
                "Tanı Hizmetleri",
                "Profesyonel Konsültasyon",
                "Diş İmplantları",
                "Cerrahi Çekimler",
                "Diş Beyazlatma"
              ]
            }
          },
          "get_offer": "Teklif Al"
        }
      },
      en: {
        "site": {
          "title": "Prizma Clinic - Dental Clinic",
          "name": "Prizma Clinic",
          "tagline": "Dental Clinic"
        },
        "header": {
          "free_call": "Free Call",
          "phone": "+1 234 456 78910",
          "address": "198 West 21th Street, Suite 721 New York NY 10016",
          "open_hours": "Open Hours",
          "schedule": "Mon - Fri: 8:00am - 9:00pm",
          "schedule_saturday": "Sat: 8:00am - 6:00pm",
          "schedule_sunday": "Sun: Closed"
        },
        "navigation": {
          "home": "Home",
          "about": "About",
          "doctor": "Doctor",
          "treatments": "Treatments",
          "pricing": "Pricing",
          "blog": "Blog",
          "contact": "Contact",
          "language": "Language"
        },
        "hero": {
          "slide1": {
            "title": "Helping Your <span>Stay Happy One</span>",
            "subtitle": "Everyday We Bring Hope and Smile to the Patient We Serve",
            "button": "View our works"
          },
          "slide2": {
            "title": "Smile Makes <br>A Lasting Impression",
            "subtitle": "Your Health is Our Top Priority with Comprehensive, Affordable medical.",
            "button": "View our works"
          }
        },
        "about": {
          "welcome": "Welcome to Prizma Clinic",
          "title": "Medical specialty concerned with the care of acutely ill hospitalized patients",
          "description1": "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
          "description2": "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
          "founder": "Dr. Paul Foster",
          "founder_title": "CEO, Founder"
        },
        "sections": {
          "dental_services": {
            "title": "Dental Services",
            "description": "A small river named Duden flows by their place and supplies",
            "button": "See Services"
          },
          "consultation": {
            "title": "Free Consultation",
            "first_name": "First Name",
            "last_name": "Last Name",
            "department": "Department",
            "departments": {
              "default": "Department",
              "neurology": "Neurology",
              "cardiology": "Cardiology",
              "dental": "Dental",
              "ophthalmology": "Ophthalmology",
              "other": "Other Services"
            },
            "date": "Date",
            "time": "Time",
            "button": "Appointment"
          },
          "find_doctor": {
            "title": "Find A Doctor",
            "description": "A small river named Duden flows by their place and supplies",
            "button": "Meet our doctor"
          }
        },
        "services": {
          "title": "Services",
          "subtitle": "Our Clinic Services",
          "description": "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country",
          "items": {
            "dental_implants": {
              "title": "Dental Implants",
              "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
            },
            "cosmetic_dentistry": {
              "title": "Cosmetic Dentistry",
              "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
            },
            "dental_care": {
              "title": "Dental Care",
              "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
            },
            "teeth_whitening": {
              "title": "Teeth Whitening",
              "description": "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
            }
          }
        },
        "pricing": {
          "title": "Pricing",
          "subtitle": "Our Pricing",
          "description": "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country",
          "per_session": "/ session",
          "plans": {
            "basic": {
              "title": "Basic",
              "price": "$24.50",
              "features": [
                "Diagnostic Services",
                "Professional Consultation",
                "Tooth Implants",
                "Surgical Extractions",
                "Teeth Whitening"
              ]
            }
          },
          "get_offer": "Get Offer"
        }
      }
    };
    this.init();
  }

  init() {
    // Get saved language or use default
    const savedLanguage = localStorage.getItem('language') || 'tr';
    this.currentLanguage = savedLanguage;
    
    // Apply translations to the page
    this.applyTranslations();
    
    // Update language selector
    this.updateLanguageSelector();
  }

  // Get translation by key with dot notation support
  t(key, lang = this.currentLanguage) {
    if (!this.translations[lang]) {
      console.warn(`Language ${lang} not found`);
      return key;
    }

    const keys = key.split('.');
    let value = this.translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key ${key} not found for language ${lang}`);
        return key;
      }
    }
    
    return value;
  }

  // Set current language
  setLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      console.warn(`Language ${lang} is not supported`);
      return;
    }

    this.currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Apply translations
    this.applyTranslations();
    
    // Update language selector
    this.updateLanguageSelector();
  }

  // Apply translations to DOM elements
  applyTranslations() {
    // Update page title
    document.title = this.t('site.title');

    // Update elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.innerHTML = translation;
      }
    });

    // Update elements with data-i18n-text attribute (for text content only)
    const textElements = document.querySelectorAll('[data-i18n-text]');
    textElements.forEach(element => {
      const key = element.getAttribute('data-i18n-text');
      const translation = this.t(key);
      element.textContent = translation;
    });

    // Update pricing features
    this.updatePricingFeatures();
    
    // Update navigation
    this.updateNavigation();
  }

  // Update pricing features specifically
  updatePricingFeatures() {
    const pricingPlans = ['basic', 'standard', 'premium', 'platinum'];
    pricingPlans.forEach(plan => {
      const features = this.t(`pricing.plans.${plan}.features`);
      if (Array.isArray(features)) {
        const listElements = document.querySelectorAll(`[data-pricing-plan="${plan}"] li`);
        listElements.forEach((li, index) => {
          if (features[index]) {
            li.textContent = features[index];
          }
        });
      }
    });
  }

  // Update navigation links
  updateNavigation() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[data-i18n]');
    
    navLinks.forEach((link) => {
      const key = link.getAttribute('data-i18n');
      if (key) {
        link.textContent = this.t(key);
      }
    });
  }

  // Update language selector
  updateLanguageSelector() {
    const langSelector = document.getElementById('language-selector');
    const langButtons = document.querySelectorAll('[data-lang]');
    
    // Update selector text based on current language
    if (langSelector) {
      if (this.currentLanguage === 'tr') {
        langSelector.innerHTML = '🌐 Diller';
      } else {
        langSelector.innerHTML = '🌐 Languages';
      }
    }
    
    // Update active state for language options
    langButtons.forEach(button => {
      if (button.getAttribute('data-lang') === this.currentLanguage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    
    // Hide dropdown menu initially
    if (typeof $ !== 'undefined') {
      $('#language-dropdown .dropdown-menu').removeClass('show');
    } else {
      const dropdownMenu = document.querySelector('#language-dropdown .dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.remove('show');
      }
    }
  }

  // Get current language
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // Get supported languages
  getSupportedLanguages() {
    return this.supportedLanguages;
  }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create global i18n instance
  window.i18n = new I18n();
});

// Initialize language dropdown functionality
function initLanguageDropdown() {
  const languageSelector = document.getElementById('language-selector');
  const dropdownMenu = document.querySelector('#language-dropdown .dropdown-menu');
  const languageOptions = document.querySelectorAll('[data-lang]');
  
  console.log('Language selector found:', languageSelector ? 'YES' : 'NO');
  console.log('Dropdown menu found:', dropdownMenu ? 'YES' : 'NO');
  console.log('Language options found:', languageOptions.length);
  
  if (languageSelector && dropdownMenu) {
    // Language selector click event
    languageSelector.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Language selector clicked');
      console.log('Before toggle - has show class:', dropdownMenu.classList.contains('show'));
      dropdownMenu.classList.toggle('show');
      console.log('After toggle - has show class:', dropdownMenu.classList.contains('show'));
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!document.getElementById('language-dropdown').contains(e.target)) {
        dropdownMenu.classList.remove('show');
        console.log('Clicked outside, menu closed');
      }
    });
    
    // Language selection events
    languageOptions.forEach(option => {
      option.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        console.log('Language selected:', lang);
        window.i18n.setLanguage(lang);
        dropdownMenu.classList.remove('show');
      });
    });
  }
}

// Initialize with both jQuery and vanilla JavaScript
if (typeof $ !== 'undefined') {
  $(document).ready(function() {
    console.log('jQuery loaded and ready');
    initLanguageDropdown();
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('jQuery not available, using vanilla JavaScript');
    initLanguageDropdown();
  });
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18n;
} 