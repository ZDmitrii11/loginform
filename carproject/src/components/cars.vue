<template>
    <div>
        <div class="container" v-for="(inverntory,index) in getInventory" :key="index">
            <div class="image-container">
                <img class="carImage" :src="inverntory.url" :alt="index"></div>
                <div class="carContent">
                    <h4>{{inverntory.car_make}}</h4>
                </div>
        </div>

    </div>









</template>


<script>

    import {mapGetters} from 'vuex'


    export default {
        name: "cars",
        data() {
            return {

                carList:new Array(20),
                selected: 0,


            }
        },
        computed: {
            ...mapGetters(['getInventory']),



        },

        mounted() {

        },
        created() {

        },
        methods: {

        }


    }
</script>

<style scoped>
    .carImage {
        width: 500px;
        height: 500px;
        text-align: center;

    }

    .container {
        display:inline-block;
        text-align: center;

    }
    .image-container{
        padding: 2rem;
        margin: 2rem;
        text-align: center;
    }
    .carContent{
        text-align: center;
    }

    .car-item {


    }

</style>