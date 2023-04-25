<script lang="ts" setup >
    const props = defineProps(['idItemDom'])
</script>

<template>
      <ClientOnly>
        <Teleport :to="'.'+props.idItemDom">
            <div class="spinner"><p>Loading...</p></div>
        </Teleport>
      </ClientOnly>
</template>

<style scoped>
    .spinner{ 
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.808); 
        width: 100%; 
        height: 100%; 
        z-index: 9999
        }
</style>