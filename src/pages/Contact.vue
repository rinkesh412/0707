<template>
  <PageLayout>
     <main>
       <div class="container">
           <h1>Become a client</h1>
           <p>Our clients get the best results when they have our team dedicated to 
            their business for extended periods of time. This is why we are looking 
            for ongoing collaboration where our professionals are like your team 
            members who just happen to be remote. Ready to move forward?</p>
            <p>Don't like forms? Send us and <a href="" class="link">email</a></p>
            <form action="" class="contact_form">
                <input type="text" name="" id="" placeholder="First Name">
                <input type="text" name="" id="" placeholder="Last Name" class="inactive">
                <input type="text" name="" id="" placeholder="Your Email" class="inactive">
                <span class="inactive">Please use your business email</span>
                <textarea name="" id="" cols="30" rows="10" placeholder="How did you find us" class="inactive"></textarea>
                <p>You agree to our Privacy Policy, cookie
                    usage and occasional updates from us</p>
                <button href="" class="btn_link" type="submit">Grant my wish</button>
            </form>
       </div>
    </main>
  </PageLayout>
</template>
<style>
.layout p {
    color: #000;
}
</style>
<script>
import PageLayout from '~/layouts/PageLayout.vue'
export default {
  metaInfo: {
    title: 'Contact us'
  },
  mounted(){
        document.body.classList.remove('about_page');
        document.body.classList.add('contact_page');
  },      
  components: {
    PageLayout
  },
}
</script>
