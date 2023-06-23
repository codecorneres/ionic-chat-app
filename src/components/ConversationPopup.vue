<template>
  <ion-page class="ion-page-main">
    <ion-content class="Conversation-ion-padding">
      <div class="Conversation-popup-outer-div">
        <div class="Conversation-popup-div">
          <p class="Conversation-popup-heading">Start a Conversation</p>
          <form @submit.prevent="submitForm" class="Conversation-form-register">
            <ion-item class="Conversation-ion-item" lines="none">
              <ion-input
                class="Conversation-ion-input"
                name="firstName"
                type="text"
                placeholder="First Name"
                v-model="formInfo.firstName"
              ></ion-input>
            </ion-item>

            <div class="Conversation-error" v-if="error.fName">
              {{ error.fName }}
            </div>
            <ion-item class="Conversation-ion-item" lines="none">
              <ion-input
                class="Conversation-ion-input"
                name="lastName"
                type="text"
                placeholder="last Name"
                v-model="formInfo.lastName"
              ></ion-input>
            </ion-item>

            <div class="Conversation-error" v-if="error.lName">
              {{ error.lName }}
            </div>

            <ion-item class="Conversation-ion-item" lines="none">
              <ion-input
                class="Conversation-ion-input"
                name="cellphone"
                type="number"
                placeholder="Mobile Number"
                v-model="formInfo.cellphone"
              ></ion-input>
            </ion-item>
            <div class="Conversation-error" v-if="error.eCellphone">
              {{ error.eCellphone }}
            </div>

            <div class="Conversation-outer-button-div">
              <button
                class="Conversation-register-button Conversation-register-button-cancel"
                expand="block"
                type="button"
              >
                C<span class="Conversation-button-span">ancel</span>
              </button>
              <span class="span-class"></span>
              <button
                class="Conversation-register-button Conversation-register-button-start"
                expand="block"
                v-on:click="submitForm"
                type="button"
              >
                S<span class="Conversation-button-span">tart</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
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
} from "@ionic/vue";
import { defineComponent } from "vue";
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
        firstName: "",
        lastName: "",
        cellphone: "",
      },
      error: {
        fName: "",
        lName: "",
        eCellphone: "",
      },
    };
  },
  methods: {
    checkValidate() {
      const { firstName, lastName, cellphone } = this.formInfo;

      let checkValid = true;

      if (firstName === "") {
        this.error.fName = "First-Name is required";
        checkValid = false;
      } else {
        this.error.fName = "";
      }

      if (lastName === "") {
        this.error.lName = "Last-Name is required";
        checkValid = false;
      } else {
        this.error.lName = "";
      }

      if (this.formInfo.cellphone === "") {
        this.error.eCellphone = "Cellphone is required";
        checkValid = false;
      } else {
        this.error.eCellphone = "";
      }
      return checkValid;
    },
    submitForm() {
      // Perform signup logic here
      if (this.checkValidate()) {
        console.log("First-Name:", this.formInfo.firstName);
        console.log("Last-Name:", this.formInfo.lastName);
        console.log("Cellphone:", this.formInfo.cellphone);

        this.formInfo.firstName = "";
        this.formInfo.lastName = "";
        this.formInfo.cellphone = "";
      }
    },
  },
});
</script>

<style scoped>
ion-toolbar {
  --background: #687089;
  --color: white;
}

.ion-page-main {
  box-sizing: border-box;
}
.Conversation-popup-outer-div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a5a9b9;
}

.Conversation-popup-div {
  width: 60%;
  background-color: white;
  border: 1px solid white;
  border-radius: 23px;
}
.Conversation-popup-heading {
  text-align: center;
  font-weight: 700;
  opacity: 0.9;
  font-size: 17px;
}
.Conversation-ion-input {
  font-weight: 600;
  opacity: 0.8;
  min-height: auto;
}

:deep(.Conversation-ion-item .native-input) {
  padding: 0 10px;
  height: 42px;
  border: 1px solid rgba(104, 112, 137, 0.751);
}
.Conversation-error {
  color: red;
  padding-left: 17px;
}

.Conversation-ion-item {
  padding-bottom: 4px;
}

.Conversation-register-button {
  background-color: white;
  font-size: 17px;
  font-weight: 600;
  height: 47px;
}

.Conversation-register-button-cancel {
  margin-right: 0;
  padding-right: 0;
  color: rgba(104, 112, 137, 0.751);
}

.Conversation-register-button-start {
  opacity: 0.8;
}

.Conversation-outer-button-div {
  display: flex;
  justify-content: space-around;
  margin-top: 0;
  padding-top: 0;
  border-top: 1px solid rgba(104, 112, 137, 0.751);
  margin-top: 6px;
}

.span-class {
  border: 1px solid rgba(104, 112, 137, 0.751);
}
.Conversation-form-register ion-button {
  --border-radius: 25px;
}

.Conversation-button-span {
  text-transform: lowercase;
}
</style>
