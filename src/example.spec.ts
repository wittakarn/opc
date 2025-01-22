import { test, chromium } from '@playwright/test';

test('find vendor', async ({ page }) => {
  const keyword = 'น้ำยาล้างเครื่องซักผ้า';
  await page.goto(`https://shopee.co.th/search?keyword=${keyword}`);

  page.locator('[data-sqe="item"]:first-child').click();
  page.getByText('ดูร้านค้า').click();
});