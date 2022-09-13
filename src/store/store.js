import { createStore } from 'vuex';
// 모든 vue 화면에서 공유될 state(데이터) 관리하는 목적

import axios from 'axios';

export default createStore({
  state: {
    menuData: []
  },
  actions: {
    // 메뉴 데이터 json 로딩
    fetchMenuData({commit}){
      // ▼ 외부에 있는 'data.json' 파일을 불러온다.
      axios.get('./data/menu.json')
      .then(response => {
        // ▼ fetchMenuData(context)로 시작했으면 context.commit();
        commit('MENU_DATA_INIT', response.data);
      }).catch(err => console.log(err));
    }
  },
  mutations: {
    MENU_DATA_INIT(state, payload){
      state.menuData = payload
    }
  },
  getters: {
    getMenuData(state){
      return state.menuData;
    }
  }
})