<template>
  <div class="sliders">
    <Vue3Marquee direction="reverse" :clone="true" class="slider1">
      <div class="item" v-for="item in services" :key="item">
        <p>{{ item }}</p>
        <span>/</span>
      </div>
    </Vue3Marquee>

    <Vue3Marquee class="slider2" :pause-on-hover="true">
      <div class="item skill-item" v-for="item in skills" :key="item">
        <img :src="item.icon" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import gsap from "gsap";

const services = [
  "Landing Pages",
  "Multi-page Sites",
  "E-commerce Sites",
  "Web Apps",
  "Mobile App Development",
  "Portfolios",
];

const skills = [
  { name: "HTML5", icon: "/icons/html.png" },
  { name: "CSS3", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "TypeScript", icon: "/icons/ts.png" },
  { name: "TailwindCSS", icon: "/icons/tailwind.png" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "Sass", icon: "/icons/sass.png" },
  { name: "VueJS", icon: "/icons/vue.png" },
  { name: "Nuxt", icon: "/icons/nuxt.png" },
  { name: "Quasar", icon: "/icons/quasar.svg" },
  { name: "Pinia", icon: "/icons/pinia.svg" },
  { name: "Appwrite", icon: "/icons/appwrite.png" },
  { name: "GSAP", icon: "/icons/gsap.svg" },
];
</script>

<style lang="scss" scoped>
.sliders {
  overflow: clip visible;
  .slider1,
  .slider2 {
    padding: 25px 0;
    overflow: hidden;
  }
  .slider1 {
    width: calc(100% + 10px);
    transform: translateX(-5px);
    background: var(--secondary);
    border-width: 1px 0;
    border: solid var(--translucent-accent);
    .item {
      font-size: 35px;
      p {
        display: inline-block;
        font-family: var(--alternate-font);
        color: var(--primary);
      }
      span {
        margin: 0 15px;
        font-weight: 900;
        color: var(--accent);
      }
    }
  }
  .slider2 {
    width: calc(100% + 10px);
    transform: translateX(-5px) translateY(-5px) rotate(-1deg);
    background: var(--bg);
    border-width: 1px 0;
    border: solid var(--translucent-accent);
    .skill-item {
      transition: transform 0.3s ease, opacity 0.3s ease;
      cursor: default;
    }
    &:hover .skill-item {
      opacity: 0.5;
      filter: blur(1px);
    }
    .skill-item:hover {
      opacity: 1;
      filter: blur(0);
      transform: scale(1.05);
    }
    .item {
      margin-right: 50px;
      display: flex;
      align-items: center;
      gap: 15px;
      img {
        height: 36px;
        width: auto;
      }
      p {
        font-family: var(--alternate-font);
        color: var(--text);
        font-size: 22px;
      }
    }
  }
}
</style>