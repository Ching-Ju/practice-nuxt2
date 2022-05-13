import { test, expect } from '@playwright/test';

const pageUrl = 'overlay'

test.beforeEach(async ({ page }) => {
  await page.goto(`/${pageUrl}`)
})

test.describe('test dialog', () => {
  test('test dialog can open', async ({ page }) => {
    await page.locator('button:has-text("Show")').first().click()
    await page.waitForTimeout(500)
    await expect(page.locator('text=Dialog Content Ok')).toBeVisible()
  })

  test('test dialog can close by button ok', async ({ page }) => {
    await page.locator('button:has-text("Show")').first().click()
    await page.locator('button:has-text("Ok")').click();
    await expect(page.locator('text=Dialog Content Ok')).not.toBeVisible()
  })

  test('test dialog can close by label close', async ({ page }) => {
    await page.locator('button:has-text("Show")').first().click()
    await page.locator('[aria-label="close"]').click();
    await expect(page.locator('text=Dialog Content Ok')).not.toBeVisible()
  })
})
