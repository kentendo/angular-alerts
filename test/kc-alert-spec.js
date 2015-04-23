describe('unit testing the k-alert directive', function() {
  var $compile, 
      $root_scope;
  
  // Load the myApp module, which contains the directive
  beforeEach(module('kAlertModule'));
  
  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  
  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile('<alert type="error" message="testing" style="z-index:111" />')($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain('<p class="kentendo-alert error" type="error" message="testing"><span class="exclamation">!</span>testing</p>');
  });
  
});
