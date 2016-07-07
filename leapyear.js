var isLeap = function(num) {
  if ((num % 400) === 0 ) {
    return true;
  }
  if ((num % 100) === 0) { 
	 return false;  
  }
  if ((num % 4) === 0) {
    return true;
  } 
   return false;
}

/// -- do not edit below ---

describe('Leap year', function() {

  it('is not very common', function() {
    expect(isLeap(2015)).toBe(false);
  });

  it('is introduced every 4 years to adjust about a day', function() {
    expect(isLeap(2016)).toBe(true);
  });

  it('is skipped every 100 years to remove an extra day', function() {
    expect(isLeap(1900)).toBe(false);
  });

  it('is reintroduced every 400 years to adjust another day', function() {
    expect(isLeap(2000)).toBe(true);
  });

  // Feel free to enable the following tests to check some more examples
  describe('Additional example of a leap year that', function () {

    it('is not a leap year', function () {
      expect(isLeap(1978)).toBe(false);
    });

    it('is a common leap year', function () {
      expect(isLeap(1992)).toBe(true);
    });

    it('is skipped every 100 years', function () {
      expect(isLeap(2100)).toBe(false);
    });

    it('is reintroduced every 400 years', function () {
      expect(isLeap(2400)).toBe(true);
    });

  });

});

