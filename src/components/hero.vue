<template>
  <section id="hero">
    <Header />

    <div ref="preloader" class="preloader">
      <img class="noise" src="/noise.png" alt="" />
      <div class="loader-wrapper">
        <span class="loader-word">Creative</span>
        <span class="loader-word">Design</span>
        <span class="loader-word">Frontend</span>
        <span class="loader-word">Benzama</span>
      </div>
    </div>

    <div class="hero-image">
      <img :src="background" alt="" />
    </div>

    <img class="noise" src="/noise.png" alt="" />

    <div class="containers">
      <div class="span">
        <div class="container1">
          <div class="badge">
            <div class="circle"></div>
            <p>Available for work</p>
          </div>
          <h2>Creative Frontend Web Developer</h2>
        </div>

        <div class="container2">
          <p>
            Hi, I'm Benzama — a Frontend Developer with a creative edge and 3
            years of experience building modern, responsive web interfaces using
            Vue.JS.
          </p>
          <Cta name="See my works" link="#portfolio" />
        </div>
      </div>

      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 14.199999809265137 215.85000610351562 35.70000076293945"
          data-asc="0.984"
        >
          <defs />
          <g fill="#000000">
            <g transform="translate(0, 0)">
              <path
                d="M0 49.20L0 43.40L4.60 43.40L4.60 20L0 20L0 14.20L18 14.20Q21.20 14.20 23.57 15.27Q25.95 16.35 27.28 18.33Q28.60 20.30 28.60 23.05L28.60 23.55Q28.60 25.95 27.70 27.48Q26.80 29 25.57 29.83Q24.35 30.65 23.25 31.00L23.25 31.90Q24.35 32.20 25.65 33.03Q26.95 33.85 27.88 35.40Q28.80 36.95 28.80 39.45L28.80 39.95Q28.80 42.85 27.45 44.93Q26.10 47 23.73 48.10Q21.35 49.20 18.20 49.20L0 49.20M11.20 43.20L17.40 43.20Q19.55 43.20 20.88 42.15Q22.20 41.10 22.20 39.15L22.20 38.65Q22.20 36.70 20.90 35.65Q19.60 34.60 17.40 34.60L11.20 34.60L11.20 43.20M11.20 28.60L17.30 28.60Q19.35 28.60 20.68 27.55Q22 26.50 22 24.65L22 24.15Q22 22.25 20.70 21.23Q19.40 20.20 17.30 20.20L11.20 20.20L11.20 28.60ZM45.70 49.90Q42 49.90 39.18 48.33Q36.35 46.75 34.78 43.88Q33.20 41 33.20 37.10L33.20 36.50Q33.20 32.60 34.75 29.73Q36.30 26.85 39.10 25.28Q41.90 23.70 45.60 23.70Q49.25 23.70 51.95 25.33Q54.65 26.95 56.15 29.83Q57.65 32.70 57.65 36.50L57.65 38.65L39.60 38.65Q39.70 41.20 41.50 42.80Q43.30 44.40 45.90 44.40Q48.55 44.40 49.80 43.25Q51.05 42.10 51.70 40.70L56.85 43.40Q56.15 44.70 54.83 46.23Q53.50 47.75 51.30 48.83Q49.10 49.90 45.70 49.90M39.65 33.95L51.25 33.95Q51.05 31.80 49.53 30.50Q48 29.20 45.55 29.20Q43 29.20 41.50 30.50Q40 31.80 39.65 33.95ZM63.25 49.20L63.25 24.40L69.45 24.40L69.45 27.65L70.35 27.65Q70.95 26.35 72.60 25.18Q74.25 24 77.60 24Q80.50 24 82.67 25.33Q84.85 26.65 86.05 28.98Q87.25 31.30 87.25 34.40L87.25 49.20L80.95 49.20L80.95 34.90Q80.95 32.10 79.58 30.70Q78.20 29.30 75.65 29.30Q72.75 29.30 71.15 31.23Q69.55 33.15 69.55 36.60L69.55 49.20L63.25 49.20ZM93.15 49.20L93.15 41.70L106.75 30.40L106.75 29.60L93.65 29.60L93.65 24.40L113.65 24.40L113.65 31.90L100.05 43.20L100.05 44L114.05 44L114.05 49.20L93.15 49.20ZM127.65 49.90Q125 49.90 122.90 48.98Q120.80 48.05 119.58 46.28Q118.35 44.50 118.35 41.95Q118.35 39.40 119.58 37.68Q120.80 35.95 122.98 35.08Q125.15 34.20 127.95 34.20L134.75 34.20L134.75 32.80Q134.75 31.05 133.65 29.93Q132.55 28.80 130.15 28.80Q127.80 28.80 126.65 29.88Q125.50 30.95 125.15 32.65L119.35 30.70Q119.95 28.80 121.28 27.23Q122.60 25.65 124.83 24.68Q127.05 23.70 130.25 23.70Q135.15 23.70 138 26.15Q140.85 28.60 140.85 33.25L140.85 42.50Q140.85 44 142.25 44L144.25 44L144.25 49.20L140.05 49.20Q138.20 49.20 137 48.30Q135.80 47.40 135.80 45.90L135.80 45.85L134.85 45.85Q134.65 46.45 133.95 47.43Q133.25 48.40 131.75 49.15Q130.25 49.90 127.65 49.90M128.75 44.80Q131.40 44.80 133.07 43.33Q134.75 41.85 134.75 39.40L134.75 38.90L128.40 38.90Q126.65 38.90 125.65 39.65Q124.65 40.40 124.65 41.75Q124.65 43.10 125.70 43.95Q126.75 44.80 128.75 44.80ZM148.85 49.20L148.85 24.40L155.05 24.40L155.05 27.10L155.95 27.10Q156.60 25.85 158.10 24.93Q159.60 24 162.05 24Q164.70 24 166.30 25.03Q167.90 26.05 168.75 27.70L169.65 27.70Q170.50 26.10 172.05 25.05Q173.60 24 176.45 24Q178.75 24 180.63 24.98Q182.50 25.95 183.63 27.93Q184.75 29.90 184.75 32.90L184.75 49.20L178.45 49.20L178.45 33.35Q178.45 31.30 177.40 30.28Q176.35 29.25 174.45 29.25Q172.30 29.25 171.13 30.63Q169.95 32 169.95 34.55L169.95 49.20L163.65 49.20L163.65 33.35Q163.65 31.30 162.60 30.28Q161.55 29.25 159.65 29.25Q157.50 29.25 156.32 30.63Q155.15 32 155.15 34.55L155.15 49.20L148.85 49.20ZM199.25 49.90Q196.60 49.90 194.50 48.98Q192.40 48.05 191.18 46.28Q189.95 44.50 189.95 41.95Q189.95 39.40 191.18 37.68Q192.40 35.95 194.58 35.08Q196.75 34.20 199.55 34.20L206.35 34.20L206.35 32.80Q206.35 31.05 205.25 29.93Q204.15 28.80 201.75 28.80Q199.40 28.80 198.25 29.88Q197.10 30.95 196.75 32.65L190.95 30.70Q191.55 28.80 192.88 27.23Q194.20 25.65 196.43 24.68Q198.65 23.70 201.85 23.70Q206.75 23.70 209.60 26.15Q212.45 28.60 212.45 33.25L212.45 42.50Q212.45 44 213.85 44L215.85 44L215.85 49.20L211.65 49.20Q209.80 49.20 208.60 48.30Q207.40 47.40 207.40 45.90L207.40 45.85L206.45 45.85Q206.25 46.45 205.55 47.43Q204.85 48.40 203.35 49.15Q201.85 49.90 199.25 49.90M200.35 44.80Q203 44.80 204.68 43.33Q206.35 41.85 206.35 39.40L206.35 38.90L200 38.90Q198.25 38.90 197.25 39.65Q196.25 40.40 196.25 41.75Q196.25 43.10 197.30 43.95Q198.35 44.80 200.35 44.80Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>

    <div class="left-line">
      <a href="">Benzamasimon@gmail.com</a>
      <div class="line"></div>
    </div>

    <div class="right-line">
      <div class="line"></div>
      <div class="socials">
        <a href="#" target="blank">
          <PhGithubLogo weight="bold" />
        </a>
        <a href="#" target="blank">
          <PhLinkedinLogo weight="bold" />
        </a>
        <a href="#" target="blank">
          <PhXLogo weight="bold" />
        </a>
        <a href="#" target="blank">
          <PhInstagramLogo weight="bold" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "./header.vue";
import {
  PhGithubLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhXLogo,
} from "@phosphor-icons/vue";
import Cta from "./ctaButton.vue";
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(CustomEase, SplitText);

const preloader = ref(null);
let lenisInstance = null;

const background =
  window.innerWidth < 600
    ? "/background-mobile.png"
    : "/background-desktop.png";

onMounted(() => {
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  lenisInstance = new Lenis();

  window.scrollTo(0, 0);
  lenisInstance.scrollTo(0, { immediate: true });

  // 2. Stop scrolling immediately
  lenisInstance.stop();

  // Standard Lenis RAF loop
  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  CustomEase.create("hop", "0.9, 0, 0.1, 1");

  // 1. Initialize SplitText
  const headerSplit = new SplitText(".container1 h2", {
    type: "words",
    wordsClass: "word",
  });
  const infoSplit = new SplitText(".container2 p", {
    type: "words",
    wordsClass: "word",
  });

  // 2. Select Loader Words
  const loaderWords = gsap.utils.toArray(".loader-word");

  // Set initial states
  gsap.set([headerSplit.words, infoSplit.words], { y: 50, opacity: 0 });
  gsap.set(loaderWords, { opacity: 0, y: 20 });

  const tl = gsap.timeline({
    onComplete: () => {
      lenisInstance.start();
    },
  });

  // 3. Word Loop Loader Sequence
  // Loops through each word: Fade in & Slide up -> Pause -> Fade out & Slide up
  loaderWords.forEach((word, i) => {
    tl.to(word, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }).to(word, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
      delay: 0.3, // How long the word stays visible
    });
  });

  // 4. Remove Preloader
  tl.to(
    preloader.value,
    {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (preloader.value) preloader.value.remove();
      },
    },
    "-=0.2"
  );

  // 5. Image ClipPath and Scale reveal
  tl.to(
    ".hero-image",
    {
      clipPath: "polygon(35% 35%, 65% 35%, 65% 65%, 35% 65%)",
      duration: 1.5,
      ease: "hop",
    },
    "-=0.3"
  );

  tl.to(
    ".hero-image",
    {
      scale: 1.5,
      duration: 1.5,
      ease: "hop",
    },
    "<"
  );

  tl.to(".hero-image", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 2,
    ease: "hop",
  });

  tl.to(
    ".hero-image",
    {
      scale: 1,
      duration: 2,
      ease: "hop",
    },
    "<"
  );

  // 6. Reveal Content (The Text)
  tl.to(
    headerSplit.words,
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
    },
    "-=1"
  );

  tl.to(
    infoSplit.words,
    {
      y: 0,
      opacity: 1,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.8"
  );

  // 7. Reveal cta button and badge
  tl.fromTo(
    ".badge, #hero .button",
    {
      y: 25,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2, // Reduced stagger for a snappier feel
      duration: 1,
      ease: "power3.out",
    },
    "-=0.5"
  );

  // 8. Reveal Socials and UI
  tl.from(
    ".left-line, .right-line",
    {
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
    },
    "-=0.8"
  );

  // 9. logo reveal
  tl.from(
    "#hero .logo",
    {
      y: 25,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    },
    "<"
  );

  // 10. Header reveal
  tl.fromTo(
    "#hero .header",
    {
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    },
    "<"
  );
});

onUnmounted(() => {
  if (lenisInstance) {
    lenisInstance.destroy();
  }
});
</script>

<style lang="scss" scoped>
#hero {
  position: relative;
  height: 130svh;
  max-height: 1000px;
  background: var(--text);
  color: var(--text);

  .no-scroll {
    overflow: hidden;
    height: 100vh;
  }

  .word,
  .char,
  .digit {
    position: relative;
    will-change: transform;
  }

  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    inset: 0;
    width: 100%;
    height: 100svh;
    max-height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .loader-wrapper {
      position: relative;
      height: 50px;
      width: 100%;
      text-align: center;
    }

    .loader-word {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-family: var(--alternate-font);
      font-weight: 900;
      font-size: 4rem;
      color: var(--bg);
      white-space: nowrap;
      width: 100%;
    }
  }

  .hero-image {
    position: relative;
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
    will-change: clip-path;
    display: flex;
    align-items: center;
    z-index: 1;
    background: var(--bg);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .noise {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .containers {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    z-index: 1;
    .span {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .container1 {
        .badge {
          padding: 4px 8px;
          width: max-content;
          display: flex;
          align-items: center;
          gap: 5px;
          background: var(--translucent-primary);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border-radius: 8px;
          font-family: var(--alternate-font);
          font-size: 12.5px;
          color: var(--secondary);
          .circle {
            position: relative;
            width: 6px;
            height: 6px;
            background: var(--accent);
            border-radius: 50%;
            &::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: var(--accent);
              border-radius: 50%;
              transform: scale(1);
              opacity: 0.5;
              animation: ripple 1.5s infinite ease-out;
              z-index: -1;
            }
            @keyframes ripple {
              to {
                transform: scale(3);
                opacity: 0;
              }
            }
          }
        }
        h2 {
          font-family: var(--header-font);
          font-size: 35px;
        }
      }

      .container2 {
        p {
          font-family: var(--alternate-font);
          line-height: 25px;
          font-weight: bold;
        }
        .button {
          margin-top: 15px;
        }
      }
    }
    .logo {
      width: 100%;
      height: auto;
      svg {
        g {
          fill: var(--text);
        }
      }
    }
  }

  .left-line {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    z-index: 2;
    .line {
      width: 1px;
      height: 20vh;
      background: var(--text);
      border-radius: 8px;
    }
    a {
      writing-mode: sideways-lr;
      text-orientation: upright;
      font-family: var(--alternate-font);
      font-size: 12.5px;
      color: var(--text);
      &:hover {
        color: var(--accent);
      }
    }
  }

  .right-line {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    z-index: 2;
    .line {
      width: 1px;
      height: 20vh;
      background: var(--text);
      border-radius: 8px;
    }
    .socials {
      display: flex;
      flex-direction: column;
      gap: 15px;
      a {
        font-size: 20px;
        color: var(--text);
        &:hover {
          color: var(--accent);
        }
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 1023px) {
  #hero {
    height: 100vh;
    .preloader {
      .loader-wrapper {
        .loader-word {
          font-size: 8rem;
        }
      }
    }
    .containers {
      .span {
        flex-direction: row;
        justify-content: space-between;
        .container1 {
          width: 40%;
        }
        .container2 {
          width: 30%;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  #hero {
    height: 100vh;
    .preloader {
      .loader-wrapper {
        .loader-word {
          font-size: 12rem;
        }
      }
    }
    .containers {
      .span {
        flex-direction: row;
        justify-content: space-between;
        .container1 {
          width: 40%;
        }
        .container2 {
          width: 30%;
        }
      }
    }
    .left-line,
    .right-line {
      display: flex;
    }
  }
}
</style>