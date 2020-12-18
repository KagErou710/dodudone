<template>
    
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    
        <title>DoDuDone</title>
      </head>
    

      <body style="background-color: rgba(0,100,75,0.5);">
        <v-bar wrapper="wrapper"
        vBar=""
        vBarInternal=""
        hBar=""
        hBarInternal="">
        <div style="padding-left:5%; padding-right:5%; background-color: rgba(0,100,75,0.959);">
            <nav class="navbar navbar-expand navbar-light justify-content-center">
              <a class="navbar-brand mb-0 h1" href="#">
                  <img src="https://user-images.githubusercontent.com/56529285/102575258-62ac8180-4125-11eb-8701-06175cc9adc3.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
                  DoDuDone
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse justify-content-center navbar-collapse " id="navbarSupportedContent">
                <ul class="nav justify-content-center navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Collection</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Profile</a>
                  </li>
                  
                </ul>
              </div>
            </nav>
        </div>
    
        
    <!--div style="height: 100%; background-color: rgba(255,0,0,0.1);"-->
      <div class="mh-100" style="padding-left:5%; padding-right:5%;"></div>
    
        <br>
            <header class="nav justify-content-center">
                <div class="shadow-sm p-3 mb-5 bg-white rounded">
                    <h1>result</h1>
                </div>
            </header>
        <div>
        <div class="container">
        <div class="row mb-3">
        <div class='col-4' v-for="p in like" :key="p">
            <!-- <v-img :src="this.like[0]"></v-img> originally it was <img src="url"> -->
            <!-- <v-img :src="url1"></v-img> -->
            <!--<button class="btn" v-on:click="jump_detail">Choose this!</button> -->
            <div class="mb-2">
            <b-card
            :title=p.name
            :img-src=p.url
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            
            >
              <b-button v-on:click="jump_detail(p)" variant="success">Choose this!</b-button>
            </b-card>
            </div>
        </div>
    
        <div class='col-sm'></div>
            
      </div>
    
        </div>
        </div>
        <div class='btn btn-danger btn-lg btn-block' 
            style="background-color: greenyellow;"
             v-on:click="jump_home">back to home</div>
        </v-bar>
         </body>
        </html>
        
        
    
        
</template>
    
<script>
    import store from '../store/index.js';
    import VBar from 'v-bar'
    
    export default {
        data() {
            return {
                name: 'result',
                props: {
                    data: String,
                    msg: String,
                },
                is_login: 0,
                like: store.state.like,
            }
        },
        components:{VBar},
        methods: {
            jump_detail(p) {
                store.commit('place_detail_save',p);
                this.$router.push('/shop_detail')
            },
            jump_home() {
            this.$router.push('/home2')
        }
        }
    }
    
    

</script>


<style>

    .wrapper {
        height: 700px;
        
    }

</style>