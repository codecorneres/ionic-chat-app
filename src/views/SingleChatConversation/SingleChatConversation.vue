<template>
  <ion-page>
    <ion-list-header class="single-chat-header">
      <ion-icon
        class="chat-header-back-ion-icon"
        :icon="chevronBackOutline"
      ></ion-icon>
      <ion-label class="chat-header-title">David Gates</ion-label>
    </ion-list-header>

    <ion-content :scrollEvents="false" class="chat-ion-content">
      <div class="chat-container">
        <div class="chat-img-div">
          <ion-img
            class="chat-img"
            :src="uploadImage"
            alt="somethin wrong!"
          ></ion-img>
        </div>
        <div class="chat-time">5 minutes ago</div>

        <div class="chat-user">
          <p class="user-name">Dora</p>
          <p class="user-chat">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="chat-time">5 minutes ago</div>

        <div v-for="item in chats" key="item.id">
          <div class="chat-self">
            <p class="chat-self-name">David</p>
            <p class="chat-self-chat">
              {{ item.message }}
            </p>
          </div>
          <div class="chat-time">1 minutes ago</div>
        </div>
      </div>
    </ion-content>

    <div class="chat-send-container">
      <div class="chat-plus-icon">
        <ion-fab>
          <ion-fab-button @click="openFileInput" class="chat-fab-button">
            <ion-icon class="ion-icon-bold" :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </div>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileUpload"
        style="display: none"
      />
      <div class="nearby-elements">
        <div class="chat-send-input">
          <ion-item class="ion-item" lines="none">
            <ion-input
              @IonInput="handleChangeMessage"
              name="password"
              placeholder="Write message"
              v-model="this.message"
            ></ion-input>
          </ion-item>
        </div>

        <div class="chat-send-button">
          <ion-button
            @click="handleSendButton"
            class="register-button"
            type="button"
          >
            Send</ion-button
          >
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonListHeader,
  IonContent,
  IonLabel,
  IonIcon,
  IonImg,
  IonFab,
  IonFabButton,
  IonInput,
  IonItem,
  IonButton,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { chevronBackOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonListHeader,
    IonContent,
    IonLabel,
    IonIcon,
    IonImg,
    IonFab,
    IonFabButton,
    IonInput,
    IonItem,
    IonButton,
    IonPage,
  },
  methods: {
    handleChangeMessage(e: any) {
      this.message = e.target.value;
    },
    handleSendButton() {
      if (this.message) {
        this.chats.push({ message: this.message });
        this.message = '';
      }
    },

    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];

      this.uploadImage = URL.createObjectURL(file);
    },
  },
  data() {
    return {
      chats: [
        {
          id: 0,
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus itaque, mollitia culpa dolorum aperiam. Voluptates, doloremque corrupti!',
        },
        {
          id: 1,
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus itaque, mollitia culpa dolorum aperiam. Voluptates, doloremque corrupti!',
        },
      ],
      message: '',
      uploadImage: 'https://docs-demo.ionic.io/assets/madison.jpg',
    };
  },
  setup() {
    return {
      chevronBackOutline,
      add,
    };
  },
});
</script>

<style scoped>
.single-chat-header {
  --background: #687089;
  --color: white;
  font-size: 17px;
  text-align: center;
  padding: 0 15px;
  font-weight: 300;
}
.chat-header-title {
  font-weight: 500;
  font-size: 16px;
}
.chat-header-back-ion-icon {
  font-size: 22px;
  font-weight: bold;
}
.chat-container {
  padding: 0 15px;
  position: relative;
  box-sizing: border-box;
}
.chat-img {
  width: 100%;
  margin-top: 10px;
}
.chat-img-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat-time {
  color: #a7acbd;
  padding: 5px 15px;
  font-size: 14px;
  margin-bottom: 10px;
}
.chat-user {
  background-color: #68708a;
  border-radius: 3px;
  padding: 10px 15px;
}
.user-name {
  color: white;
  font-size: 12px;
  margin: 0;
}
.user-chat {
  color: white;
  padding-top: 5px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
}
.chat-self {
  background-color: white;
  border-radius: 3px;
  padding: 10px 15px;
}
.chat-self-name {
  color: black;
  font-size: 12px;
  margin: 0;
}
.chat-ion-content {
  --background: #eff1f8;
  --padding-bottom: 60px;
}
.chat-self-chat {
  color: black;
  padding-top: 5px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
}
.chat-send-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0px;
  background-color: white;
  padding: 8px 15px;
}
.chat-plus-icon {
  padding: 0;
  display: flex;
  align-items: center;
}
.chat-fab-button {
  --background: #68708a;
  height: 32px;
  min-width: 32px;
  max-width: 32px;
}
.ion-icon-bold {
  font-weight: bold;
  font-size: 18px;
}
.register-button {
  height: 51px;
  --background: #68708a;

  text-transform: capitalize;
  font-size: 16px;
  margin: 0;
}
.nearby-elements {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 85%;
}
:deep(.chat-send-input .sc-ion-input-md-h) {
  min-height: 50px;
}
:deep(.chat-send-input .native-input) {
  font-size: 14px;
}
.chat-send-input {
  border: 0.5px solid #e8e2e2;
  width: 100%;
}
</style>
