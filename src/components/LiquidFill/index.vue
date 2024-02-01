<!-- 水球图 -->
<template>
    <ve-liquidfill :data="chartData" height="100%"
    :settings="chartSettings"></ve-liquidfill>
</template>
<script>
// import 'echarts-liquidfill'
function getColor(value) {
    // console.log(value)
    return value >0 && value <=0.5?'rgba(97,216,0,.7)'
    :value >0.5 && value<= 0.8 ? 'rgba(204,178,26.7)'
    :value>0.8?'rgba(241,47,28,.7)':'#c7c7cb'
}
export default {
     data(){
        return {
            chartData: {
                // 传入时一定需要两个数据
                columns: ['title','percent'],
                rows: [{
                    title:'rate',
                    percent: 0.385
                }]
            },
            chartSettings:{}
        }
     },
    //  等data渲染完后再执行，不然chartSettings调用chartData获取的为undefined
     mounted() {
        this.chartSettings={
            seriesMap: {
                rate: {
                    radius: '80%',
                    label: {
                        formatter: (v) => {
                            // console.log(v)
                            // Math.floor将其变成一个整数
                            return `${Math.floor(v.data.value * 100)}%`
                        },
                        textStyle: {
                            fonsSize: 36,
                            color: '#999',
                            fontWeight: 'normal'
                        },
                        position: ['50%', '50%'],
                        insideColor: '#fff' //与标签重叠部分现实的颜色
                    },
                    outline: {
                        itemStyle: {
                            borderColor: '#aaa4a4',
                            borderWidth: 1,
                            color: 'none',
                            shadowBlur: 0,
                            shadowColor: '#fff'
                        },
                        borderDistance: 0
                    },
                    backgroundStyle: {
                        color: '#fff'
                    },
                    itemStyle: {
                        shadowBlur: 0,
                        shadowColor: '#fff'
                    },
                    amplitude: 8,
                    color: [getColor(this.chartData.rows[0].percent)]
                }
            }
        }
     }
}
</script>
<style lang="scss" scoped>
#container{
    width: 100%;
    height: 100%; 
}
</style>