import type { NitroFetchRequest, $Fetch } from 'nitropack';
import RepositoryFactory from './repositoryFactory';
import { Resource, type User } from "@/types/resource";

/**
 * Represents a repository for managing user data.
 * @extends RepositoryFactory<User>
 */
export default class UserRepository extends RepositoryFactory<User> {
  /**
   * Creates a new UserRepository instance.
   * @param fetch - The fetch function used for making API requests.
   */
  constructor(fetch: $Fetch<User, NitroFetchRequest>) {
    super(Resource.User, fetch);
  }
}