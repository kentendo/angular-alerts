'use strict';

describe('kAlert Test App', function() {
  
  var alertMessage, alertType, alertSubmit, alerts;
  
  beforeEach(function() {
    // load the test page, fill out the form
    browser.get('src/index.html');
    element(by.id('alert-message')).sendKeys('test successful');
    element(by.cssContainingText('option', 'success')).click();
  });
  
  it('should have zero alerts', function(){
    alerts = element.all(by.css('.k-alert'));    
    expect(alerts.count()).toEqual(0);
  });
  
  it('should add one alert', function(){
    element(by.id('alert-submit')).click();
    alerts = element.all(by.css('.k-alert'));
    expect(alerts.count()).toEqual(1);
  });
  
  it('should have zero alerts', function(){
    element(by.id('alert-submit')).click();
    browser.driver.sleep(6000);
    alerts = element.all(by.css('.k-alert'));
    expect(alerts.count()).toEqual(0);
  });
  
  
});
