/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

  const listS = s.split("");
  const listT = t.split("");
  if (listS.length !== listT.length) return false;
  // console.log("listS : ", listS);

  for (let i = 0; i < listT.length; i++) {
    const index = listS.indexOf(listT[i]); // true

    // console.log("remove :", listT[i]);
    // console.log("index from S :", index);
    if (index === -1) {
      return false;
    }

    listS.splice(index, 1);
    // console.log("listS after remove : ", listS);
  }
  if (listS.length === 0) {
    return true;
  }
  return false;
};


