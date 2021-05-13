<template>
    <div>


        <div v-if="getFavoritCar.length ===0">
            <h1>No Favorits Cars </h1>
                </div>
        <div v-else>
            <div v-for="(favorit,index) in getFavoritCar" :key="index" class="my-container">
                <div class="my-image-container" :id="index">
                    <img class="carImage" :src="favorit.url"></div>
                <div class="carContent">
                    <h4><a :href="favorit.url">{{favorit.car_make}}</a></h4>
                    <button @click="deleteCarFromFavorits(index)">Remove Car</button>
                </div>
                </div>
            </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Favorits",
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['getFavoritCar'])
        },
        mounted() {

        },
        created() {

            console.log(this.getFavoritCar)

            },

        methods:{
            deleteCarFromFavorits(ind){
                this.getFavoritCar.splice(ind,1)
            }
        }
    }
</script>

<style scoped>
    img {
        width: 300px;
        height: 300px;
        margin: auto;
        padding: 2rem;
        background-color: yellow;
    }

    .my-container {
        display: inline-block;
        text-align: center;
        margin: 22px;
    ;
    }

    .my-image-container {

        padding: 2rem;
        margin: 2rem;
        text-align: center;
        border: 1px solid black;
        background-color: #2c3e50;
        width: 500px;
        height: 400px;
    }
    .carContent {
        text-align: center;
    }
</style>