function countBs(str) {
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (element == "B") counter++;
    }

    return counter;
}

function countChar(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (element == char) counter++;
    }

    return counter;
}

function countBs(str) {
    return countChar(str, "B");
}