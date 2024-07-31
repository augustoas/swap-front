import type { User } from '@/types/resource';

const createInitialState = (): User => {
  return {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    token: undefined,
    gender: undefined,
    birthdate: undefined,
    createdDate: undefined,
    updatedDate: undefined,
  };
}

/**
 * Represents the user store.
 */
export const useUserStore = defineStore('userStore', {
  state: (): {user: User} => ({
    user: createInitialState()
  }),
  getters: {
    /**
     * Gets the user object.
     * @returns The user object.
     */
    getUser(): User {
      return this.user
    },
    /**
     * Gets the user's first name.
     * @returns The user's first name.
     */
    getFirstname(): string {
      return this.user.firstname
    },
    /**
     * Gets the user's last name.
     * @returns The user's last name.
     */
    getLastname(): string {
      return this.user.lastname
    },
    /**
     * Gets the user's email.
     * @returns The user's email.
     */
    getEmail(): string {
      return this.user.email
    },
    /**
     * Gets the user's token.
     * @returns The user's token.
     */
    getToken(): string | undefined {
      return this.user.token
    },
    /**
     * Checks if the user is logged in.
     * @returns True if the user is logged in, false otherwise.
     */
    isLoggedIn(): boolean {
      if (typeof this.user.token === 'string' && this.user.token !== '') return true
      return false
    },
  },
  actions: {
    /**
     * Sets the user object.
     * @param user - The user object to be set.
     * @throws {Error} If the user object is invalid.
     */
    setUser(user: User) {
      // if (!user.id || user.id <= 0) throw new Error('Invalid user ID');
      // if (!user.firstname || user.firstname.trim() === '') throw new Error('Invalid user first name');     
      // if (!user.lastname || user.lastname.trim() === '') throw new Error('Invalid user last name');  
      // if (!user.email || user.email.trim() === '') throw new Error('Invalid user email');
      // if (!user.token || user.token.trim() === '') throw new Error('Invalid user token');
      this.user = user
    },
    setToken(token: string) {
      this.user.token = token
    }
  },
})