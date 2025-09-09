import email from "infra/email.js";
import orcherstrator from "tests/orchestrator";

beforeAll(async () => {
  await orcherstrator.waitForAllServices();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    orcherstrator.deleteAllEmails();

    await email.send({
      from: "FinTab <contato@devsouza.com.br>",
      to: "contato@curso.dev",
      subject: "Teste de assunto",
      text: "Teste de corpo.",
    });

    await email.send({
      from: "FinTab <contato@devsouza.com.br>",
      to: "contato@curso.dev",
      subject: "Último email enviado",
      text: "Corpo do último email.",
    });

    const lastEmail = await orcherstrator.getLastEmail();
    expect(lastEmail.sender).toBe("<contato@devsouza.com.br>");
    expect(lastEmail.recipients[0]).toBe("<contato@curso.dev>");
    expect(lastEmail.subject).toBe("Último email enviado");
    expect(lastEmail.text).toBe("Corpo do último email.\r\n");
  });
});
