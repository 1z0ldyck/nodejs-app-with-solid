import knex, { Knex } from 'knex';
import Database from '@interfaces/Database'
import { databaseConfig } from '@config/config'

const { client, database, user, password } = databaseConfig;

class Postgres extends Database {

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
