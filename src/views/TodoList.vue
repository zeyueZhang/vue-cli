<template>
  <div class="todoList">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <span>添加列表项:</span>
      <input class="inputBox" type="text" v-model="itemMsg" v-on:keyup.enter="addNew"/>
    </div>
    <List v-bind:list="list"/>
  </div>
</template>

<script>
  import List from '@/components/List.vue'
  import {mapState, mapActions} from 'vuex'
  
  export default {
    name: 'todoList',
    components: {
      List
    },
    data: function() {
      return {
        itemMsg: ''
      }
    },
    methods: {
      ...mapActions('todoList', ['addListItemStatus']),
      addNew() {
        this.addListItemStatus(this.itemMsg)
        this.itemMsg = null
      }
    },
    computed: mapState('todoList', {
      list: state => state.list
    })
  }
</script>

<style lang="stylus">
  .inputBox
    width 100px
    height 20px
    border 1px solid #000
</style>

