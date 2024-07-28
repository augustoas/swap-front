import type { NitroFetchRequest, $Fetch } from 'nitropack';
import { ApiInterface } from "@/types/api";
import { Resource } from "@/types/resource";

/**
 * Represents a generic repository factory that implements the ApiInterface.
 * @template T - The type of data returned by the repository methods.
 */
export default class RepositoryFactory<T> implements ApiInterface<T> {
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
   * @param {T} data - The data used to create the resource.
   * @returns {Promise<void>} A promise that resolves when the resource is created.
   */
  public async create(data: T): Promise<void> {
    await this.fetch<void>(this.resource, {
      method: "POST",
      body: data,
    });
  }

  /**
   * Finds a resource by its ID.
   * @param {string} id - The ID of the resource to find.
   * @returns {Promise<T | null>} A promise that resolves to the found resource.
   */
  public async findOne(id: string): Promise<T | null> {
    const response = await this.fetch<T | null>(`${this.resource}/${id}`, {
      method: "GET",
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
   * @param {T} data - The data used to update the resource.
   * @returns {Promise<void>} A promise that resolves when the resource is updated.
   */
  public async update(data: T): Promise<void> {
    await this.fetch<void>(this.resource, {
      method: "PUT",
      body: data,
    });
  }

  /**
   * Deletes a resource by its ID.
   * @param {string} id - The ID of the resource to delete.
   * @returns {Promise<void>} A promise that resolves when the resource is deleted.
   */
  public async delete(id: string): Promise<void> {
    await this.fetch<void>(`${this.resource}/${id}`, {
      method: "DELETE",
    });
  }
}