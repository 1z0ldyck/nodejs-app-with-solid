import UserRepository from '@repositories/userRepository'
import UseCase from '@interfaces/UseCase'

class CreateUserUseCase extends UseCase {

  async execute(data: any): Promise<any> {}
}

export default new CreateUserUseCase(UserRepository);