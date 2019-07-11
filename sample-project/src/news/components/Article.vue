<template>
  <div class="article">
    <h1>{{title}}</h1>
    <author :author="author"></author>
    <p>Published on: {{published}}</p>
    <p>Shares: {{shares}}</p>
    <p class="lead">{{content}}</p>
    <br><br>
    <p>Share {{title}}</p>
    <app-social-sharing @articleWasShared="shared('Hello!', $event)"></app-social-sharing>
    <app-social2-sharing @articleWasShared="sharing('Hello!', $event)"></app-social2-sharing>
  </div>
</template>

<script>
import Author from './author';
import Social from '../../Social.vue';
import Social2 from '../../Social2.vue';

  export default {
    data() {
      return {
        title: '10 reasons why Vue.js is awesome',
        published: new Date(),
        content: "lorem5",
        author: {
          firstName: 'George',
          lastName: 'Payne'
        },
        shares: 0
      };
    },
    methods: {
      shared: function(message, event) {
        this.shares++;
        console.log(message);
        console.log(event);
      },
      sharing: function(message, event) {
        this.shares++;
        console.log(message);
        console.log(event);
      }
    },
    components: {
      author: Author,
      appSocialSharing: Social,
      appSocial2Sharing: Social2
    }
  }
</script>

<style>
  * {
    font-style: italic;
  }
</style>

<style scoped>
  * {
    color: blue;
  }
</style>