<template>
  <ion-list-header class="products-header">
    <ion-icon
      class="product-header-back-ion-icon"
      :icon="chevronBackOutline"
    ></ion-icon>
    <ion-searchbar
      class="products-search-bar"
      mode="ios"
      placeholder="Search"
      @ionChange="handleSearch"
    ></ion-searchbar>
    <div class="cancel">{{ header.cancel }}</div>
  </ion-list-header>
  <ion-content :scrollEvents="false">
    <div class="products-container">
      <div class="products-all-heading">{{ header.all }}</div>
      <div class="products-body">
        <div v-for="item in products" :key="item.id">
          <div class="products-card">
            <div class="products-icon">
              <ion-icon
                class="products-icon-ion"
                :icon="peopleCircleOutline"
              ></ion-icon>
            </div>
            <div class="products-title-block">
              <div class="products-title">{{ item.title }}</div>
              <div class="products-sub-title">{{ item.subTitle }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ion-content>
</template>

<script lang="ts">
import { IonLabel, IonListHeader, IonIcon, IonSearchbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { add, peopleCircleOutline, chevronBackOutline } from 'ionicons/icons';
import data from '../Products/products.json';

export default defineComponent({
  components: {
    IonLabel,
    IonListHeader,
    IonIcon,
    IonSearchbar,
  },
  setup() {
    return {
      add,
      peopleCircleOutline,
      chevronBackOutline,
    };
  },
  data() {
    return {
      header: data.header,
      products: data.products,
    };
  },
});
</script>

<style scoped>
.products-container {
  background-color: white;
}
.product-header-back-ion-icon {
  font-size: 22px;
  font-weight: bold;
}
.products-header {
  --background: #687089;
  --color: white;
  text-align: center;
  padding: 0 15px;
}
.cancel {
  color: white;
}
.products-search-bar {
  min-width: 200px;
  max-width: 200px;
}
.products-header .list-header-inner {
  justify-content: space-between;
}
.products-all-heading {
  background-color: #eff1f8;
  color: gray;
  font-size: 14px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.products-card {
  display: flex;
  align-items: center;
  padding: 5px 0 5px 15px;
}
.products-title-block {
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding-bottom: 10px;
}
.products-icon {
  margin-right: 10px;
  width: 32px;
}
.products-icon-ion {
  color: gray;
  min-width: 32px;
  max-width: 32px;
  height: 32px;
}
.products-card .products-title {
  color: black;
  margin: 0;
  font-weight: 500;
  font-size: 15px;
}
.products-card .products-sub-title {
  color: darkgray;
  font-size: 13px;
}
</style>
