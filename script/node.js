// // script.js
// document.addEventListener('DOMContentLoaded', function () {
//     const menuIcon = document.querySelector('.navbar-menu-icon');
//     const mobileMenu = document.querySelector('.mobile-menu');

//     menuIcon.addEventListener('click', function () {
//         mobileMenu.classList.toggle('show');
//     });
// });
// const locales = ["en-GB","ar-SA","zh-CN","de-DE","es-ES","fr-FR","hi-IN","it-IT","in-ID","ja-JP","ko-KR","nl-NL","no-NO","pl-PL","pt-BR","sv-SE","fi-FI","th-TH","tr-TR","uk-UA","vi-VN","ru-RU","he-IL"];

// function getFlagSrc(countryCode) {
//   return /^[A-Z]{2}$/.test(countryCode)
//        ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
//     : "";
// }

// const dropdownBtn = document.getElementById("dropdown-btn");
// const dropdownContent = document.getElementById("dropdown-content");

// function setSelectedLocale(locale) {
//   const intlLocale = new Intl.Locale(locale);
//   const langName = new Intl.DisplayNames([locale], {
//     type: "language",
//   }).of(intlLocale.language);

//   dropdownContent.innerHTML = "";

//   const otherLocales = locales.filter((loc) => loc !== locale);
//   otherLocales.forEach((otherLocale) => {
//     const otherIntlLocale = new Intl.Locale(otherLocale);
//     const otherLangName = new Intl.DisplayNames([otherLocale], {
//       type: "language",
//     }).of(otherIntlLocale.language);

//     const listEl = document.createElement("li");
//     listEl.innerHTML = `${otherLangName}<img src="${getFlagSrc(
//       otherIntlLocale.region
//     )}" />`;
//     listEl.value = otherLocale;
//     listEl.addEventListener("mousedown", function () {
//       setSelectedLocale(otherLocale);
//     });
//     dropdownContent.appendChild(listEl);
//   });

//   dropdownBtn.innerHTML = `<img src="${getFlagSrc(
//     intlLocale.region
//   )}" />${langName}<span class="arrow-down"></span>`;
// }

// setSelectedLocale(locales[0]);
// const browserLang = new Intl.Locale(navigator.language).language;
// for (const locale of locales) {
//   const localeLang = new Intl.Locale(locale).language;
//   if (localeLang === browserLang) {
//     setSelectedLocale(locale);
//   }
// }