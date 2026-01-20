<template>
  <section id="portfolio">
    <div class="intro">
      <h2>Featured Projects</h2>
      <p>
        Explore my recent web design creations and discover how we can transform
        your vision into reality.
      </p>
    </div>

    <div class="sticky-cards">
      <div
        v-for="(item, index) in portfolio"
        :key="index"
        class="card"
        :ref="(el) => (cardsRef[index] = el)"
      >
        <div class="card-inner">
          <div class="text">
            <h3 class="name">{{ item.name }}</h3>
            <p class="info">{{ item.info }}</p>
            <div class="links">
              <a target="_blank" :href="item.link1">
                <PhGlobe weight="bold" />
                <p>View Demo</p>
              </a>
              <a target="_blank" :href="item.link2">
                <PhGithubLogo weight="bold" />
                <p>View on Github</p>
              </a>
            </div>
          </div>
          <div class="image">
            <img :src="item.image" alt="Project Preview" />
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { PhGithubLogo, PhGlobe } from "@phosphor-icons/vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardsRef = ref([]);
const portfolio = [
  {
    name: "Halo Oil",
    info: "A comprehensive dashboard for oil management.",
    link1: "#",
    link2: "#",
    image: "https://placehold.co/600x400/1e1e1e/FFF",
  },
  {
    name: "Eco Track",
    info: "Tracking carbon footprints with real-time data.",
    link1: "#",
    link2: "#",
    image: "https://placehold.co/600x400/2a2a2a/FFF",
  },
  {
    name: "Urban Pulse",
    info: "City data visualization and transit mapping.",
    link1: "#",
    link2: "#",
    image: "https://placehold.co/600x400/333333/FFF",
  },
  {
    name: "Nova UI",
    info: "A modern component library for Vue developers.",
    link1: "#",
    link2: "#",
    image: "https://placehold.co/600x400/444444/FFF",
  },
  {
    name: "Zenith",
    info: "Financial planning application for startups.",
    link1: "#",
    link2: "#",
    image: "https://placehold.co/600x400/555555/FFF",
  },
  {
    name: "Zenith",
    info: "Financial planning application for startups.",
    link1: "#",
    link2: "#",
    image: "https://placehold.co/600x400/555555/FFF",
  },
];

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const cards = cardsRef.value.filter((el) => el);

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      const inner = card.querySelector(".card-inner");

      gsap.to(inner, {
        scale: 0.8,
        opacity: 0,
        rotateX: 5,
        filter: "blur(10px)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 10%",
          end: "bottom 10%",
          scrub: true,
        },
      });
    });
  });
});

onUnmounted(() => {
  ctx && ctx.revert();
});
</script>

<style lang="scss">
#portfolio {
  padding: 25px 15px 0 15px;
  width: 100%;
  background: var(--bg);
  color: var(--text);

  .intro {
    padding: 0 25px 50px 25px;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h2 {
      font-family: var(--header-font);
      font-weight: 900;
      font-size: clamp(30px, 5vw, 50px);
      margin-bottom: 15px;
    }
    p {
      margin: 0 auto;
      max-width: 600px;
      font-family: var(--body-font);
      line-height: 1.6;
    }
  }

  .sticky-cards {
    display: flex;
    flex-direction: column;

    // --- UPDATED LOOP ---
    @for $i from 1 through 10 {
      > :nth-child(#{$i}) {
        // 1. Define a variable for this specific card's background color
        --current-card-bg: var(--card-#{$i}, #1a1a1a);

        .card-inner {
          // 2. Use that variable for the background
          background: var(--current-card-bg);
          z-index: #{$i};
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
    }

    .card {
      position: sticky;
      top: 10%;
      height: 90vh;
      width: 100%;
      display: flex;
      justify-content: center;
      perspective: 1000px;

      .card-inner {
        width: 100%;
        max-width: 1200px;
        height: 80vh;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
        transform-origin: center top;
        will-change: transform, opacity, filter;

        .text {
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;

          h3 {
            font-family: var(--header-font);
            font-weight: 900;
            font-size: 28px;
          }

          p {
            font-family: var(--body-font);
            font-size: 16px;
            opacity: 0.9;
            line-height: 1.5;
          }

          .links {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 15px;
            margin-top: 10px;

            a {
              position: relative;
              padding: 10px 20px;
              display: flex;
              align-items: center;
              gap: 8px;
              outline: 1px solid var(--primary);
              border-radius: 100px;
              transition: 0.3s;
              cursor: pointer;
              overflow: hidden;
              text-decoration: none;
              color: inherit;
              font-size: 14px;
              font-weight: 600;

              &::before {
                content: "";
                position: absolute;
                left: -50px;
                top: 0;
                width: 0;
                height: 100%;
                background: var(--primary);
                transform: skewX(45deg);
                z-index: -1;
                transition: width 0.5s;
              }

              &:hover {
                &::before {
                  width: 150%;
                }
                // 3. Use the variable here
                color: var(--current-card-bg);
                transform: scale(1.05);
              }
            }
          }
        }

        .image {
          width: 100%;
          height: 50%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}

/* --- Breakpoints --- */

@media (min-width: 600px) and (max-width: 1023px) {
  #portfolio {
    padding: 25px;
    .sticky-cards .card .card-inner .text {
      padding: 40px;
      align-items: center;
      text-align: center;
      p {
        max-width: 500px;
      }
      .links {
        flex-direction: row;
        justify-content: center;
      }
    }
    .sticky-cards .card .card-inner .image {
      height: 60%;
    }
  }
}

@media (min-width: 1024px) {
  #portfolio .sticky-cards .card {
    height: 90vh;

    .card-inner {
      flex-direction: row;
      align-items: stretch;
      height: 70vh;

      .text {
        width: 45%;
        padding: 60px;
        text-align: left;
        align-items: flex-start;
        justify-content: center;

        h3 {
          font-size: 42px;
        }
        p {
          margin: 0;
          max-width: 100%;
          font-size: 18px;
        }
        .links {
          justify-content: flex-start;
          flex-direction: row;
        }
      }

      .image {
        width: 55%;
        height: 100%;
      }
    }
  }
}
</style>