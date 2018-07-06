<template>
    <div class="title">{{text}}</div>
</template>
<script>
export default {
    name : "Header",
    props : {
        text: String
    }
}
</script>
<style lang="less" scoped>
.title{
    margin: 0 2rem;
    padding: 2.5rem 0 1.4rem;
    font-size: 1.5rem;
    text-align: center;
    background: url(../../static/img/border-h.png) center bottom no-repeat;
    background-size: 100% 0.2rem;
    color: #fff;
}
</style>


