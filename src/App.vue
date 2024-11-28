<template>
  <div class="relative min-h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 container mx-auto px-4 py-8">
      <header class=" mb-8 text-center">
        <img :src="avatar" alt="头像" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg">
        <h1 class="text-4xl font-bold text-white shadow-text">{{ nickname }}</h1>
      </header>

      <nav class="mb-8">
        <ul class="flex justify-center space-x-4">
          <li>
            <button @click="currentPage = 'bio'"
                    :class="['px-4 py-2 rounded-lg transition', currentPage === 'bio' ? 'bg-blue-500 text-white' : 'bg-[rgba(255,255,255,0.8)] text-blue-500 hover:bg-[rgba(255,255,255,0.9)]']">
              个人简介
            </button>
          </li>
          <li>
            <button @click="currentPage = 'friends'"
                    :class="['px-4 py-2 rounded-lg transition', currentPage === 'friends' ? 'bg-blue-500 text-white' : 'bg-[rgba(255,255,255,0.8)] text-blue-500 hover:bg-[rgba(255,255,255,0.9)]']">
              友情链接
            </button>
          </li>
        </ul>
      </nav>

      <main class="bg-white bg-opacity-75 rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
        <transition name="fade" mode="out-in">
          <section v-if="currentPage === 'bio'" key="bio">
            <h2 class="text-2xl font-semibold mb-4">个人简介</h2>
            <p class="text-gray-700 bio-text" v-html="bio"></p>
          </section>

          <section v-else-if="currentPage === 'friends'" key="friends">
            <h2 class="text-2xl font-semibold mb-4">友情链接（顺序不分先后）</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li v-for="friend in friends" :key="friend.id"
                  class="bg-gray-100 rounded-lg p-4 hover:shadow-md transition flex flex-col items-start">
                <a :href="friend.url" class="flex flex-col items-start p-4 h-full w-full block rounded-lg" target="_blank">
                  <div class="flex items-center">
                    <img :src="friend.avatarUrl" alt="友链头像" class="w-12 h-12 rounded-full mr-4">
                    <div><p>{{ friend.name }}</p>
                      <p class="text-gray-500 text-sm mt-1">{{ friend.description }}</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </transition>
      </main>

      <footer class="mt-8 space-x-3 text-center text-white text-sm">
        <a href="https://gfurl.cc/gh" target="_blank" class="text-white-400 hover:text-gray-300">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a href="https://gfurl.cc/bili" target="_blank" class="text-white-400 hover:text-gray-300">
          <i class="fab fa-bilibili fa-2x"></i>
        </a>
        <a href="https://gfurl.cc/x" target="_blank" class="text-white-400 hover:text-gray-300">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="mailto:zsq001@zsq001.cn" class="text-white-400 hover:text-gray-300">
          <i class="fas fa-envelope fa-2x"></i>
        </a>
        <p>ICP备案号：<a href="https://gfurl.cc/icp">京ICP备2021027219-1号</a> <br> 萌备案号（非正式）：<a
            href="https://icp.gov.moe/?keyword=20210822">萌ICP备20210822号</a></p>
      </footer>
    </div>

    <!-- User Card -->
<!--    <div v-if="user" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">-->
<!--      <div class="bg-white p-6 rounded-lg shadow-lg">-->
<!--        <h2 class="text-2xl font-semibold mb-4">{{ user }}，欢迎！</h2>-->
<!--        <button @click="user = null" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">关闭</button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { ElNotification } from 'element-plus'
export default {
  methods: {
    async fetchFriendsData() {
      try {
        const response = await fetch('https://cdn.zsq001.cn/others/friends.json');

        if (!response.ok) {
          ElNotification({
            title: 'Error',
            message: '网络请求失败',
            type: 'error',
          })
        }

        this.friends = await response.json();
        console.log(this.friends);
      } catch (error) {
        ElNotification({
          title: 'Error',
          message: '获取数据时出错:'+ error,
          type: 'error',
        })
      }
    },
    async fetchUserData(u) {
      try {
        const response = await fetch(`https://ifa.zsq001.cn/query?u=${u}`);

        if (response.status === 404) {
          ElNotification({
            title: 'Error',
            message: '用户未找到',
            type: 'error',
          })
        }else if (!response.ok) {
          ElNotification({
            title: 'Error',
            message: '网络请求失败',
            type: 'error',
          })
        }else {
          const data = await response.json();
          this.user = data.user;
          ElNotification({
            title: '欢迎',
            message: '欢迎 ' + this.user + ' !',
            type: 'success',
          })
        }

      } catch (error) {
        ElNotification({
          title: 'Error',
          message: '获取数据时出错:'+ error,
          type: 'error',
        })
      }
    }
  },
  async mounted() {
    await this.fetchFriendsData();

    const urlParams = new URLSearchParams(window.location.search);
    const u = urlParams.get('u');
    if (u) {
      await this.fetchUserData(u);
    }
  },
  data() {
    return {
      backgroundImage: 'https://cos-furry-img.zsq001.cn/zsq001/pic-3.jpg',
      avatar: 'https://cos-furry-img.zsq001.cn/zsq001/5cbe91006081920.jpg',
      nickname: '灰狐GrayFox',
      bio: '大四鸽子 / BYR-Team <br>' +
          '一只furry <br>' +
          '各种意义上的萌新 <br>' +
          '欢迎各位来扩列>w<',
      friends: null,
      currentPage: 'bio',
      user: null,
    };
  },
};
</script>

<style>
.shadow-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.bio-text {
  line-height: 2.6; /* 调整此处的数值以改变行间距 */
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-start {
  align-items: flex-start;
}

.mr-4 {
  margin-right: 1rem;
}
</style>
