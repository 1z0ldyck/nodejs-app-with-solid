export default abstract class IDatabase {

  constructor(protected driver: any, protected config: Object) {}

  abstract connect(): any

}