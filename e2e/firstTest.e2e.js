describe('PhoneArenaTests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have header in main catalogue screen', async () => {
    await expect(element(by.id('mainHeader'))).toBeVisible();
  });

  it('should have main catalogue screen', async () => {
    await expect(element(by.id('catalogueList'))).toBeVisible();
  });

  it('should show Iphone 7 details screen after tap', async () => {
    await element(by.id('product0')).tap();
    await expect(element(by.id('phoneView'))).toBeVisible();
    await element(by.id('phoneViewBack')).tap();
  });

  it('should show Galaxy S7 details screen after tap', async () => {
    await element(by.id('product1')).tap();
    await expect(element(by.id('phoneView'))).toBeVisible();
    await element(by.id('phoneViewBack')).tap();
  });

  it('should show Honor 10 details screen after tap', async () => {
    await element(by.id('product2')).tap();
    await expect(element(by.id('phoneView'))).toBeVisible();
    await element(by.id('phoneViewBack')).tap();
  });

  it('should show P10 Lite details screen after tap', async () => {
    await element(by.id('product3')).tap();
    await expect(element(by.id('phoneView'))).toBeVisible();
    await element(by.id('phoneViewBack')).tap();
  });

  it('should show Nokia 7.1 details screen after tap', async () => {
    await element(by.id('product4')).tap();
    await expect(element(by.id('phoneView'))).toBeVisible();
    await element(by.id('phoneViewBack')).tap();
  });

});
