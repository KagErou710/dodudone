<template>


<body>
   <v-bar wrapper="wrapper"
        vBar=""
        vBarInternal=""
        hBar=""
        hBarInternal="">
  <head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" >

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <title>DoDuDone</title>
  </head>


  


    <div>
    <div class="menu-bar">
  <ul>
    <li><a v-on:click="jump_home">Home</a><i class="fa fa-home" aria-hidden="true"></i> </li>
    <li><a href="#">Services</a><i class="fa fa-gratipay" aria-hidden="true"></i></li>
    <li class="active"><a href="#">Promotion</a><i class="fa fa-tag" aria-hidden="true"></i></li>
    <li><a href="#">Account</a><i class="fa fa-user-circle" aria-hidden="true"></i></li>
    <li><a href="#">Contact</a><i class="fa fa-phone" aria-hidden="true"></i></li>
  </ul>
    </div>





<div style="padding-left:5%; padding-right:5%; padding-bottom:10%; background-color: rgba(0,100,75,0.5);">
    <br><br>
    <br><br>
    <header class="nav justify-content-center" >
            <div class="shadow-sm p-3 mb-5 rounded" style="padding-left:50%; padding-right:50%; background-color: white;">
                <h1>Pomotions</h1>
            </div>
    </header>
   
<div class="shadow-sm p-3 mb-5 bg-white rounded" style="padding-left:50%; padding-right:50%;  background-color: rgba(300,300,300);">
  <br>

   
      
        
          <img src="https://i.pinimg.com/736x/72/5f/33/725f330ce6edcaf6b4606fa3825f72dc.jpg" class="d-block w-20" alt="...">
        
        
          <img src="https://images.thrillophilia.com/image/upload/s--6ZtyeZXC--/c_fill,f_auto,fl_strip_profile,h_380,q_auto,w_604/v1/attractions/images/000/003/731/original/1551940266_thai_card2.png.jpg?1551940266" class="d-block w-30" alt="...">
        
        
          <img src="https://lh3.googleusercontent.com/proxy/P9pImK_oUlT36RjvzV1MWQK8s_58VjsK8v4BlXgrBfBw6r4jvlM3pTeShH_8ZbB2OuocRvmzpp2IFeKwVho3TPgKERj3pFcCoD0duiE1FHgXmw" class="d-block w-30">
        
        
          <img src="https://lh3.googleusercontent.com/proxy/PwIo7P1Z6K3oJbTwff_145Qbe6TtzofllKVrpF_hBwiJtFo4QI27NJCiL1-atJ13j6iRurvPsZsW4Qz82gWk6YG4cDWRdc709LftFp2Yiw" class="d-block w-30">
                
      

    
    <br>
    <br>


  
    <div style="padding-left:10%; padding-right:10%">
      <h5>Package Tour</h5>
      <p>
        Premium member - receive discount 10 % for this spacial offer when complete collecting Premium points.
        </p>
      <p>
        Common member - discount 5% if you invite at least 20 friends to join us. 
        </p>

  

</div>
<br>
<br>
</div>
</div>
</div>
   </v-bar>
</body>

   

</template>

<script>

import VBar from 'v-bar'
export default {
    data() {
        return {
            name: 'promotion',
            props: {
                data: String,
                msg: String
            },
            is_login: 0
        }
    },
    components:{VBar},
    methods: {
        jump_home() {
            this.$router.push('/home2')
    }
    
}
}
</script>

<style>

*
{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  color: rgb(66, 66, 66);
}
body
{
  background-image: url("");
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
}
h1{
  font-family: Marker Felt;
}
.menu-bar
{
  background: rgb(0, 100, 75, 0.959);
  text-align: center;
}
.menu-bar ul
{
  display: inline-flex;
  list-style: none;
  color: antiquewhite;
}
.menu-bar ul li
{
  width: 120px;
  margin: 15px;
  padding: 15px;
}
.menu-bar ul li a
{
  text-decoration: none;
  color: white;
}
.active, .menu-bar ul li:hover
{
  background: #18ccaef1;
  border-radius: 3px;
}

.wrapper {
        height: 650px;
        
    }

</style>