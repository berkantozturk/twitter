<template>
  <v-card>
    <v-navigation-drawer>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            class="pp"
            :src="require('@/assets/pp.jpg')"
            alt="Profile Picture"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="username">
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>@{{ user.username }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item value="myfiles" class="list-item">
          <v-list-item-avatar>
            <v-img
              class="twitterLogo"
              :src="require('@/assets/twitter.png')"
              alt="Twitter Logo"
              title="Anasayfa"
              @click="goToHome"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item value="myfiles">
          <v-list-item-avatar>
            <v-img
              class="profileLogo"
              :src="require('@/assets/profile.png')"
              alt="Profil Logo"
              title="Profil"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item value="myfiles">
          <v-list-item-avatar>
            <v-img
              class="settingsLogo"
              :src="require('@/assets/settings.png')"
              alt="Ayarlar Logo"
              title="Ayarlar"
              @click="goToSettings"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <div class="container">
    <h2>Tweetler</h2>
    <div class="text-box-container">
      <v-textarea
        cols="10"
        rows="5"
        v-model="firstText"
        placeholder="Bugün nasılsın ?.."
      ></v-textarea>
      <img
        class="addTweetBtn"
        @click="addTweet()"
        :src="require('@/assets/new-tweet.png')"
      />
    </div>
  </div>
  <div v-for="(tweet, index) in tweets" :key="index">
    <div class="container">
      <div class="username">@{{ tweet.username }}</div>
      <textarea
        class="tweet"
        cols="100"
        rows="5"
        v-model="tweet.content"
        :disabled="index !== 0"
      ></textarea>
      <img
        class="deleteTweetBtn"
        @click="deleteTweet(index)"
        :src="require('@/assets/delete.png')"
        alt="Delete Tweet"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "",
        username: "",
        following: 120,
        followers: 300,
      },
      tweets: [],
    };
  },
  created() {
    this.loadUserData();
    this.loadTweets();
  },
  computed: {
    userTweets() {
      return this.tweets.filter(
        (tweet) => tweet.username === this.user.username
      );
    },
  },
  mounted() {
    this.getUserTweets();
  },
  methods: {
    getUserTweets() {
      this.userTweets = this.tweets.filter(
        (tweet) => tweet.username === this.user.username
      );
    },
    loadUserData() {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        const formData = JSON.parse(savedData);
        this.user.name = `${formData.firstName} ${formData.lastName}`;
        this.user.username = formData.userId;
      }
    },
    addTweet() {
      const newTweetContent = this.firstText || "";
      if (newTweetContent.trim()) {
        this.tweets.unshift({
          content: newTweetContent,
          username: this.user.username,
          disabled: true,
        });
        this.saveTweets();
        this.firstText = "";
      }
    },
    deleteTweet(index) {
      this.tweets.splice(index, 1);
      this.saveTweets();
    },
    saveTweets() {
      localStorage.setItem("tweets", JSON.stringify(this.tweets));
    },
    loadTweets() {
      const savedTweets = localStorage.getItem("tweets");
      if (savedTweets) {
        const allTweets = JSON.parse(savedTweets);
        this.tweets = allTweets.filter(
          (tweet) => tweet.username === this.user.username
        );
      } else {
        this.tweets = [];
      }
    },
    goToHome() {
      this.$router.push("/home");
    },
    goToSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>
<style scoped>
.pp {
  height: 150px;
  width: 150px;
  border-radius: 10%;
  object-fit: cover;
}
.headerp {
  position: absolute;
  text-align: 110px;
}

.username .v-list-item-title {
  font-size: 30px;
  color: black;
}
.username .v-list-item-subtitle {
  font-size: 14px;
  color: black;
}
.addTweetBtn:hover {
  cursor: pointer;
}

.twitterLogo {
  width: 120px;
  height: 90px;
  margin-left: 1vh;
}
.profileLogo {
  justify-content: center;
  width: 120px;
  height: 80px;
  margin-top: 10vh;
  margin-left: 1vh;
}

.settingsLogo {
  width: 100px;
  height: 70px;
  margin-left: 3vh;
  margin-top: 10vh;
}
.firstTextBox {
  justify-content: center;
  align-items: center;
  width: 80vh;
}
.text-box-container {
  position: relative;
}

.addTweetBtn {
  position: absolute;
  bottom: 5;
  right: 0;
  width: 13vh;
  height: 10vh;
}
.deleteTweetBtn {
  position: absolute;
  right: 10;
  width: 5vh;
  height: 5vh;
}
</style>
