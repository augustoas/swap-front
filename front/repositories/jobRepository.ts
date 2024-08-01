import type { NitroFetchRequest, $Fetch } from 'nitropack';
import RepositoryFactory from './repositoryFactory';
import { Resource, type Job } from "@/types/resource";

/**
 * Represents a repository for managing job data.
 * @extends RepositoryFactory<Job>
 */
export default class JobRepository extends RepositoryFactory<Job> {
  /**
   * Creates a new JobRepository instance.
   * @param fetch - The fetch function used for making API requests.
   */
  constructor(fetch: $Fetch<Job, NitroFetchRequest>) {
    super(Resource.Job, fetch);
  }
}