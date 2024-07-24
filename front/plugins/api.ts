/**
 * This is a Nuxt plugin that provides an API instance to the Nuxt app.
 *
 * @param {import('@nuxt/types').NuxtApp} nuxtApp - The Nuxt app instance.
 * @returns {import('@nuxt/types').Plugin} - The Nuxt plugin object.
 */
export default defineNuxtPlugin((nuxtApp) => {
  // const { session } = useUserSession()

  const api = $fetch.create({
    baseURL: useRuntimeConfig().public.baseURL ?? 'localhost:3000/backend',
    onRequest({ request, options, error }) {
      // if (session.value?.token) {
      //   const headers = options.headers ||= {}
      //   if (Array.isArray(headers)) {
      //     headers.push(['Authorization', `Bearer ${session.value?.token}`])
      //   } else if (headers instanceof Headers) {
      //     headers.set('Authorization', `Bearer ${session.value?.token}`)
      //   } else {
      //     headers.Authorization = `Bearer ${session.value?.token}`
      //   }
      // }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    }
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api
    }
  }
})