<script lasng="ts" setup >

definePageMeta({
    middleware:'auth'
})

import Banner from '~/components/banner.vue'
import Item from '~/components/items.vue'

const itemConfig = [
    
    {title: 'Top rated', type: 'top_rated', id:"01" },
    {title: 'Popular', type: 'popular', id:"02" },
    {title: 'Upcoming', type: 'upcoming', id:"03" }

]

</script>

<template>

    <Banner />

    <section v-for="item in itemConfig" :key="item.id" class="items" >
        <h3>{{ item.title }}</h3>
        <Item :type="item.type" />
    </section>

</template>

<style scoped>
    section.items {margin-bottom: 33px;}
</style>