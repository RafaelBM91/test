<template>
  <div class="modal" v-bind:class="{ 'is-active': $store.state.registerControl }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Register</p>
        <button class="delete" aria-label="close" v-on:click="$store.commit('changeRegister', false)"></button>
      </header>
      <section class="modal-card-body">
        <form action="#" v-on:submit.prevent="() => { console.log('gola') }">
          <div class="control">
            <label class="radio" v-on:mouseover="a = true" v-on:mouseout="a = false">
              <input type="radio" name="answer" checked>
              Profesional Turístico (Free)
              <div class="descrip" v-show="a">
                <small>
                  Selecciona este tipo de cuenta si eres un profesional turístico.
                </small>
                <br/>
                <small>
                  Ejemplo: Concierge, Front Desk, Tour Guide, etc
                </small>
              </div>
            </label>
            <br/><br/>
            <label class="radio" v-on:mouseover="b = true" v-on:mouseout="b = false">
              <input type="radio" name="answer">
              Proveedor de Servicios (Free)
              <div class="descrip" v-show="b">
                <small>
                  Selecciona este tipo de cuenta si eres un negocio proveedor de servicios turísticos.
                </small>
                <br/>
                <small>
                  Ejemplo: Restaurantes, Tour Operador, Buceo, Bares, Hotel, SPA, Agencia de Viajes, Transportación, Tienda etc
                </small>
              </div>
            </label>
          </div>
          <br/>
          <div class="field">
            <label class="label">Email Address</label>
            <div class="control has-icons-left">
              <input class="input is-info is-small" type="email" placeholder="Email Address" required>
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </div>
            <p class="help is-danger">* is required</p>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input class="input is-info is-small" type="password" placeholder="Password" required>
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <p class="help is-danger">* is required</p>
          </div>
          <div class="field">
            <label class="label">Password Again</label>
            <div class="control has-icons-left">
              <input class="input is-info is-small" type="password" placeholder="Password Again" required>
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <p class="help is-danger">* is required</p>
          </div>
          <div class="select">
            <select>
              <option v-bind:value="null" selected="selected">Select Timezone</option>
              <option value="US/Pacific">(UTC-8) Pacific Time (US &amp; Canada)</option>
              <option value="US/Mountain">(UTC-7) Mountain Time (US &amp; Canada)</option>
              <option value="US/Central">(UTC-6) Central Time (US &amp; Canada)</option>
              <option value="US/Eastern">(UTC-5) Eastern Time (US &amp; Canada)</option>
              <option value="America/Halifax">(UTC-4)  Atlantic Time (Canada)</option>
              <option value="America/Anchorage">(UTC-9)  Alaska (US &amp; Canada)</option>
              <option value="Pacific/Honolulu">(UTC-10) Hawaii (US)</option>
              <option value="Pacific/Samoa">(UTC-11) Midway Island, Samoa</option>
              <option value="Etc/GMT-12">(UTC-12) Eniwetok, Kwajalein</option>
              <option value="Canada/Newfoundland">(UTC-3:30) Canada/Newfoundland</option>
              <option value="America/Buenos_Aires">(UTC-3) Brasilia, Buenos Aires, Georgetown</option>
              <option value="Atlantic/South_Georgia">(UTC-2) Mid-Atlantic</option>
              <option value="Atlantic/Azores">(UTC-1) Azores, Cape Verde Is.</option>
              <option value="Europe/London">Greenwich Mean Time (Lisbon, London)</option>
              <option value="Europe/Berlin">(UTC+1) Amsterdam, Berlin, Paris, Rome, Madrid</option>
              <option value="Europe/Athens">(UTC+2) Athens, Helsinki, Istanbul, Cairo, E. Europe</option>
              <option value="Europe/Moscow">(UTC+3) Baghdad, Kuwait, Nairobi, Moscow</option>
              <option value="Iran">(UTC+3:30) Tehran</option>
              <option value="Asia/Dubai">(UTC+4) Abu Dhabi, Kazan, Muscat</option>
              <option value="Asia/Kabul">(UTC+4:30) Kabul</option>
              <option value="Asia/Yekaterinburg">(UTC+5) Islamabad, Karachi, Tashkent</option>
              <option value="Asia/Calcutta">(UTC+5:30) Bombay, Calcutta, New Delhi</option>
              <option value="Asia/Katmandu">(UTC+5:45) Nepal</option>
              <option value="Asia/Omsk">(UTC+6) Almaty, Dhaka</option>
              <option value="Indian/Cocos">(UTC+6:30) Cocos Islands, Yangon</option>
              <option value="Asia/Krasnoyarsk">(UTC+7) Bangkok, Jakarta, Hanoi</option>
              <option value="Asia/Hong_Kong">(UTC+8) Beijing, Hong Kong, Singapore, Taipei</option>
              <option value="Asia/Tokyo">(UTC+9) Tokyo, Osaka, Sapporto, Seoul, Yakutsk</option>
              <option value="Australia/Adelaide">(UTC+9:30) Adelaide, Darwin</option>
              <option value="Australia/Sydney">(UTC+10) Brisbane, Melbourne, Sydney, Guam</option>
              <option value="Asia/Magadan">(UTC+11) Magadan, Solomon Is., New Caledonia</option>
              <option value="Pacific/Auckland">(UTC+12) Fiji, Kamchatka, Marshall Is., Wellington</option>
            </select>
            <p class="help is-danger">* is required</p>
          </div>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button type="submit" class="button is-info">Save</button>
        <button class="button is-success" v-on:click="singin">SingIn</button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        a: false,
        b: false
      }
    },
    methods: {
      singin () {
        this.$store.commit('changeRegister', false)
        this.$store.commit('changeLogin', true)
      }
    }
  }
</script>

<style scoped>
  div.descrip {
    margin-left: 20px;
  }
</style>
