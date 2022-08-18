var frequencySort = function(s) {
    const charMap = s.split('').reduce((acc, cur) => {acc[cur] = (acc[cur] || 0) + 1; return acc} , {})

    const sortedArr = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);

    return sortedArr.reduce((acc, cur) => acc + cur.repeat(charMap[cur]) ,'')
};


// Heap solution

// var frequencySort = function(s) {
//     let map = new Map();
//     const pq = new MaxPriorityQueue();
//
//     for (let c of s){
//         if (map.has(c)) map.set(c, map.get(c) + 1);
//         else map.set(c, 1);
//     }
//
//     map.forEach((value, key) => pq.enqueue(key, value));
//
//     let ans = "";
//     while(!pq.isEmpty()){
//         let elem = pq.dequeue();
//         ans += elem.element.repeat(elem.priority);
//     }
//     return ans;
// };