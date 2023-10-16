/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = []
    const obj = {}
    let sorted = ''
    for(let i=0;i<strs.length;i++) {
        sorted = strs[i].split('').sort().join('')
        if (sorted in obj) obj[sorted].push(strs[i])
        else obj[sorted] = [strs[i]]
    }
    const valuesArr = Object.values(obj)
    for (const item of valuesArr) {
        res.push(item)
    }
    return res;
};
