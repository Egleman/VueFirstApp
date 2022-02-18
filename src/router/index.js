import VueRouter from 'vue-router';
import Vue from 'vue';
import HeroView from '../view/HeroView.vue';
import OurCoffee from '../view/OurCoffee.vue';
import GoodsPage from '../view/GoodsPages.vue';
import ContactUs from '../view/ContactUs.vue';
import ThankYouPage from '../view/ThankYouPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: HeroView
    },
    {
        path: '/our-coffee',
        component: OurCoffee
    },
    {
        path: '/goods-page',
        component: GoodsPage
    },
    {
        path: '/contact-us',
        component: ContactUs
    },
    {
        path: '/thank-you-page',
        component: ThankYouPage
    }
  ]
})

export default router;