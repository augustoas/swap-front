import { Job_Status, Currency } from './utils';

/**
 * Represents the available resources in the application.
 */
export enum Resource {
  Auth = 'auth',
  User = 'users',
  Job = 'jobs',
  JobCategory = 'job-categories',
  Category = 'categories',
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
  token?: string;
  gender?: string;
  birthdate?: Date;
}; 

/**
 * Represents a job resource.
 */
export type Job = BaseTable & {
  budget: number;
  accepted_budget: number;
  details: string;
  status: Job_Status;
  currency: Currency;
}

/**
 * Represents a Job Category.
 */
export type JobCategory = BaseTable & {
  job_id: number;
  category_id: number;
}

/**
 * Represents a category.
 */
export type Category = BaseTable & {
  name: string;
  description: string;
}