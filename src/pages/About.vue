<template>
  <PageLayout>
    <main>
        <section class="about_info">
            <div class="container">
                <div>
                    <div class="flex-item">
                        <p>We are a digital product design agency</p>
                    </div>
                    <div class="flex-item">
                        <div class="iframe-container">
                            <iframe src="https://www.youtube.com/embed/Kc6hkHGHQQc" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="flex-item">
                        <p>0707 is a team of multidisciplinary digital product experts focused on branding, UI/UX design and development. We extend design, development and marketing departments of growing startups and Fortune 500 companies. Our San Francisco studio is intentionally small, working with a few clients at a time.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="about_count">
            <div class="container">
                <p>
                    Breaking silos,<br> removing barriers
                </p>
                <p>
                    Distributed team of 34 experts<br>Startup clients raised $750M+<br>10 years of excellence
                </p>
            </div>
        </section>
        <section class="about_services">
            <div class="container">
                <p class="tittle">Services</p>
                <div class="about_grid">
                    <div>
                        <g-image src="/assets/img/services_icon_1.svg" class="" alt="" immediate="true" />
                        <p>Strategy &amp; Consulting</p>
                        <ul>
                            <li>Research</li>
                            <li>UI/UX &amp; website design</li>
                            <li>Rapid prototyping</li>
                        </ul>
                    </div>
                    <div>
                        <g-image src="/assets/img/services_icon_2.svg" class="" alt="" immediate="true" />
                        <p>Engineering &amp; Automation</p>
                        <ul>
                            <li>Research</li>
                            <li>UI/UX design</li>
                            <li>Rapid prototyping</li>
                        </ul>
                    </div>
                    <div>
                        <g-image src="/assets/img/services_icon_3.svg" class="" alt="" immediate="true" />
                        <p>Branding &amp; Experience Design</p>
                        <ul>
                            <li>Strategy</li>
                            <li>Guidelines</li>
                            <li>Brand identity design</li>
                        </ul>
                    </div>
                    <div>
                        <g-image src="/assets/img/services_icon_4.svg" class="" alt="" immediate="true" />
                        <p>Marketing &amp; Analytics</p>
                        <ul>
                            <li>Research</li>
                            <li>UI/UX design</li>
                            <li>Rapid prototyping</li>
                        </ul>
                    </div>
                    <div>
                        <g-image src="/assets/img/services_icon_5.svg" class="" alt="" immediate="true" />
                        <p>Support &amp; Maintenance</p>
                        <ul>
                            <li>Back-end Mobile apps</li>
                            <li>Web front-end</li>
                        </ul>
                    </div>
                    <div>
                        <g-image src="/assets/img/services_icon_6.svg" class="" alt="" immediate="true" />
                        <p>Planning &amp; Management</p>
                        <ul>
                            <li>Research</li>
                            <li>UI/UX design</li>
                            <li>Web front-end</li>
                            <li>Rapid prototyping</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="about_work">
            <div class="container">
                <p class="tittle">Let's work together</p>
                <ul>
                    <li>
                        <div>
                            <p>Senior Designer</p>
                            <p>Remote</p>
                        </div>
                        <ul>
                            <li>- 3+ years experience</li>
                            <li>- Highly proficient in Google Apps</li>
                            <li>- BA/BS or equivalent work experience</li>
                        </ul>
                        <div>
                            <a href="job_detail.html">More Info</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Back-end Developer</p>
                            <p>NY, USA</p>
                        </div>
                        <ul>
                            <li>- 3+ years experience</li>
                            <li>- Highly proficient in Google Apps</li>
                            <li>- BA/BS or equivalent work experience</li>
                        </ul>
                        <div>
                            <a href="job_detail.html">More Info</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Staff Software Engineer</p>
                            <p>Remote</p>
                        </div>
                        <ul>
                            <li>- 3+ years experience</li>
                            <li>- Highly proficient in Google Apps</li>
                            <li>- BA/BS or equivalent work experience</li>
                        </ul>
                        <div>
                            <a href="job_detail.html">More Info</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Release Manager</p>
                            <p>Remote</p>
                        </div>
                        <ul>
                            <li>- 3+ years experience</li>
                            <li>- Highly proficient in Google Apps</li>
                            <li>- BA/BS or equivalent work experience</li>
                        </ul>
                        <div>
                            <a href="job_detail.html">More Info</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
  </PageLayout>
</template>
<style>
.about_services p, .about_work p {
    color: #000;
}
.about_page .title{
    font-size: 50px;
}
</style>
<script>
import PageLayout from '~/layouts/PageLayout.vue'
export default {
  metaInfo: {
    title: 'About us'
  },
  mounted(){
    document.body.classList.remove('contact_page');
    document.body.classList.remove('blog_page');  
    document.body.classList.add('about_page');
  },
  components: {
    PageLayout
  },
}
</script>
