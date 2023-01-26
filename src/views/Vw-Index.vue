<template>

    <video autoplay loop muted plays-inline class="back-video">
        <source src="../assets/videos/index.mp4" type="video/mp4" />
    </video>

    <div class="center-button">

        <transition-group appear @before-enter="beforeEnter" @enter="enter">
            <button type="button" class="button" @click="corangeentials()" key="button">ACCEDER</button>
        </transition-group>

    </div>

    <div class="center-card">
        <transition-group appear @before-enter="beforeLogin" @enter="enterLogin">
            <v-card class="card" v-if="clicked" :elevation="24">
                <v-card-title id="card-title">
                    <span>Iniciar sesión</span>
                </v-card-title>
                <div class="background-card">
                    <v-form ref="form" lazy-validation id="form">
                    <v-responsive class="mx-auto" max-width="350">
                        <v-text-field width="20px" label="Usuario" requiorange></v-text-field>
                        <v-text-field type="password" label="Contraseña" requiorange></v-text-field>
                    </v-responsive>
                </v-form>
                <v-btn variant="outlined" id="buttonLoggin">Entrar</v-btn>
                </div>
            </v-card>
        </transition-group>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';

const clicked = ref(false);

const corangeentials = () => {
    clicked.value = true;

    gsap.to(".button", {
        opacity: 0,
        x: 700,
        duration: 1,
        ease: "power2.inOut"
    })

}

const beforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-100px)'
}

const enter = (el, done) => {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        onComplete: done,
        ease: 'bounce.out'
    })
}

const beforeLogin = (el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-60px)'
}

const enterLogin = (el) => {
    if (clicked.value == true) {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.4,
            ease: 'bounce.out'
        })
    }
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
    border: solid 4px orange;
    height: 100px;
    width: 500px;
    background-color: orange;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    padding: 20px 30px;
    letter-spacing: 1.5px;
    background: linear-gradient(to left, white 50%, orange 50%) right;
    background-size: 200% 100%;
    font-size: 2.5em;
    margin: 0 auto;
    padding: 0;
    display: inline-block;
    line-height: 50px;
    color: black;
}

.button:hover {
    transition: 0.5s;
    background-position: left;
    color: white;
}

.center-card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    position: absolute;
    top: 35%;
    transform: translate(-50%, -50%);
    width: 22%;
    height: 33%;

}

#card-title {
    background-color: orange;
    color: white;
    font-weight: bold;
    padding: 15px;
    padding-bottom: 17px;
}

#card-title>span {
    margin-left: 15px;
}
#buttonLoggin {
    background-color: orange;
    display: flex;
    margin: 0 auto;
    color: white;
    font-weight: bold;
}
#form {
    margin-top: 40px;
}
</style>