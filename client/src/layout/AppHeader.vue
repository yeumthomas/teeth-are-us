<template>
    <header class="header-global sticky-top">
        <base-nav class="navbar-main bg-gradient-default py-2" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo">
                <p>LOGO HERE</p>  <!-- LOGO GOES HERE EVENTUALLY -->
            </router-link>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a slot="title" href="#/" class="nav-link" role="button">
                        <i class="fa fa-home"></i>
                        <span class="nav-link-inner--text">HOME</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a slot="title" href="#/about" class="nav-link" role="button">
                        <i class="fa fa-user"></i>
                        <span class="nav-link-inner--text">ABOUT US</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a slot="title" href="#" class="nav-link" role="button">
                        <i class="fa fa-check"></i>
                        <span class="nav-link-inner--text">OUR SERVICES</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a slot="title" href="#/contact" class="nav-link" role="button">
                        <i class="fa fa-phone"></i>
                        <span class="nav-link-inner--text">CONTACT US</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import App from '../App.vue';

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    App
  }
};
</script>
<style>
</style>
