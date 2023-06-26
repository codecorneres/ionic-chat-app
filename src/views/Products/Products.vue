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
      @ionInput="handleChange"
    ></ion-searchbar>
    <div class="cancel">{{ header.cancel }}</div>
  </ion-list-header>
  <ion-content class="products-ion-content" :scrollEvents="false">
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
        <div class="products-no-result" v-if="products.length === 0">
          No result found
        </div>
      </div>
    </div>
  </ion-content>
</template>

<script lang="ts">
import {
  IonLabel,
  IonListHeader,
  IonIcon,
  IonSearchbar,
  IonContent,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add, peopleCircleOutline, chevronBackOutline } from 'ionicons/icons';
import data from '../Products/products.json';

export default defineComponent({
  components: {
    IonLabel,
    IonListHeader,
    IonIcon,
    IonSearchbar,
    IonContent,
  },

  methods: {
    handleChange(event: any) {
      const searchText = event.target.value;
      let filterProduct = data.products.filter((product) =>
        product.title
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
      );
      this.products = filterProduct;
    },
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
.products-ion-content {
  --background: white;
}
.products-no-result {
  color: black;
  text-align: center;
  margin-top: 20px;
}
.product-header-back-ion-icon {
  font-size: 22px;
  font-weight: bold;
}

:deep(.products-search-bar .searchbar-input) {
  border-radius: 5px;
  background-color: #959aad;
}
:deep(.products-search-bar .searchbar-input-container) {
  height: 32px;
}
:deep(.products-search-bar .searchbar-search-icon) {
  color: white;
  width: 16px;
}
:deep(.products-search-bar .searchbar-clear-icon) {
  color: white;
  width: 16px;
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
  width: 70%;
  margin: 0 auto;
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
  color: #687089;
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
