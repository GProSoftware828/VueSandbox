<template>
  <div>
    <p v-if="announcement" class="alert alert-info">
      {{announcement}}
    </p>
    <p v-else>
      No announcements yet...
    </p>
  </div>
</template>

<script>
  import { announcementEventBus } from './main';

  export default {
    data() {
      return {
        announcement: null
      };
    },

    created() {
      announcementEventBus.$on('articleWasShared', (data) => {
        this.announcement = data.article.title + ' was shared on ' + data.media + '!';
      });
    }
  }
</script>