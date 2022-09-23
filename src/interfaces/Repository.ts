export default abstract class IRepository {
  constructor(protected db: any) {}

  abstract save(): any
}