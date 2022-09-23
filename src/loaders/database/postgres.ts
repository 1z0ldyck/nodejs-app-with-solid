import knex, { Knex } from 'knex';
import IDatabase from '@interfaces/Database'
import { databaseConfig } from '@config/config'

const { client, database, user, password } = databaseConfig;

class Postgres extends IDatabase {

  connect(): Knex | undefined {

    try {
      const driver = this.driver(this.config)

      console.log("🚀 successfully connected at database.")

      return driver

    } catch (err) {
      console.error(`❌ error connecting to database: ${err}`)
    }
  }
}

export default new Postgres(knex, {
  client,
  connection: {
    user,
    password,
    database
  }
}).connect()
