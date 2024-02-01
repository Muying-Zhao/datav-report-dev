<!-- 水球图 -->
<template>
    <div id="container"></div>
</template>
<script>
/* eslint-disable */
export default {
    mounted() {
        // 注意data中数据得从小到大排列
        const data = [0.75,{
            value: 0.5,
            direction: 'left' //波浪左滑
        },0.4,{
            value:0.3,
            itemStyle: {
                opacity: 0.5
            },
            emphasis: {
                itemStyle: {
                    opacity: 0.9
                },
            }
        }]
        const chart = this.$echarts.init(document.getElementById('container'))
        chart.setOption({
            series: [{
                type: 'liquidFill',
                data,
                color: ['red','blue','purple','yellow'],
                itemStyle:{
                    opacity:0.5
                },
                emphasis:{
                    itemStyle: {
                        opacity: 0.6
                    },
                },
                // waveAnimation:false,// 波浪禁止
                // animationDuration:0,
                // animationDurationUpdate:0 ,
                amplitude:10, // 波浪的振幅
                backgroundStyle: {
                    color: 'purple',
                    borderWidth:4,
                    borderColor: '#333'
                },
                // 外层轮廓
                outline: {
                    show:true,
                    borderDistance: 2,
                    itemStyle: {
                        borderWidth: 10,
                        borderColor: 'pink',
                        shadowBlur: 'none'
                    }
                },
                // 'circle', 'rect', "roundRect', 'triangle', 'diamond', 'pin' , 'arrow' 
                //diamond菱形
                //rect 矩形
                //trigger 三角形
                shape: 'diamond'
            }]
        })
    }
}
</script>
<style lang="scss" scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>