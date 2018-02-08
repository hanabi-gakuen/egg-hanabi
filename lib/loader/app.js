const egg = require('egg')
const loadModule = require('./module')

module.exports = class AppWorkerLoader extends egg.AppWorkerLoader {
  // See https://github.com/eggjs/egg/blob/master/lib/loader/app_worker_loader.js#L16
  loadConfig() {
    Object.assign(this.prototype, { loadModule })
    this.loadModule()
    super.loadConfig()
  }

  loadService(opt) {
    return super.loadService(Object.assign({ override: true }, opt))
  }

  loadController(opt) {
    return super.loadController(Object.assign({ override: true }, opt))
  }
}
