const { reloadApp } = require("detox-expo-helpers");
describe("Client can create assignments", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("successfully", async () => {
    const randomize = Math.floor(Math.random() * 10000);
    await expect(element(by.id("wantToPublishButton"))).toBeVisible();
    await element(by.id("wantToPublishButton")).tap();
    await element(by.id("emailLabel")).tap();
    await element(by.id("emailInput")).typeText(`user${randomize}@gmail.com`);
    await element(by.id("passwordLabel")).tap();
    await element(by.id("passwordInput")).typeText("password");
    await element(by.id("passwordConfirmationLabel")).tap();
    await element(by.id("passwordConfirmationInput")).typeText("password");
    await element(by.id("companyNameLabel")).tap();
    await element(by.id("companyNameInput")).typeText("develup");
    await element(by.id("companyUrlLabel")).tap();
    await element(by.id("companyUrlInput")).typeText("develup.com");
    await element(by.id("mainContainer")).tap();
    await expect(element(by.id("submitButton"))).toBeVisible();
    await element(by.id("submitButton")).tap();
    await expect(element(by.id("createAssignmentButton"))).toBeVisible();
    await element(by.id("createAssignmentButton")).tap();
    await expect(element(by.id("titleAssignment"))).toBeVisible();
    await element(by.id("titleInput")).tap();
    await element(by.id("titleInput")).typeText("Build a Webpage");
    await element(by.id("descriptionLabel")).tap();
    await element(by.id("descriptionInput")).typeText("Built in React");
    await element(by.id("timeFrameLabel")).tap();
    await element(by.id("timeFrameInput")).typeText("96");
    await element(by.id("budgetLabel")).tap();
    await element(by.id("budgetInput")).typeText("500");
    await element(by.id("skills-1")).tap();
    await expect(element(by.id("publishButton"))).toBeVisible();
    await element(by.id("publishButton")).tap();
    await expect(element(by.id("successfullyCreatedMessage"))).toBeVisible();
  });
  it("unsuccessfully with missing fields", async () => {
    const randomize = Math.floor(Math.random() * 10000);
    await expect(element(by.id("wantToPublishButton"))).toBeVisible();
    await element(by.id("wantToPublishButton")).tap();
    await element(by.id("emailLabel")).tap();
    await element(by.id("emailInput")).typeText(`user${randomize}@gmail.com`);
    await element(by.id("passwordLabel")).tap();
    await element(by.id("passwordInput")).typeText("password");
    await element(by.id("passwordConfirmationLabel")).tap();
    await element(by.id("passwordConfirmationInput")).typeText("password");
    await element(by.id("companyNameLabel")).tap();
    await element(by.id("companyNameInput")).typeText("develup");
    await element(by.id("companyUrlLabel")).tap();
    await element(by.id("companyUrlInput")).typeText("develup.com");
    await element(by.id("mainContainer")).tap();
    await expect(element(by.id("submitButton"))).toBeVisible();
    await element(by.id("submitButton")).tap();
    await expect(element(by.id("createAssignmentButton"))).toBeVisible();
    await element(by.id("createAssignmentButton")).tap();
    await expect(element(by.id("titleAssignment"))).toBeVisible();
    await element(by.id("skills-1")).tap();
    await expect(element(by.id("publishButton"))).toBeVisible();
    await element(by.id("publishButton")).tap();
    await expect(element(by.id("createErrorMessage"))).toBeVisible();
  });
});
