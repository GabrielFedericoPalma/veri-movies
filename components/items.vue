<script lang="ts" setup >

    import { useApiStore } from '~/stores/api-store'
    import Spinner from '~/components/spinner.vue'

    const apiStore = useApiStore()
    const props = defineProps(['type', 'id'])

    apiStore.getApi(props.type)
    

</script>

<template>

    <section class="wrapperItems" :class="type" >
        <div v-for="item in apiStore.data[type]" :key="item.id" class="item" >
            <NuxtLink :to="'/view-item/'+type+'/'+item.id" :title="item.title" >
                <img :src="apiStore.IMG_PATH+'/w500/'+item.poster_path" :alt="item.title" > 
            </NuxtLink>
        </div>
        <p v-if="!apiStore.data[type]?.length" >There aren't results</p>
    </section>
    
    <section class="pagination" >
        <small>Results</small>
        <img src="/assets/icons/remove.png" alt="icon less movies" @click="apiStore.getApi(type, '-', id)" >
        <img src="/assets/icons/add.png" alt="icon more movies" @click="apiStore.getApi(type, '+', id)" >
    </section>

    <Spinner v-if="apiStore.showSpinnerType === props.type" :idItemDom="props.type" />

</template>

<style scoped>

.wrapperItems{display: flex; gap: 10px; overflow-x: scroll; position: relative; min-height: 200px;}
.wrapperItems .item {display: flex; flex-direction: column;}
.wrapperItems img {width: 150px;max-height: 200px;}

.pagination {display: flex; gap: 10px; align-items: center; margin: 16px auto}
.pagination img{width: 20px; height: 20px; cursor: pointer}
</style>
