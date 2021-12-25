/*
 * @Author: zhilutianji
 * @Date: 2021-12-25 18:55:19
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-25 19:06:37
 * @Description: file content
 * @FilePath: \starlib_vue2_version\src\store\index.js
 */
import Vuex from 'vuex'
import Vue from 'vue'

//准备actions ---用于响应组件中的动作
const actions = {
    odd: function (context, value) {
        if (context.state.sum % 2) {
            context.commit('ODD', value)
        }

    },
    wait: function (context, value) {
        setTimeout(() => {
            context.commit('WAIT', value)
        }, 500);
    },
}


//准备mutations --用于操作数据（state)
const mutations = {
    JIA: function (state, value) {
        this.state.sum += value
    },
    JIAN: function (state, value) {
        this.state.sum -= value
    },
    ODD: function (state, value) {
        this.state.sum += value
    },
    WAIT: function (state, value) {
        this.state.sum += value
    },
    ADD_PERSON: function (state, value) {
        this.state.personList.push(value)
    }
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}


//准备state --用于存储数据

const state = {
    a: '多少分啊飞'
}

Vue.use(Vuex)
export default new Vuex.Store({
    actions, mutations, state, getters
})