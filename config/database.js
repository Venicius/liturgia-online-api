module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Postgres2022!'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: env('DATABASE_SSL', false)
    },
    debug: false,
  },
});