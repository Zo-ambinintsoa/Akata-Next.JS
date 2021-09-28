import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'popper.js';

import Head from 'next/head';

import 'styles/globals.css';


export default function testTheme() {
    return (
        <>
            <Head>
                <title>Gestion de Projet Pour Akata</title>
                            <link href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
                            rel="stylesheet"/>
                            <link rel="stylesheet" type="text/css" href="styles/app-assets/css-rtl/vendors.css"/>
                            <link rel="stylesheet" type="text/css" href="styles/app-assets/css-rtl/app.css"/>
                            <link rel="stylesheet" type="text/css" href="styles/app-assets/css-rtl/custom-rtl.css"/>
                            <link rel="stylesheet" type="text/css" href="styles/app-assets/css-rtl/core/menu/menu-types/horizontal-menu.css"/>
                            <link rel="stylesheet" type="text/css" href="styles/app-assets/css-rtl/core/colors/palette-gradient.css"/>
                            <link rel="stylesheet" type="text/css" href="styles/app-assets/css-rtl/pages/error.css"/>
                            <link rel="stylesheet" type="text/css" href="styles/assets/css/style-rtl.css"/>
                                <script src="styles/app-assets/vendors/js/vendors.min.js" type="text/javascript"></script>
                                <script type="text/javascript" src="styles/app-assets/vendors/js/ui/jquery.sticky.js"></script>
                                <script src="styles/app-assets/vendors/js/extensions/jquery.toolbar.min.js" type="text/javascript"></script>
                                <script src="styles/app-assets/js/core/app-menu.js" type="text/javascript"></script>
                                <script src="styles/app-assets/js/core/app.js" type="text/javascript"></script>
                                <script src="styles/app-assets/js/scripts/customizer.js" type="text/javascript"></script>
                                <script src="styles/app-assets/js/scripts/extensions/toolbar.js" type="text/javascript"></script>
            </Head>

            <div class="horizontal-layout horizontal-menu horizontal-menu-padding 1-column   menu-expanded blank-page blank-page"
data-open="click" data-menu="horizontal-menu" data-col="1-column">
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <section class="flexbox-container">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="col-md-4 col-10 p-0">
              <div class="card-header bg-transparent border-0">
                <h2 class="error-code text-center mb-2">404</h2>
                <h3 class="text-uppercase text-center">Page Not Found !</h3>
              </div>
              <div class="card-content">
                <fieldset class="row py-2">
                  <div class="input-group col-12">
                    <input type="text" class="form-control form-control-xl input-xl border-grey border-lighten-1 "
                    placeholder="Search..." aria-describedby="button-addon2"/>
                    <span class="input-group-append" id="button-addon2">
                      <button class="btn btn-lg btn-secondary border-grey border-lighten-1" type="button"><i class="ft-search"></i></button>
                    </span>
                  </div>
                </fieldset>
                <div class="row py-2">
                  <div class="col-12 col-sm-6 col-md-6">
                    <a href="index.html" class="btn btn-primary btn-block"><i class="ft-home"></i> Back to Home</a>
                  </div>
                  <div class="col-12 col-sm-6 col-md-6">
                    <a href="search-website.html" class="btn btn-danger btn-block"><i class="ft-search"></i>  Advanced search</a>
                  </div>
                </div>
              </div>
              <div class="card-footer bg-transparent">
                <div class="row">
                  <p class="text-muted text-center col-12 py-1">© 2018 <a href="#">Modern </a>Crafted with <i class="ft-heart pink"> </i>                    by <a href="http://themeforest.net/user/pixinvent/portfolio"
                    target="_blank">PIXINVENT</a></p>
                  <div class="col-12 text-center">
                    <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                      <span class="la la-facebook"></span>
                    </a>
                    <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                      <span class="la la-twitter"></span>
                    </a>
                    <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin">
                      <span class="la la-linkedin font-medium-4"></span>
                    </a>
                    <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-github">
                      <span class="la la-github font-medium-4"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>



        </>
    )
}
