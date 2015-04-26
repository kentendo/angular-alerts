describe('unit testing the kAlertDirective', function() {
  var element, scope;
  
  // need to preload the module
  beforeEach(module('kAlertModule'));
  
  // need to compile our directive
  beforeEach(inject(function($compile, $rootScope) {
    element = $compile('<k-alert type="error" message="test successful"/>')($rootScope);
    $rootScope.$digest();
  }));
  
  it('Replaces the element with the appropriate content', function() {
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain('<p class="k-alert error"><span class="exclamation">!</span>test successful</p>');
  });

});
