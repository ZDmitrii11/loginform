<template>
    <div id="app">
        <div class="header">

            <div class="header-container">
                <button class="btn btn-secondary btn-lg" @click="homePage">Home Page</button>
                <button class="btn btn-secondary btn-lg" >Register</button>
                <button class="btn btn-secondary btn-lg" style="background-color: white" ><router-link to="/Favorits">ToFavorits</router-link></button>


            <div class="logo">
                <button  v-if="!this.getToken" id="login" variant="success" @click="Login">LOGIN:</button>
                <button  v-if="this.getToken" variant="success" @click="logOut">Log Out</button>
            </div>
            <button @click="consToken">cccc</button>
        </div>
        </div>
        <router-view/>


    </div>
</template>

<script>

    import {mapGetters} from 'vuex'


    export default {

        name: 'App',
        components: {},
        data() {
            return {
                name: '',

            }
        },
        computed: {
            ...mapGetters(['getInventory','getToken']),

        },
        created() {

        },

        methods: {
            homePage() {
               if (this.$router.currentRoute.path !== '/main'){
                   this.$router.push('/main')
               }
            },


            logOut() {
              this.$store.commit('setToken',null)
              localStorage.removeItem('token')
            },

            Login() {
                if (this.$router.currentRoute.path !== '/login') {
                    this.$router.push('/login')
                }
            },
            consToken(){
                console.log(this.getToken)
            }

        },

    }
</script>

<style>
    #app {
        background-color: snow;
    }

    body {
        padding: 0;
        margin: 0;

    }


    .header {
        background-color: #4CAF50;
        width: 100%;
        height: 100px;
        text-align: center;
        display: flex;
        margin-bottom: 10px;

    }

    .textHeader {
        color: white;
        padding: 2rem;
    }

    /*#logOut{*/
    /*    width: 50px;*/
    /*    height: 50px;*/
    /*    float: right;*/
    /*}*/

    .logo {
        width: 300px;
        height: 200px;
        float: right;

    }

    .logo > button {
        background-color: darkgoldenrod;
        float: right;
    }

    /*button {*/
    /*   */

    /*}*/


    /*button:hover {*/
    /*    background-color: brown;*/
    /*}*/

    .header-button {
        margin: auto;
    }



</style>
