<template>
    <video autoplay loop muted plays-inline class="back-video">
        <source src="../assets/videos/index.mp4" type="video/mp4"/>
    </video>
</template>
<script setup lang="js">

</script>

<style scoped>
.back-video{
position: absolute;
right: 0;
bottom: 0;
z-index: -1;
}

@media (max-aspect-ratio: 16/9){
    .back-video{
        width: auto;
        height: 100%;

    }
}
</style>