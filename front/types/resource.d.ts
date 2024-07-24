export enum Resource {
  Auth = 'auth',
  User = 'users',
}

type BaseTable = {
  id: number;
  createdDate?: Date;
  updatedDate?: Date;
};

/**
 * Represents a User object.
 */
export type User = BaseTable & {
  firstname: string;
  lastname: string;
  email: string;
  gender?: string;
  birthdate?: Date;
}; 