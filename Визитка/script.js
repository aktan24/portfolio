// $("body").css({"background-color":"#fff"})

function getCount(str) {
    // debugger
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    str.split("").forEach((lett) => {
    if (vowels.includes(lett)) {
    vowelsCount += 1;
    }});
    console.log(vowelsCount);
}

getCount("o a kak ushakov lil vo kashu kakao")