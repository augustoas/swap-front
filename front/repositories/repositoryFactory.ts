import type { NitroFetchRequest, $Fetch } from 'nitropack';
import { ApiInterface } from "@/types/api";
import { Resource } from "@/types/resource";

/**
 * Represents a generic repository factory that implements the ApiInterface.
 * @template T - The type of data returned by the repository methods.
 */
export default class RepositoryFactory<T> implements ApiInterface {
  protected resource: Resource;
  protected fetch: $Fetch<T, NitroFetchRequest>;

  /**
   * Creates an instance of RepositoryFactory.
   * @param {Resource} resource - The resource associated with the repository.
   * @param {($Fetch<T, NitroFetchRequest>)} fetch - The fetch function used to make API requests.
   */
  constructor(resource: Resource, fetch: $Fetch<T, NitroFetchRequest>) {
    this.resource = resource;
    this.fetch = fetch;
  }

  /**
   * Creates a new resource.
   * @param {any} data - The data used to create the resource.
   * @returns {Promise<T>} A promise that resolves to the created resource.
   */
  public async create(data: any): Promise<T> {
    const response = await this.fetch<T>(this.resource, {
      method: "POST",
      body: data,
    });
    return response;
  }

  /**
   * Finds a resource by its ID.
   * @param {number} id - The ID of the resource to find.
   * @returns {Promise<T>} A promise that resolves to the found resource.
   */
  public async findOne(id: number): Promise<T> {
    const response = await this.fetch<T>(this.resource, {
      method: "GET",
      params: { id },
    });
    return response;
  }

  /**
   * Finds all resources.
   * @returns {Promise<T[]>} A promise that resolves to an array of all resources.
   */
  public async findAll(): Promise<T[]> {
    const response = await this.fetch<T[]>(this.resource, {
      method: "GET",
    });
    return response;
  }

  /**
   * Updates a resource.
   * @param {any} data - The data used to update the resource.
   * @returns {Promise<T>} A promise that resolves to the updated resource.
   */
  public async update(data: any): Promise<T> {
    const response = await this.fetch<T>(this.resource, {
      method: "PUT",
      body: data,
    });
    return response;
  }

  /**
   * Deletes a resource by its ID.
   * @param {number} id - The ID of the resource to delete.
   * @returns {Promise<T>} A promise that resolves to the deleted resource.
   */
  public async delete(id: number): Promise<T> {
    const response = await this.fetch<T>(this.resource, {
      method: "DELETE",
      params: { id },
    });
    return response;
  }
}
