/**
 * Created by csharon on 6/18/14.
 */
describe('mcListGroup', function () {

  var el, scope, testItems;

  beforeEach(module('mc.components.ListGroup'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope;
    el = angular.element('<mc-list-group items="testItems" labelField="name" countField="count"></mc-list-group>');
    $compile(el)(scope);
    scope.$apply();
  }));

  beforeEach(function () {
    testItems = [
      {name: "Item1", count: "10"},
      {name: "Item2", count: "20"},
      {name: "Item3", count: "5"},
      {name: "Item4", count: "1"},
      {name: "Item5", count: "0"}
    ];
  });

  it('should replace with unordered list', function () {
    scope.$apply(
      scope.testItems = testItems
    );

    expect(el.prop('tagName')).to.equal('UL');
  });

  it('should generate 5 list items', function () {
    scope.$apply(
      scope.testItems = testItems
    );
    expect(el.children().length).to.equal(5);
    expect(el.children().first().prop('tagName')).to.equal('LI');
  });

});