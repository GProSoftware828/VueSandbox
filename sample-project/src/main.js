import Vue from 'vue';
import App from './App.vue';
import Announcement from './Announcement.vue';
import Article from './news/components/Article.vue';

export const eventBus = new Vue();
export const announcementEventBus = new Vue();

Vue.component('announcement', Announcement);
Vue.component('appArticle', Article); //HTML5 has tag named "Article"

new Vue({
  el: '#app',
  render: h => h(App)
});
