<template>
  <div>
    <v-row justify="center" align="center" class="text-center">
      <v-col cols="12">
        <h2>Giriş yapmak için aşağıdaki formu doldurunuz.</h2>
      </v-col>
    </v-row>    
    <v-form @submit.prevent="handleSubmit">
      <v-container>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="userId"
            :counter="10"
            :rules="nameRules"
            label="UserID"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="password"
            :counter="10"
            :rules="password"
            label="Password"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <br> 
      <v-col cols="12">
            <v-btn variant="tonal" type="submit">Üye Girişi İçin Tıklayınız</v-btn>
          </v-col>
    </v-container>
    </v-form>
    <div v-if="message" :class="{'success-message': isSuccess, 'error-message': !isSuccess}">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    userId: '',
    password: '',
    userIdRules: [
   ],
    passwordRules: [
 ],
  }),
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
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
  margin-top: 20px;
}
</style>
