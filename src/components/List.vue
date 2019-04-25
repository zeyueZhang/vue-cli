<template>
  <ul>
    <li class="listItem" v-for="(item, index) in list" :key="index">
      <span class="msg">{{item.message}}</span>
      <button class="btn" @click="delItem(index)">删除</button>
    </li>
  </ul>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'List',
    props: {
      list: Array
    },
    methods: {
      ...mapActions('todoList', ['delListItemStatus']),
      delItem(index) {
        this.delListItemStatus(index)
      }
    }
  }
</script>

<style lang="stylus">
  .listItem
    margin-top 10px
    margin-bottom 5px
    .msg
      color red
      padding-right 5px
    .btn
      width 60px
      height 20px
      text-align center
      line-height 20px
      background skyblue
</style>
