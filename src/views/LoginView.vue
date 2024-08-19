<template>
  <div>
    <h2>Giriş yapmak için aşağıdaki formu doldurunuz.</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="userId">Kullanıcı Adı:</label>
        <input type="text" id="userId" v-model="userId" />
      </div>
      <div>
        <label for="sifre">Şifre:</label>
        <input type="password" id="sifre" v-model="sifre" />
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
    <div v-if="message" :class="{'success-message': isSuccess, 'error-message': !isSuccess}">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      sifre: '',
      message: '',
      isSuccess: false
    };
  },
  methods: {
    handleSubmit() {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        const formData = JSON.parse(savedData);
        
        if (this.userId === formData.userId && this.sifre === formData.sifre) {
          this.message = 'Başarıyla giriş yaptınız!';
          this.isSuccess = true;
          this.$router.push('/profile');
        } else {
          this.message = 'Ad veya şifre yanlış.';
          this.isSuccess = false;
        }
      } else {
        this.message = 'Kayıtlı kullanıcı bulunamadı.';
        this.isSuccess = false;
      }
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

label {
  margin-right: 10px;
  display: block;
  margin-top: 10px;
}

input {
  margin-top: 5px;
  margin-bottom: 10px;
  display: block;
}

button {
  display: block;
  margin-top: 10px;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
}

.success-message {
  color: green;
}

.error-message {
  color: red;
}
</style>
