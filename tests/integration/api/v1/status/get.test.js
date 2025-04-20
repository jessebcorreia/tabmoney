test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const statusCode = response.status;

  const {
    updated_at,
    dependencies: {
      database: { max_connections, opened_connections, version },
    },
  } = await response.json();

  const parsedUpdatedAt = new Date(updated_at).toISOString();
  const databaseVersion = "16.0";

  expect(statusCode).toBe(200);
  expect(parsedUpdatedAt).toEqual(updated_at);
  expect(version).toEqual(databaseVersion);
  expect(max_connections).toEqual(100);
  expect(opened_connections).toEqual(1);
});
