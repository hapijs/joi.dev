<template>
  <div class="logWrapper">
    <div class="logVersionWrapper">
      <a :id="version" :href="versionUrl" target="__blank" class="log-title">
        {{ version }}
      </a>
      <a
        v-if="releaseNotesUrl"
        :href="releaseNotesUrl"
        class="releaseLink"
        target="_blank"
      >
        <div class="release">
          <img
            class="releaseNotesImg"
            src="/img/release-notes.png"
            alt="Release Notes"
            title="View Release Notes"
          />additional information
        </div>
      </a>
      <div v-if="breaking" class="breaking">breaking changes</div>
    </div>
    <div class="changelogtext-wrapper">
      <ChangelogText
        v-for="issue in visibleIssues"
        :key="issue.number"
        :issue-url="issue.url"
        :issue-number="issue.number"
        :issue-text="issue.title"
      />
      <div
        :class="{
          'hidden-issues-wrapper': true,
          activeIssues: showMoreIssues,
        }"
      >
        <ChangelogText
          v-for="issue in hiddenIssues"
          :key="issue.number"
          :issue-url="issue.url"
          :issue-number="issue.number"
          :issue-text="issue.title"
        />
      </div>
      <button
        v-if="showMoreButton"
        class="issuesButton"
        @click="toggleShowIssues"
      >
        <img
          src="/img/down.png"
          alt="down arrow"
          :class="
            showMoreIssues ? 'issuesButtonUpArrow' : 'issuesButtonDownArrow'
          "
        />{{ !showMoreIssues ? 'Show More' : 'Hide Issues' }}
      </button>
    </div>
  </div>
</template>

<script>
import ChangelogText from './ChangelogText.vue';

export default {
  components: {
    ChangelogText,
  },
  props: {
    version: { type: String, required: true },
    versionUrl: { type: String, required: true },
    issues: { type: Array, required: true },
  },
  data() {
    return {
      showMoreIssues: false,
    };
  },
  computed: {
    breaking() {
      return this.issues.some((issue) =>
        issue.labels.some((label) => label === 'breaking changes')
      );
    },
    releaseNotesUrl() {
      const issue = this.issues.find((issue) =>
        issue.labels.some((label) => label === 'release notes')
      );
      return issue ? issue.url : '';
    },
    showMoreButton() {
      return this.issues.length > 10;
    },
    hiddenIssues() {
      return this.issues.slice(10);
    },
    visibleIssues() {
      return this.issues.slice(0, 10);
    },
  },
  methods: {
    toggleShowIssues() {
      this.showMoreIssues = !this.showMoreIssues;
    },
  },
};
</script>

<style lang="postcss">
.logWrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0 0 0;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--dark-white);
  width: 100%;
}

.logVersionWrapper {
  display: flex;
  align-items: center;
  margin: 0;
}

.breaking {
  padding: 2px 4px;
  font-size: 0.8em;
  font-weight: 600;
  background: var(--orange);
}

.releaseLink,
.releaseLink:hover {
  color: var(--black);
}

.release {
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  padding: 2px 4px;
  font-size: 0.8em;
  font-weight: 600;
  background: #fad8c7;
}

.releaseNotesImg {
  width: 15px;
  margin-right: 5px;
}

.log-title {
  font-size: 1.75rem;
  color: var(--orange);
  margin: 0 10px 0 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.changelogtext-wrapper {
  margin: 0;
}

.hidden-issues-wrapper {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);

  &.activeIssues {
    max-height: 5000px;
    transition: max-height 1s ease-in-out;
  }
}

.issuesButton {
  background: none;
  border: none;
  margin: 0;
  padding: 2px 4px;
  font-size: 0.95em;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.issuesButtonDownArrow {
  width: 14px;
  margin-right: 5px;
}

.issuesButtonUpArrow {
  width: 14px;
  margin-right: 5px;
  transform: rotate(180deg);
}
</style>
