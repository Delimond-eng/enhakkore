<template>
  <div>
    <site-parallax
      big-title="La force de la prière"
      subtitle="Commentez l'exhortation"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
    />
    <div class="blog-details-area pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="blog-details-desc">
              <div class="article-content">
                <div class="article-image">
                  <img src="assets/images/en/images/event01.jpg" alt="image" />
                </div>
                <ul class="entry-meta">
                  <li></li>

                  <li>
                    <i class="bx bxs-comment"></i>
                    02 Comments
                  </li>

                  <li>
                    <i class="bx bxs-like"></i>
                    02 Likes
                  </li>
                </ul>
                <h3>La force de la prière</h3>

                <div class="quote">
                  <p>
                    Rconsequat ipsum nec sagittis sem nibh id elit duis sed odio sit amet
                    nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit
                    nam nec tellus a odio tincidunt auctor a ornare odio sed non mauris
                    vitae erat consequat auctor eu in elit.
                  </p>
                </div>
              </div>
              <div class="article-comments">
                <div class="comments-list">
                  <img src="assets/images/en/berg.JPG" alt="image" />
                  <h5>Berger ...</h5>
                  <span><i class="bx bx-calendar"></i> 21/08/2020</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                    consequuntur ab sint eveniet dolor asperiores sequi cupiditate maxime
                    distinctio pariatur vel, maiores, dolores numquam blanditiis quisquam
                    ipsam ducimus? Deleniti, placeat!
                  </p>
                </div>
              </div>
              <div class="article-leave-comment">
                <h4>Ajoutez votre commentaire</h4>
                <form>
                  <div class="row justify-content-center">
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <textarea
                          name="message"
                          class="form-control"
                          placeholder="Your Comment"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <button type="submit" class="default-btn">
                        <i class="bx bx-chevron-right"></i> Commenter <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <x-footer />
  </div>
</template>

<script>
export default {
  name: "ExhortationDetail",

  mounted() {
    this.$store.dispatch("scrollToTop");
  },
};
</script>
