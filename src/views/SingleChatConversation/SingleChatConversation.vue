<template>
  <ion-list-header class="single-chat-header">
    <ion-icon
      class="chat-header-back-ion-icon"
      :icon="chevronBackOutline"
    ></ion-icon>
    <ion-label class="chat-header-title">David Gates</ion-label>
  </ion-list-header>
  <ion-content :scrollEvents="false"> </ion-content>
</template>

<script lang="ts">
import { IonListHeader, IonContent, IonLabel, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { chevronBackOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonListHeader,
    IonContent,
    IonLabel,
    IonIcon,
  },
  setup() {
    return {
      chevronBackOutline,
    };
  },
});
</script>

<style scoped>
.single-chat-header {
  --background: #687089;
  --color: white;
  text-align: center;
  padding: 0 15px;
}
.chat-header-title {
  font-weight: bold;
}
.chat-header-back-ion-icon {
  font-size: 22px;
  font-weight: bold;
}
</style>
