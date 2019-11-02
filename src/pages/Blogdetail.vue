<template>
  <PageLayout>
        <main>
       <div class="container">
            <section class="blog_posts blog_active">
                <article>
                    <div>
                        <g-image src="/assets/img/b_post_2.png" class="" alt="" immediate="false" />
                        <div>
                            <div>
                                <span>FACEBOOK</span>
                                <span>JULY 13, 2019</span>
                            </div>
                            <p>Facebook reportedly gets a $5 billion slap on the wrist from the FTC</p>
                        </div>
                    </div>
                </article>
                <div class="blog_details">
                    <h2>Header Evolution</h2>
                    <p>When we started our work on the website interface, we made the decision to figure out what the header should look like. This element of the website is the first thing that our visitors will see. We had a lot of discussions and iterations of the header design to determine a general look and feel.</p>
                    <g-image src="/assets/img/details_1.png" class="" alt="" immediate="false" />
                    <p>Coming back to the question of consistency, the branding team prepared a wider color palette to help our illustrators in future work. At this time we didn't have an idea what the illustration style should look like, so we created 25 different tones, including soft and vibrant options logo thickness. Moreover, the logo sign had a lot of small details that caused visual noise. Iterable's website design also deserved some refreshment,  vibrant options prepared since it was created in 2013 idea what the illustration.</p>
                    <div class="blog_author">
                        <div>
                            <g-image src="/assets/img/auth_1.png" class="" alt="" immediate="false" />
                            <div>
                                <p>Erik D. Kennedy</p>
                                <p>3 days ago</p>
                            </div>
                        </div>
                        <div class="blog_social">
                            <a href=""><g-image src="/assets/img/facebook.svg" class="" alt="" immediate="false" /></a>
                            <a href=""><g-image src="/assets/img/linkedin.svg" class="" alt="" immediate="false" /></a>
                            <a href=""><g-image src="/assets/img/twitter.svg" class="" alt="" immediate="false" /></a>
                        </div>
                    </div>
                </div>
                <div class="slide_section">
                    <div class="related">
                        <p>Related posts</p>
                        <hr>
                    </div>
                    <div class="slider">
                        <div>
                            <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                            <div>
                                <p>BRANDING</p>
                                <p>Bix consulting</p>
                            </div>
                        </div>
                        <div>
                            <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                            <div>
                                <p>WEB DESIGN</p>
                                <p>Sans agency</p>
                            </div>
                        </div>
                        <div>
                            <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                            <div>
                                <p>IOS DESIGN</p>
                                <p>BP&XO Consulting</p>
                            </div>
                        </div>
                        <div>
                            <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                            <div>
                                <p>BRANDING</p>
                                <p>Bix consulting</p>
                            </div>
                        </div>
                        <div>
                            <g-image src="/assets/img/post_1.png" class="" alt="" immediate="false" />
                            <div>
                                <p>BRANDING</p>
                                <p>Bix consulting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </div>
    </main>
  </PageLayout>
</template>
<style>
.blog_details p {
    color: #000;
}
.blog_active article p{
    color:#fff;
}
@media (min-width: 992px){
    .blog_details p {
        line-height: 38px !important;
    }
}
</style>
<script>
import PageLayout from '~/layouts/PageLayout.vue'
export default {
  metaInfo: {
    title: 'Blog Detail'
  },
  mounted(){
        document.body.classList.remove('about_page');
        document.body.classList.remove('contact_page');
        document.body.classList.add('blog_page');
  },      
  components: {
    PageLayout
  },
}
</script>
