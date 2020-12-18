<template>
    <div>
        <div class="position-relative">
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default bg-gradient-default shape-skew">
                </div>
                <div class="lg-only-padding-top shape-container align-self-center mt--200 pt-5 make-that-gap-even-smaller">
                    <div class="pt-5"></div>
                    <p class="text-default">.</p>
                </div>
            </section>
        </div>
        
        <section class="section section-lg pt-lg-0 mt--300 make-that-gap-even-smaller">
            <div class="container">
                <div class="col mt--100 text-center mb-4">
                    <h5 class="text-white font-weight-light">Contact Us At</h5>
                    <h1 class="text-white font-weight-bold">OUR TWO LOCATIONS</h1>
                </div>
                <div class="row align-items-left d-flex align-content-stretch justify-content-center mx--100 px-0">
                            <div class="col-md-6 px-3">
                                <card class="bg-white shadow-lg px-1 mb-if-small" style="min-width: 80%;">
                                    <div class="row">
                                        <div class="col">
                                            <icon name="fa fa-hospital-o" gradient="warning" color="white" shadow
                                                        rounded></icon>
                                            <span class=" display-4 text-default">  Teeth Are Us Dental</span>
                                            <p class="mt-0 text-white">_</p>
                                            <div class="mr-5"><div class="mr-5"><div class="mr-5"><hr class="mb-3 ml-2 mr-5 pr-5"></div></div></div>
                                        </div>
                                    </div>
                                    <div class="row px-4 py-3">
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div class="text-left text-default"><i class="ni ni-pin-3"></i>  8126 Long Point Rd, Houston, TX 77055</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="text-left text-default py-2"><i class="fa fa-phone"></i> <b> Phone:</b> <a href="tel:7136477500" class="text-warning"> (713) 647-7500 (Main)</a></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="text-left text-default py-2"><i class="fa fa-phone"></i><b>  Phone:</b> <a href="tel:7138282785" class="text-warning"> (713) 828-2785 (Text Only)</a></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="text-left text-default py-2"><i class="ni ni-email-83"></i> Email: <a href="mailto:teethareusdental@yahoo.com" class="text-warning"> teethareusdental@yahoo.com</a></div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </div>
                                </card>
                            </div>
                            <div class="col-md-6 px-3">
                                <card class="bg-white shadow-lg">
                                    <div class="row">
                                        <div class="col">
                                            <icon name="fa fa-hospital-o" gradient="success" color="white" shadow
                                                        rounded></icon>
                                            <span class=" display-4 text-default">  Katy Olive Dental</span>
                                            <p class="mt-0"> <span class="text-white">_________</span>(Second Office)</p>
                                            <div class="mr-5"><div class="mr-5"><div class="mr-5"><hr class="mb-3 ml-2 mr-5 pr-5"></div></div></div>
                                        </div>
                                    </div>
                                    <div class="row px-4 py-3">
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div class="text-left text-default"><i class="ni ni-pin-3"></i>  23213 Red River Dr, Katy, TX 77494</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="text-left text-default py-2"><i class="fa fa-phone"></i> <b> Phone:</b> <a href="tel:832-913-3879" class="text-success"> (832) 913-3879 (Main)</a></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="text-left text-default py-2"><i class="fa fa-phone"></i><b>  Phone:</b> <a href="tel:713-252-5148" class="text-success"> (713) 252-5148 (Text Only)</a></div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="text-left text-default py-2"><i class="ni ni-email-83"></i> Email:<a href="mailto:katyolivedental@yahoo.com" class="text-success"> katyolivedental@yahoo.com</a></div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </div>
                                </card>
                            </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-12 px-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.092203442323!2d-95.49241811372657!3d29.803880491723046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c4307dae39e9%3A0xfc6b2e0eafb7bd90!2sTeeth%20Are%20US%20Dental%20Group!5e0!3m2!1sen!2sus!4v1608289121169!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </div>
                </div>
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

@media (max-width: 767px) {
    .mb-if-small {
        margin-bottom: 2rem;
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