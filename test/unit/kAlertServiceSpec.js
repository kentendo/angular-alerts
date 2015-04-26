'use strict';

describe('unit testing the kAlertService', function() {
  
  var alertService, mock, mockBody;
  
  beforeEach(function(){
    
    mockBody = {appendChild: jasmine.createSpy()};
    mock = {body: mockBody};
    module(function($provide) {
      $provide.value('$document', mock);
    });
    
    // create the module
    module('kAlertModule');
    
    // create the service
    inject(function($injector) {
      alertService = $injector.get('kAlertService');
    });
    
  });
  
  it('check the existence of kAlertService factory', inject(function(kAlertService) {
    expect(kAlertService).toBeDefined();
  }));
  
  it('should append an alert to document.body', function(){
    // create alert
    alertService.alert('error', 'test successfull');
    expect(mock.body.appendChild).toHaveBeenCalled();
  });
  
}); 