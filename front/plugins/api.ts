
/**
 * This plugin exports an API instance that can be used to make HTTP requests to the backend server.
 * It also handles authentication and redirects to the login page if a 401 error is encountered.
 *
 * @param {import('@nuxt/types').NuxtApp} nuxtApp - The Nuxt.js application instance.
 * @returns {import('@nuxt/types').Plugin} - The Nuxt.js plugin object.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: 'http://localhost:4000/backend/',
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

  return {
    provide: {
      api,
    }
  }
})