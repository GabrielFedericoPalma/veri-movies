<script lang="ts" setup >
    const { logout, user } = useFirebaseAuth()
    const { isDesktop } = useDevice();
</script>

<template>
    <nav>
        <section class="container" >
            <NuxtLink to="/" title="Veri-Movies" ><h1>Veri-Movies</h1></NuxtLink>
            <p><small v-show="isDesktop" >{{ user.email }}</small><br><small @click="logout" class="logout" >Logout</small> </p>
        </section>
    </nav>
</template>

<style scoped>
    nav {
        position: fixed;
        width: 100%;
        background: rgb(2,0,36);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(32,32,45,1) 35%, rgba(149,149,149,1) 100%);
        z-index: 1;
        }
    nav h1 {
        font-family: 'monospace';
        color: thistle;
        text-shadow: 0 0 2px black;
        letter-spacing: 1px;
        box-shadow: -1px 1px 2px #6d6d6d;
        border-radius: 8px;
        padding: 6px 18px;
        margin-top: -4px;
    }    
    section {display: flex; justify-content: space-between; align-items: center;}   
    h1, p {margin: 0;}
    a {text-decoration: none;}
    small.logout {text-decoration: underline; cursor: pointer;}
</style>