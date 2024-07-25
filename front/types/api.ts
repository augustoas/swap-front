export type ApiResponse<T> = {
  data?: T;
  error?: any;
  status: number;
  statusText: string;
  message?: string;
};

/**
 * Represents the API interface.
 */
export interface ApiInterface {
  /**
   * Creates a new item.
   * @param data - The data for the new item.
   * @returns A promise that resolves with the created item.
   */
  create(data: any): Promise<any>;

  /**
   * Finds an item by its ID.
   * @param id - The ID of the item to find.
   * @returns A promise that resolves with the found item.
   */
  findOne(id: number): Promise<any>;

  /**
   * Finds all items.
   * @returns A promise that resolves with an array of items.
   */
  findAll(): Promise<any[]>;

  /**
   * Updates an existing item.
   * @param data - The updated data for the item.
   * @returns A promise that resolves with the updated item.
   */
  update(data: any): Promise<any>;

  /**
   * Deletes an item by its ID.
   * @param id - The ID of the item to delete.
   * @returns A promise that resolves when the item is deleted.
   */
  delete(id: number): Promise<any>;
}