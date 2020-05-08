import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// Language
// Translation provided by Vuetify (javascript)
import es from 'vuetify/es5/locale/es'
export default new Vuetify(
  {
    theme: {
      // Beach
      themes: {
        light: {
          primary: '#404141',
          secondary: '#EC8A35',
          accent: '#57467B'
        }
      }
    },
    lang: {
      locales: { es },
      current: 'es'
    },
  }
)
