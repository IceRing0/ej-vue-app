import {get} from '../http/axios'
export default {
  namespaced:true,
  state:{
    orders:[]
  },
  mutations:{
    refreshOrder(state,orders){
      state.orders = orders;
    }
  },
  actions:{
    async findOrderByCustomerId(context){
      let response = await get("/order/query?customerId=1221650");
      context.commit("refreshOrder",response.data)
      return response
    }
  }
}