<template>
  <ion-header>
    <ion-toolbar>
      <ion-title class="register-h2">Label</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <div class="img-div">
      <ion-img
        class="ion-img"
        src="../img/signup.svg"
        alt="The Wisconsin State Capitol building in Madison, WI at night"
      ></ion-img>
      <p class="title-p">Sign In Heading</p>
      <p class="heading-para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum
        excepturi harum, odit est numquam? Doloribus, voluptatibus. Doloremque
        in pariatur
      </p>
    </div>

    <form @submit.prevent="submitForm" class="form-register">
      <ion-item class="ion-item" lines="none">
        <ion-input
          name="domain"
          type="text"
          placeholder="Domain Name*"
          v-model="formInfo.domain"
        ></ion-input>
      </ion-item>

      <div class="error" v-if="error.eDomain">
        {{ error.eDomain }}
      </div>

      <ion-item class="ion-item" lines="none">
        <ion-input
          name="email"
          type="email"
          placeholder="Email*"
          v-model="formInfo.email"
        ></ion-input>
      </ion-item>

      <div class="error" v-if="error.eEmail">
        {{ error.eEmail }}
      </div>

      <ion-item class="ion-item" lines="none">
        <ion-input
          name="password"
          type="password"
          value="password"
          placeholder="Password*"
          v-model="formInfo.password"
        ></ion-input>
      </ion-item>

      <span class="error error-3" v-if="error.ePassword">{{
        error.ePassword
      }}</span>

      <ion-button
        class="register-button"
        expand="block"
        v-on:click="submitForm"
        type="button"
        >Sign in</ion-button
      >
      <p class="register-para">
        By proceeding you also agree to the Terms of Service and Privacy Policy
      </p>
    </form>
  </ion-content>
</template>

<script lang="ts">
import {
  IonInput,
  IonItem,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButton,
  IonImg,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonInput,
    IonItem,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButton,
    IonImg,
  },

  data() {
    return {
      formInfo: {
        email: '',
        password: '',
        domain: '',
      },
      error: {
        eEmail: '',
        ePassword: '',
        eDomain: '',
      },
    };
  },
  methods: {
    checkValidat() {
      const { email, password, domain } = this.formInfo;

      let checkValid = true;

      if (domain === '') {
        this.error.eDomain = 'Domain-Name is required';
        checkValid = false;
      } else {
        this.error.eDomain = '';
      }

      if (email === '') {
        this.error.eEmail = 'Email is required';
        checkValid = false;
      } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(email)) {
        this.error.eEmail = 'Enter Valid Email address';
        checkValid = false;
      } else {
        this.error.eEmail = '';
      }

      if (this.formInfo.password === '') {
        this.error.ePassword = 'Password is required';
        checkValid = false;
      } else if (password.length <= 7) {
        this.error.ePassword = "password atleast be 8 Letter's long";
        checkValid = false;
      } else {
        this.error.ePassword = '';
      }
      return checkValid;
    },
    submitForm() {
      // Perform signup logic here
      if (this.checkValidat()) {
        console.log('Email:', this.formInfo.email);
        console.log('Password:', this.formInfo.password);
        console.log('Domain Name:', this.formInfo.domain);

        this.formInfo.email = '';
        this.formInfo.password = '';
        this.formInfo.domain = '';
      }
    },
  },
});
</script>

<style scoped>
ion-content {
  --background: #eff1f8;
}

ion-toolbar {
  --background: #687089;
  --color: white;
}

.ion-img {
  width: 100px;
  height: 100px;
  margin: 20px auto;
}

.error {
  color: red;
  font-size: 14px;
  margin-bottom: 4px;
}

.error-3 {
  padding-top: 5px;
}

.ion-item {
  padding-bottom: 8px;
}
.ion-item ion-input {
  min-height: auto;
}

.register-h2 {
  text-align: center;
  font-size: 17px;
  font-weight: 500;
}

.register-button {
  text-transform: capitalize;
  --background: #687089;
  font-size: 17px;
  font-weight: 500;
  /* padding: 10px auto; */
  margin-top: 31px;
  height: 47px;
}
.form-register ion-button {
  --border-radius: 25px;
}
.register-para {
  text-align: center;
  justify-content: center;
  color: rgba(104, 112, 137, 0.751);
  font-size: 15px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
}

.img-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading-para {
  text-align: center;
  justify-content: center;
  color: rgba(104, 112, 137, 0.751);
  font-size: 18px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  max-width: 90%;
  margin-bottom: 34px;
  margin-top: -11px;
}

.title-p {
  font-size: 22px;
  font-weight: 500;
  opacity: 0.8;
}
</style>
