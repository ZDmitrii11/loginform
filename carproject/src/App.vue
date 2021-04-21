<template>
  <div id="app">
    <div class="header">
         <h2 class="textHeader">Hello To Our Web Site !</h2>
        <div class="header-button">
            <button @click="toRouter">Click To Login</button>
            <button @click="Login"> LOGIN: </button>
        </div>
    </div>

   <router-view/>




  </div>
</template>

<script>

    import {mapGetters} from 'vuex'

export default {

  name: 'App',
  components: {

  },
    data(){
      return {
          name:''
      }
    },
    mounted() {

    }
    ,computed:{
     ...mapGetters(['getInventory'])
    }
    ,methods:{
        toRouter(){
          if (this.$router.currentRoute.path!=='/cars'){
              this.$router.push('/cars')
          }
      },
        Login(){
           if (this.$router.currentRoute.path!=='/login'){
               this.$router.push('/login')
           }
        },
    }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }


  .header{
    background-color: #4CAF50;
      width: 100%;
     height: 100px;
      text-align: center;
      display: flex;
     margin-bottom: 10px;

  }
    .textHeader{
        color: white;
        padding: 2rem;
    }
    .header-button{
        margin-left: 0;
    }

</style>
