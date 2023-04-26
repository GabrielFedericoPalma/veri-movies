<script lang="ts" setup >
    import Nav from '~/components/nav.vue'
    import { useApiStore } from '~/stores/api-store'
    
    const { user } = useFirebaseAuth()
    
    const apiStore = useApiStore()
    apiStore.initConf()

    const currentDate = new Date(). getUTCFullYear()

</script>

<template>
    <Nav />
    <div class="container" >
        <main>
            <slot />
        </main>
    </div>
</template>

<style>
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {background: black; margin: 0; height: 100%;}
* {font-family: sans-serif; color: white}
h1{font-size: 1.6rem; margin: 0.4rem auto;}
h3 {color: bisque; letter-spacing: 1px;}
a:hover{opacity:0.8}

.container {
    max-width: 1300px;
    margin: auto;
    padding: 0.8rem;
}
main {margin-top: 2rem; padding: 1rem 0.5rem 2rem 0.5rem}

/* Scroll CSS */
* {
  scrollbar-width: thin;
  scrollbar-color: #6d6d6d transparent;
}
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #6d6d6d;
  border-radius: 20px;
  border: 3px solid transparent;
}
/* End Scroll CSS */

</style>