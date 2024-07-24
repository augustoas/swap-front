/**
 * Represents the response from an API request.
 * @template T - The type of the data in the response.
 */
export type ApiResponse<T> = {
  data?: T;
  error?: any;
  status: number;
  statusText: string;
  message?: string;
};
/**
 * Represents the APIInterface which defines the base methods for interacting with the API.
 */
export interface ApiInterface {
  /**
   * Creates a new resource.
   * @returns A Promise that resolves to an ApiResponse<T>, where T is the resource.
   */
  create(): Promise<ApiResponse<T>>;

  /**
   * Finds a specific resource.
   * @returns A Promise that resolves to an ApiResponse<T>, where T is the resource.
   */
  findOne(): Promise<ApiResponse<T>>;

  /**
   * Finds all resources.
   * @returns A Promise that resolves to an ApiResponse<T>, where T is the resource.
   */
  findAll(): Promise<ApiResponse<T>>;

  /**
   * Updates a resource.
   * @returns A Promise that resolves to an ApiResponse<T>, where T is the resource.
   */
  update(): Promise<ApiResponse<T>>;

  /**
   * Deletes a resource.
   * @returns A Promise that resolves to a ApiResponse<T>, where T is the resource.
   */
  delete(): Promise<ApiResponse<T>>;
}