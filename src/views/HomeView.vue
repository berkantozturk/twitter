<template>
  <div class="profile-container">
    <div class="header">
      <a href="/home" >
        <img class="twitter" @click="returnHome" :src="require('@/assets/twitter.png')" alt="Twitter">
      </a> 
      <a href="/profile" >
        <img class="profile" @click="returnHome" :src="require('@/assets/profile.png')" alt="Profile">
      </a> 
      <a href="/settings" >
        <img class="settings" @click="returnHome" :src="require('@/assets/settings.png')" alt="Settings">
      </a> 
    </div>
  </div>

  <div>
    <h2>Tweetler</h2>
    <div v-for="(tweet, index) in tweets" :key="index">
      <textarea 
        class="tweet" 
        cols="100" 
        rows="5" 
        v-model="tweet.content" 
        :disabled="index !== 0" 
        placeholder="Bugün nasılsın ?.."
      ></textarea>
      <div v-if="index === 0" class="tweet-actions">
        >
        <img
          class="newtweet"
          @click="addTweet(index)"
          :src="require('@/assets/new-tweet.png')"
          alt="Add Tweet"
        >
      </div>
      <div v-if="index !== 0" class="tweet-actions">
        <img
          class="delete"
          @click="deleteTweet(index)"
          :src="require('@/assets/delete.png')"
          alt="Delete Tweet"
        >
        <div class="username-info">@{{ tweet.username }}</div>
      </div>
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
        followers: 300
      },
      tweets: [],
    };
  },
  created() {
    this.loadTweets();
    this.loadUserData();
  },
  methods: {
    addTweet() {
      const newTweetContent = this.tweets[0]?.content || "";
      if (newTweetContent.trim()) {
        this.tweets.unshift({ content: newTweetContent, username:this.user.username, disabled: true });
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
      localStorage.setItem('tweets', JSON.stringify(this.tweets));
    },
    loadTweets() {
      const savedTweets = localStorage.getItem('tweets');
      if (savedTweets) {
        this.tweets = JSON.parse(savedTweets);
      } else {
        this.tweets = [{ content: "", disabled: false }];
      }
    },
    loadUserData() {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        const formData = JSON.parse(savedData);
        this.user.name = `${formData.firstName} ${formData.lastName}`;
        this.user.username = formData.userId;
      }
    },
  }
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
.username-info {
  position: relative;
  left: -130vh;
  bottom: 270px;
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
</style>
