import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import AboutUs from "./views/AboutUs.vue"
import ContactUs from "./views/ContactUs.vue"
import Services from "./views/Services.vue"
import NotFound from "./views/NotFound.vue"

Vue.use(Router);

export default new Router({
  mode: 'history',
  history: true,
  historyApiFallback: true,
  linkExactActiveClass: "active",
  routes: [
    {
      path: '*',
      name: 'notfound',
      components: {
        header: AppHeader,
        default: NotFound,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about us",
      components: {
        header: AppHeader,
        default: AboutUs,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact us",
      components: {
        header: AppHeader,
        default: ContactUs,
        footer: AppFooter
      }
    },
    {
      path: "/services",
      name: "services",
      components: {
        header: AppHeader,
        default: Services,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});