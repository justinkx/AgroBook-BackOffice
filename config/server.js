module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2c2fea0d0c746a55b2a3db63630f0327'),
    },
    url: '/dashboard'
  },
});
