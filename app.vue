<template>
  <div>
    <v-app>
        <v-container>
          <v-row no-gutters>
            <v-col>
              <v-sheet class="pa-2 ma-2">
              </v-sheet>
            </v-col>

            <v-col cols="6">
              <v-sheet class="pa-2 ma-2">
                  <v-card
                      class="container_title mx-auto"
                      max-width="344"
                      title="User Registration"
                  >
                    <v-container class="container_email_field">
                      <v-text-field
                          v-model="email"
                          color="primary"
                          label="Email"
                          variant="underlined"
                          @keyup="emailInput"
                          :error-messages="emailErrorMessages"
                      ></v-text-field>
                    </v-container>

                    <v-container class="container_code_field" style="display: none">
                      <v-text-field
                          v-model="code"
                          color="primary"
                          label="Code"
                          @keyup="codeInput"
                          variant="underlined"
                          :error-messages="codeErrorMessages"
                      ></v-text-field>
                    </v-container>


                    <v-card-actions class="container_reg_btn">
                      <v-spacer></v-spacer>

                      <v-btn color="success" @click="registration">
                        Complete Registration

                        <v-icon icon="mdi-chevron-right" end></v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-card-actions class="container_send_code_btn" style="display: none">
                      <v-spacer></v-spacer>

                      <v-btn color="success" @click="sendCode">
                        Send code

                        <v-icon icon="mdi-chevron-right" end></v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>

                  <v-alert
                      class="container_success_message"
                      type="success"
                      title="Registration complete"
                      text="You've completed the registration process"
                      style="display: none"
                  ></v-alert>
              </v-sheet>
            </v-col>

            <v-col>
              <v-sheet class="pa-2 ma-2">
              </v-sheet>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <v-sheet class="pa-2 ma-2">
              </v-sheet>
            </v-col>

            <v-col cols="2">
              <v-sheet class="pa-2 ma-2">
              </v-sheet>
            </v-col>

            <v-col>
              <v-sheet class="pa-2 ma-2">
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
    </v-app>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
      return {
        email: "pavel@gmail.com",
        code: "1234",
        emailErrorMessages: "",
        codeErrorMessages: "",
      }
    },
    methods: {
      emailInput(event: Event) {
        this.validate(this.email)
      },
      codeInput(event: Event) {
        this.validateCode(this.code)
      },
      validateCode(code: string) {
        const codeRegex: RegExp = /^\d\d\d\d$/;

        if (codeRegex.test(code)) {
          this.codeErrorMessages = "";

          return true;
        } else {
          this.codeErrorMessages = "Code is not valid";

          return false;
        }
      },
      validate(email: string) {
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailRegex.test(email)) {
          this.emailErrorMessages = "";

          return true;
        } else {
          this.emailErrorMessages = "Email is not valid";

          return false;
        }
      },
      registration() {
        if(this.validate(this.email)) {
          this.switchElement(false);

          return;
        }

        this.switchElement(true);
      },
      sendCode() {
        if(this.validateCode(this.code)) {
          const emailField = this.$el.querySelector('.container_email_field');
          const codeField = this.$el.querySelector('.container_code_field');
          const btnReg = this.$el.querySelector('.container_reg_btn');
          const btnSendCode = this.$el.querySelector('.container_send_code_btn');
          const title = this.$el.querySelector('.container_title');
          const successMessage = this.$el.querySelector('.container_success_message');

          codeField.style = "display: none;";
          btnSendCode.style = "display: none;";
          emailField.style = "display: none;";
          btnReg.style = "display: none;";
          title.style = "display: none;";

          successMessage.style = "";

          return;
        }
      },
      switchElement(showEmail: boolean) {
        const emailField = this.$el.querySelector('.container_email_field');
        const codeField = this.$el.querySelector('.container_code_field');
        const btnReg = this.$el.querySelector('.container_reg_btn');
        const btnSendCode = this.$el.querySelector('.container_send_code_btn');

        if (showEmail) {
          codeField.style = "display: none;";
          btnSendCode.style = "display: none;";
          emailField.style = "";
          btnReg.style = "";

          return;
        }

        codeField.style = "";
        btnSendCode.style = "";
        emailField.style = "display: none;";
        btnReg.style = "display: none;";
      }
    },
  });
</script>