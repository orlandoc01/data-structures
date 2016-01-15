describe('bloomFilter', function () {
  // body..
  var users;
  var BFIntance;
  var notAdded;
  beforeEach(function () {
    // body...
    users = ["Orlando", "Shiva", "Andrew", "Brendan", "Dave"];
    notAdded = ["Shannon", "Sarah", "Claire", "Vince", "Lance"];
    BFIntance = new BloomFilter(18);
  });

  it("Should Store and Check for items",function () {
    // body...
    _.each(users, function(user) {
      BFIntance.store(user);
    });
    expect(_.every(users, user => BFIntance.check(user))).to.equal(true);
  });

  it("Should not find items that were not stored", function(){
    expect(_.every(notAdded, user => !BFIntance.check(user))).to.equal(true);
  });
});