<script setup >

definePageMeta({
    middleware:'auth'
})

import { useApiStore } from '~/stores/api-store'
import Item from '~/components/items.vue'
import GoHome from '~/components/goHome.vue'

const apiStore = useApiStore()

const route = useRoute()
apiStore.getItem(route.params.type, route.params.id)

const item = apiStore.item[0]

</script>

<template>
    <section :style="[{ backgroundImage: 'url('+apiStore.IMG_PATH+'/original/'+item.backdrop_path+')' }]" class="item" >
        <article>
            <img :src="apiStore.IMG_PATH+'/w500/'+item.poster_path" alt="" > 
            <div class="textContent" >
                <h1>{{ item.title }} <small>({{ item.release_date.substring(0,4) }})</small></h1>
                <p v-for="(item, index) in item.genres[0]" :key="item.id" >{{ item.name }}</p>
                <p>{{ item.overview }}</p>
                <GoHome />
            </div>
        </article>
    </section>

    <section class="similars" :class="route.params.type" >
        <h3>Similars</h3>
        <Item :type="'similar'" :id="route.params.id" />
    </section>

</template>

<style scoped>
section.item {background-size: cover;}
section.similars {margin: 33px auto}
article {display: flex; flex-wrap: wrap; background-color: #000000a1;}
article img {max-width: 10rem; margin: 1rem}
div.textContent {max-width: 600px; padding: 1rem; background-color: #00000045;}
</style>