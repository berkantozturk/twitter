<template>
  <v-container>
    <v-row class="navbar" justify="center" align="center">
      <v-col cols="12" md="0" class="text-center">
        <v-img class="pp" :src="require('@/assets/pp.jpg')"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>{{ user.name }}</h2>
        <p>@{{ user.username }}</p>
        <span><strong>{{ user.following }}</strong> Following</span> <br>
        <span><strong>{{ user.followers }}</strong> Followers</span>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col class="twitterLogo">
      <a href="/home">
        <img :src="require('@/assets/twitter.png')">
      </a> 
    </v-col>
    <v-col class="profilelogo">
      <a href="/profile">
        <img :src="require('@/assets/profile.png')">
      </a> 
    </v-col>
    <v-col class="settingslogo">
      <a href="/settings">
        <img :src="require('@/assets/settings.png')">
      </a> 
    </v-col>
  </v-row>

    <!-- <a href="/profile">
      <img class="profilep" :src="require('@/assets/profile.png')">
    </a> 
    <a href="/settings">
      <img class="settingsp" :src="require('@/assets/settings.png')">
    </a> 
  <div> 
    <h2>Tweetler</h2>      
    <textarea 
        class="firstText2" 
        cols="100" 
        rows="5" 
        v-model="firstText" 
        placeholder="Bugün nasılsın ?.."
      ></textarea>        
      <img
          class="newtweet"
          @click="addTweet()"
          :src="require('@/assets/new-tweet.png')"
          alt="Add Tweet"
        >
    <div v-for="(tweet, index) in tweets" :key="index">
      <textarea 
        class="tweet" 
        cols="100" 
        rows="5" 
        v-model="tweet.content" 
        :disabled="index !== 0" 
        placeholder="Bugün nasılsın ?.."
      ></textarea>
        <img
          class="delete"
          @click="deleteTweet(index)"
          :src="require('@/assets/delete.png')"
          alt="Delete Tweet"
        >
        <div class="username-info">@{{ tweet.username }}</div>
    </div>
  </div> -->
  </v-container>
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
  created(){
    this.loadUserData();
    this.loadTweets(); 
  }, 
  computed: {
    userTweets() {
      return this.tweets.filter(tweet => tweet.username === this.user.username);
    }
  },
  mounted() {
     this.getUserTweets();
  },
  methods: {
    getUserTweets(){
      this.userTweets = this.tweets.filter(tweet => tweet.username === this.user.username);
    },
    loadUserData() {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        const formData = JSON.parse(savedData);
        this.user.name = `${formData.firstName} ${formData.lastName}`;
        this.user.username = formData.userId;
      }
    },
    addTweet() {
      const newTweetContent = this.firstText || "";
      if (newTweetContent.trim()) {
        this.tweets.unshift({ content: newTweetContent, username:this.user.username, disabled: true });
        this.saveTweets();
        this.firstText = ""
      }
    },
    deleteTweet(index) {
        this.tweets.splice(index, 1);
        this.saveTweets();
    },
    saveTweets() {
      localStorage.setItem('tweets', JSON.stringify(this.tweets));
    },
    loadTweets() {
    const savedTweets = localStorage.getItem('tweets');
    if (savedTweets) {
      const allTweets = JSON.parse(savedTweets);
      this.tweets = allTweets.filter(tweet => tweet.username === this.user.username);
    } else {
      this.tweets = [];
    }
  },
  }
};
</script>

<style scoped>
.profile-containerp {
  position: fixed;
  width: 100%;
  height: 100vh;
  max-width: 300px;
  font-family: 'Times New Roman', Times, serif, sans-serif;
  padding: 20px;
  left: 0;
  top: 0;
  background-color: #a6c3ee;
  overflow-y: auto;
}

.pp {
  height: 150px;
  width: 150px;
  border-radius: 60%;
  object-fit: cover;
}

.headerp {
  position: absolute;
  text-align: 110px;
}

.firstText2{
  margin-left:25vh;
}
.profile-detailsp {
  padding: 220px 20px;
  text-align: center;
}
.username-info {
  position: relative;
  right: 40vh;
  bottom: 340px;
}

.usernamep {
  color: gray;
}

.profile-statsp {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.twitterp {
  width: 100px;
  height: 80px;
  position: absolute;
  bottom: auto;
  bottom: -1vh;
  right: -100vh;
}

.profilep {
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: auto;
  bottom: 0vh;
  right: -110vh;
}

.settingsp {
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: auto;
  right: -120vh;
  bottom: 1vh;
}
</style>

  <style scoped>
.profile-containerp {
  position: fixed;
  width: 100%; 
  height: 100vh;
  max-width: 300px; 
  font-family: 'Times New Roman', Times, serif, sans-serif;
  padding: 20px;
  left: 0;
  top: 0;
  background-color: #a6c3ee;
  overflow-y: auto;
}
.pp {
    height: 150px;
    width: 150px;
    border-radius: 60%;
    object-fit: cover;
}
  .headerp {
    position: absolute;
    text-align: 110px;
  }
  .profile-detailsp {
  padding: 220px 20px;
  text-align: center;
}
  
  .usernamep {
    color: gray;
  }
  
  .profile-statsp {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }  
  .twitterp {
    width: 100px;
    height: 80px;
    position: absolute;
    bottom: auto;
    bottom: -1vh;
  }
  .profilep {
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: auto;
    bottom: 0vh;
    right: -110vh;
  }
  .settingsp {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: auto;
    right: -120vh;
    bottom: 1vh;
  }
  .twitterLogo img {
  width: 100px;
  height: 80px;
}
.profilelogo img {
  width: 60px;
  height: 60px;
}
.settingslogo img {
  width: 45px;
  height: 45px;
}
  </style>
  