<!-- 词云图 -->
<template>
    <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>
<script>
/* eslint-disable */
export default {
    data() {
        return {
            chartData: {
                columns: ['name', 'value'],
                rows: [{
                    name: '慕课网',
                    value: 100*Math.random()
                }, {
                    name: '数据可视化',
                    value: 100 * Math.random()
                }, {
                    name: 'Sam',
                    value: 100 * Math.random()
                }, {
                    name: '慕慕到家',
                    value: 100 * Math.random()
                }, {
                    name: 'music',
                   value: 100 * Math.random()
                }, {
                    name: '小炑',
                    value: 100 * Math.random()
                }, {
                    name: '慕课网',
                    value: 100 * Math.random()
                }, {
                    name: '数据可视化',
                    value: 100 * Math.random()
                }, {
                    name: 'Sam',
                    value: 100 * Math.random()
                }, {
                    name: '慕慕到家',
                    value: 100 * Math.random()
                }, {
                    name: 'music',
                    value: 100 * Math.random()
                }, {
                    name: '小炑',
                    value: 100 * Math.random()
                }, {
                    name: '慕课网',
                    value: 100 * Math.random()
                }, {
                    name: '数据可视化',
                    value: 100 * Math.random()
                }, {
                    name: 'Sam',
                    value: 100 * Math.random()
                }, {
                    name: '慕慕到家',
                    value: 100 * Math.random()
                }, {
                    name: 'music',
                    value: 100 * Math.random()
                }, {
                    name: '小炑',
                    value: 100 * Math.random()
                }]
            },
            chartSettings:{
                color: ['rgba(97,216,0,.7)','rgba(204,178,26,.7) ','rgba(245,166,35,.7) ',
            'rgba(156,13,113,.7)']
            }
        }
    }
}
</script>
<style lang="scss" scoped></style>