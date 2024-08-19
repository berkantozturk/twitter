<template>
  <div>
    <h2>Kayıt olmak için aşağıdaki formu doldurunuz.</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="firstName">Ad:</label>
        <input type="text" id="firstName" v-model="firstName" />
      </div>
      <div>
        <label for="lastName">Soyad:</label>
        <input type="text" id="lastName" v-model="lastName" />
      </div>
      <div>
        <label for="userId">Kullanıcı Adı:</label>
        <input type="text" id="userId" v-model="userId" />
      </div>
      <div>
        <label for="telefon">Telefon:</label>
        <input type="number" id="telefon" v-model="telefon" />
      </div>
      <div>
        <label for="sifre">Şifre:</label>
        <input type="password" id="sifre" v-model="sifre" />
      </div>
      <button type="submit">Kayıt Ol</button>
    </form>
    <div v-if="message">
      <p>{{ message }}</p>
      <p v-if="message === 'Başarıyla kayıt yaptınız!'">
        <a href="/login">
          <button>Üye Girişi İçin Tıklayınız</button>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      userId: '',
      telefon: '',
      sifre: '',
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      this.saveFormData();
      this.message = 'Başarıyla kayıt yaptınız!';
      this.clearForm(); 
    },
    saveFormData() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        userId: this.userId,
        telefon: this.telefon,
        sifre: this.sifre
      };
      localStorage.setItem('formData', JSON.stringify(formData));
    },
    clearForm() {
      this.firstName = '';
      this.lastName = '';
      this.userId = '';
      this.telefon = '';
      this.sifre = '';
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
</style>
