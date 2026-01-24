<template>
  <div id="contact">

    <div class="contact-card">
      <h2>Get in <span>touch</span></h2>
      <hr />
      <div class="box">
        <PhEnvelope :weight="bold" />
        <div>
          <p>Send me an email</p>
          <a href="mailto:benzamasimon@gmail.com" target="_blank"
            >Benzamasimon@gmail.com</a
          >
        </div>
      </div>
      <hr />
      <div class="box">
        <PhPhoneCall :weight="bold" />
        <div>
          <p>Give me a call</p>
          <a href="tel:+2347042195431" target="_blank">+234 704 2195 431</a>
        </div>
      </div>
      <hr />
      <div class="freelance">
        <a class="upwork" target="_blank" href="">
          <img src="/icons/upwork.png" alt="" />
          <p>Upwork</p>
        </a>
        <a class="fiverr" target="_blank" href="">
          <img src="/icons/fiverr.png" alt="" />
          <p>Fiverr</p>
        </a>
      </div>
      <hr />
      <div class="socials">
        <a target="_blank" href="">
          <PhGithubLogo weight="bold" />
        </a>
        <a target="_blank" href="">
          <PhLinkedinLogo weight="bold" />
        </a>
        <a target="_blank" href="">
          <PhXLogo weight="bold" />
        </a>
        <a target="_blank" href="">
          <PhInstagramLogo weight="bold" />
        </a>
      </div>
    </div>

    <form action="">
      <h2>Send a <span>mail</span></h2>
      <div class="span">
        <div class="input-control">
          <input type="text" placeholder=" " required />
          <label for="">Name</label>
        </div>
        <div class="input-control">
          <input type="email" placeholder=" " required />
          <label for="">Email</label>
        </div>
      </div>
      <div class="span">
        <div class="input-control">
          <input type="text" placeholder=" " />
          <label for="">Subject (optional)</label>
        </div>
        <div class="input-control">
          <input type="number" placeholder=" " />
          <label for="">Phone (optional)</label>
        </div>
      </div>
      <div class="input-control textarea-control">
        <textarea placeholder=" " required />
        <label for="">Message</label>
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  PhEnvelope,
  PhGithubLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhPhoneCall,
  PhXLogo,
} from "@phosphor-icons/vue";
</script>

<style lang="scss">
#contact {
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: var(--background);
  color: var(--text);

  .contact-card {
    display: flex;
    flex-direction: column;
    gap: 15px;
    h2 {
      font-family: var(--header-font);
      span {
        color: var(--accent);
      }
    }
    .box {
      display: flex;
      align-items: center;
      gap: 15px;
      svg {
        font-size: 28px;
      }
      > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        p {
          font-family: var(--body-font);
          font-size: 12.5px;
        }
        a {
          font-family: var(--alternate-font);
          color: var(--accent);
          font-size: 17.5px;
          &:hover {
            color: var(--darker-accent);
          }
        }
      }
    }
    .freelance {
      display: flex;
      flex-direction: column;
      gap: 25px;
      a {
        padding: 10px 20px;
        width: max-content;
        height: max-content;
        display: flex;
        align-items: center;
        gap: 15px;
        background: var(--primary);
        border-radius: 32px;
        transition: 0.3s;
        &:hover {
          scale: 1.1;
          background: var(--secondary);
          box-shadow: 2px 2px 8px var(--shadow);
          p {
            color: var(--primary);
          }
        }
        img {
          width: 24px;
          height: 24px;
        }
        p {
          font-family: var(--alternate-font);
          color: var(--secondary);
        }
      }
    }
    .socials {
      display: flex;
      gap: 25px;
      padding-bottom: 15px;
      a {
        svg {
          font-size: 24px;
          transition: 0.3s;
          &:hover {
            color: var(--accent);
            scale: 1.2;
          }
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    h2 {
      font-family: var(--header-font);
      span {
        color: var(--accent);
      }
    }
    .span {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    .input-control {
      position: relative;
      input,
      textarea {
        padding: 15px;
        width: 100%;
        background: transparent;
        outline: none;
        border: 1px solid var(--translucent-border);
        border-radius: 8px;
        transition: 0.3s;
        &::-webkit-inner-spin-button {
          display: none;
        }
        &:focus {
          border-color: var(--accent);
        }
        &:focus + label,
        &:not(:placeholder-shown) + label {
          top: 0;
          font-size: 12.5px;
          z-index: 1;
        }
      }
      textarea {
        height: 250px;
        + label {
          top: 25px;
        }
      }
      label {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        padding: 0 5px;
        font-family: var(--alternate-font);
        font-size: 15px;
        background: var(--bg);
        transition: 0.3s;
        z-index: -1;
      }
    }
  }
}
</style>