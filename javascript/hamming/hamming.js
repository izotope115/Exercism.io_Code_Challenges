var Hamming = function() {};
Hamming.prototype.compute = function(strand1, strand2) {

  var first = strand1.length;
  var second = strand2.length;

  var max = Math.max(first, second);
  var index = -1;
  var hamming = -0;

      if (first == second) {
        hamming = 0;
      }

      else if (first !== second) {
        throw new Error('DNA strands must be of equal length.');
      }

      while (++index < max) {
          if (strand1[index] != strand2[index]) hamming++;
      }

      return hamming;
};

module.exports = Hamming;