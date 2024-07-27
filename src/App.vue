<template>
  <div class="min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
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
                    :class="['px-4 py-2 rounded-lg transition', currentPage === 'bio' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100']">
              个人简介
            </button>
          </li>
          <li>
            <button @click="currentPage = 'friends'"
                    :class="['px-4 py-2 rounded-lg transition', currentPage === 'friends' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100']">
              友情链接
            </button>
          </li>
        </ul>
      </nav>

      <main class="bg-white bg-opacity-75 rounded-lg shadow-lg p-6">
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

      <footer class="mt-8 text-center text-white text-sm">
        <p>ICP备案号：<a href="https://beian.miit.gov.cn/">京ICP备2021027219-1号</a> <br> 萌备案号（非正式）：<a
            href="https://icp.gov.moe/?keyword=20210822">萌ICP备20210822号</a></p>
      </footer>
    </div>
  </div>
</template>

<script>
import friendsData from './friends.json';
export default {
  data() {
    return {
      backgroundImage: 'https://cos-furry-img.zsq001.cn/zsq001/pic-3.jpg',
      avatar: 'https://cos-furry-img.zsq001.cn/zsq001/5cbe91006081920.jpg',
      nickname: '灰狐GrayFox',
      bio: '大四鸽子 / BYR-Team <br>' +
          '一只furry <br>' +
          '各种意义上的萌新 <br>' +
          '欢迎各位来扩列>w<',
      friends: friendsData,
      currentPage: 'bio'
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
