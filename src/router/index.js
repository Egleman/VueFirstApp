import VueRouter from 'vue-router';
import Vue from 'vue';
import HeroView from '../view/HeroView.vue';
import OurCoffee from '../view/OurCoffee.vue';
import GoodsPage from '../view/GoodsPages.vue';
import ContactUs from '../view/ContactUs.vue';
import ThankYouPage from '../view/ThankYouPage.vue';
import GoodItemView from '../view/GoodItemView.vue';

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
    },
    {
        name: 'coffee',
        path: `/our-coffee/:id`,
        component: GoodItemView
    },
    {
        name: 'goods',
        path: `/goods-page/:id`,
        component: GoodItemView
    }
  ]
})

export default router;