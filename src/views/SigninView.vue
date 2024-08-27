<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit"> 
    <v-container>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="nameRules"
            label="Ad"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="lastname"
            :counter="10"
            :rules="nameRules"
            label="Soyad"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="userId"
            :rules="nameRules"
            label="Kullanıcı Adı"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="password"
            :rules="nameRules"
            label="Şifre"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn variant="tonal" type="submit">Kayıt Ol!</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="5">
          <v-alert  v-if="successMessage" type="success" class="successMessage" dismissible>
            {{ successMessage }}
          </v-alert>
          <v-alert  v-if="failMessage" class="failMessage" dismissible>
            {{ failMessage }}
          </v-alert>
          <br>
          <v-btn v-if="successMessage" variant="tonal" @click="goToLogin">Üye Girişi İçin Tıklayınız</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    firstname: '',
    lastname: '',
    userId: '',
    password: '',
    successMessage: '',
    failMessage:'',

    nameRules: [
        value => {
          if (value) return true

          return 'Lütfen boş alanları doldurun!'
        },
      ],
  }),
  methods: {
    handleSubmit() {
      if (!this.firstname || !this.lastname || !this.userId || !this.password) {
        this.failMessage = 'Lütfen tüm alanları doldurun!';
        return;
      }
      this.saveFormData();
      this.successMessage = 'Başarıyla kayıt yaptınız!';
      this.clearForm(); 
    },
    saveFormData() {
      const formData = {
        firstName: this.firstname,
        lastName: this.lastname,
        userId: this.userId,
        password: this.password
      };
      localStorage.setItem('formData', JSON.stringify(formData));
    },
    clearForm() {
      this.firstname = '';
      this.lastname = '';
      this.userId = '';
      this.password = '';
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>
<style scoped>
.failMessage{
  color: red;
}
</style>
