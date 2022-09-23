import UseCase from '@interfaces/UseCase'

export default abstract class Controller {
  constructor(protected usecase: UseCase) {}

  abstract handle(...data: any): any
} 