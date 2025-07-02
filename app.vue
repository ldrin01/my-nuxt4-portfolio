<template>
  <div class="antialiased">
    <!-- Main Header - Fixed at the top, slides on scroll -->
    <header id="main-header" class="header bg-white shadow-sm py-4 fixed top-0 left-0 w-full z-50 h-16 flex items-center">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-indigo-600 rounded-lg p-2 hover:bg-indigo-50 transition duration-300">Eldrin Bernardino</NuxtLink>
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="#about" class="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">About</NuxtLink>
          <NuxtLink to="#projects" class="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">Projects</NuxtLink>
          <NuxtLink to="#contact" class="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">Contact</NuxtLink>
        </nav>
        <button id="hamburger-button" class="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu">
          <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Overlay/Dropdown -->
    <div id="mobile-menu" class="mobile-menu-container bg-white shadow-md fixed top-16 left-0 w-full z-40 md:hidden">
      <nav class="flex flex-col p-4 space-y-2">
        <NuxtLink to="#about" class="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium transition duration-300">About</NuxtLink>
        <NuxtLink to="#projects" class="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium transition duration-300">Projects</NuxtLink>
        <NuxtLink to="#contact" class="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium transition duration-300">Contact</NuxtLink>
      </nav>
    </div>

    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 md:py-32 rounded-b-3xl shadow-lg">
      <div class="container text-center">
        <img src="https://placehold.co/150x150/6366f1/ffffff?text=EB" alt="Eldrin Bernardino's Profile Picture" class="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white shadow-md object-cover">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Hi, I'm <span class="text-yellow-300">Eldrin Bernardino</span>!</h1>
        <p class="text-xl md:text-2xl font-light mb-8">Designing intuitive experiences that delight and convert.</p>
        <NuxtLink to="#projects" class="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">View My Work</NuxtLink>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-16 md:py-24 bg-white rounded-lg shadow-md mx-4 md:mx-auto mt-8">
      <div class="container">
        <h2 class="text-4xl font-bold text-gray-800 mb-10 text-center section-title">About Me</h2>
        <div class="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          <p class="mb-4">
            Hey there! I’m Eldrin, a multi-disciplinary designer passionate about crafting beautiful, user-friendly digital experiences. From intuitive UI/UX flows to scroll-stopping graphics and videos, I love bringing ideas to life with a balance of creativity and strategic thinking.
          </p>
          <p class="mb-4">
            My skills include: <span class="font-semibold text-indigo-600">Figma, Adobe Suite, HTML, CSS, JavaScript, and AI Prompting.</span>
          </p>
          <p>
            When I’m not designing, you’ll probably find me jamming on my guitar, exploring new coffee shops, or diving into the latest AI tools. I'm always open to new challenges and collaborations!
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 md:py-24 bg-gray-50">
      <div class="container">
        <h2 class="text-4xl font-bold text-gray-800 mb-10 text-center section-title">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1: Nova Banking App -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://placehold.co/600x400/93c5fd/ffffff?text=Nova+Banking" alt="Nova Banking App Thumbnail" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2">Nova Banking App</h3>
              <p class="text-gray-600 text-sm mb-4">A modern, minimal banking interface focused on ease of navigation and customer trust.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">UI/UX Design</span>
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Figma</span>
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Prototyping</span>
              </div>
              <NuxtLink to="#" class="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">View Project &rarr;</NuxtLink>
            </div>
          </div>

          <!-- Project Card 2: Café Finder Web App -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://placehold.co/600x400/a78bfa/ffffff?text=Cafe+Finder" alt="Café Finder Web App Thumbnail" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2">Café Finder Web App</h3>
              <p class="text-gray-600 text-sm mb-4">Helping coffee lovers discover local cafés with personalized recommendations and clean UX.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Web Design</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">HTML/CSS/JS</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">UX Research</span>
              </div>
              <NuxtLink to="#" class="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">View Project &rarr;</NuxtLink>
            </div>
          </div>

          <!-- Project Card 3: Brand Motion Reel -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://placehold.co/600x400/fcd34d/ffffff?text=Motion+Reel" alt="Brand Motion Reel Thumbnail" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2">Brand Motion Reel</h3>
              <p class="text-gray-600 text-sm mb-4">Animated brand visuals blending dynamic typography with subtle transitions.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Video Editing</span>
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Motion Graphics</span>
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Adobe After Effects</span>
              </div>
              <NuxtLink to="#" class="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">View Project &rarr;</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 md:py-24 bg-white rounded-t-3xl shadow-lg mx-4 md:mx-auto mb-8">
      <div class="container text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-10 section-title">Get In Touch</h2>
        <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          I'm always excited to connect with new people and discuss potential collaborations or interesting projects. Feel free to reach out!
        </p>
        <div class="flex justify-center space-x-6 mb-8">
          <NuxtLink to="mailto:your.email@example.com" class="text-indigo-600 hover:text-indigo-800 text-2xl transition duration-300" aria-label="Email">
            <svg class="w-8 h-8 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </NuxtLink>
          <NuxtLink to="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800 text-2xl transition duration-300" aria-label="LinkedIn">
            <svg class="w-8 h-8 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </NuxtLink>
          <NuxtLink to="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800 text-2xl transition duration-300" aria-label="GitHub">
            <svg class="w-8 h-8 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.197-11.387 0-6.627-5.373-12-12-12z"/></svg>
          </NuxtLink>
        </div>
        <p class="text-sm text-gray-500">&copy; 2025 Eldrin Bernardino. All rights reserved.</p>
      </div>
    </section>

    <!-- Accessibility Tool Button -->
    <button id="accessibility-button" class="fixed bottom-4 right-4 z-50 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-110" aria-label="Open accessibility tools" aria-expanded="false" aria-controls="accessibility-menu">
        <!-- Accessibility icon SVG (purple circle with white person figure) -->
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-2.21 0-4-1.79-4-4h2c0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4z"/>
        </svg>
    </button>

    <!-- Accessibility Menu -->
    <div id="accessibility-menu" class="fixed bottom-20 right-4 z-50 bg-white p-4 rounded-lg shadow-xl w-64 hidden flex-col space-y-4" role="menu" aria-hidden="true">
        <div class="flex justify-between items-center">
            <label for="high-contrast-toggle" class="text-gray-800 font-medium cursor-pointer">High Contrast</label>
            <label class="toggle-switch">
                <input type="checkbox" id="high-contrast-toggle" role="switch" aria-checked="false">
                <span class="slider"></span>
            </label>
        </div>
        <div class="flex justify-between items-center">
            <label for="font-size-toggle" class="text-gray-800 font-medium cursor-pointer">Increase Font Size</label>
            <label class="toggle-switch">
                <input type="checkbox" id="font-size-toggle" role="switch" aria-checked="false">
                <span class="slider"></span>
            </label>
        </div>
        <!-- New: Text-to-Speech Toggle -->
        <div class="flex justify-between items-center">
            <label for="text-to-speech-toggle" class="text-gray-800 font-medium cursor-pointer">Text-to-Speech on Hover/Tab</label>
            <label class="toggle-switch">
                <input type="checkbox" id="text-to-speech-toggle" role="switch" aria-checked="false">
                <span class="slider"></span>
            </label>
        </div>
        <!-- New: Voice Selection Dropdown -->
        <div class="flex flex-col space-y-2">
            <label for="voice-select" class="text-gray-800 font-medium">Select Voice:</label>
            <select id="voice-select" class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <!-- Options will be populated by JavaScript -->
            </select>
        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// State variables for accessibility features
const isTextToSpeechEnabled = ref(false);
let currentUtterance = null;
const availableVoices = ref([]);

// --- Accessibility Logic (moved to script setup) ---
const mainHeader = ref(null); // Use ref to get element reference after mounting
const hamburgerButton = ref(null);
const mobileMenu = ref(null);
const accessibilityButton = ref(null);
const accessibilityMenu = ref(null);
const highContrastToggle = ref(null);
const fontSizeToggle = ref(null);
const textToSpeechToggle = ref(null);
const voiceSelect = ref(null);

// Function to speak text
const speakText = (text) => {
  if (currentUtterance && speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  if (text && isTextToSpeechEnabled.value) {
    currentUtterance = new SpeechSynthesisUtterance(text);

    const selectedVoiceName = voiceSelect.value ? voiceSelect.value.value : null;
    const selectedVoice = availableVoices.value.find(voice => voice.name === selectedVoiceName);
    if (selectedVoice) {
      currentUtterance.voice = selectedVoice;
    } else if (availableVoices.value.length > 0) {
      // Fallback to default voice if selected voice is not found
      currentUtterance.voice = availableVoices.value.find(voice => voice.default) || availableVoices.value[0];
    }

    speechSynthesis.speak(currentUtterance);
  }
};

// Function to populate voice dropdown with a focus on quality and main languages
const populateVoiceList = () => {
  availableVoices.value = speechSynthesis.getVoices();
  if (!voiceSelect.value) return; // Ensure voiceSelect is mounted

  voiceSelect.value.innerHTML = ''; // Clear existing options

  const preferredLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt'];
  const googleVoiceKeywords = ['Google', 'Wavenet', 'Neural'];

  const filteredVoices = availableVoices.value
    .filter(voice => {
      const isPreferredLang = preferredLanguages.some(lang => voice.lang.startsWith(lang));
      const isGoogleQualityVoice = googleVoiceKeywords.some(keyword => voice.name.includes(keyword));
      return isPreferredLang || isGoogleQualityVoice;
    })
    .sort((a, b) => {
      if (a.default && !b.default) return -1;
      if (!a.default && b.default) return 1;
      if (a.lang.startsWith('en') && !b.lang.startsWith('en')) return -1;
      if (!a.lang.startsWith('en') && b.lang.startsWith('en')) return 1;
      const aIsGoogle = googleVoiceKeywords.some(keyword => a.name.includes(keyword));
      const bIsGoogle = googleVoiceKeywords.some(keyword => b.name.includes(keyword));
      if (aIsGoogle && !bIsGoogle) return -1;
      if (!aIsGoogle && bIsGoogle) return 1;
      return a.name.localeCompare(b.name);
    });

  filteredVoices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang}) ${voice.default ? '— Default' : ''}`;
    option.value = voice.name;
    voiceSelect.value.appendChild(option);
  });

  const savedVoiceName = localStorage.getItem('selectedVoice');
  if (savedVoiceName && filteredVoices.some(voice => voice.name === savedVoiceName)) {
    voiceSelect.value.value = savedVoiceName;
  } else if (filteredVoices.length > 0) {
    voiceSelect.value.value = filteredVoices[0].name;
    localStorage.setItem('selectedVoice', filteredVoices[0].name);
  }
};

// --- onMounted lifecycle hook for DOM interactions ---
onMounted(() => {
  // Assign element references after component is mounted
  mainHeader.value = document.getElementById('main-header');
  hamburgerButton.value = document.getElementById('hamburger-button');
  mobileMenu.value = document.getElementById('mobile-menu');
  accessibilityButton.value = document.getElementById('accessibility-button');
  accessibilityMenu.value = document.getElementById('accessibility-menu');
  highContrastToggle.value = document.getElementById('high-contrast-toggle');
  fontSizeToggle.value = document.getElementById('font-size-toggle');
  textToSpeechToggle.value = document.getElementById('text-to-speech-toggle');
  voiceSelect.value = document.getElementById('voice-select');

  // --- Scroll-triggered Header Visibility Logic ---
  let lastScrollY = window.scrollY;
  const headerHeight = mainHeader.value.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > headerHeight) {
      mainHeader.value.classList.add('hidden-header');
      mobileMenu.value.classList.remove('open');
    } else if (window.scrollY < lastScrollY) {
      mainHeader.value.classList.remove('hidden-header');
    }
    lastScrollY = window.scrollY;

    if (currentUtterance && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  });

  // --- Hamburger Menu Toggle Logic ---
  hamburgerButton.value.addEventListener('click', () => {
    mobileMenu.value.classList.toggle('open');
    const isExpanded = mobileMenu.value.classList.contains('open');
    hamburgerButton.value.setAttribute('aria-expanded', isExpanded);
  });

  // --- Close Mobile Menu on Link Click (for better UX) ---
  mobileMenu.value.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.value.classList.remove('open');
      hamburgerButton.value.setAttribute('aria-expanded', false);
    });
  });

  // --- Accessibility Menu Toggle Logic ---
  accessibilityButton.value.addEventListener('click', () => {
    const isHidden = accessibilityMenu.value.classList.toggle('hidden');
    accessibilityButton.value.setAttribute('aria-expanded', !isHidden);
    accessibilityMenu.value.setAttribute('aria-hidden', isHidden);
    if (!isHidden) {
      highContrastToggle.value.focus();
    }
  });

  // --- High Contrast Toggle Logic ---
  highContrastToggle.value.addEventListener('change', () => {
    document.body.classList.toggle('high-contrast', highContrastToggle.value.checked);
    localStorage.setItem('highContrastMode', highContrastToggle.value.checked);
    highContrastToggle.value.setAttribute('aria-checked', highContrastToggle.value.checked);
  });

  // --- Font Size Toggle Logic ---
  fontSizeToggle.value.addEventListener('change', () => {
    document.body.classList.toggle('large-font', fontSizeToggle.value.checked);
    localStorage.setItem('largeFontSize', fontSizeToggle.value.checked);
    fontSizeToggle.value.setAttribute('aria-checked', fontSizeToggle.value.checked);
  });

  // --- Text-to-Speech Toggle Logic ---
  textToSpeechToggle.value.addEventListener('change', () => {
    isTextToSpeechEnabled.value = textToSpeechToggle.value.checked;
    localStorage.setItem('textToSpeechEnabled', isTextToSpeechEnabled.value);
    textToSpeechToggle.value.setAttribute('aria-checked', isTextToSpeechEnabled.value);
    if (!isTextToSpeechEnabled.value && currentUtterance && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  });

  // Voice Selection Change Listener
  voiceSelect.value.addEventListener('change', () => {
    localStorage.setItem('selectedVoice', voiceSelect.value.value);
  });

  // --- Event Delegation for Text-to-Speech on Hover/Focus ---
  document.body.addEventListener('mouseover', (event) => {
    if (isTextToSpeechEnabled.value) {
      const target = event.target;
      if (target.textContent && target.textContent.trim() !== '' &&
          !target.matches('button, input, select, textarea, label, svg, path, .toggle-switch, .slider') &&
          !accessibilityMenu.value.contains(target) && target !== accessibilityButton.value) {
        speakText(target.textContent);
      }
    }
  });

  document.body.addEventListener('focusin', (event) => {
    if (isTextToSpeechEnabled.value) {
      const target = event.target;
      if (target.textContent && target.textContent.trim() !== '' &&
          !accessibilityMenu.value.contains(target) && target !== accessibilityButton.value) {
        speakText(target.textContent);
      }
    }
  });

  // --- Initialize Accessibility Settings from Local Storage ---
  const savedHighContrast = localStorage.getItem('highContrastMode') === 'true';
  if (savedHighContrast) {
    document.body.classList.add('high-contrast');
    highContrastToggle.value.checked = true;
    highContrastToggle.value.setAttribute('aria-checked', true);
  }

  const savedLargeFontSize = localStorage.getItem('largeFontSize') === 'true';
  if (savedLargeFontSize) {
    document.body.classList.add('large-font');
    fontSizeToggle.value.checked = true;
    fontSizeToggle.value.setAttribute('aria-checked', true);
  }

  const savedTextToSpeech = localStorage.getItem('textToSpeechEnabled') === 'true';
  if (savedTextToSpeech) {
    textToSpeechToggle.value.checked = true;
    isTextToSpeechEnabled.value = true;
    textToSpeechToggle.value.setAttribute('aria-checked', true);
  }

  // Populate voice list on mount and when voices change
  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  } else {
      populateVoiceList();
  }

  // --- Basic JavaScript for smooth scrolling (optional but nice for UX) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - mainHeader.value.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
</script>

<style>
/* Global CSS for the Nuxt application */
/* This is where you put your custom CSS, including the styles for accessibility features */
body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: #f8fafc; /* Light gray background */
    color: #334155; /* Darker text color */
    /* Added padding-top to body to prevent content from being hidden under fixed header */
    padding-top: 4rem; /* Adjust this value if your nav bar height changes (h-16 = 64px) */
    min-height: 200vh; /* Ensure enough scrollable content for header to hide/show */
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}
.section-title {
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
}
.section-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 4px;
    background-color: #6366f1; /* Indigo accent */
    border-radius: 9999px;
}

/* Header transition for slide effect */
.header {
    transition: transform 0.3s ease-in-out; /* Smooth transition for sliding */
}

/* Class to hide the header by sliding it up */
.header.hidden-header {
    transform: translateY(-100%); /* Moves the header completely out of view upwards */
}

/* Mobile menu container transitions for dropdown effect */
.mobile-menu-container {
    /* Smooth height and opacity transition for the mobile menu */
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    max-height: 0; /* Initially hidden */
    overflow: hidden; /* Hides content outside max-height */
    opacity: 0; /* Initially transparent */
}

/* Class to show the mobile menu */
.mobile-menu-container.open {
    max-height: 200px; /* Adjust this value if your mobile menu content is taller */
    opacity: 1; /* Fully visible */
}

/* Accessibility Styles */
.high-contrast {
    background-color: #000 !important;
    color: #fff !important;
}
.high-contrast a {
    color: #ffff00 !important; /* Yellow links for contrast */
}
.high-contrast .bg-white {
    background-color: #333 !important;
}
.high-contrast .text-gray-600, .high-contrast .text-gray-700, .high-contrast .text-gray-800, .high-contrast .text-gray-500 {
    color: #fff !important;
}
.high-contrast .shadow-sm, .high-contrast .shadow-md, .high-contrast .shadow-lg, .high-contrast .shadow-xl {
    box-shadow: none !important; /* Remove shadows for cleaner contrast */
    border: 1px solid #fff;
}
.high-contrast .bg-indigo-100, .high-contrast .bg-purple-100, .high-contrast .bg-yellow-100, .high-contrast .bg-blue-100, .high-contrast .bg-green-100, .high-contrast .bg-red-100 {
    background-color: #333 !important;
    color: #ffff00 !important;
}
/* Ensure all text elements inherit or are overridden for contrast */
.high-contrast h1, .high-contrast h2, .high-contrast h3, .high-contrast p, .high-contrast span, .high-contrast div, .high-contrast a, .high-contrast button {
    color: #fff !important;
}
.high-contrast .text-yellow-300 {
    color: #ffff00 !important;
}
.high-contrast .text-indigo-600, .high-contrast .text-indigo-700, .high-contrast .text-indigo-800, .high-contrast .text-purple-600 {
    color: #ffff00 !important;
}
.high-contrast .bg-gradient-to-r {
    background: #000 !important; /* Flat black background for hero */
}
.high-contrast img {
    filter: grayscale(100%) invert(100%); /* Invert colors for images */
}

.large-font {
    font-size: 1.2em; /* Increase base font size by 20% */
}
/* Adjust specific elements to scale relative to the new body font-size */
.large-font h1 { font-size: calc(4rem * 1.2); }
.large-font h2 { font-size: calc(2.25rem * 1.2); }
.large-font p { font-size: calc(1.125rem * 1.2); }
/* Media query adjustments for large font */
@media (min-width: 768px) { /* md breakpoint */
    .large-font h1 { font-size: calc(6rem * 1.2); }
    .large-font p { font-size: calc(1.5rem * 1.2); }
}

/* Custom toggle switch styling */
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 24px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: #6366f1; /* Indigo */
}

input:focus + .slider {
    box-shadow: 0 0 1px #6366f1;
}

input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
}
</style>
