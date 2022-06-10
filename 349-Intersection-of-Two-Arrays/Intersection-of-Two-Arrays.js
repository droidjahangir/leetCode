var intersection = function(nums1, nums2) {
    let map = {}
    let intersectValue = []
    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = i
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]] !== undefined ){
            if (!intersectValue.includes(nums2[i])){
                intersectValue.push(nums2[i])
            }
        }
    }
    return intersectValue
};

const result = intersection([4,9,5], [9,4,9,8,4])
console.log('result : ', result)