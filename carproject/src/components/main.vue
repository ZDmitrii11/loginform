<template>

    <div class="my-container">

        <div>

            <select @change="changeItemsSize($event)" name="Chose Cars Number" class="form-select" style="margin: 2rem">

                <option v-for="(item,index) in getInventory" :key="index">

                    {{index+1}}

                </option>

            </select>

        </div>


        <div v-if="!getToken" class="show">
            <div class="my-container" v-for="(inverntory,index) in items" :key="index">
                <div class="my-image-container">
                    <img class="carImage" :src="inverntory.url" :alt="index"></div>
                <div class="carContent">
                    <h4><a :href="inverntory.url">{{inverntory.car_make}}</a></h4>
                </div>
            </div>


        </div>

        <div v-if="getToken" class="admin">
            <div class="my-container" v-for="(inverntory,index) in items" :key="index">
                <div class="my-image-container">
                    <img class="carImage" :src="inverntory.url" :alt="index"></div>
                <div class="carContent">
                    <h4><a :href="inverntory.url">{{inverntory.car_make}}</a></h4>
                </div>
                <button @click="editCar">Edit</button>


                <button @click.once="favoritCar(inverntory)">Faforit Car</button>




        </div>

        <button style="margin: auto" class="w-50 p-3 mb-1 bg-secondary text-light h-75 d-inline-block" @click="ToTable">
            View All Table
        </button>

        <paginate style="margin-left: 44%;padding: 2rem"
                  v-model="page"
                  :page-count="pageCount"
                  :pageSize="this.pageSize"
                  :click-handler="changePage"
                  prev-text-class="'page-link'"
                  next-text-class="'page-link'"
                  :container-class="'pagination'"
                  :active-class="'page-item'"
                  :page-class="'page-link'">

        </paginate>


    </div>


</template>


<script>
    import paginationMixin from '../mixins/pagination.mixin'
    import {mapGetters} from 'vuex'
    // import _ from 'lodash'


    export default {
        name: "cars",
        mixins: [paginationMixin],
        components: {},

        data() {
            return {

                carList: new Array(20),
                selected: 10,
                cars: [],
                isActive: false


            }
        },
        computed: {
            ...mapGetters(['getInventory', 'getToken', 'getFavoritCar']),


        },

        mounted() {
            this.cars = this.getInventory
            this.setupPagination(this.cars.map(el => el))
            localStorage.getItem('token')
        },


        created() {
            this.onChange(this.selected)
        },
        watch: {
            selected: function (newV, oldV) {
                if (newV !== oldV) {
                    this.onChange(newV)

                }
            }
        },
        methods: {

            changeItemsSize(e) {
                this.selected = Number(e.target.value)


            },


            ToTable() {
                if (this.$router.currentRoute.path !== '/tableCars') {
                    this.$router.push('tableCars')
                }
            },
            favoritCar(e) {
                console.log(e)
                this.getFavoritCar.push(
                    {
                        id: e.id,
                        car_make: e.car_make,
                        car_model: e.car_model,
                        car_year: e.car_year,
                        url: e.url
                    }
                )


            },

        }


    }
</script>

<style scoped>


    .carImage {
        width: 300px;
        height: 300px;
        text-align: center;

    }

    .my-container {
        display: inline-block;
        /*display: grid;*/
        text-align: center;
        margin: auto;;
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

    .bg-secondary {
        margin-left: 25%;
        margin-top: 5px;
    }

    .carSelector {
        width: 50px;
        height: 10px;
        border-radius: 25px;
    }

    .form-select {
        width: 140px;
        border-radius: 25px;
    }

    .form-select > option {
        border-radius: 25px;
    }

</style>