<template>
    
    <html>
  <head>
      
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <title>DoDuDone</title>
  </head>


  <body>
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


    
<div style="padding-left:5%; padding-right:5%; background-color: rgba(0,100,75,0.5);">
    <br>
    <header class="nav justify-content-center" >
            <div class="shadow-sm p-3 mb-5 rounded" style="padding-left:50%; padding-right:50%; background-color: rgba(300,300,300);">
                <h1>Store Name</h1>
            </div>
    </header>
   
    <div class="shadow-sm p-3 mb-5 bg-white rounded" style="padding-left:5%; padding-right:5%; background-color: rgba(300,300,300);">
    
   
              <h4>{{place_detail.name}}</h4>
              <img :src="place_detail.url" class="d-block w-50">
            
        <br>
        <br>

        
        <dl class="row">
              <dt>Description</dt>
              <br>
              
        </dl>
        <p>{{place_detail.description}}</p>

        <dl class="row">
          <dt>Open-Close : </dt>
          <p>{{place_detail.opcl}}</p>
        </dl>

        <dl class="row">
          <dt>location : </dt>
          <p>{{place_detail.location}}</p>
        </dl>

        <dl class="row">
          <dt>Phone number : </dt>
          <p>{{place_detail.phone}}</p>
        </dl>

        <dl class="row">
          <dt>Starting price : </dt>
          <p>{{place_detail.price}}</p>
        </dl>

        <dl class="row">
          <dt>Recommendation or Notice : </dt>
          <p>{{place_detail.recommendation}}</p>
        </dl>



        <dl class="row">
            <dt>Rate</dt>
            <img :src="place_detail.rate" >
            <br>
  
        </dl>

        <div class='btn btn-danger btn-lg btn-block' 
            style="background-color: greenyellow;"
             v-on:click="jump_home">back to home</div>
        
        


    </div>
    <br>
</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
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
            name: 'home',
            props: {
                data: String,
                msg: String
            },
            is_login: 0,
            like: store.state.like,
            place_detail: store.state.place_detail
        }
    },
    components:{VBar},
    methods: {
        jump_home() {
            this.$router.push('/promotion')
        }

        
    }
}

</script>

<style>
  *{
    color: black;
  }

    .wrapper {
        height: 650px;
        
    }

</style>
