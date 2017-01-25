import axios from 'axios'


class Zmon {
  constructor(options) {
    this.axios = axios.create({baseURL: options.url || '/rest'})
    // this.errHandler = options.errHandler || this._handleError
    this.all = axios.all
  }

  _handleError(error) {
    if (error.response) {
      console.log(error.response.status)
    } else {
      console.log(error)
    }
  }

  getAllAlerts() {
    return this.axios
      .get('/allalerts')
      .catch(this._handleError)
  }
  getEntities() {
    return this.axios
      .get('/entities')
      .catch(this._handleError)
  }
}


export default {
  install(Vue, options) {
    Vue.prototype.$zmon = new Zmon(options)
  }
}
