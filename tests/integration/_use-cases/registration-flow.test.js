import orcherstrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orcherstrator.waitForAllServices();
  await orcherstrator.clearDatabase();
  await orcherstrator.runPendingMigrations();
  await orcherstrator.deleteAllEmails();
});

describe("Use case: Registration Flow (all successful)", () => {
  test("Create user account", async () => {
    const createUserResponse = await fetch(
      "http://localhost:3000/api/v1/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "RegistrationFlow",
          password: "RegostrationFlowPassword",
          email: "registration.flow@curso.dev",
        }),
      },
    );

    expect(createUserResponse.status).toBe(201);

    const createUserResponseBody = await createUserResponse.json();

    expect(createUserResponseBody).toEqual({
      id: createUserResponseBody.id,
      username: "RegistrationFlow",
      email: "registration.flow@curso.dev",
      features: ["read:activation_token"],
      password: createUserResponseBody.password,
      created_at: createUserResponseBody.created_at,
      updated_at: createUserResponseBody.updated_at,
    });
  });

  test("Receive activation email", () => {});

  test("Activate account", () => {});

  test("Login", () => {});

  test("Get user information", () => {});
});
