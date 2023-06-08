function hashtagGenerator(stringvalue) {

    stringvalue = stringvalue
            .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g,"") //removes punctuation 
            .replace(/\s+/g, " "); //removes space from punctation
    
    if (stringvalue.trim() === "") {
        return "Input does not contain words. Please enter words to hashtag it"
    } 

    let camelCase = stringvalue
                    .trim() // removes space around the words
                    .split(" ") // spilts the words in to array of words where there is a space
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // camelCasing the words after a space
                    .join(''); // joining the words
    let result =  `#${camelCase}` // adding the hashtag to the given word

    return result;
} 

var inputValue = document.getElementById("hashtag").value;
var generate = document.getElementById("generator");
var output = document.getElementById("newHashtag");
var reset = document.getElementById("reset");
const GENERATED_HASHTAG_SIZE_LIMIT = 140;

generate.addEventListener("click", function() {
    var inputValue = document.getElementById("hashtag").value;
    newHashtag = hashtagGenerator(inputValue);
    if (newHashtag.length <= GENERATED_HASHTAG_SIZE_LIMIT){
        output.textContent=newHashtag
    }
    else{
        output.textContent = "Generated Hashtag is longer than " + GENERATED_HASHTAG_SIZE_LIMIT + " characters. Please reduce input words"
    }
});

reset.addEventListener("click", function() {
    // resetting the input text box, when user clicks reset button
    if(reset.value != ""){
        reset.value= "";
    }
});









