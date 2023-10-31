module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"), // 0.0.0.0 Localhost everyone could access
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "f640f3a353b55daba9ee09fc816fbee2"),
    },
  },
});
