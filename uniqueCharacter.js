/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    const set = new Set();
  const finalSet = new Set();
  s.split('').forEach(char => {
    if (set.has(char)) finalSet.delete(char);
    else {
      set.add(char);
      finalSet.add(char);
    }
  })
const iter = finalSet.values().next().value
return s.indexOf(iter)
};
