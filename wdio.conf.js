exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  framework: 'cucumber',
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': { args: ['--incognito'] }
  }],
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'reports/allure-results',
      useCucumberStepReporter: true,
      disableWebdriverStepsReporting: true
    }]
  ],
  cucumberOpts: {
    require: ['./step-definitions/*.js'],
    timeout: 60000,
    tagExpression: process.env.TAGS || ''
  },
  afterStep: async function (step, scenario, result) {
    const screenshot = await browser.takeScreenshot();
    const stepName = step.text || 'Unnamed Step';

    allure.addAttachment(
      `Step: ${stepName}`,
      Buffer.from(screenshot, 'base64'),
      'image/png'
    );
  }
};
