var expect = chai.expect;
// var should = chai.should();

// Intersections
describe('Find Intersections', function() {
  it('[1,2,3], [1,3,5]) should return [1,3]', function() {
    expect(intersections([1,2,3], [1,3,5])).to.deep.equal([1,3]);
  });
  
  it('[1,2,3], [0,3,5]) should return [3]', function() {
    expect(intersections([1,2,3], [0,3,5])).to.deep.equal([3]);
  });
  
  it('[1,2,3], [0,4,5]) should return [ ]', function() {
    expect(intersections([1,2,3], [0,4,5])).to.deep.equal([]);
  });
});
