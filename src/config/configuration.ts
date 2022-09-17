export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: "mongodb://localhost:27017/manage_employee"
  },
});
