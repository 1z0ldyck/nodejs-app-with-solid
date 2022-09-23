export default abstract class Database {

  constructor(protected driver: any, protected config: Object) {}

  abstract connect(): any

}