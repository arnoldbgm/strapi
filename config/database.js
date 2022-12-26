module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cegsku02i3mkhvq2msb0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_c6of'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'MYixv2I32jFRIIQRdKotu2K55yFWITxN'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
