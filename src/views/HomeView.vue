<template>
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
    <div class="username">@{{ tweet.username }}</div>
    <div class="container">
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
    this.loadTweets();
  },
  methods: {
    addTweet() {
      const newTweetContent = this.tweets[0]?.content || "";
      if (newTweetContent.trim()) {
        this.tweets.push({ content: newTweetContent, disabled: true });
        this.tweets[0].content = "";
        this.saveTweets();
      }
    },
    deleteTweet(index) {
      if (this.tweets.length > 1) {
        this.tweets.splice(index, 1);
        this.saveTweets();
      }
    },
    saveTweets() {
      localStorage.setItem("tweets", JSON.stringify(this.tweets));
    },
    loadTweets() {
      const savedTweets = localStorage.getItem("tweets");
      if (savedTweets) {
        this.tweets = JSON.parse(savedTweets);
      } else {
        this.tweets = [{ content: "", disabled: false }];
      }
    },
  },
};
</script>

<style>
.tweet-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.newtweet {
  width: 90px;
  height: 70px;
  margin-right: 750px;
  margin-bottom: 30px;
}

.delete {
  width: 40px;
  height: 40px;
  margin-left: 1580px;
  margin-bottom: 100px;
}

.tweet {
  background-color: rgb(234, 226, 226);
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ccc;
}

.profile-container {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.header {
  position: relative;
  text-align: center;
}

.twitter {
  width: 100px;
  height: 80px;
  position: absolute;
  bottom: auto;
  right: 123vh;
  bottom: -1vh;
}

.profile {
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: auto;
  right: 125vh;
  bottom: -8vh;
}

.settings {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: auto;
  right: 125vh;
  bottom: -16vh;
}

.profile-details {
  padding: 60px 20px 20px;
  text-align: center;
}

.username {
  color: gray;
}

.profile-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
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
