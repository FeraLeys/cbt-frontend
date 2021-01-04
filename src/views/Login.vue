<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9 my-5">
        <div class="card o-hidden border-0 shadow-lg my-5 blogin">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" @submit.prevent="submit">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        v-model="user.username"
                        autofocus="true"
                        placeholder="Enter Username Address..."
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        v-model="user.password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <vue-recaptcha
                          ref="recaptcha"
                          @verify="onVerify"
                          @expired="onExpired"
                          :loadRecaptchaScript="true"
                          sitekey="6Lcq4B4aAAAAAA9_dx_NT1UkiJ7hH4mrQ8eDfL_X"
                        ></vue-recaptcha>
                      </div>
                    </div>
                    <button
                      :disabled="status !== 'submitting'"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "Auth",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      status: "",
    };
  },
  components: { VueRecaptcha },
  methods: {
    submit: function (captha) {
      const self = this;
      if (self.status == "submitting") {
        self.$refs.recaptcha.execute();
        self.$store
          .dispatch("login", {
            username: this.user.username,
            pass: this.user.password,
            captha: captha,
          })
          .then((ress) => {
            console.log(ress);
          })
          .catch((err) => {
            console.warn(err);
          });
      }
    },
    onVerify: function () {
      this.status = "submitting";
    },
    onExpired: function () {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>


<style scoped>
*:focus {
  outline: 0 !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

/*   Typography    */
body,
h1,
.h1,
p,
a,
.td-name,
td,
button.close {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Lato", sans-serif;
}
.op-5 {
  opacity: 0.5;
}

.bg-login-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../../public/img/banner-login.png");
}
.blogin {
  border-radius: 30px;
}

/*     Input    */
.form-group,
.form-check {
  margin-bottom: 0;
  padding: 10px;
}

.form-group label,
.form-check label {
  margin-bottom: 0.5rem;
  color: #495057;
  font-weight: 600;
  font-size: 1rem;
  white-space: nowrap;
}

/*     Form     */
.form-control-user {
  border-radius: 10px;
}

/*     Form     */
.form-control {
  font-size: 14px;
  border-color: #ebedf2;
  padding: 0.6rem 1rem;
  height: inherit !important;
}
.form-control:focus {
  border-color: #3e93ff;
}

.form-control::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.7;
}

.form-control:-moz-placeholder {
  color: inherit;
  opacity: 0.7;
}

.form-control::-moz-placeholder {
  color: inherit;
  opacity: 0.7;
}

.form-control:-ms-input-placeholder {
  color: inherit;
  opacity: 0.7;
}

.form-control::-ms-input-placeholder {
  color: inherit;
  opacity: 0.7;
}

.input-group-text {
  border-color: #ebedf2 !important;
}

.form-button-action {
  display: inline-flex;
}
</style>


