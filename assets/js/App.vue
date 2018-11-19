<template>
    <div>
        <Navigation></Navigation>
        <router-view id="content"></router-view>
    </div>

</template>

<script>
    import Navigation from '../js/components/Navigation'
    import router from './router'
    export default {
        name: 'app',
        components: {
            'Navigation': Navigation
        }, beforeMount() {
            let vueRouting = this.$parent.$el.attributes['data-vue-routing'].value;
            router.push({path: vueRouting});
        }
    }
</script>

<style lang="scss">

</style>
