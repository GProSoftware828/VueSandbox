<template>
  <div class="article">
    <h1>{{title}}</h1>
    <author :author="author"></author>
    <p>Published on: {{published}}</p>
    <p>Shares: {{shares}}</p>
    <p class="lead">{{content}}</p>
    <br><br>
    <app-social-sharing :article="$data" @articleWasShared="shared('Hello!', $event)"></app-social-sharing>
  </div>
</template>

<script>
import Author from './author';
import Social from '../../Social.vue';

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
      }
    },
    components: {
      author: Author,
      appSocialSharing: Social
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