import Repository from '@interfaces/Repository'

export default abstract class useCase {

  constructor(protected repository: Repository) {}

  abstract execute(data?: any): any
}