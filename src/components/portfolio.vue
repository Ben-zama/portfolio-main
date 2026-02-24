<template>
  <section id="portfolio">
    <div class="intro">
      <h2 ref="introText">
        Selected Work. Crafted for speed, accessibility, and visual impact.
      </h2>
    </div>

    <div class="cards" ref="container">
      <div v-for="item in portfolio" :key="item.name" ref="cards" class="card">
        <div class="col text-col">
          <div class="text">
            <p>{{ item.info }}</p>
            <h2>{{ item.name }}</h2>
          </div>
          <CTA name="Live Preview" target="_blank" :link="item.liveLink" />
        </div>
        <div class="col img-col">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>

    <div class="outro">
      <h2 ref="outroText">Let’s build something engaging and uniquely yours.</h2>
      <CTA ref="ctaRef" name="Contact me" link="#contact" target="_blank" />
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, nextTick } from "vue";
import CTA from "./ctaButton.vue";

gsap.registerPlugin(ScrollTrigger);

const portfolio = ref();

const cards = ref([]);
const introText = ref(null);
const outroText = ref(null);
const ctaRef = ref(null); // <-- 1. Add the new ref

const cardYOffset = 5;
const cardScaleStep = 0.075;

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

  return el.querySelectorAll(".char");
}

// 2. Modify to return a GSAP Timeline instead of a single tween
function animateTextOnScroll(el, trigger) {
  const chars = splitIntoChars(el);

  gsap.set(chars, { yPercent: 110, opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 80%",
      end: "top 40%",
      toggleActions: "play none none reverse",
    },
  });

  tl.to(chars, {
    yPercent: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.018,
  });

  return tl;
}

function initAnimations() {
  // 1. Calculate these INSIDE the function AFTER data is fetched
  const totalCards = portfolio.value.length;
  // Fallback to 1 to prevent division by zero if there's only 1 card
  const totalSegments = totalCards > 1 ? totalCards - 1 : 1; 
  const segmentSize = 1 / totalSegments;

  // ── Card stack animation ──────────────────────────────────────────────
  cards.value.forEach((card, i) => {
    gsap.set(card, {
      xPercent: -50,
      yPercent: -50 + i * cardYOffset,
      scale: 1 - i * cardScaleStep,
    });
  });

  ScrollTrigger.create({
    trigger: ".cards",
    start: "top top",
    end: `+=${window.innerHeight * 6}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const activeIndex = Math.min(
        Math.floor(progress / segmentSize),
        totalSegments - 1
      );
      const segProgress = (progress - activeIndex * segmentSize) / segmentSize;

      cards.value.forEach((card, i) => {
        if (i < activeIndex) {
          gsap.set(card, { yPercent: -250, rotationX: 35 });
        } else if (i === activeIndex) {
          gsap.set(card, {
            yPercent: gsap.utils.interpolate(-50, -200, segProgress),
            rotationX: gsap.utils.interpolate(0, 35, segProgress),
            scale: 1,
          });
        } else {
          const behindIndex = i - activeIndex;
          const currentYOffset = (behindIndex - segProgress) * cardYOffset;
          const currentScale = 1 - (behindIndex - segProgress) * cardScaleStep;

          gsap.set(card, {
            yPercent: -50 + currentYOffset,
            rotationX: 0,
            scale: currentScale,
          });
        }
      });
    },
  });

  // ── Character-by-character text reveals ──────────────────────────────
  if (introText.value) {
    animateTextOnScroll(introText.value, introText.value.closest(".intro"));
  }
  
  // Store the outro timeline
  if (outroText.value && ctaRef.value) {
    const outroTl = animateTextOnScroll(outroText.value, outroText.value.closest(".outro"));

    // Append the CTA slide-up animation to the outro timeline
    gsap.set(ctaRef.value.$el, { y: 40, opacity: 0 }); // Initial hidden state
    
    outroTl.to(
      ctaRef.value.$el,
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.3" // Starts slightly before the text finishes for a fluid look
    );
  }
}

onMounted(async () => {
  try {
    // Replace with your actual npoint URL
    const response = await fetch("https://api.npoint.io/9aa2fb9cd247400c4dcc"); 
    const data = await response.json();
    
    console.log(data)

    portfolio.value = data;

    // Wait for Vue's v-for loop to finish rendering the DOM nodes
    await nextTick(); 
    
    // Now that cards.value is populated with real DOM elements, trigger GSAP
    initAnimations();

  } catch (error) {
    console.error("Failed to fetch portfolio data:", error);
  }
});
</script>

<style lang="scss">
#portfolio {
  background: var(--bg);
  width: 100%;

  .intro,
  .outro {
    width: 100%;
    height: 50svh;
    max-height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 25px;
    padding: 25px;

    @media (min-width: 600px) and (max-width: 1279px) {
      height: 100svh;
    }

    h2 {
      max-width: 750px;
      font-family: var(--alternate-font);
      font-weight: 900;
      font-size: clamp(30px, 8vw, 75px);
      color: var(--text);
    }
  }

  .cards {
    position: relative;
    width: 100%;
    height: 100svh;
    perspective: 850px;
    overflow: hidden;

    > :nth-child(1) {
      background: var(--card-1);
      z-index: 6;
    }
    > :nth-child(2) {
      background: var(--card-2);
      z-index: 5;
    }
    > :nth-child(3) {
      background: var(--card-3);
      z-index: 4;
    }
    > :nth-child(4) {
      background: var(--card-4);
      z-index: 3;
    }
    > :nth-child(5) {
      background: var(--card-5);
      z-index: 2;
    }
    > :nth-child(6) {
      background: var(--card-6);
      z-index: 1;
    }

    .card {
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
      padding: 15px;
      border-radius: 24px;
      overflow: hidden;
      transform-origin: center bottom;
      will-change: transform;

      width: calc(100% - 20px);
      height: 75%;
      flex-direction: column;

      @media (min-width: 600px) and (max-width: 1279px) {
        width: 85%;
      }

      @media (min-width: 1280px) {
        width: 80%;
        height: 65%;
        flex-direction: row;
      }

      .text-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
      }

      .col {
        height: 100%;
        color: var(--text);

        width: 100%;

        @media (min-width: 1280px) {
          width: auto;
          flex: 1;
        }

        p {
          margin-top: 15px;
          font-family: var(--body-font);
          font-size: 15px;
          font-size: 15px;
          opacity: 0.6;
        }

        h2 {
          font-family: var(--header-font);
          font-weight: 900;
          font-size: clamp(40px, 8vw, 50px);
        }

        .button {
          margin-top: 15px;
          &:hover {
            background: var(--secondary);
            color: var(--primary);
            .button__icon-wrapper {
              background: var(--primary);
              color: var(--secondary);
            }
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
      }
    }
  }
}
</style>