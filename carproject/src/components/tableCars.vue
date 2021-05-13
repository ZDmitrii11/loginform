<template>
    <div>
        <div class="container-table"></div>
        <table >
            <tr>
                <th>CarMake</th>
                <th>CarYear:</th>
                <th>CarYear</th>

            </tr>
            <tr v-for="(car,index) in getInventory" :key="index">
                <td>{{car.car_make}}</td>
                <td>{{car.car_year}}</td>
                <td>{{car.car_model}}</td>
                <td><a :href="car.url"><img class="img" :src="car.url" alt=""></a></td>

                 </tr>

        </table>

        <div>
            <b-button class="w-50 p-3 mb-1 bg-secondary text-light h-75 d-inline-block" @click="ToHome">
                Home Page
            </b-button>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "tableCars",
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['getInventory'])
        }
        ,
        methods: {
            ToHome() {
                if (this.$router.currentRoute.path !== '/main') {
                    this.$router.push('/main')
                }
            }

        }
    }
</script>

<style scoped>
    table{
        border: 1px solid black;
        text-align: center;
        margin: auto;
    }

    td{
        border: 1px solid black;
        text-align: center;
    }

    .img{
        width: 150px;
        height: 75px;
    }
    .bg-secondary{
        margin-left: 25%;
        margin-top: 5px;
    }
</style>