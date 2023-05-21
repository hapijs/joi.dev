<template>
  <main>
    <section class="home-container">
      <div class="index-header">
        <div class="index-header1">
          The most powerful schema description language
        </div>
        <div class="index-header2">and data validator for JavaScript</div>
      </div>
      <a class="index-button" href="/api" aria-label="get-started-button"
        >Get started with joi</a
      >
    </section>
  </main>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  layout: 'home',
  created() {
    this.setDisplay('home');
  },
  methods: {
    ...mapMutations(['setDisplay']),
  },
};
</script>

<style lang="postcss">
.home-container {
  margin: 50px auto 0 auto;
  height: 100%;
  width: 100%;
  max-width: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.3em;
}

.index-header {
  font-size: 1.45em;
  font-weight: 900;
}

.index-description {
  font-size: 1.15em;
  margin-top: 50px;
}

.index-button {
  border-radius: 10px;
  background: var(--orange);
  padding: 5px 15px;
  font-size: 0.9em;
  font-weight: 700;
  margin: 40px 0;
  color: var(--white);
  cursor: pointer;
  border: 4px solid rgba(0, 0, 0, 0);
  text-decoration: none;
}

.index-button:hover,
 {
  border: 4px solid var(--orange);
  background: var(--white);
  color: var(--orange);
  transition: all 0.3s ease 0s;
}

.index-divider {
  padding: 0 20px;
}

.underline {
  border-bottom: 2px solid var(--black);
}

.code {
  border: 1px solid var(--dark-white);
}

.page-container {
  position: relative;
  padding-bottom: 20px;
  text-align: left;
}

.bottom-page-container {
  padding-bottom: 50px;
}

.home-header {
  margin: 0 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-text-heading {
  text-align: center;
  font-weight: 900;
  margin: 40px 0;
}

@media screen and (max-width: 900px) {
  .home-container {
    margin-top: 70px;
    padding: 0 20px;
    font-size: 1.1em;
  }

  .index-button {
    margin: 20px 0;
    font-size: 1.1rem;
  }

  .underline {
    border-bottom: 1px solid var(--black);
  }

  .index-divider {
    padding: 0 10px;
  }

  .break {
    display: none;
  }

  .bottom-page-container {
    padding-bottom: 20px;
  }

  .home-header {
    margin: 0 0 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

@media (prefers-color-scheme: dark) {
  .home-container {
    color: var(--off-white);
  }
  .underline,
  .code {
    border-color: var(--blacker);
  }
}
</style>
