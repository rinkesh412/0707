<template>
  <PageLayout>
       <main>
       <div class="container">
            <h1>Agency blog</h1>
            <section class="blog_category">
                <ul>
                    <li>Business</li>
                    <li class="current_category">Ideas</li>
                    <li>UX/UI Design</li>
                    <li>Branding</li>
                    <li>Innovation</li>
                    <li>CX Design</li>
                    <li>Development</li>
                </ul>
            </section>
            <section class="blog_posts blog-listing">
                <article>
                    <div>
                        <g-image src="/assets/img/b_post_1.png" class="" alt="" immediate="true" />
                        <div>
                            <div>
                                <span>BUSINESS</span>
                                <span>JULY 13, 2019</span>
                            </div>
                            <p>Behold, the mid-engine 2020 C8 Corvette’s steering wheel</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <g-image src="/assets/img/b_post_2.png" class="" alt="" immediate="true" />
                        <div>
                            <div>
                                <span>FACEBOOK</span>
                                <span>JULY 13, 2019</span>
                            </div>
                            <p>Facebook reportedly gets a $5 billion slap on the wrist from the FTC</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <g-image src="/assets/img/b_post_3.png" class="" alt="" immediate="true" />
                        <div>
                            <div>
                                <span>MID-ENGINE</span>
                                <span>JULY 13, 2019</span>
                            </div>
                            <p>As FTC cracks down, data ethics is now a strategic business weapon</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <g-image src="/assets/img/b_post_4.png" class="" alt="" immediate="true" />
                        <div>
                            <div>
                                <span>INVESTMENT</span>
                                <span>JULY 13, 2019</span>
                            </div>
                            <p>Minimum investment for EB-5 investor green card expected to more than double</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <g-image src="/assets/img/b_post_5.png" class="" alt="" immediate="true" />
                        <div>
                            <div>
                                <span>TOKENS</span>
                                <span>JULY 13, 2019</span>
                            </div>
                            <p>SEC approves 1st consumer RegA+ token Props for cross-app rewards</p>
                        </div>
                    </div>
                </article>
            </section>
            <button class="btn_link load_more mx-auto">Load more</button>
       </div>
    </main>
  </PageLayout>
</template>
<style>
.blog-listing p {
    color: #fff !important;
}
</style>
<script>
import PageLayout from '~/layouts/PageLayout.vue'
export default {
  metaInfo: {
    title: 'Blogs'
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
