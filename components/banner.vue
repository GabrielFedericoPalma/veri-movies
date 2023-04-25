<script lang="ts" setup >

import { ref } from 'vue'
import { onMounted } from 'vue'
import { useApiStore } from '~/stores/api-store'
import { useRouter } from 'vue-router'

const apiStore = useApiStore()

const items = apiStore.banners

let item = ref('')

const router = useRouter()
const goToItem = (type, id) => {
    router.push('/view-item/'+type+'/'+id)
}

// Banner only desktop
const { isDesktop } = useDevice();
const fadeIn = ref(false)

onMounted(() => {
    if(isDesktop) {
        let i = 0
        setInterval(() => { 
            i++
            fadeIn.value = !fadeIn.value
            if(i <= 10){
                item.value = items[i]
            }
            if(i === 10) i = 0 
        }, 2500); 
    }
})


</script>

<template>
    
    <section 
    class="banner" 
    :class="{fadeIn:fadeIn}" :style="[item?{ backgroundImage: 'url('+apiStore.IMG_PATH+'/original/'+item.bg+')' }:{}]" @click="goToItem(item.type, item.id)" 
    :alt="'Movie: '+item.title"
    >
        <h1>{{ item.title }}</h1>    
    </section>

</template>

<style scoped>
    section.banner {background-image: url('/assets/img/bg-desktop.jpg');
    background-size: cover;
    width: 100%;
    height: 350px;
    margin-bottom: 44px;
    position: relative;
    cursor: pointer;
    }
    section.banner:hover{opacity: 0.9}
    section.banner h1 {position: absolute; text-align: center; bottom: 22px; width: 100%; text-shadow: 5px 3px 5px black}

    .fadeIn {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.3s;
    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 600px) {
        section.banner {
            background-image: url('/assets/img/bg-mobile.jpg');
            background-position: center;
        }
    }
</style>