<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit"> 
    <v-container>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="nameRules"
            label="First name"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="lastname"
            :counter="10"
            :rules="nameRules"
            label="Last name"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="userId"
            :rules="userIdRules"
            label="User ID"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="5">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            hide-details
            required
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
        <v-col cols="12">
          <v-alert v-if="successMessage" type="success" dismissible>
            {{ successMessage }}
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
    valid: false,
    firstname: '',
    lastname: '',
    userId: '',
    password: '',
    successMessage: '',

    nameRules: [
    ],
    userIdRules: [
   ],
    passwordRules: [
 ],
  }),
  methods: {
    handleSubmit() {
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
</style>
