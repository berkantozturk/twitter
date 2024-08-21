<template>
  <div class="profile-containerp">
    <div class="profile-detailsp">
      <img class="pp" :src="require('@/assets/pp.jpg')">
      <h2>{{ user.name }}</h2>
      <p class="usernamep">@{{ user.username }}</p>
      <p class="biop">{{ user.bio }}</p>
      <div class="profile-statsp">
        <span><strong>{{ user.following }}</strong> Following</span>
        <span><strong>{{ user.followers }}</strong> Followers</span>
      </div>
    </div>
  </div>
  <div class="headerp">
    <a href="/home">
      <img class="twitterp" @click="returnHome" :src="require('@/assets/twitter.png')">
    </a> 
    <a href="/profile">
      <img class="profilep" @click="returnHome" :src="require('@/assets/profile.png')">
    </a> 
    <a href="/settings">
      <img class="settingsp" @click="returnHome" :src="require('@/assets/settings.png')">
    </a> 
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
    returnHome() {
    },
    addTweet() {
      debugger
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
        this.tweets = [{ content: "", username:"", disabled: false }];
      }
    }
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

.profile-detailsp {
  padding: 220px 20px;
  text-align: center;
}
.username-info {
  position: relative;
  left: -130vh;
  bottom: 270px;
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
  