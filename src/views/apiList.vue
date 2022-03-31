<template>
    <div class="mainPage-Wrapper">
        <div class="apiList-Wrapper">
            <table>
                <thead>
                <tr>
                    <th>交易码</th>
                    <th>返回Json</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <template class="row-wrapper" v-for="key in tableData">
                    <tr :key="key.hycode">
                        <td>{{key.hycode}}</td>
                        <td class="jsonBlock">
                            <el-input
                                    :disabled="!key.editing"
                                    :rows="4"
                                    placeholder="请输入内容"
                                    type="textarea"
                                    v-model="key.json"
                            >
                            </el-input>
                        </td>
                        <td>
                            <el-button @click="changeEdit(key)" type="text">{{key.editing?"取消":"修改"}}</el-button>
                            <el-button @click="saveEdit(key)" type="text" v-show="key.editing">保存</el-button>
                            <el-button @click="deleteKeyEv(key)" type="text">删除</el-button>
                        </td>
                    </tr>
                    <tr :key="key.hycode+'jsonParser'">
                        <td colspan="3">
                            <JsonParser :json-data="JSON.parse(key.json)"></JsonParser>
                        </td>
                    </tr>
                </template>
                <tr>
                    <td>
                        <el-input v-model="newKey.hycode"></el-input>
                    </td>
                    <td>
                        <el-input
                                :rows="4"
                                placeholder="请输入内容"
                                type="textarea"
                                v-model="newKey.json"
                        >
                        </el-input>
                    </td>
                    <td>
                        <el-button @click="addNewCode(newKey)" type="primary">增加新交易码</el-button>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
    import {addKV, changeKV, deleteKey, getApis} from '../api/index'
    import JsonParser from "./components/JsonParser";

    export default {
        name: 'apiList',
        components: {JsonParser,},
        data() {
            return {
                jsonData: {},
                tableData: {},
                temp: "123",
                newKey: {hycode: "", json: ""}
            }
        },
        computed: {},
        methods: {
            addKV, getApis, changeKV, deleteKey,
            changeEdit(key) {
                key.editing = !key.editing;
            },
            saveEdit(key) {
                this.changeKV(key.hycode, JSON.parse(key.json)).then(() => {
                    this.changeEdit(key)
                })
            },
            async addNewCode(key) {
                this.addKV(key.hycode, JSON.parse(key.json))
            },
            deleteKeyEv(key) {
                this.deleteKey(key.hycode);
            },
            getTableData() {
                for (const key in this.jsonData) {
                    if (Object.hasOwnProperty.call(this.jsonData, key)) {
                        const element = this.jsonData[key];
                        this.$set(this.tableData, key, {hycode: key, json: JSON.stringify(element), editing: false});
                    }
                }
            },
        },
        mounted() {
            this.getApis().then(
                v => {
                    this.jsonData = v.data.dbData;
                    this.getTableData()
                }
            ).catch(e => this.$message.error(e));
        },
    }
</script>

<style lang='scss' scoped>
    .mainPage-Wrapper {
        margin: 10px;

        & .apiList-Wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;

            & td {
                width: 300px;
            }

            & td.jsonBlock {
                width: 800px;
            }
        }

        .parser-Wrapper {
            justify-content: center;
            display: flex;
            min-width: 100px;
        }
    }
</style>
