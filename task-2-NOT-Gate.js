function findAndReplace(str) {
    let newStr = "";
    str = str.split("");
    str.map((item) => {
      if(item === "1") {item = 0} else if (item === "0") {item = 1}
        newStr += item;
    })
    return newStr;
}
console.log(findAndReplace("011x0x"));
