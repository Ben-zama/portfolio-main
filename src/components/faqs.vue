<template>
  <div id="faqs" ref="mainSection">
    <div class="heading">
      <div class="top">
        <PhSealQuestion weight="fill" />
        <p>FAQs</p>
      </div>
      <div class="middle">
        <h2 class="title-line">Got Questions?</h2>
        <h2 class="title-line">I've got answers</h2>
      </div>
      <p class="bottom">
        Everything you need to know about me and how I can help your business
        gain visibility.
      </p>
    </div>

    <div class="container">
      <div
        class="question-container"
        v-for="(faq, index) in faqs"
        :key="index"
        :class="{ active: faq.isOpen }"
        @click="toggleFaq(index)"
      >
        <div class="header">
          <h3 class="question-text">{{ faq.question }}</h3>
          <PhCaretDown class="icon" weight="bold" />
        </div>

        <div class="answer-wrapper">
          <div class="answer-inner">
            <div class="line"></div>
            <p class="answer-text">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { PhSealQuestion, PhCaretDown } from "@phosphor-icons/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mainSection = ref(null); // Reference for the component scope
let ctx; // GSAP Context for cleanup

const faqs = ref([
  {
    question: "How much do I cost?",
    answer:
      "Pricing depends on the scope and complexity of the project. I offer both fixed-price packages for standard websites and hourly rates for custom development. Contact me for a personalized quote.",
    isOpen: false,
  },
  {
    question: "How long will the project take?",
    answer:
      "A standard landing page usually takes 3-5 days, while a full multi-page website can take 2-4 weeks. Timelines are established during our initial consultation.",
    isOpen: false,
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer:
      "Yes! I can help you purchase your domain and set up hosting. I can also deploy your site to platforms like Vercel, Netlify, or your preferred hosting provider.",
    isOpen: false,
  },
  {
    question: "What happens if I need changes later?",
    answer:
      "I offer a 1-month support period after launch for minor tweaks. For ongoing maintenance or major feature additions, we can discuss a retainer or a separate contract.",
    isOpen: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value.forEach((faq, i) => {
    if (index === i) {
      faq.isOpen = !faq.isOpen;
    } else {
      faq.isOpen = false;
    }
  });
};

onMounted(() => {
  // Use gsap.context to scope animations to this component
  ctx = gsap.context(() => {
    
    // 1. Header Animation Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heading",
        start: "top 85%", // Triggers when top of heading hits 85% of viewport
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".top", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".middle .title-line", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15, // Delay between the two H2 lines
      ease: "power3.out",
    }, "-=0.6") // Overlap previous animation
    .from(".bottom", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6");

    // 2. FAQ List Items Staggered Entry
    gsap.from(".question-container", {
      scrollTrigger: {
        trigger: ".container",
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15, // Creates the cascading effect
      ease: "back.out(1.2)", // Subtle bounce for a modern feel
      clearProps: "all" // Cleans up styles after animation prevents conflicts with hover effects
    });

  }, mainSection.value); // Scope to mainSection
});

onUnmounted(() => {
  ctx.revert(); // Clean up GSAP instances when component is destroyed
});
</script>

<style lang="scss" scoped>
/* Kept your existing styles exactly as they were */
#faqs {
  padding: 75px 25px;
  background: var(--primary);
  color: var(--secondary);

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;

    .top {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: var(--alternate-font);
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--reverse-accent);
      padding: 8px 16px;
      background: var(--translucent-secondary-xl);
      border-radius: 50px;
    }
    .middle {
      font-family: var(--header-font);
      font-weight: 900;
      font-size: 25px;
      text-align: center;
      line-height: 1.1;
    }
    .bottom {
      font-family: var(--body-font);
      text-align: center;
      opacity: 0.6;
      max-width: 400px;
      font-size: 16px;
      line-height: 1.6;
    }
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .question-container {
      background: var(--translucent-secondary-xxl);
      border: 1px solid var(--translucent-secondary-xl);
      border-radius: 12px;
      padding: 0 20px;
      cursor: pointer;
      transition: all 0.4s ease;
      overflow: hidden;

      &:hover:not(.active) {
        background: var(--translucent-secondary-xl);
      }

      &.active {
        border-color: var(--reverse-accent);

        .header .question-text {
          color: var(--reverse-accent);
        }

        .header .icon {
          transform: rotate(180deg);
          color: var(--reverse-accent);
        }
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        padding: 20px 0;

        .question-text {
          font-family: var(--header-font);
          font-size: 17.5px;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .icon {
          flex-shrink: 0;
          font-size: 20px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            color 0.3s ease;
        }
      }

      .answer-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);

        .answer-inner {
          overflow: hidden;
        }
      }

      &.active .answer-wrapper {
        grid-template-rows: 1fr;
      }

      .line {
        width: 100%;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          var(--secondary),
          transparent
        );
        opacity: 0.2;
        margin-bottom: 20px;
      }

      .answer-text {
        font-family: var(--body-font);
        font-size: 15px;
        line-height: 1.7;
        padding-bottom: 20px;
        color: var(--secondary);
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 1023px) {
  #faqs {
    padding: 100px 25px;
  }
}

@media (min-width: 1024px) {
  #faqs {
    padding: 100px 25px;
  }
}
</style>