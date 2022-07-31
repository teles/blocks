import { GetterTree, MutationTree } from 'vuex'

export type RootState = ReturnType<typeof state> // eslint-disable-line no-use-before-define

export const state = () => ({
  pages: [] as any[],
  new: {} as any
})

export const mutations: MutationTree<RootState> = {
  pages (state, payload = []) {
    state.pages = payload
  },
  new (state, payload = {}) {
    state.new = payload
  }
}

export const getters: GetterTree<RootState, RootState> = {
  flat: state => () => {
    return state.pages
  },
  bySlug: state => (slug: string) => {
    return state.pages.find(page => page.slug === slug)
  }
}
