<template>
  <ion-list-header class="ion-list-header">
    <ion-label class="header-title">{{ header.title }}</ion-label>
    <div class="logout">{{ header.logout }}</div>
  </ion-list-header>
  <ion-content :scrollEvents="false">
    <div class="conversation-container">
      <div class="conversation-body">
        <div v-for="item in conversations" :key="item.id">
          <div class="conversation-card">
            <div class="circle"></div>
            <div>
              <div class="title">{{ item.title }}</div>
              <div class="sub-title">{{ item.subTitle }}</div>
              <p class="description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ion-fab
      class="ion-fab-add"
      vertical="bottom"
      horizontal="end"
      slot="fixed"
    >
      <ion-fab-button class="ion-fab-button">
        <ion-icon class="ion-icon-bold" :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script lang="ts">
import {
  IonLabel,
  IonListHeader,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import data from '../Conversation/conversation.json';

export default defineComponent({
  components: {
    IonLabel,
    IonListHeader,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    return {
      add,
    };
  },
  data() {
    return {
      header: data.header,
      conversations: data.conversations,
    };
  },
});
</script>

<style scoped>
.conversation-container {
  background-color: white;
}
.ion-list-header {
  --background: #687089;
  --color: white;
  text-align: center;
  padding: 0 15px;
}
.header-title {
  font-weight: bold;
}
.logout {
  color: blue;
}
.conversation-card {
  display: flex;
  padding: 15px 5px;
  border-bottom: 1px solid lightgray;
}
.circle {
  background-color: #687089;
  min-width: 10px;
  max-width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 7px;
  margin-right: 6px;
}
.conversation-card .title {
  color: black;
  margin: 0;
  font-weight: bold;
  font-size: 15px;
}
.conversation-card .sub-title {
  color: black;
  font-weight: 500;
  font-size: 14px;
}
.conversation-card .description {
  color: darkgray;
  margin: 7px 0 0;
  font-size: 13px;
}
.ion-fab-button {
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  --background: green;
}
.ion-fab-add {
  bottom: 50px;
}
.ion-icon-bold {
  font-weight: bold;
}
</style>
