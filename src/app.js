import "./main.scss";
// import Glide from "@glidejs/glide";
import smoothscroll from "smoothscroll-polyfill";

// new Glide(".glide").mount();

// Safari smooth scrolling
smoothscroll.polyfill();

const smoothScrolling = (e, target) => {
  e.preventDefault();
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
};

document
  .querySelector("#aboutLink")
  .addEventListener("click", (e) => smoothScrolling(e, "#about"));
document
  .querySelector("#skillsLink")
  .addEventListener("click", (e) => smoothScrolling(e, "#skills"));
document
  .querySelector("#portfolioLink")
  .addEventListener("click", (e) => smoothScrolling(e, "#portfolio"));
document
  .querySelector("#contactLink")
  .addEventListener("click", (e) => smoothScrolling(e, "#contact"));
  document
  .querySelector("#headerLink")
  .addEventListener("click", (e) => smoothScrolling(e, "#portfolio"));


// Language switcher
const lang = {
  en: {
    homeLink: "Home",
    aboutLink: "About",
    skillsLink: "Skills",
    portfolioLink: "Projects",
    contactLink: "Contact",
    headerHeading: "Hi, It’s Denis Malashin",
    headerSubheading: "Developer from Nizhny Novgorod, Russia",
    headerLink: "Latest works",
    aboutHeader: "About me",
    aboutText1:
      "I making sites and web apps. I have 1+ years of experience in web dev. Just started this portfolio site, more projects will be added soon.",
    aboutText2:
      "If you want a site or an app you can contact me with buttons below this page.",
    skillsHeader: "Skills",
    portfolioHeader: "Projects",
    webSitesHeader: "Web sites",
    webSitesText1:
      "I develop web-sites with your layouts - figma, psd, zeplin. If you don't have one, I can make site from scratch by small brief from you.",
    webSitesText2:
      "Mobile-first, desktop-first, static, responsive - I develop any of them.",
    "footerHeading": "Get in Touch",
  },

  ru: {
    homeLink: "Главная",
    aboutLink: "Обо мне",
    skillsLink: "Навыки",
    portfolioLink: "Проекты",
    contactLink: "Связаться",
    headerHeading: "Привет, я Денис Малашин",
    headerSubheading: "Разработчик из Нижнего Новгорода",
    headerLink: "Последние работы",
    aboutHeader: "Обо мне",
    aboutText1:
      "Я разрабатываю сайты и веб-приложения. У меня 1+ год опыта в веб-разработке. Совсем недавно начал заполнять этот сайт, скоро здесь появится больше примеров моих работ.",
    aboutText2:
      "Если вам нужен сайт или веб-приложение - свяжитесь со мной с помощью контактов внизу этой страницы.",
    skillsHeader: "Навыки",
    portfolioHeader: "Проекты",
    webSitesHeader: "Веб-сайты",
    webSitesText1:
      "Я разрабатываю веб-сайты по вашим макетам - figma, psd, zeplin. Если у вас нет макета, я могу разработать сайт и макет с 0 по небольшому брифу.",
    webSitesText2:
      "Mobile-first, desktop-first, статические, адаптивные - я разрабатываю сайты и приложения любой сложности.",
    footerHeading: "Связаться",
  },
};

const langSwitcher = () => {
  const currentLang = document.querySelector("#langSwitch").value
  if (currentLang) {
    homeLink.textContent = lang[currentLang].homeLink
    aboutLink.textContent = lang[currentLang].aboutLink
    skillsLink.textContent = lang[currentLang].skillsLink
    portfolioLink.textContent = lang[currentLang].portfolioLink
    contactLink.textContent = lang[currentLang].contactLink
    headerHeading.textContent = lang[currentLang].headerHeading
    headerSubheading.textContent = lang[currentLang].headerSubheading
    headerLink.textContent = lang[currentLang].headerLink
    aboutHeader.textContent = lang[currentLang].aboutHeader
    aboutText1.textContent = lang[currentLang].aboutText1
    aboutText2.textContent = lang[currentLang].aboutText2
    skillsHeader.textContent = lang[currentLang].skillsHeader
    portfolioHeader.textContent = lang[currentLang].portfolioHeader
    webSitesHeader.textContent = lang[currentLang].webSitesHeader
    webSitesText1.textContent = lang[currentLang].webSitesText1
    webSitesText2.textContent = lang[currentLang].webSitesText2
    footerHeading.textContent = lang[currentLang].footerHeading
  }
};


document.querySelector('#langSwitch').addEventListener('change', () => langSwitcher())