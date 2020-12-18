<template>
    <footer class="footer bg-default pt-1">
        <div class="container">
            <div class="row row-eq-height row-grid align-items-center mt-md align-items-stretch">
                    <div class="col-lg-4">
                        <div class="row">
                            <h3 class="text-white font-weight-light mb-2 mx-2">We are committed to providing you and
                                your family with high quality dental care in a comfortable setting.</h3>
                        </div>
                    </div>
                    <div class="col-lg-4 text-lg-center">
                        <h3 class="text-primary mb-2 text-left font-weight-bold">Our Contacts</h3>
                        <table class="table-sm table table-borderless text-secondary">
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="text-left">
                                            <i class="ni ni-pin-3"></i> 8126 Long Point Rd, Houston, TX 77055							
                                            <br>
                                            <base-button tag="a"
                                                target="_blank"
                                                type="primary" 
                                                href="https://g.page/wooridental?share"
                                                class="mb-1 mt-1">
                                                Get directions on map  <i class="fa fa-globe"> </i>
                                            </base-button>
                                            </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="text-left"><i class="fa fa-phone"></i><b> Phone:</b> <a href="tel:7136477500"> (713) 647-7500 (Main)</a></div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="text-left"><i class="fa fa-phone"></i><b> Phone:</b> <a href="tel:7138282785"> (713) 828-2785 (Text Only)</a></div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="text-left"><i class="ni ni-email-83"></i><a href="mailto:teethareusdental@yahoo.com"> teethareusdental@yahoo.com</a></div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="text-left"><i class="ni ni-mobile-button"></i> KaKao ID: Redriver23213</div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <h3 class="text-primary mb-2 font-weight-bold">Open Hours</h3>
                        <table class="table-sm table table-striped text-secondary">
                            <tbody>
                                <tr>
                                    <th scope="row">Monday</th>
                                    <td><b>9AM - 5:30PM</b></td>
                                </tr>
                                <tr>
                                    <th scope="row">Tuesday</th>
                                    <td><b>Closed</b> (Drs work at 2nd office)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Wednesday</th>
                                    <td><b>9AM - 5:30PM</b></td>
                                </tr>
                                <tr>
                                    <th scope="row">Thursday</th>
                                    <td><b>Closed</b> (Drs work at 2nd office)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Friday</th>
                                    <td><b>9AM - 5:30PM</b></td>
                                </tr>
                                <tr>
                                    <th scope="row">Saturday</th>
                                    <td><b>9AM - 4:30PM</b> (opens every other week)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sunday</th>
                                    <td><b>Closed</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
            <hr class="mt-5 mb-3">
            <div class="row align-items-center justify-content-md-between text-secondary">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}} Teeth Are Us Dental Group.
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import App from '../App.vue';
export default {
  components: { App },
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style scoped>
hr {
    height: 1px;
    background-color: #ccc;
    border: none;
}
</style>
