import { test, expect } from "@playwright/test";

test.describe("Example Tests", () => {
  test("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" }),
    ).toBeVisible();
  });

  test("intentional failure for rerun demo", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // This assertion will always fail to demonstrate rerun functionality
    await expect(page).toHaveTitle("This Title Does Not Exist - Always Fails");
  });
});
