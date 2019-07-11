<template>
<div>
  <button class="btn btn-primary" @click="sharing">Share on Twitter</button>
</div>
</template>

<script>
  import { eventBus } from './main';
  export default {
    methods: {
      sharing() {
        eventBus.$emit('articleWasShared', {
          media: 'Twitter'
        });

        this.$emit('articleWasShared', {
          media: 'Twitter'
        });
      }
    }
  }
</script>