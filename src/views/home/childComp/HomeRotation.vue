<template>
<<<<<<< HEAD
    <rotation :interval = "3000" :showIndicator = "true" divID="bannerBox">
=======
    <rotation :interval = "1000" :showIndicator = "true" divID="bannerBox">
>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
        <rotation-item v-for="(item,index) in cbanners" :key="index">
            <a :href="item.href">
                <img :src="path+bannerSrc+item.crs" />
            </a>
        </rotation-item>
    </rotation>
</template>

<script>
import Rotation from "components/common/rotation/Rotation";
import RotationItem from "components/common/rotation/RotationItem";
export default {
    name: "HomeRotation",
    components: {
        Rotation,
        RotationItem
    },
    props: {
        cbanners: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            path: "http://106.12.85.17:8090/",
            bannerSrc: "public/image/banner/"
        };
    }
};
</script>

<style scoped>
<<<<<<< HEAD
    #bannerBox a{
        display:block;
        margin:2% 3%;
        height:150px;
    }
    #bannerBox a img{
        border-radius:10px;
        width:100%;
        height:100%;
    }
=======

>>>>>>> 2ba4451510f6cca78672af6b7119b5e0daa39477
</style>