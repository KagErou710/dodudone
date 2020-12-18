<template>
    


<body>
<section class="header">
    <div class="menu-bar">
  <ul>
    <li class="active"><a href="#">Home</a><i class="fa fa-home" aria-hidden="true"></i> </li>
    <li><a href="#">Services</a><i class="fa fa-gratipay" aria-hidden="true"></i></li>
    <li><a v-on:click="jump_promo">Promotion</a><i class="fa fa-tag" aria-hidden="true"></i></li>
    <li><a href="#">Account</a><i class="fa fa-user-circle" aria-hidden="true"></i></li>
    <li><a href="#">Contact</a><i class="fa fa-phone" aria-hidden="true"></i></li>
  </ul>
    </div>
<h1> DO DU DONE</h1>
  <p>Give your life more choices</p>
  <div>
    <input type="text" class="form-control" placeholder="Where are you?">
    
    
    <div class="row align-items-center justify-content-center">
    <div>
      <button type="submit" class="input-group-text btn" v-on:click="jump_search">Search</button>
    </div>
    </div>
    
    
  </div>
</section>
<section class="features">
  <h1>Featured Destination</h1>
  <div class="container">
    <div class="row">
      
      <div class="features-box">
      <div class="features-img">
      <div class="col-md-2">
      <div class="where">
        <p>BTS SIAM(BKK)</p>
        
      </div>
      </div>
      <div class="col-md-10">
        <div class="features-details">
        <h4>Central World</h4>
        <p>Central World is a shopping plaza and complex in Bangkok, Thailand.[5] It is the eleventh largest shopping complex in the world. The complex, which includes a hotel and office tower, is owned by Central Pattana. In 2006, after three years of design and renovation</p>
      </div>
      </div>
      </div>
      </div>
      

    </div>
  </div>

</section>
</body>
    
</template>

<script>
import { db } from '../firebaseDb.js';
import store from '../store/index.js';

window.onload = function() {
    //considering there aren't any hashes in the urls already
    if(!window.location.hash) {
        //setting window location
        window.location = window.location + '#loaded';
        //using reload() method to reload web page
        window.location.reload();
    }
}
export default {
    data() {
        return {
            name: 'home',
            props: {
                data: String,
                msg: String
            },
            is_login: 0,
        }
    },
    methods: {
        async jump_search() {
            let place = []
            const placeRef = db.collection('place');
            const snapshot = await placeRef.get();
            snapshot.forEach(doc => {
                place.push({
                        url: doc.data().url,
                        name: doc.data().name,
                        description: doc.data().description,
                        rate: doc.data().rate,
                        opcl: doc.data().open_close,
                        location: doc.data().location,
                        phone: doc.data().phone,
                        price: doc.data().price,
                        recommendation: doc.data().recommendation
                    })
            });
            console.log(place)
            store.commit('place_save',place);
            this.$router.push('/swipe')
        },
        jump_promo(){
          this.$router.push('/promotion')
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
  color: antiquewhite;
}
body
{
  background-image: url("https://user-images.githubusercontent.com/56529285/102439529-024c1000-4051-11eb-81fb-595b17ba1ba1.jpg");
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
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

/*.menu-bar .fa*/
/*{*/
/*  margin-right: 10px;*/
/*}*/

/*head DO DU DOONE*/


.header h1
{
  padding-top: 260px;
  padding-bottom: 0;
  font-size: 55px;
}



.header p
{
  margin: 18px 0;
}
.input-group
{
  width: 90%;
  max-width: 500px;
  border-radius: 30px;
  background: #fff;
  margin: auto;
  padding: 2px;
}
/*click search*/
.form-control
{
  border: 0 !important;
  border-radius: 30px !important;
  margin: 2px;
  box-shadow: none !important;
}
.input-group-text
{
  width: 100px;
  background-image: linear-gradient(#2bab0d,#1f3d90);
  border: 0 !important;
  color: #ffffff !important;
  padding: 0 25px !important;
  border-radius: 30px !important;
  box-shadow: none !important;
}
/*featured of this*/
.features
{
  padding: 300px 0;
}
h1
{
  text-align: center;
  padding-bottom: 100px;
}
.features-img img
{
  width: 25%;
}
.where
{
  width: 100px;
  height: 100px;
  background: #ff5722;
  color: white;
  font-weight: 700;
  border-radius: 100%;
  padding: 30px;
  box-shadow: 0 0 10px 1px rgba(37,73,214,0.18);
  position: center;
  left: 60px;
  bottom: -50px;
  float: left;
}
.price
{
  width: 50px;
  height: 50px;
  background: #ff5722;
  color: #fff;
  font-weight: 600;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px 1px rgba(37,73,214,0.18);
  position: absolute;
}
.features-img
{
  position: relative;
}
.rating
{
  padding: 20px;
  float: right;
  background: #fff;
  bottom: -1px;
  right: 0;
  position: absolute;
}
.features .fa
{
  font-size: 15px;
  color: #ff5722;
}
.features-details
{
  padding: 20px;
  text-align: justify;
}
</style>
