var nextGreaterElement = function(nums1, nums2) {
    const result = []
    for(const elem of nums1){
        const index = nums2.indexOf(elem)
        let greaterValue = -1
        for(let i = index; i<nums2.length; i++) {
            if(nums2[i]>elem) {
                greaterValue = nums2[i]
                break
            }
        }
        result.push(greaterValue)
    }
    return result
};