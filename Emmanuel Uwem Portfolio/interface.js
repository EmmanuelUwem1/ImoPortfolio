// This is the Program for interface functionalities , scroll Reveal effects , animations, counter effects ,etc.

// for scroll progress bar

window.onscroll = function () {
  scrollProgress();
};

function scrollProgress() {
  var progressBar = document.querySelector(".progress-bar");
  var scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  scroll = (scrolled / height) * 100;
  progressBar.style.width = scroll + "%";
}

// IntersectionObserver program for effects  view , scroll

const options = {
  root: null,
  rootmarging: "0px",
  treshold: 1,
};

// callback function

const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
};

let observer = new IntersectionObserver(callbacks, options);

const profilePic = document.querySelector(".profilePic");

var divs = document.querySelectorAll("section#home div.profileText > div");
divs.forEach((div) => {
  observer.observe(div);
});

observer.observe(profilePic);
// elements.forEach(element =>{
//     observer.observe(element);
// });
var Handles = document.querySelectorAll(".Handles");
Handles.forEach((handle) => {
  observer.observe(handle);
});

var heading = document.querySelectorAll(".heading");
heading.forEach((heading) => {
  observer.observe(heading);
});

var content = document.querySelectorAll(".content");

content.forEach((content) => {
  observer.observe(content);
});

var introText = document.querySelectorAll(".intro-text");
introText.forEach((text) => {
  observer.observe(text);
});

var projects = document.querySelectorAll(".projectsContainer div");
projects.forEach((project) => {
  observer.observe(project);
});

var creditText = document.querySelector("footer>div> div >p");
observer.observe(creditText);
var counterContainer = document.querySelectorAll(".skills > div");
function skillCounter() {
  counterContainer.forEach((container) => {
    const value = container.querySelector(".color");
    var width = Number(width);
    width = 0;
    value.style.width = width + "%";
    // console.log(value);

    const limit = container.getAttribute("data-val");
    // console.log(limit);
    const textValue = container.querySelector(".percentage");
    textValue.innerHTML = width + "%";
    // console.log(textValue);

    const duration = Math.round(1000 / limit);
    // console.log(duration);

    function Count() {
      if (width < limit) {
        width++;
        textValue.innerHTML = width + "%";
        value.style.width = width + "%";
      } else if (width == limit) {
        clearInterval(interval);
      }
    }

    const interval = setInterval(Count, duration);
  });
}

const skillsBar = document.querySelector(".skills");

const skillcallbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skillCounter();
    }
  });
};

let skillbarobserver = new IntersectionObserver(skillcallbacks, options);

skillbarobserver.observe(skillsBar);

// program for scroll to top botton reveal

const TopBtn = document.getElementById("toTop");
const modesCont = document.querySelector(".colorModes");

// function revealScrollButton(){

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 600) {
    TopBtn.classList.add("show");
  } else {
    TopBtn.classList.remove("show");
  }

  if (document.documentElement.scrollTop >= 3700) {
    modesCont.classList.add("show");
  }
});

// function  for colorModes
const darkmIcon = document.getElementById("darkMode");
const brightmIcon = document.querySelector("#brightMode");

// Selector for all elements whose styles are to be modified for color modes

var uiElement = document.querySelector(".ui");

modesCont.addEventListener("click", () => {
  darkmIcon.classList.toggle("active");
  brightmIcon.classList.toggle("active");

  uiElement.classList.toggle("darkmode");
});

// function for nav link active indication

window.addEventListener("scroll", () => {
  indicateActive();
});

function indicateActive() {
  var sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 112;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      /* navlinks*/ links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
}

// program for project cards on porjects section

const projectsCards = document.querySelectorAll(".project-card");
const banner = document.querySelectorAll(".card-banner");

projectsCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("detail");
    card.querySelector(".ph--info").addEventListener("mouseover", () => {
      card.querySelector(".detail").classList.add("show");
    });

    card.querySelector(".ph--info").addEventListener("mouseout", () => {
      card.querySelector(".detail").classList.remove("show");
    });
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("detail");
  });
});
