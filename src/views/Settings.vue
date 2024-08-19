<template>
  <div class="profile-container">
    <div class="header">
      <a  href="/" >
        <img class="twitter" @click="returnHome" :src="require('@/assets/twitter.png')">
      </a> 
      <a  href="/profile" >
        <img class="profile" @click="returnHome" :src="require('@/assets/profile.png')">
      </a> 
      <a  href="/settings" >
        <img class="settings" @click="returnHome" :src="require('@/assets/settings.png')">
      </a> 
    </div>
    <div>
     <strong> 1. Hesap</strong>
Kullanıcı Adı: Hesabınızın kullanıcı adını (handle) değiştirebilirsiniz.
Telefon Numarası ve E-posta: Hesabınızla ilişkilendirilmiş telefon numarasını ve e-posta adresini güncelleyebilirsiniz.
Şifre: Şifrenizi değiştirebilir veya unuttuysanız şifrenizi sıfırlayabilirsiniz.
Giriş Bilgileri: Hesabınıza hangi cihazlardan giriş yapıldığını görüntüleyebilir ve tanımadığınız cihazları kaldırabilirsiniz.
Dil ve Bölge: Twitter arayüz dili ve zaman dilimi gibi yerel ayarları yapabilirsiniz.
<br>
<br>
<strong>2. Güvenlik ve Hesap Erişimi</strong> 
İki Faktörlü Kimlik Doğrulama: Hesabınıza ek güvenlik katmanı ekleyerek, giriş yaparken ikinci bir doğrulama yöntemi kullanabilirsiniz (SMS, kimlik doğrulama uygulaması, vb.).
Hesap Güvenliği: Şüpheli giriş denemeleri veya hesap güvenliği ile ilgili diğer uyarılar hakkında bildirimler alabilirsiniz.
Uygulamalar ve Oturumlar: Twitter hesabınıza erişimi olan üçüncü taraf uygulamaları ve açık oturumları yönetebilirsiniz.
<br>
<br>
<strong>3. Gizlilik ve Güvenlik</strong>
Tweet Gizliliği: Tweetlerinizin yalnızca onaylı takipçiler tarafından görülmesini sağlayabilirsiniz.
Etiketlenme Ayarları: Diğer kullanıcıların sizi fotoğraflarda etiketleyip etiketleyemeyeceğini belirleyebilirsiniz.
Doğrudan Mesajlar: Herkesin veya sadece takip ettiğiniz kişilerin size doğrudan mesaj gönderebilmesini ayarlayabilirsiniz.
Engellenen ve Sessize Alınan Hesaplar: Engellediğiniz veya sessize aldığınız kullanıcıları bu bölümden yönetebilirsiniz.
Konum Bilgisi: Tweetlerinizde konum bilgisi eklemeyi açıp kapatabilirsiniz.
<br>
<br>
<strong>4. Bildirimler</strong>
Bildirim Tercihleri: Hangi tür bildirimleri almak istediğinizi (örneğin, yeni takipçiler, beğeniler, retweetler vb.) belirleyebilirsiniz.
Sessize Alınan Bildirimler: Belirli kelimeler veya ifadeler için bildirimleri sessize alabilirsiniz.
E-posta ve SMS Bildirimleri: Hangi tür e-posta veya SMS bildirimleri almak istediğinizi seçebilirsiniz.
<br>
<br>
<strong>5. İçerik Tercihleri</strong>
Dil Tercihleri: Hangi dillerde içerik görmek istediğinizi belirleyebilirsiniz.
Duyarlı İçerik: Potansiyel olarak hassas içerikleri görmek isteyip istemediğinizi ayarlayabilirsiniz.
Keşfet Ayarları: Twitter'da keşfet bölümünde hangi içeriklerin size gösterileceğini ayarlayabilirsiniz.
<br>
<br>
<strong>6. Veriler ve İzinler</strong>
Twitter Verilerin: Twitter’da oluşturduğunuz ve topladığınız verileri görüntüleyebilir ve indirebilirsiniz.
Kişisel Veriler: Twitter'ın size nasıl reklamlar sunduğunu ve verilerinizi nasıl kullandığını yönetebilirsiniz.
Tarayıcı Verileri: Twitter'ın cihaz ve tarayıcı geçmişinizi nasıl yönettiğini belirleyebilirsiniz.
<br>
<br>
<strong>7. Erişilebilirlik, Görüntüleme ve Diller</strong>
Yazı Boyutu ve Kontrast: Yazı tipini ve arka plan kontrastını kişisel tercihlerinize göre ayarlayabilirsiniz.
Diller: Twitter’ın kullanılabilir dillerini seçebilir ve dil ayarlarını düzenleyebilirsiniz.
<br>
<br>
<strong>8. Hesap Bilgileri ve Devre Dışı Bırakma</strong>
Hesap Bilgileri: Hesabınızın e-posta adresi, telefon numarası gibi kritik bilgilerini buradan düzenleyebilirsiniz.
Hesabı Devre Dışı Bırakma: Hesabınızı geçici olarak devre dışı bırakabilir veya kalıcı olarak silebilirsiniz.</div>
  </div>
</template>
  
  <script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        message: 'Merhaba Dünya!'
      };
    }
  };
  </script>
  