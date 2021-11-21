<template>
  <div style="margin-top: 30rem; background-color: transparent;">
    <div class="page-banner home-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100" style="margin-bottom: 5rem;">
          <div class="col-lg-6 py-3 wow fadeInUp">
            <h1 class="mb-4">Solve some issues to make a better community</h1>
            <p class="text-lg mb-5">
              Alot of junior programmer needs your knowledge to solve their issues and contribute to the community
            </p>

            <nuxt-link to="/register" class="btn btn-primary btn-split ml-2">
              Join Community
              <div class="fab"><span class="mai-play"></span></div
            ></nuxt-link>
          </div>
          <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place">
              <img src="../assets/img/bg_image_1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section features">
      <div class="container">
        <div class="row justify-content-center" style="margin-bottom: 5rem;">
          <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="img-fluid mr-3">
                <img src="../assets/img/icon_pattern.svg" alt="">
              </div>
              <div>
                <h5>Provide financial advice by our advisor</h5>
                <p>Copywrite, blogpublic realations content translation.</p>
              </div>
            </div>
          </div>
  
          <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="img-fluid mr-3">
                <img src="../assets/img/icon_pattern.svg" alt="">
              </div>
              <div>
                <h5>Complete solutions for global organisations</h5>
                <p>Copywrite, blogpublic realations content translation.</p>
              </div>
            </div>
          </div>
  
          <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="img-fluid mr-3">
                <img src="../assets/img/icon_pattern.svg" alt="">
              </div>
              <div>
                <h5>Provide financial advice by our advisor</h5>
                <p>Copywrite, blogpublic realations content translation.</p>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- .container -->
    </div> <!-- .page-section -->


    
    <div class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place text-center">
              <img src="../assets/img/bg_image_2.png" alt="">
            </div>
          </div>
          <div class="col-lg-6 py-3 wow fadeInRight">
            <h2 class="title-section">Join to the <span class="marked">Community</span></h2>
            <div class="divider"></div>
            <p>Help others by your knowledge to improve their skills</p>
            <div class="img-place mb-3">
              <img src="../assets/img/testi_image.png" alt="">
            </div>
            <nuxt-link to="/login" href="#" class="btn btn-primary">Contribute</nuxt-link>
            <!-- <a href="#" class="btn btn-outline border ml-2">Solve issues</a> -->
          </div>
        </div>
      </div> <!-- .container -->
    </div> <!-- .page-section -->


  </div>
</template>

<script>
export default {};
</script>

<style>
</style>