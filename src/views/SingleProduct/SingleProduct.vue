<template>
  <ion-list-header class="single-product-header">
    <ion-icon
      class="single-product-header-back-ion-icon"
      :icon="chevronBackOutline"
    ></ion-icon>
    <div class="single-product-header-heading">Augusta Abbott</div>
  </ion-list-header>
  <ion-content class="single-product-ion-content" :scrollEvents="false">
    <div class="single-product-container">
      <div class="single-product-profile-section">
        <div class="single-product-profile-icon">
          <ion-icon :icon="peopleCircleOutline"></ion-icon>
        </div>
        <div class="single-product-posts-container">
          <div class="total-posts">874</div>
          <div class="posts-text">Posts</div>
          <div class="posts-new-button">New</div>
        </div>
        <div class="single-product-posts-container">
          <div class="total-posts">23K</div>
          <div class="posts-text">Followers</div>
          <div class="posts-new-button">Promote</div>
        </div>
        <div class="single-product-posts-container">
          <div class="total-posts">299</div>
          <div class="posts-text">Following</div>
          <div class="posts-new-button">Settings</div>
        </div>
      </div>
      <div class="single-product-name-section">
        <div class="single-product-name">Augusta Abbott</div>
        <div class="single-product-send-message">
          Select Items to Send In Your Message:
        </div>
      </div>
    </div>
    <div class="single-product-sub-container">
      <div
        v-for="item in items"
        :key="item.id"
        @click="handleClickItems(item.id)"
        class="single-product-items"
        :class="{
          'active-item': this.selectedMultipleItems.includes(item.id),
        }"
      >
        <div class="single-product-items-block">
          <div class="items">{{ item.name }}</div>
          <div
            v-if="this.selectedMultipleItems.includes(item.id)"
            class="single-product-check-icon"
          >
            <ion-icon :icon="checkmarkOutline"></ion-icon>
          </div>
        </div>
      </div>
      <ion-grid class="single-product-images-grid">
        <ion-row>
          <ion-col
            v-for="item in images"
            :key="item.id"
            @click="handleClickImages(item.id)"
            size="4"
            size-md="4"
            size-lg="2"
            :style="`background-color: ${item.backColor}`"
          >
            <div
              v-if="this.selectedMultipleImages.includes(item.id)"
              class="single-product-image-check-icon"
            >
              <ion-icon :icon="checkmarkOutline"></ion-icon>
            </div>
            <ion-img
              class="ion-img"
              :src="`${item.src}`"
              :alt="`${item.alt}`"
            ></ion-img
          ></ion-col>
        </ion-row>
      </ion-grid>
    </div>

    <ion-fab
      class="ion-fab-send"
      vertical="bottom"
      horizontal="end"
      slot="fixed"
      onclick=""
    >
      <ion-fab-button class="ion-fab-send-button">
        <ion-icon class="ion-icon-send-bold" :icon="send"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script lang="ts">
import {
  IonListHeader,
  IonIcon,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import {
  add,
  chevronBackOutline,
  peopleCircleOutline,
  checkmarkOutline,
  send,
} from 'ionicons/icons';

export default defineComponent({
  components: {
    IonListHeader,
    IonIcon,
    IonCol,
    IonGrid,
    IonRow,
    IonImg,
    send,
  },

  methods: {
    handleClickItems(selectedId) {
      if (this.selectedMultipleItems.includes(selectedId)) {
        let filterDeleteItem = this.selectedMultipleItems.filter(
          (item) => item !== selectedId
        );
        this.selectedMultipleItems = filterDeleteItem;
      } else {
        this.selectedMultipleItems.push(selectedId);
      }
    },

    handleClickImages(selectedId) {
      if (this.selectedMultipleImages.includes(selectedId)) {
        let filterDeleteItem = this.selectedMultipleImages.filter(
          (item) => item !== selectedId
        );
        this.selectedMultipleImages = filterDeleteItem;
      } else {
        this.selectedMultipleImages.push(selectedId);
      }
    },
  },

  data() {
    return {
      items: [
        {
          id: 0,
          name: 'Sat 1',
        },
        {
          id: 1,
          name: 'Sat 2',
        },
        {
          id: 2,
          name: 'Sat 3',
        },
        {
          id: 3,
          name: 'Sat 4',
        },
        {
          id: 4,
          name: 'Sat 5',
        },
        {
          id: 5,
          name: 'Sat 6',
        },
      ],
      selectedMultipleItems: [],
      images: [
        {
          id: 0,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#68708a',
        },
        {
          id: 1,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#959aad',
        },
        {
          id: 2,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#68708a',
        },
        {
          id: 3,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#959aad',
        },
        {
          id: 4,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#68708a',
        },
        {
          id: 5,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#959aad',
        },
        {
          id: 6,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#68708a',
        },
        {
          id: 7,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#959aad',
        },
        {
          id: 8,
          src: '../img/signup.svg',
          alt: 'image',
          backColor: '#68708a',
        },
      ],
      selectedMultipleImages: [],
    };
  },

  setup() {
    return {
      chevronBackOutline,
      IonContent,
      peopleCircleOutline,
      checkmarkOutline,
      send,
    };
  },
});
</script>

<style scoped>
.single-product-ion-content {
  --background: white;
}
.single-product-images-grid {
  padding: 0;
}
.single-product-images-grid ion-col {
  text-align: center;
  border: none;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
  position: relative;
}
.single-product-image-check-icon {
  background-color: #3b7aff;
  position: absolute;
  top: 7px;
  right: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
}
.single-product-image-check-icon ion-icon {
  font-size: 12px;
  font-weight: bold;
}
.single-product-header-back-ion-icon {
  font-size: 22px;
  font-weight: bold;
}
.single-product-header {
  --background: #687089;
  --color: white;
  text-align: center;
  padding: 0 15px;
}
.single-product-header-heading {
  color: white;
  font-weight: 500;
  width: 100%;
  font-size: 16px;
}
.single-product-container {
  padding: 7px 15px;
}
.single-product-profile-icon {
  margin-right: 5px;
}
.single-product-profile-icon ion-icon {
  color: #687089;
  min-width: 55px;
  max-width: 55px;
  height: 55px;
}
.single-product-posts-container {
  margin-right: 8px;
  text-align: center;
}
.single-product-container {
}
.single-product-profile-section {
  display: flex;
  align-items: center;
}
.single-product-posts-container .total-posts {
  color: black;
  font-size: 16px;
  font-weight: 500;
}
.single-product-posts-container .posts-text {
  color: darkgrey;
  font-size: 12px;
}
.single-product-posts-container .posts-new-button {
  background-color: #687089;
  color: white;
  padding: 4px 13px;
  border-radius: 50px;
  font-size: 14px;
  margin-top: 7px;
}
.single-product-name-section {
  padding-top: 15px;
}
.single-product-items {
  padding: 0 0 0 15px;
}
.single-product-items-block {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgrey;
}
.single-product-items.active-item {
  background-color: #cccccc;
}
.single-product-items .items {
  padding: 10px 0;
  color: black;
  font-size: 16px;
}
.single-product-name {
  color: black;
  font-size: 16px;
  font-weight: 500;
}
.single-product-send-message {
  font-size: 14px;
  color: darkgrey;
  padding: 5px 0;
}
.single-product-check-icon {
  padding-right: 15px;
}
.single-product-check-icon ion-icon {
  color: blue;
  font-size: 17px;
  font-weight: bold;
}
.ion-fab-send {
  bottom: 50px;
}
.ion-fab-send-button {
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  --background: green;
}
.ion-icon-send-bold {
  font-weight: bold;
  transform: rotate(-46deg);
}
</style>
