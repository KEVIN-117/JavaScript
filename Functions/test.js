describe("pow", function() {
  
  it("2 eleva a la 3 potencia es 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 eleva a la 2 potencia es 9", function() {
    assert.equal(pow(3, 2), 9);
  });

  it("3 eleva a la 4 potencia es 81", function() {
    assert.equal(pow(3, 4), 81);
  });

});