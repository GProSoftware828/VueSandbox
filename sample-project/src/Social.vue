<template>
<div>
  <h3>Share {{article.title}} with your friends!</h3>
  <button class="btn btn-primary" @click="share('Facebook')">Share on Facebook</button>
  <button class="btn btn-primary" @click="share('Twitter')">Share on Twitter</button>
</div>
</template>

<script>
  import { eventBus } from './main';
  import { announcementEventBus } from './main';

  export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    methods: {
      share(media) {
        announcementEventBus.$emit('articleWasShared', {
          article: this.article,
          media: media
        });

        eventBus.$emit('articleWasShared', {
          media: media
        });

        this.$emit('articleWasShared', {
          media: 'Facebook'
        });
      }
    }
  }
</script>