/** @type { import("drizzle-kit").Config} */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:usOWJEbBXc91@ep-snowy-sea-a1qxbibq.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
};
