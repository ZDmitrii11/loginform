<template>
    <div>
        <div class="app-exange">
        <h1>Exchange Calculator:</h1>
        <hr>
        <div class="app-card">
            <div class="app-form">
                <div class="amount">
                    <label class="form-label">Amount:</label>
                    <div class="form-group">
                        <input type="text" @input="checkNum" :value="inputValue" maxlength="10">

                    </div>
                </div>
            </div>


            <div class="currency-group">
                <div class="form-group">
                    <label>From:</label>
                    <div class="selected-option">
                        <button>
                            <span>{{eur}}</span>
                        </button>
                    </div>
                </div>
                <div class="replace">
                    <button @click="changeRate"><i style="font-size:24px" class="fa">&#xf0ec;</i></button>
                </div>
                <div class="form-group">
                    <label>From:</label>
                    <div class="selected-option">

                        <button>
                            {{usd}}
                            <!--                            <select v-model="usd" >-->
                            <!--                                <option v-for="(select,ind) in currency" :key="ind" :value="ind">-->
                            <!--                                    <button>{{ind}}</button>-->
                            <!--                                </option>-->
                            <!--                            </select>-->
                        </button>
                    </div>
                </div>
                <hr>

                <div class="convert-result">
                    <h1>{{inputValue}}{{eur}}</h1>
                    <span class="result-span">=</span>
                    <div class="result">

                        <h1>{{result}}</h1>
                        <h1>{{usd}}</h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>



</template>

<script>

    import axios from 'axios'

    export default {
        name: 'App',
        data() {
            return {
                inputValue: null,
                eur: null,
                usd: null,
                base: null,
                currency: null,
                result: 0,

            }
        },
        mounted() {
            axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=ff13edbb4ea1f97f698fb6c31baa1842&symbols=USD,AUD,CAD,PLN,MXN&format=1')
                .then((res) => {
                    this.eur = res.data.base
                    let ex = res.data.rates
                    let usd = Object.keys(ex)[0]
                    this.usd = usd
                    this.currency = res.data.rates.USD

                })



        },


        methods: {
            checkNum(e) {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                this.inputValue = e.target.value



                if (this.inputValue !== ' ' && this.eur === 'EUR') {
                    this.result = this.inputValue*this.currency
                }
                if (this.inputValue !== ' ' && this.eur === 'USD') {
                    this.result = this.inputValue / this.currency
                    this.currency = this.inputValue / this.currency
                }



            },
            changeRate() {
                if (this.eur === 'EUR') {
                    [this.eur, this.usd] = [this.usd, this.eur]
                    this.result = this.inputValue / this.currency


                    this.eur = 'USD'
                } else if (this.eur === 'USD') {
                    [this.usd, this.eur] = [this.eur, this.usd]
                    this.result = this.inputValue * this.currency
                    this.eur = 'EUR'
                }
            }
        }


    }
</script>

<style>
    .app-exange {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        width: 300px;
        height: 300px;
        background-color:#ce0864 ;
    }



    div {
        display: block;
    }

    .app-card {
        margin: auto;
        width: 300px;
        min-height: 300px;
        background-color: #fff;
        border-radius: 10px;
        padding: 30px;
        /*box-shadow: 0 20px 20px rgb(0 0 0  30%);*/

    }
    .select{
        outline: none;
    }

    .app-form .form-label {
        display: block;
        font-size: 25px;
        color: gray;
        margin-bottom: 5px;;
    }

    .form-group > input {
        outline: none;
        border-radius: 20px;
        width: 300px;
        height: 40px;
        font-size: 45px;
    }

    .app-form .currency-group {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .selected-option > button {
        width: 100px;
        height: 50px;
        border-radius: 25px;
    }

    .replace {
        width: 30px;
        height: 30px;
        border-radius: 25px;
        margin: auto;
        padding: 2rem;
    }

    .currency-group {
        font-size: 25px;
    }

    .conversion-result-wrapper {
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>
