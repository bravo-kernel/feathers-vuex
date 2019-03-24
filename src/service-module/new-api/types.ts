/*
eslint
@typescript-eslint/no-explicit-any: 0
*/
export interface FeathersVuexOptions {
  serverAlias: string
  autoRemove?: boolean
  idField?: string
  nameStyle?: string
  preferUpdate?: boolean
  debug?: boolean
}

export interface MakeServicePluginOptions {
  Model: any
  service: any
  namespace?: string
  enableEvents?: boolean
  servicePath?: string
  state?: {}
  getters?: {}
  mutations?: {}
  actions?: {}
}
