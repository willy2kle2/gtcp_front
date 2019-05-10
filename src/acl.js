import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from './router'

Vue.use(AclInstaller)

export default new AclCreate({
  initial: 'public',
  notfound: '/error',
  router,
  acceptLocalRules: true,
  globalRules: {
    isAdmin: new AclRule('admin').generate(),
     isUser: new AclRule('user').generate(),
    isPublic: new AclRule('public').or('admin').generate(),
    isLogged: new AclRule('user').and('inside').generate(),
     isPublic: new AclRule('*')
  }
})