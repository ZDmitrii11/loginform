<template>
    <div class="my-container">
        <h3><span>Please Login : </span></h3>
        <div class="my-loginContainer">
            <form @submit.prevent="">

                <div class="inputClass">
                    <label>E-Mail:</label>
                    <input type="text" v-model="emailInput" placeholder="E-mail">
                </div>

                <div class="inputClass">
                    <label>Password:</label>
                    <input type="text" v-model="passwordInp" placeholder="password"/>


                </div>
                <button class="my-hello" @click="Login">Login</button>

            </form>
            <div v-show="isActive" class="error">
                <h3>Password or Mail Incorect</h3>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                emailInput: '',
                passwordInp: '',
                isActive:false
            }
        },
        computed: {
            ...mapGetters(['getToken'])
        },
        methods: {
            Login() {
                this.$store.commit('currentUser', [this.emailInput, this.passwordInp])
                this.$store.dispatch('Token', ['https://reqres.in/api/login', this.emailInput, this.passwordInp])
                if (localStorage.getItem('token')){
                    this.$router.push('/main')
                    this.isActive = false

                }
                else {
                    this.isActive = true
                }

            },

        },

    }

</script>
r
<style scoped>

    .my-container {
        width: 250px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: auto;
        background-color: #3A81C8;
        border-radius: 25px;

        text-align: center;

    }

    .inputClass {
        color: white;
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 150px;

        align-self: center;
    }

    .my-loginContainer {
        width: auto;
        height: auto;
        margin: auto;
        border-radius: 25px;


    }

    button {
        position: relative;
        background-color: #4CAF50;
        border: none;
        font-size: 10px;
        margin: 2px;
        color: #FFFFFF;
        padding: 20px;
        width: 225px;
        height: 100px;
        text-align: center;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        text-decoration: none;
        overflow: hidden;
        cursor: pointer;


    }

    button:after {
        content: "";
        background: #90EE90;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px !important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
    }

    button:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }
    .error {
        background-color: black;
        color: red;
        margin: auto;
        padding: 2rem;
    }

    .my-container > form > button {
        width: 150px;
        margin: 25px;
        padding: 2rem;
        text-decoration: none;
    }

</style>