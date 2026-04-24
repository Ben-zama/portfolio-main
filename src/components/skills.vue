<template>
  <section id="skills">
    <div class="heading">
      <h2>My Skills</h2>
    </div>

    <div class="container">
      <div class="icons">
        <Vue3Marquee class="slider1" direction="reverse">
          <div class="item" v-for="item in skills" :key="item">
            <img :src="item.icon" alt="" />
          </div>
        </Vue3Marquee>
        <Vue3Marquee class="slider2">
          <div class="item" v-for="item in skillsR" :key="item">
            <img :src="item.icon" alt="" />
          </div>
        </Vue3Marquee>
      </div>
      <hr />
      <ul class="text">
        <li>
          <h3>Frontend:</h3>
          <p>HTML, VueJS, NuxtJS, Quasar</p>
        </li>
        <li>
          <h3>Styling:</h3>
          <p>CSS, SCSS, TailwindCSS, Bootstrap</p>
        </li>
        <li>
          <h3>Languages:</h3>
          <p>Javascript, Typescript</p>
        </li>
        <li>
          <h3>Backend:</h3>
          <p>Appwrite</p>
        </li>
        <li>
          <h3>Others:</h3>
          <p>Pinia, Gsap</p>
        </li>
      </ul>
    </div>

    <div class="rotate">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
    </div>
  </section>
</template>

<script setup>
import { Vue3Marquee } from "vue3-marquee";

const skills = [
  { name: "HTML5", icon: "/icons/html.png" },
  { name: "CSS3", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "TypeScript", icon: "/icons/ts.png" },
  { name: "TailwindCSS", icon: "/icons/tailwind.png" },
  { name: "BootStrap", icon: "/icons/bootstrap.svg" },
  { name: "Sass", icon: "/icons/sass.png" },
  { name: "VueJS", icon: "/icons/vue.png" },
  { name: "Nuxt", icon: "/icons/nuxt.png" },
  { name: "Quasar", icon: "/icons/quasar.svg" },
  { name: "Pinia", icon: "/icons/pinia.svg" },
  { name: "Appwrite", icon: "/icons/appwrite.png" },
  { name: "GSAP", icon: "/icons/gsap.svg" },
];
const skillsR = [
  { name: "GSAP", icon: "/icons/gsap.svg" },
  { name: "Appwrite", icon: "/icons/appwrite.png" },
  { name: "Pinia", icon: "/icons/pinia.svg" },
  { name: "Quasar", icon: "/icons/quasar.svg" },
  { name: "Nuxt", icon: "/icons/nuxt.png" },
  { name: "VueJS", icon: "/icons/vue.png" },
  { name: "Sass", icon: "/icons/sass.png" },
  { name: "BootStrap", icon: "/icons/bootstrap.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwind.png" },
  { name: "TypeScript", icon: "/icons/ts.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "CSS3", icon: "/icons/css.png" },
  { name: "HTML5", icon: "/icons/html.png" },
];
</script>

<style lang="scss" scoped>
#skills {
  position: relative;
  background: var(--accent);
  padding: 50px 25px;
  color: var(--secondary);
  overflow: hidden;
  .heading {
    h2 {
      text-align: center;
      font-family: var(--header-font);
      font-weight: 900;
      font-size: 35px;
    }
  }
  .container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .icons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      .slider1,
      .slider2 {
        .item {
          margin-right: 25px;
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--bg);
          border-radius: 16px;
          img {
            width: 36px;
            height: auto;
            object-fit: contain;
          }
        }
      }
      .slider2 {
        width: 80%;
      }
    }
    hr {
      display: none;
    }
    .text {
      padding-left: 15px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      li {
        h3 {
          font-family: var(--header-font);
        }
        p {
          margin-top: 5px;
          font-family: var(--body-font);
          opacity: 0.6;
        }
      }
    }
  }

  .rotate {
    display: none;
    position: absolute;
    top: -20px;
    right: -20px;
    height: 200px;
    width: 200px;
    .circle {
      position: absolute;
      top: 50%;
      left: 50%;
      border: 1px solid var(--secondary);
      opacity: 0.5;
      border-radius: 50%;
    }
    .circle1 {
      width: 200px;
      height: 200px;
      transform: translateX(-50%) translateY(-50%);
    }
    .circle2 {
      width: 125px;
      height: 125px;
      animation: spin 5s infinite linear;
      &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 10px;
        height: 10px;
        background: var(--secondary);
        border-radius: 50%;
      }
    }
    .circle3 {
      width: 75px;
      height: 75px;
      animation: spin-reverse 8s infinite linear;
      &::before {
        content: "";
        position: absolute;
        top: -3px;
        left: 50%;
        width: 6px;
        height: 6px;
        background: var(--secondary);
        border-radius: 50%;
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 1023px) {
  #skills {
    padding: 100px;
    .heading {
      h2 {
        font-size: 50px;
      }
    }
    .container {
      margin-top: 100px;
      gap: 50px;
      .icons {
        gap: 50px;
        .slider1,
        .slider2 {
          .item {
            width: 100px;
            height: 100px;
            img {
              width: 48px;
            }
          }
        }
      }
      .text {
        padding-left: 0;
        li {
          h3 {
            display: inline-block;
          }
          p {
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
    .rotate {
      display: block;
    }
  }
}

@media (min-width: 1024px) {
  #skills {
    padding: 150px 100px;
    .heading {
      h2 {
        font-size: 50px;
      }
    }
    .container {
      margin: 50px auto 0 auto;
      width: 80%;
      flex-direction: row;
      align-items: center;
      gap: 50px;
      .icons {
        width: 50%;
        gap: 50px;
      }
      hr {
        display: block;
        width: 1px;
        height: 200px;
        border-radius: 8px;
        border-color: var(--translucent-secondary);
      }
      .text {
        padding-left: 0;
        li {
          h3 {
            display: inline-block;
          }
          p {
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
    .rotate {
      display: block;
    }
  }
}

@keyframes spin {
  from {
    transform: translateX(-50%) translateY(-50%) rotate(0);
  }
  to {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: translateX(-50%) translateY(-50%) rotate(0);
  }
  to {
    transform: translateX(-50%) translateY(-50%) rotate(-360deg);
  }
}
</style>