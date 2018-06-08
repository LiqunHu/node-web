<template>
<div>
    <!-- begin #page-container -->
    <div class="wrapper">
        <main-header></main-header>
        <main-sidebar></main-sidebar>
        <!-- begin #content -->
        <div id="content" class="content">
            <router-view></router-view>
        </div>
    </div>
    <!-- end page container -->
</div>
</template>
<script>
const common = require('commonFunc')
import mainHeader from './common/main/mainHeader'
import mainSidebar from './common/main/mainSidebar'
export default {
    name: 'mainSystem',
    components: {
        mainHeader,
        mainSidebar
    },
    mounted: function() {
      $('body').removeClass()
      $('body').addClass('hold-transition')
      $('body').addClass('skin-blue')
      $('body').addClass('sidebar-mini')
    }
}
</script>
<style scoped>
</style>
