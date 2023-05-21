<template>
  <header class="top-nav">
    <nav role="navigation">
      <div class="nav-container">
        <a
          class="hamburger"
          aria-label="hamburger"
          :title="navActive ? 'Close' : 'Open'"
          @click="toggleNav()"
        >
          <template v-if="navActive">&#x2715;</template>
          <template v-else>&#9776;</template>
        </a>
        <a class="logo" href="/" title="Back to home" aria-label="joi-logo" />
        <div class="nav-collapse">
          <ul class="nav-links">
            <li class="nav-links-li">
              <a
                ref="api"
                :class="
                  loadDisplay === 'api'
                    ? 'nav-link nav-link-active'
                    : 'nav-link'
                "
                title="API"
                href="/api"
                @click="addActive('api')"
                >API
              </a>
            </li>
            <li class="nav-links-li">
              <a
                ref="resources"
                :class="
                  loadDisplay === 'resources'
                    ? 'nav-link nav-link-active'
                    : 'nav-link'
                "
                title="Resources"
                href="/resources/changelog"
                @click="addActive('resources')"
                >Resources</a
              >
            </li>
            <li class="nav-links-li">
              <a
                ref="policies"
                :class="
                  loadDisplay === 'policies'
                    ? 'nav-link nav-link-active'
                    : 'nav-link'
                "
                title="Policies"
                href="/policies/coc"
                @click="addActive('policies')"
                >Policies</a
              >
            </li>
            <li class="nav-links-li">
              <a
                ref="family"
                :class="
                  loadDisplay === 'family'
                    ? 'nav-link nav-link-active'
                    : 'nav-link'
                "
                title="Modules"
                href="/module?sort=name"
                @click="addActive('family')"
                >Modules</a
              >
            </li>
            <li class="nav-links-li">
              <a
                ref="tester"
                :class="
                  loadDisplay === 'tester'
                    ? 'nav-link nav-link-active'
                    : 'nav-link'
                "
                title="Schema Tester"
                href="/tester"
                @click="addActive('tester')"
                >Sandbox</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div :class="{ 'mobile-nav-wrapper': true, 'show-nav': navActive }">
        <MobileNav />
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import MobileNav from './MobileNav.vue';

export default {
  components: {
    MobileNav,
  },
  data() {
    return {
      navActive: false,
    };
  },
  computed: {
    ...mapGetters(['loadDisplay']),
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
    },
    addActive(ref) {
      this.$store.commit('setDisplay', ref);
    },
  },
};
</script>

<style lang="postcss" scoped>
.top-nav > nav {
  max-width: 1100px;
}

.logo {
  background: url('@/static/img/joiTransparent.png') no-repeat 0 0;
  background-size: contain;
  height: 75px;
  width: 100px;
  margin: 0;
}

.nav-container {
  position: relative;
  height: 100%;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-nav-wrapper {
  display: none;
  transition: all 0.5s ease-in-out;
}

.nav-collapse {
  margin: 0;
}

.nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-links-li {
  display: inline-block;
  margin: 0;
}

.nav-link {
  position: relative;
  margin: 10px;
  color: var(--orange);
  font-size: 1.1em;
  font-weight: 900;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 5px 0;
  text-decoration: none;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
}

.nav-link:hover {
  color: var(--orange);
  text-decoration: none;
}

.nav-link:before,
.nav-link-active:before {
  width: 0;
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: var(--orange);
  -webkit-transition: 0.15s linear;
  transition: 0.15s linear;
}

.nav-link:after,
.nav-link-active:after {
  width: 0;
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--orange);
  -webkit-transition: 0.15s linear;
  transition: 0.15s linear;
}

.nav-link:hover:after,
.nav-link:hover:before,
.nav-link-active:before,
.nav-link-active:after {
  width: 100%;
}

.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
}

.hamburger-line {
  display: block;
  margin: 5px 0;
  width: 20px;
  height: 2px;
  border-radius: 5px;
  background: var(--black);
}

@media screen and (max-width: 900px) {
  .navbar {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid var(--dark-white);
  }

  .nav-container {
    justify-content: center;
    border-bottom: 1px solid var(--dark-white);
  }

  .nav-collapse {
    display: none;
  }

  .mobile-nav-wrapper {
    margin: 0;
    display: block;
    position: fixed;
    top: 61px;
    left: -100%;
    width: 100%;
    max-width: 500px;
    height: 100vh;
    background: var(--off-white);
    z-index: 10;
    overflow-y: auto;
  }

  .show-nav {
    left: 0;
  }

  .hamburger {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
}

@media print {
  .nav-container {
    justify-content: flex-start;
  }

  .nav-collapse {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {
  .top-nav {
    background: var(--blacker);
  }
}
</style>
