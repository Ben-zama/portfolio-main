<template>
  <div id="contact" ref="contactSection">
    <div class="contact-container" ref="container">
      
      <div class="info-grid" ref="infoGrid">
        
        <div class="tile header-tile" ref="headerTile">
          <h2>Let's work <br /><span>together.</span></h2>
          <p>Have a project in mind? Let's build something incredible.</p>
        </div>

        <div class="tile contact-methods" ref="contactMethods">
          <a href="mailto:benzamasimon@gmail.com" class="method-row">
            <div class="icon-box">
              <PhEnvelope weight="duotone" />
            </div>
            <div class="method-text">
              <span class="label">Email me</span>
              <span class="value">Benzamasimon@gmail.com</span>
            </div>
            <div class="arrow-icon">
              <PhArrowUpRight weight="bold" />
            </div>
          </a>

          <div class="divider"></div>

          <a href="tel:+2347042195431" class="method-row">
            <div class="icon-box">
              <PhPhoneCall weight="duotone" />
            </div>
            <div class="method-text">
              <span class="label">Call me</span>
              <span class="value">+234 704 2195 431</span>
            </div>
            <div class="arrow-icon">
              <PhArrowUpRight weight="bold" />
            </div>
          </a>
        </div>

        <div class="tile freelance-tile" ref="freelanceTile">
          <span class="tile-label">Available on</span>
          <div class="platforms">
            <a class="platform-card upwork" target="_blank" href="">
              <img src="/icons/upwork.png" alt="Upwork" />
              <span>Upwork</span>
            </a>
            <a class="platform-card fiverr" target="_blank" href="">
              <img src="/icons/fiverr.png" alt="Fiverr" />
              <span>Fiverr</span>
            </a>
          </div>
        </div>

        <div class="tile socials-tile" ref="socialsTile">
          <a target="_blank" href="" aria-label="Github"><PhGithubLogo :size="24" weight="fill" /></a>
          <a target="_blank" href="" aria-label="LinkedIn"><PhLinkedinLogo :size="24" weight="fill" /></a>
          <a target="_blank" href="" aria-label="X (Twitter)"><PhXLogo :size="24" weight="fill" /></a>
          <a target="_blank" href="" aria-label="Instagram"><PhInstagramLogo :size="24" weight="fill" /></a>
        </div>
      </div>

      <div class="form-wrapper" ref="formWrapper">
        <form action="">
          <div class="form-header" ref="formHeader">
            <h3>Send a message</h3>
          </div>

          <div class="row" ref="formRow1">
            <div class="input-group">
              <input type="text" id="name" placeholder=" " required />
              <label for="name">Your Name</label>
            </div>
            <div class="input-group">
              <input type="email" id="email" placeholder=" " required />
              <label for="email">Your Email</label>
            </div>
          </div>

          <div class="row" ref="formRow2">
            <div class="input-group">
              <input type="text" id="subject" placeholder=" " />
              <label for="subject">Subject (Optional)</label>
            </div>
            <div class="input-group">
              <input type="number" id="phone" placeholder=" " />
              <label for="phone">Phone (Optional)</label>
            </div>
          </div>

          <div class="input-group full" ref="formTextarea">
            <textarea id="message" placeholder=" " required></textarea>
            <label for="message">Tell me about your project</label>
          </div>

          <button class="send-button" type="submit" ref="sendBtn">
            <span class="button__icon-wrapper">
              <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon-svg" width="10">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
              </svg>
              <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" class="button__icon-svg button__icon-svg__copy">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
              </svg>
            </span>
            Send message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PhEnvelope,
  PhGithubLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhPhoneCall,
  PhXLogo,
  PhArrowUpRight,
} from "@phosphor-icons/vue";

gsap.registerPlugin(ScrollTrigger);

// Refs
const contactSection = ref(null);
const container      = ref(null);
const headerTile     = ref(null);
const contactMethods = ref(null);
const freelanceTile  = ref(null);
const socialsTile    = ref(null);
const formWrapper    = ref(null);
const formHeader     = ref(null);
const formRow1       = ref(null);
const formRow2       = ref(null);
const formTextarea   = ref(null);
const sendBtn        = ref(null);

let ctx; // GSAP context for cleanup

onMounted(() => {
  ctx = gsap.context(() => {

    // ─── 1. Shared ScrollTrigger anchor ────────────────────────────────────
    const trigger = {
      trigger: contactSection.value,
      start: "top 70%",
      once: true,
    };

    // ─── 2. Left column tiles — staggered slide-up ─────────────────────────
    gsap.set([headerTile.value, contactMethods.value, freelanceTile.value, socialsTile.value], {
      opacity: 0,
      y: 50,
    });

    gsap.to(
      [headerTile.value, contactMethods.value, freelanceTile.value, socialsTile.value],
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: trigger,
      }
    );

    // ─── 3. Heading word-split feel — accent span pops in ──────────────────
    const accentSpan = headerTile.value.querySelector("span");
    gsap.from(accentSpan, {
      opacity: 0,
      x: -20,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.15,
      scrollTrigger: trigger,
    });

    // ─── 4. Form wrapper — clip reveal from bottom ─────────────────────────
    gsap.set(formWrapper.value, { opacity: 0, y: 60, scale: 0.97 });
    gsap.to(formWrapper.value, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: trigger,
    });

    // ─── 5. Form internals — cascade down ──────────────────────────────────
    const formParts = [
      formHeader.value,
      formRow1.value,
      formRow2.value,
      formTextarea.value,
      sendBtn.value,
    ];

    gsap.set(formParts, { opacity: 0, y: 20 });
    gsap.to(formParts, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.45,
      scrollTrigger: trigger,
    });

    // ─── 6. Social icons — playful bounce-in stagger ───────────────────────
    const socialLinks = socialsTile.value.querySelectorAll("a");
    gsap.from(socialLinks, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(2)",
      stagger: 0.08,
      delay: 0.55,
      scrollTrigger: trigger,
    });

    // ─── 7. Platform cards — subtle pop ────────────────────────────────────
    const platformCards = freelanceTile.value.querySelectorAll(".platform-card");
    gsap.from(platformCards, {
      scale: 0.85,
      opacity: 0,
      duration: 0.45,
      ease: "back.out(1.5)",
      stagger: 0.1,
      delay: 0.5,
      scrollTrigger: trigger,
    });

    // ─── 8. Ambient glow — slow float ──────────────────────────────────────
    gsap.to(contactSection.value.querySelector("&::before") ?? contactSection.value, {
      // We'll target the pseudo via a real div trick — instead animate the section bg pulse
    });

    // ─── 9. Input focus ripple — micro-interaction on focus ────────────────
    const inputs = formWrapper.value.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.fromTo(
          input,
          { scale: 1 },
          { scale: 1.01, duration: 0.2, ease: "power1.out", yoyo: true, repeat: 1 }
        );
      });
    });

    // ─── 10. Send button — magnetic pulse on hover ─────────────────────────
    const btn = sendBtn.value;
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.04, duration: 0.25, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
    });

    // ─── 11. Method rows — slide-in arrow on hover (GSAP layer) ───────────
    const methodRows = contactMethods.value.querySelectorAll(".method-row");
    methodRows.forEach((row) => {
      const arrow = row.querySelector(".arrow-icon");
      const iconBox = row.querySelector(".icon-box");

      row.addEventListener("mouseenter", () => {
        gsap.to(arrow, { x: 3, y: -3, duration: 0.25, ease: "power2.out" });
        gsap.to(iconBox, { scale: 1.08, duration: 0.25, ease: "back.out(2)" });
      });
      row.addEventListener("mouseleave", () => {
        gsap.to(arrow, { x: 0, y: 0, duration: 0.35, ease: "elastic.out(1, 0.6)" });
        gsap.to(iconBox, { scale: 1, duration: 0.35, ease: "elastic.out(1, 0.6)" });
      });
    });

  }, contactSection.value); // scoped to component root
});

onUnmounted(() => {
  ctx?.revert(); // clean up all GSAP instances & ScrollTriggers
});
</script>

<style lang="scss">
#contact {
  background: var(--bg);
  color: var(--text);
  height: auto;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center; 
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(var(--accent), 0.15) 0%, transparent 70%);
    filter: blur(80px);
    z-index: 0;
    pointer-events: none;
    // Subtle ambient float
    animation: ambientFloat 8s ease-in-out infinite alternate;
  }
}

@keyframes ambientFloat {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, 30px) scale(1.15); }
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
    padding: 40px;
  }
}

/* --- Left Column: Bento Grid --- */
.info-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .tile {
    background: var(--secondary);
    border: 1px solid var(--translucent-border);
    border-radius: 24px;
    padding: 30px;
    transition: transform 0.3s ease, border-color 0.3s ease;
    
    @media (max-width: 480px) {
      padding: 20px; 
    }
  }

  .header-tile {
    h2 {
      font-size: clamp(2rem, 5vw, 3rem);
      line-height: 1.1;
      font-weight: 900;
      margin-bottom: 10px;
      font-family: var(--header-font);
      
      span {
        color: var(--accent);
        display: inline-block;
      }
    }
    p {
      opacity: 0.6;
      font-family: var(--body-font);
    }
  }

  .contact-methods {
    display: flex;
    flex-direction: column;
    padding: 0; 
    overflow: hidden;

    .method-row {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 25px 30px;
      text-decoration: none;
      color: var(--primary);
      transition: background 0.3s ease;
      cursor: pointer;
      width: 100%;
      box-sizing: border-box;

      @media (max-width: 480px) {
        padding: 20px;
        gap: 12px;
      }

      &:hover {
        background: var(--darker-secondary);
        .arrow-icon {
          color: var(--accent);
        }
        .icon-box {
          background: var(--accent);
          color: white;
        }
      }

      .icon-box {
        flex-shrink: 0;
        width: 45px;
        height: 45px;
        background: var(--translucent-primary-xl);
        border-radius: 12px;
        display: grid;
        place-items: center;
        font-size: 20px;
        transition: background 0.3s ease, color 0.3s ease;
        // transform handled by GSAP
      }

      .method-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0; 
        font-family: var(--alternate-font);
        
        .label {
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }
        .value {
          font-size: 1rem;
          font-weight: 600;
          word-break: break-word; 
          line-height: 1.3;
        }
      }

      .arrow-icon {
        font-size: 20px;
        transition: color 0.3s ease;
        @media (max-width: 360px) {
          display: none;
        }
      }
    }

    .divider {
      height: 1px;
      background: var(--translucent-border);
      width: 100%;
    }
  }

  .freelance-tile {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: var(--alternate-font);

    .platforms {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;

      .platform-card {
        flex: 1;
        background: var(--secondary);
        border: 1px solid var(--translucent-border);
        border-radius: 16px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-decoration: none;
        color: var(--primary);
        transition: border-color 0.3s ease, transform 0.3s ease;
        min-width: 100px; 

        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        span {
          font-weight: 500;
        }

        &:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
      }
    }
  }

  .socials-tile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    
    @media (max-width: 400px) {
        padding: 20px;
    }

    a {
      height: 24px;
      transition: color 0.3s ease;
      // scale/rotate handled by CSS for hover (GSAP handles entrance)
      
      &:hover {
        color: var(--accent);
        transform: scale(1.25) rotate(5deg);
        transition: color 0.3s ease, transform 0.3s ease;
      }
    }
  }
}

/* --- Right Column: The Form --- */
.form-wrapper {
  display: flex;
  align-items: center;
  background: var(--secondary);
  border: 1px solid var(--translucent-border);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 25px 20px;
    border-radius: 20px;
  }

  .form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    h3 {
      font-size: 2rem;
      font-weight: 600;
      font-family: var(--header-font);
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media (min-width: 600px) {
      flex-direction: row;
      gap: 20px;
    }
  }

  .input-group {
    position: relative;
    width: 100%;

    input, textarea {
      width: 100%;
      box-sizing: border-box; 
      background: var(--translucent-primary-xl);
      border: 1px solid transparent;
      border-bottom: 2px solid var(--translucent-border);
      border-radius: 8px 8px 0 0;
      padding: 15px;
      padding-top: 25px; 
      font-size: 1rem;
      font-family: var(--body-font);
      color: var(--primary);
      outline: none;
      transition: background 0.3s ease, border-color 0.3s ease;

      &:focus {
        background: var(--darker-secondary);
        border-bottom-color: var(--accent);
      }

      &:focus + label,
      &:not(:placeholder-shown) + label {
        top: 8px;
        font-size: 0.75rem;
        color: var(--accent);
      }
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }

    label {
      position: absolute;
      left: 15px;
      top: 20px; 
      color: var(--text-muted);
      font-size: 0.95rem;
      font-family: var(--alternate-font);
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
    }
  }
}

/* --- Button Styles --- */
.send-button {
  width: max-content;
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  border: none;
  cursor: pointer;
  align-items: center;
  gap: 8px;
  background: var(--primary);
  color: var(--secondary);
  border-radius: 10rem;
  font-family: var(--alternate-font);
  font-size: 15px;
  padding: 4px 12px 4px 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  // transform handled by GSAP

  @media (max-width: 400px) {
    justify-content: center;
    max-width: 100%;
  }

  &__icon-wrapper {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    position: relative;
    color: var(--text);
    background: var(--bg);
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  &__icon-svg {
    &__copy {
      position: absolute;
      transform: translate(-150%, 150%);
    }
  }

  &:hover {
    background: var(--accent);
    color: var(--secondary);

    .button__icon-wrapper {
      background: var(--secondary);
      color: var(--accent);
    }

    .button__icon-svg {
      &:first-child {
        transition: transform 0.3s ease-in-out;
        transform: translate(150%, -150%);
      }

      &__copy {
        transition: transform 0.3s ease-in-out 0.1s;
        transform: translate(0);
      }
    }
  }
}

@media (max-width: 400px) {
  #contact {
    padding: 40px 10px;
  }
  .contact-container {
    gap: 20px;
  }
  .info-grid .header-tile h2 {
    font-size: 1.8rem;
  }
}
</style>