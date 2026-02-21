<template>
  <section id="about">
    <p class="main-text" ref="mainTextRef">
      <span class="text-block">I’m a frontend </span>
      <span class="text-block accent">developer turning ideas into fast, responsive, and visually engaging web experiences. </span>
      <span class="text-block">With 3 years of experience, I build clean, accessible interfaces that feel smooth on any device.</span>
    </p>

    <div class="highlights" ref="highlightsRef">
      <div class="highlight-item">
        <h3>
          <PhCheckCircle weight="fill" />
          3+
        </h3>
        <p>Years Experience</p>
      </div>
      <hr class="highlight-divider" />
      <div class="highlight-item">
        <h3>
          <PhCheckCircle weight="fill" />
          50+
        </h3>
        <p>Projects Completed</p>
      </div>
      <hr class="highlight-divider" />
      <div class="highlight-item">
        <h3>
          <PhCheckCircle weight="fill" />
          99%
        </h3>
        <p>Client Satisfaction</p>
      </div>
    </div>

    <div class="cta-wrapper">
      <CtaButton name="View Resume" target="_blank" link="/resume.pdf" />
    </div>

    <div class="timeline" ref="timelineRef">
      <div class="container">
        <div class="card timeline-card">
          <div class="top">
            <div class="circle">
              <PhBriefcase weight="fill" />
            </div>
            <h3>Work Experience</h3>
          </div>
          <hr />
          <div class="bottom">
            <h3>Greysoft Technologies</h3>
            <p>Intern</p>
            <span>2023 - 2024</span>
          </div>
        </div>
        <div class="card timeline-card">
          <div class="top">
            <div class="circle">
              <PhGraduationCap weight="fill" />
            </div>
            <h3>Education</h3>
          </div>
          <hr />
          <div class="bottom">
            <h3>Redeemers University</h3>
            <p>Bsc Computer Science</p>
            <span>2025 - 2029</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CtaButton from "./ctaButton.vue";
import {
  PhBriefcase,
  PhCheckCircle,
  PhGraduationCap,
} from "@phosphor-icons/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Refs for GSAP targets ---
const mainTextRef = ref(null);
const highlightsRef = ref(null);
const timelineRef = ref(null);

/**
 * Wraps every character in a <span> and returns the spans.
 * Preserves spaces by wrapping them too.
 */
function splitIntoChars(el) {
  const originalText = el.innerText;
  el.setAttribute("aria-label", originalText);

  el.innerHTML = originalText
    .split(" ")
    .map((word) => {
      const chars = word
        .split("")
        .map(
          (char) =>
            `<span class="char" aria-hidden="true" style="display:inline-block;">${char}</span>`
        )
        .join("");
      return `<span class="word" aria-hidden="true" style="display:inline-flex; overflow:hidden; vertical-align:bottom;">${chars}</span>`;
    })
    .join(" "); 

  return Array.from(el.querySelectorAll(".char"));
}

onMounted(() => {
  // 1. Character-by-Character Main Text Reveal
  const textBlocks = mainTextRef.value.querySelectorAll(".text-block");
  let allChars = [];

  // Split each block to preserve the .accent styling, then combine all character nodes
  textBlocks.forEach((block) => {
    const chars = splitIntoChars(block);
    allChars = [...allChars, ...chars];
  });

  gsap.set(allChars, { yPercent: 110, opacity: 0 });

  gsap.to(allChars, {
    yPercent: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.018,
    scrollTrigger: {
      trigger: mainTextRef.value,
      start: "top 80%",
      end: "top 40%",
      toggleActions: "play none none reverse",
    },
  });

  // 2. Highlights Section Entrance Animation
  const highlightItems = highlightsRef.value.querySelectorAll(
    ".highlight-item, .highlight-divider"
  );

  gsap.from(highlightItems, {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: highlightsRef.value,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  // 3. Cta Entrance Animation
  gsap.fromTo(
    ".cta-wrapper .button",
    {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.Out",
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".cta-wrapper",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // 4. Timeline Cards Entrance Animation
  const timelineCards = timelineRef.value.querySelectorAll(".timeline-card");

  gsap.from(timelineCards, {
    y: 60,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: timelineRef.value,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<style lang="scss" scoped>
#about {
  padding: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background: var(--bg);
  color: var(--text);
  overflow: hidden;

  .main-text {
    font-family: var(--alternate-font);
    font-size: 35px;
    text-align: center;
    line-height: 50px;

    .accent {
      color: var(--accent);
    }
  }

  .highlights {
    display: flex;
    flex-direction: column;
    hr {
      opacity: 0.7;
      border-radius: 8px;
      width: 100%;
    }
    .highlight-item {
      padding: 25px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      h3 {
        display: flex;
        align-items: center;
        gap: 5px;
        font-family: var(--header-font);
        font-weight: bold;
        font-size: 25px;
        color: var(--accent);
        svg {
          margin-top: 5px;
          font-size: 20px;
        }
      }
      p {
        font-family: var(--body-font);
      }
    }
  }

  .timeline {
    margin-top: 50px;
    width: 100%;
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      .card {
        width: 100%;
        max-width: 300px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 16px;
        background: var(--secondary);
        box-shadow: 2px 2px 8px var(--shadow), -2px -2px var(--accent);
        .top {
          display: flex;
          align-items: center;
          gap: 15px;
          .circle {
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--accent);
            border-radius: 50%;
            color: var(--secondary);
          }
          h3 {
            font-family: var(--header-font);
          }
        }
        hr {
          opacity: 0.5;
        }
        .bottom {
          h3 {
            font-family: var(--header-font);
            font-weight: 900;
            font-size: 20px;
          }
          p {
            margin-bottom: 5px;
            font-family: var(--alternate-font);
            font-size: 20px;
            opacity: 0.7;
          }
          span {
            font-family: var(--body-font);
          }
        }
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 1023px) {
  #about {
    padding: 100px 50px;
    .main-text {
      font-size: 50px;
      line-height: 75px;
    }
    .highlights {
      flex-direction: row;
      justify-content: center;
      width: 100%;
      gap: 30px;
      .highlight-item {
        padding: 15px 25px;
      }
      hr {
        display: none;
      }
    }
    .timeline {
      .container {
        flex-direction: row;
        justify-content: center;
        gap: 40px;
      }
    }
  }
}

@media (min-width: 1024px) {
  #about {
    padding: 100px;
    .main-text {
      font-size: 50px;
      line-height: 75px;
      max-width: 900px;
    }
    .highlights {
      flex-direction: row;
      justify-content: center;
      width: 100%;
      gap: 50px;
      .highlight-item {
        padding: 15px 25px;
      }
      hr {
        display: none;
      }
    }
    .timeline {
      .container {
        flex-direction: row;
        justify-content: center;
        gap: 50px;
      }
    }
  }
}
</style>