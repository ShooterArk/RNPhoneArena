describe('PhoneArenaTests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have main catalogue screen', async () => {
    await expect(element(by.id('catalogueList'))).toBeVisible();
  });

  it('should show Product details screen after tap', async () => {
    await element(by.id('itemClicked0')).tap();
    await expect(element(by.id('phoneView'))).toBeVisible();
  });

});
