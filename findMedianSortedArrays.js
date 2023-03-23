const findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2];

  const len = mergedArray.length;

  if (len === 1) {
    return mergedArray[0].toFixed(5);
  }

  if (len % 2 === 0) {
    const index = len / 2 - 1;
    const median = (mergedArray[index] + mergedArray[index + 1]) / 2;

    return median.toFixed(5);
  } else {
    const index = Math.ceil(len / 2);
    const median = mergedArray[index];

    return median.toFixed(5);
  }
};

const nums1 = [1, 2],
  nums2 = [3, 4];

const result = findMedianSortedArrays(nums1, nums2);

result;
