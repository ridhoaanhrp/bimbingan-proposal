export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '21e0c028255d0fa5e152a53919dd61bd'),
  },
});
