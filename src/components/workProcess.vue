<template>
  <section id="process" ref="sectionRef">
    <div class="svg-container">
      <svg ref="svgRef" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref="strokePathRef" stroke-width="50" />
      </svg>
    </div>

    <div class="heading">
      <h2>My Work Process</h2>
    </div>

    <div class="container">
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="card"
        ref="cardRefs"
      >
        <h2>{{ item.number }}</h2>
        <h3>{{ item.title }}</h3>
        <p>{{ item.info }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const svgRef = ref(null);
const strokePathRef = ref(null);
const cardRefs = ref([]);

let scrollTween = null;
let cardTweens = [];

const cards = [
  {
    number: "01",
    title: "Discovery & Planning",
    info: "We discuss your goals and project scope.",
  },
  {
    number: "02",
    title: "Design & Structure",
    info: "I create a layout and user interface plan.",
  },
  {
    number: "03",
    title: "Frontend Development",
    info: "I bring the design to life with clean code.",
  },
  {
    number: "04",
    title: "Testing & Delivery",
    info: "I test across devices and deliver your site.",
  },
];

const updatePath = () => {
  const svg = svgRef.value;
  const path = strokePathRef.value;
  const section = sectionRef.value;
  const cardElements = cardRefs.value;

  if (!svg || !path || cardElements.length === 0) return;

  const rect = section.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  svg.setAttribute("width", w);
  svg.setAttribute("height", h);
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

  const points = [];
  points.push({ x: w / 2, y: 0 });

  // Track each card's Y offset from the top of the section
  const cardOffsets = [];

  cardElements.forEach((el, i) => {
    const cardRect = el.getBoundingClientRect();
    const cardX = cardRect.left - rect.left + cardRect.width / 2;
    const cardY = cardRect.top - rect.top + cardRect.height / 2;
    const isMobile = window.innerWidth < 600;

    // Store top edge of card relative to section top (not center)
    cardOffsets.push(cardRect.top - rect.top);

    if (isMobile) {
      const wiggleOffset = 40;
      const mobileX = w / 2 + (i % 2 === 0 ? -wiggleOffset : wiggleOffset);
      points.push({ x: mobileX, y: cardY });
    } else {
      points.push({ x: cardX, y: cardY });
    }
  });

  points.push({ x: w / 2, y: h });

  let pathData = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const curr = points[i];
    const prev = points[i - 1];
    const handleY = (prev.y + curr.y) / 2;
    pathData += ` C ${prev.x} ${handleY}, ${curr.x} ${handleY}, ${curr.x} ${curr.y}`;
  }

  path.setAttribute("d", pathData);

  const pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  // Kill all previous tweens to prevent conflicts on resize
  if (scrollTween) scrollTween.kill();
  cardTweens.forEach((t) => t.kill());
  cardTweens = [];

  // Stroke draw animation (unchanged)
  scrollTween = gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    },
  });

  // --- Card reveal: sync with stroke arrival ---
  // The main stroke trigger maps scroll distance = section height (h).
  // Each card at cardOffsets[i] from section top is reached at that same
  // fractional point in the scroll range, so we mirror that offset here.
  cardElements.forEach((el, i) => {
    // Reset to hidden
    gsap.set(el, { opacity: 0, y: 40, scale: 0.97 });

    // "top+=X center" triggers when the point X px below section top
    // reaches the viewport center — the same moment the stroke passes it.
    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: `top+=${cardOffsets[i]} center`,
        toggleActions: "play none none reverse",
      },
    });

    cardTweens.push(tween);
  });
};

onMounted(() => {
  setTimeout(() => updatePath(), 100);
  window.addEventListener("resize", updatePath);
});

onUnmounted(() => {
  window.removeEventListener("resize", updatePath);
  if (scrollTween) scrollTween.kill();
  cardTweens.forEach((t) => t.kill());
});
</script>

<style lang="scss">
#process {
  position: relative;
  padding: 80px 20px;
  background: var(--bg);
  color: var(--text);

  .svg-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;

    path {
      stroke: var(--accent);
      stroke-width: 75;
      stroke-linecap: round;
      stroke-linejoin: round;
      filter: drop-shadow(0 0 8px var(--accent));
    }
  }

  .heading {
    position: relative;
    margin-bottom: 25px;
    text-align: center;
    z-index: 2;
    h2 {
      font-family: var(--header-font);
      font-weight: 900;
      font-size: 35px;
    }
  }

  .container {
    position: relative;
    z-index: 2;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;

    /* Cards start invisible; GSAP takes over from here */
    .card {
      opacity: 0;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      background: var(--translucent-secondary);
      backdrop-filter: blur(5px);
      border-radius: 16px;
      box-shadow: 2px 2px 8px var(--shadow), -2px -2px 8px var(--shadow);
      h2 {
        font-family: var(--alternate-font);
        font-size: 50px;
        opacity: 0.5;
      }
      h3 {
        font-family: var(--header-font);
        font-weight: bold;
        font-size: 25px;
      }
      p {
        font-family: var(--body-font);
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 1023px) {
  #process {
    padding: 80px;
    .container {
      margin: 0 auto;
      max-width: 800px;
      gap: 50px;
      .card {
        &:nth-child(odd) {
          align-self: flex-start;
          margin-left: 5%;
        }
        &:nth-child(even) {
          align-self: flex-end;
          margin-right: 5%;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  #process {
    padding: 80px 0;
    .container {
      max-width: 1100px;
      .card {
        width: 380px;
        padding: 25px;
        gap: 10px;
        &:nth-child(odd) {
          align-self: flex-start;
          margin-left: 5%;
        }
        &:nth-child(even) {
          align-self: flex-end;
          margin-right: 5%;
        }
        &:nth-child(2) {
          margin-top: 50px;
        }
        &:nth-child(3) {
          margin-left: 15%;
        }
      }
    }
  }
}
</style>