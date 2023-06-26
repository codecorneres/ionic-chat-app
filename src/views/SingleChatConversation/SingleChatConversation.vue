<template>
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
          src="https://docs-demo.ionic.io/assets/madison.jpg"
          alt="The Wisconsin State Capitol building in Madison, WI at night"
        ></ion-img>
      </div>
      <div class="chat-time">5 minutes ago</div>

      <div class="chat-user">
        <p class="user-name">Dora</p>
        <p class="user-chat">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div class="chat-time">5 minutes ago</div>

      <div class="chat-self">
        <p class="chat-self-name">David</p>
        <p class="chat-self-chat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus
          itaque, mollitia culpa dolorum aperiam. Voluptates, doloremque
          corrupti!
        </p>
      </div>
      <div class="chat-time">1 minutes ago</div>
      <div class="chat-user">
        <p class="user-name">Dora</p>
        <p class="user-chat">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div class="chat-time">5 minutes ago</div>

      <div class="chat-self">
        <p class="chat-self-name">David</p>
        <p class="chat-self-chat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus
          itaque, mollitia culpa dolorum aperiam. Voluptates, doloremque
          corrupti!
        </p>
      </div>
      <div class="chat-time">1 minutes ago</div>
      <div class="chat-user">
        <p class="user-name">Dora</p>
        <p class="user-chat">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div class="chat-time">5 minutes ago</div>

      <div class="chat-self">
        <p class="chat-self-name">David</p>
        <p class="chat-self-chat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus
          itaque, mollitia culpa dolorum aperiam. Voluptates, doloremque
          corrupti!
        </p>
      </div>
      <div class="chat-time">1 minutes ago</div>
      <div class="chat-user">
        <p class="user-name">Dora</p>
        <p class="user-chat">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div class="chat-time">5 minutes ago</div>

      <div class="chat-self">
        <p class="chat-self-name">David</p>
        <p class="chat-self-chat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus
          itaque, mollitia culpa dolorum aperiam. Voluptates, doloremque
          corrupti!
        </p>
      </div>
      <div class="chat-time">1 minutes ago</div>
      <div class="chat-user">
        <p class="user-name">Dora</p>
        <p class="user-chat">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div class="chat-time">5 minutes ago</div>

      <div class="chat-self">
        <p class="chat-self-name">David</p>
        <p class="chat-self-chat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus
          itaque, mollitia culpa dolorum aperiam. Voluptates, doloremque
          corrupti!
        </p>
      </div>
      <div class="chat-time">1 minutes ago</div>
      <div class="chat-user">
        <p class="user-name">Dora</p>
        <p class="user-chat">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div class="chat-time">5 minutes ago</div>

      <div class="chat-self">
        <p class="chat-self-name">David</p>
        <p class="chat-self-chat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus
          itaque, mollitia culpa dolorum aperiam. Voluptates, doloremque
          corrupti!
        </p>
      </div>
      <div class="chat-time">1 minutes ago</div>
    </div>
  </ion-content>
  <div class="chat-send-container">
    <!-- <ion-fab class="ion-fab-add" vertical="bottom" horizontal="start"> -->
    <div class="chat-plus-icon">
      <ion-fab>
        <ion-fab-button class="chat-fab-button">
          <ion-icon class="ion-icon-bold" :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </div>

    <div class="nearby-elements">
      <div class="chat-send-input">
        <ion-item class="ion-item" lines="none">
          <ion-input name="password" placeholder="Write message"></ion-input>
        </ion-item>
      </div>

      <div class="chat-send-button">
        <ion-button class="register-button" type="button"> Send</ion-button>
      </div>
    </div>
  </div>
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
} from "@ionic/vue";
import { defineComponent } from "vue";
import { add } from "ionicons/icons";
import { chevronBackOutline } from "ionicons/icons";

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
  font-weight: bold;
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
  margin-top: 7px;
  padding-left: 10px;
}
.chat-user {
  background-color: #68708a;
  border-radius: 3px;
}
.user-name {
  color: white;
  padding-top: 9px;
  padding-bottom: 0;
  margin-bottom: -7px;
  padding-left: 14px;
  font-size: 13px;
  opacity: 0.8;
}
.user-chat {
  color: white;
  padding-left: 14px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  opacity: 0.8;
}
.chat-self {
  background-color: white;
  border-radius: 3px;
}
.chat-self-name {
  color: black;
  padding-top: 9px;
  padding-bottom: 0;
  margin-bottom: -7px;
  padding-left: 14px;
  font-size: 13px;
  opacity: 0.8;
}
.chat-ion-content {
  --background: #eff1f8;
}
.chat-self-chat {
  color: black;
  padding-left: 14px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  opacity: 0.8;
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
  min-width: 40px;
  width: auto;
  height: 40px;
  width: 15%;
}
.ion-icon-bold {
  font-weight: bold;
}
.register-button {
  height: 56px;
  --background: #68708a;
  text-transform: capitalize;
  font-size: 18px;
}
.nearby-elements {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 85%;
}
.chat-send-input {
  border: 0.5px solid lightgray;
  width: 100%;
}
</style>
