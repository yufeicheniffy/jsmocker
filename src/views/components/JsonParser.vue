<template>
    <div class="parser-Wrapper">
        <el-tree :data="JsonStructure" :props="defaultProps" @node-click="handleNodeClick">
             <span class="custom-tree-node" slot-scope="{ data }">
                 <span>{{ data.key }}</span>
<!--                 <input type="text" @focus="focusInput(data)" v-model="data.value">-->
                 <span class="jsonValue">{{ data.value}}</span>
             </span>
        </el-tree>
    </div>
</template>

<script>

export default {
  name: 'JsonParser',
  props:{
      jsonData:{
          required: true,
      }
  },
  components: {
  },
    data(){
      return{
          defaultProps:{
          children: 'children',
          label: 'key'
        },
      }
    },
    computed:{
      JsonStructure(){//tree structure of the jsonData
          let temp = [];
          addNode(temp,this.jsonData);
          function addNode(list,obj) {//add obj attributes to list
              let index = 0;
              for(let key in obj){
                  if((typeof obj[key])==="object"){
                      list[index]={key:key,value:typeof obj[key],children:[]}
                      addNode(list[index]["children"],obj[key]);
                  }else {
                      list[index]=  {key:key,value:obj[key]};
                  }
                  index++;
              }
              return list;
          }
          return temp;
      }
    },
    methods:{
      handleNodeClick(){
      },
        focusInput(data){
          console.log(data)
        }
    },
    mounted() {
    if(typeof (this.jsonData)!=="object"){
              let type = typeof (this.jsonData)
        this.jsonData = {[type]:this.jsonData} ;
      }
      console.log(this.JsonStructure)
    }
}
</script>
<style>
    .jsonValue{
        margin-left: 10px;
    }

</style>