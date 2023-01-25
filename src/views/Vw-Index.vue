<template>
    <video autoplay loop muted plays-inline class="back-video">
        <source src="../assets/videos/index.mp4" type="video/mp4" />
    </video>
    <div class="center-button">
        <button class="button" @click="credentials()">Login</button>
        <transition-group appear @before-enter="beforeEnter" @enter="enter">
            <div class="card" v-if="clicked" style="width: 18rem;">
                <div class="card-body shadow p-3 mb-5 bg-white rounded" style="background-color:white;">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </transition-group>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';

const clicked = ref(false);

const credentials = () => {
    clicked.value = true;
    console.log("prueba");
}

const beforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-60px)'
}
//Aquí comienza la animación
const enter = (el, done) => {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: el.dataset.index * 0.4,
        onComplete: done
    })
}


</script>

<style scoped>
.back-video {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
}

@media (max-aspect-ratio: 16/9) {
    .back-video {
        width: auto;
        height: 100%;

    }
}

.center-button {
    display: flex;
    justify-content: center;
    text-align: center;
}

.button {
    color: white;
    font-weight: bolder;
    font-size: larger;
    border: solid 4px red;
    height: 60px;
    width: 190px;
    background-color: red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    padding: 20px 30px;
    letter-spacing: 1.5px;
    background: linear-gradient(to left, white 50%, red 50%) right;
    background-size: 200% 100%;
    font-size: 1.5em;
    margin: 0 auto;
    padding: 0;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    color: black;

}

.button:hover {
    transition: 0.5s;
    background-position: left;
    color: white;
}
</style>