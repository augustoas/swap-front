// export type ApiResponse<T> = {
//   data?: T;
//   error?: any;
//   status: number;
//   statusText: string;
//   message?: string;
// };

/**
 * Represents an API interface for performing CRUD operations on a resource of type T.
 */
export interface ApiInterface<T> {
  /**
   * Creates a new resource.
   * @param data - The data for the new resource.
   * @returns A promise that resolves when the resource is created.
   */
  create(data: T): Promise<void>;

  /**
   * Finds a resource by its ID.
   * @param id - The ID of the resource to find.
   * @returns A promise that resolves with the found resource, or null if not found.
   */
  findOne(id: string): Promise<T | null>;

  /**
   * Finds all resources.
   * @returns A promise that resolves with an array of all resources.
   */
  findAll(): Promise<T[]>;

  /**
   * Updates an existing resource.
   * @param data - The updated data for the resource.
   * @returns A promise that resolves when the resource is updated.
   */
  update(data: T): Promise<void>;

  /**
   * Deletes a resource by its ID.
   * @param id - The ID of the resource to delete.
   * @returns A promise that resolves when the resource is deleted.
   */
  delete(id: string): Promise<void>;
}