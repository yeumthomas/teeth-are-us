<template>
    <div>
        <section class="section-shaped my-0">
            <div class="lg-only-padding-top shape-container align-self-center mt--200 pt-5 make-that-gap-even-smaller">
            <div class="shape shape-style-1 shape-default bg-gradient-default shape-skew">
            </div>
                <h1 class="text-primary">Contact Us</h1>
            </div>
        </section>
    </div>
</template>

<script>
import App from '../App.vue';
export default {
  name: "home",
  components: {App}
};
</script>
<style scoped>
@media (min-width: 991px) { 
    .lg-only-padding-top {
        padding-top: 15rem !important;
    }
}

.splash {
    background-image: url(../../public/img/fam-smiling-6.jpg);
    margin: 0rem 2rem 0rem 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 45rem rgba(0,0,0,.6);
    max-width: calc(100% - 4rem);
    min-height: 500px;
}

.center-block {
    display: block;
    margin-left: auto;
    margin-right: auto;
 }

@media (max-width: 992px) { 
    .dont-display-on-md {
        display: none;
    }

    .make-that-gap-smaller {
        padding-top: 3rem;
    }

    .make-that-gap-even-smaller {
        padding-top: 0rem;
    }

    .make-that-pic-smaller {
        max-width: 70%;
    }
}
</style>