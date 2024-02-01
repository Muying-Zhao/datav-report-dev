<!-- 词云图 -->
<template>
    <div id="container"></div>
</template>
<script>
/* eslint-disable */
export default {
    mounted() {
        const data= [{
            name:'慕课网',
            value:100
        }, {
            name: '数据可视化',
            value: 50
        }, {
            name: 'Sam',
            value: 25
        }, {
            name: '慕慕到家',
            value: 150
        }, {
            name: 'music',
            value: 75
        }, {
            name: '小炑',
            value: 60
        }]
        const chart = this.$echarts.init(document.getElementById('container'))
        chart.setOption({
            series: [{
                type: 'wordCloud',
                data,
                // circle diamond
                shape: 'circle ',
                textStyle: {
                    normal: {
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        // 随机颜色
                        color: function () {
                            return 'rgb('+[
                                Math.round(Math.random()*160),
                                 Math.round(Math.random() * 160),
                                  Math.round(Math.random() * 160)
                            ].join(',')+')'
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                }
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