import { GetterTree, MutationTree } from 'vuex'

export type RootState = ReturnType<typeof state> // eslint-disable-line no-use-before-define

interface IPage {
  [slug: string] : {
    components: {
      [id: string]: {
        data: object
      }
    }
  }
}

export const state = () => ({
  pages: {} as IPage
})

export const mutations: MutationTree<RootState> = {
  updateComponent (state, payload = { slug: '', id: 0, value: '' }) {
    state.pages[payload.slug].components[payload.id].data = payload.value
  },
  savePage (state, payload = {} as {slug: string; page:IPage}) {
    state.pages[payload.slug] = payload.page
  }
}

export const getters: GetterTree<RootState, RootState> = {
  pageBySlug: state => (slug: string) => {
    return state.pages[slug]
  },
  componentById: state => (slug: string, id: number) => {
    return state.pages[slug].components[id]
  }
}
