<template>
    <div>
        支付页面
        
    </div>
</template>
<script>
    import {create_order} from "network/order"
    export default {
        name: "Order",
        data(){
            return{
                orderDate:{
                    user_id:"",
                    shopcarts_id:[]
                }
            }
        },
        commponents:{//组件

        },
         computed:{//计算

        },
        created(){//创建
            // this.shop = JSON.parse(this.$route.params.shop)
            create_order(13).then(res=>{
                console.log(res)
            })
        },
        activated(){//激活

        },
        decativated(){//未激活

        },
        mounted(){//渲染

        },
        methods:{//事件
            payment(){
                this.orderDate.user_id = this.$store.state.userInfo

                this.shop.forEach(item=>{
                    this.orderDate.shopcarts_id.push(item.id)
                })

                if(window.confirm('是否提交订单')){
                    create_order(this.orderDate).then(res=>{
                        console.log(res);
                        if(res.code != 200){
                            this.$router.push('/profile')
                        }
                        this.$router.push('/payment/'+res.data.order_id)
                    })
                }
            }
        }
    }
</script>
<style scoped>

</style>