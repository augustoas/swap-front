import { Resource, User } from "@/types/resource";

/**
 * Represents a repository for managing user data.
 * @extends RepositoryFactory<User>
 */
export default class UserRepository extends RepositoryFactory<User> {
  /**
   * Creates a new instance of UserRepository.
   * @param fetch - The fetch function used for making API requests.
   */
  constructor(fetch: $Fetch<User, NitroFetchRequest>) {
    super(Resource.User, fetch);
  }
}