/** This method is responsible for comparing two strings and return the result based on the comparison */

const areStringEqual = function (firstString, secondString) {
    if (firstString !== secondString) {
        return false
    }
    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] !== secondString[i]) {
            return false
        }
    }
    return true
}

/** This method is responsible for calculating the hash for the given text using large prime number, random number and the text
 to search for
 */
const calculateHash = function (myText, largePrime, randomNumber) {
    let hash = 0
    for (let i = 0; i <= myText.length - 1; i++) {
        hash = (hash * randomNumber + myText.charCodeAt(i)) % largePrime
    }
    return hash
}

const searchText = function (sentence, stringToSearch) {
    let largePrime = 337
    let randomNumber = 50
    let stringPositions = []
    let stringToSearchHash = calculateHash(
        stringToSearch,
        largePrime,
        randomNumber
    )
    let text
    let sentenceHash
    // Loop through our sentence
    for (let i = 0; i <= sentence.length - stringToSearch.length; i++) {
        text = sentence.slice(i, i + stringToSearch.length)
        sentenceHash = calculateHash(text, largePrime, randomNumber)
        if (areStringEqual(text, stringToSearch)) {
            stringPositions.push({ position: i })
        }
        // If the hash is not same, then continue to next step
        if (stringToSearchHash !== sentenceHash) continue
    }
    return stringPositions
}

const performRabinKarpAlgorithm = (sentence, textToSearch) => {
    return searchText(sentence, textToSearch)
}
const matchingText = performRabinKarpAlgorithm(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    'typesetting'
)
console.log('Matched Text Position:', matchingText)