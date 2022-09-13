import { createRouter, createWebHistory } from 'vue-router';
// 모든 vue 에서 router(링크 기능)를 사용하기 위해 export 해놓음.
// router 라는 객체에 기능을 담아 놓음.
const router = createRouter({
  // 웹브라우저 주소창의 내용을 깨끗하게 (#안보이게)
  history: createWebHistory(),
  // ex. {path: '/home', name: 'Home', component: HomeView}
  // ex. {path: '/goods', name: 'Goods', component: GoodsView}
  routes: []
});

// 본 데이터를 꺼내 쓸 수 있도록 내보내기
export default router;