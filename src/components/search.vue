<template>
    <div>
    <h1>Search</h1>
    <div class='btn btn-danger btn-lg btn-block' 
            style="background-color: rgb(241, 109, 109);" 
             v-on:click="jump_searching">Let's search!</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'home',
            props: {
                data: String,
                msg: String
            },
            is_login: 0
        }
    },
    methods: {
        jump_searching() {
            this.$router.push('/swipe')
        }
        
    }
}

</script>