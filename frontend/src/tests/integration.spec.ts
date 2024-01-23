import { test, expect } from '@playwright/test';

test.describe('Listings Page Tests', () => {
  test('should load and display listings', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Wait for the listings to be loaded
    await page.locator('.listings');

    // Check if listings are displayed
    const listings = await page.locator('.listing-card');
    console.log('count', await listings.count());
    // expect(await listings.count()).toBeGreaterThan(0);
  });

  //   test('should navigate to listing detail when clicked', async ({ page }) => {
  //     await page.goto('http://localhost:3000/listings');
  //     await page.waitForSelector('.listing-card-class'); // Replace with your actual listings class

  //     // Click on the first listing
  //     await page.click('.listing-card-class >> nth=0');

  //     // Check for navigation
  //     await expect(page).toHaveURL(/\/listings\/\d+/); // Adjust the regex according to your URL pattern
  //   });

  // Add more tests as needed...
});
