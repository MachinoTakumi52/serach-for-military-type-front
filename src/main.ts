import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

import App from "@/App.vue";
import router from "@/router";
import vuetify from "@/vuetify";

// エラーハンドル
import { errorHandler } from "@/utils/errorHandler";

const pinia = createPinia();
//storeの状態管理を永続化(ページリロードしても消えないように)追加
pinia.use(createPersistedState());

const app = createApp(App);

app.use(pinia);
//ルーター追加
app.use(router);
//共通エラーハンドリング追加
app.use(errorHandler);
//vuetify追加
app.use(vuetify);

app.mount("#app");
