<template>
    <div>
        <h1>{{addr}}</h1>
    </div>
</template>
<script>
    export default {
        name:"shops",
        data(){

        },
        computed:{
            addr(){
                return this.$store.state.ShoppingAddress
            }
        }
    }
</script>
<style scoped>

</style>
