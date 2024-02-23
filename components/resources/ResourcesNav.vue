<template>
  <Sidebar>
    <template #header>
      <div class="side-nav-title">Resources</div>
      <Ads />
    </template>

    <template #content>
      <ul class="side-nav-select-list">
        <li class="resources-header-link">
          <a
            :class="{
              'side-nav-select-link': true,
              'resources-active': page === 'changelog',
            }"
            href="/resources/changelog"
          >
            Changelog
          </a>
        </li>
        <li class="resources-header-link">
          <a
            :class="{
              'side-nav-select-link': true,
              'resources-active': page === 'status',
            }"
            href="/resources/status"
          >
            Module Status
          </a>
        </li>
      </ul>
    </template>

    <template #footer>
      <SideFooter />
    </template>
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import SideFooter from '~/components/Footers/SideFooter.vue';
import Ads from '~/components/Ads.vue';

export default {
  components: {
    Sidebar,
    SideFooter,
    Ads,
  },
  props: {
    page: { type: String, required: true },
  },
  mounted() {
    this.onScroll();
  },
  methods: {
    onClick(ref) {
      let actives = document.querySelectorAll('.resources-active');
      for (let active of actives) {
        active.classList.remove('resources-active');
      }
    },
    onScroll() {
      let links = [];
      links = document.querySelectorAll('.resources-ul a');
      let points = {};
      let offsets = [];
      for (let i = 0; i < links.length; i++) {
        let point = document.querySelector(
          `.markdown-wrapper h2 a[name*='${links[i].href.replace(
            /^[^_]*#/,
            ''
          )}']`
        );
        if (point && point.name) {
          points[point.offsetTop - 20] = {
            name: '#' + point.name,
          };
          offsets.push(point.offsetTop - 20);
        }
      }
      offsets = [...new Set(offsets)];

      //Add active class to elements on scroll
      window.onscroll = function () {
        let location = document.documentElement.scrollTop;
        let locationBody = document.body.scrollTop;
        let actives = document.getElementsByClassName('resources-active');
        let i = 0;
        for (i in offsets) {
          if (offsets[i] <= location || offsets[i] <= locationBody) {
            let aClass = points[offsets[i]].name;
            for (let active of actives) {
              active.classList.remove('resources-active');
            }

            let element = document.querySelector(
              `a[href*='/resources/list${aClass}']`
            );
            if (element.children.length !== 0) {
              document
                .querySelector(`a[href*='/resources/list${aClass}'] *`)
                .classList.add('resources-active');
            } else if (element.children.length === 0) {
              document
                .querySelector(`a[href*='/resources/list${aClass}']`)
                .classList.add('resources-active');
            }
          }
        }
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../assets/styles/sideNav.css';

.resources-header-link {
  position: relative;
  list-style-type: none;
  margin-bottom: 5px;
}

.side-nav-select-list {
  margin: 0;
  padding: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: column;

  li {
    margin: 0;
  }
}

.side-nav-select-link {
  display: inline-block;
  font-size: 1.1em;
  width: 100%;
  padding: 5px 0;
  color: var(--gray);
  margin: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.resources-active {
    position: relative;
    color: var(--orange);
    font-weight: 900;
    transition: all 0.2s ease;
  }
}
</style>
