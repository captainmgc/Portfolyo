import { test, expect } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'

// We assume server is already running per webServer config

test('homepage loads and a11y scan passes', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Mikail Güven')).toBeVisible()

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScanResults.violations).toEqual([])
})

test('open a planet modal', async ({ page }) => {
  await page.goto('/')
  const anyPlanet = page.getByRole('button').first()
  await anyPlanet.click()
  await expect(page.getByText(/HTML|CSS|JavaScript|TypeScript|React|Node|Python|UI\/UX|Cyber Security|DevOps|Test Skill/)).toBeVisible()
})