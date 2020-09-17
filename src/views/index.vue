<template>
    <div class="main-page">
        <TopNav />
        <div class="main-rooter">
            <router-view/>
        </div>
        <Footer />
    </div>
</template>

<script>
import TopNav from './TopNav.vue';
import Footer from './Footer.vue';

export default {
  name: 'mainComponent',
  components: {
    TopNav,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.main-page{
    background-color: #21201E;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .main-rooter{
        flex-grow: 1;
    }
}
</style>
