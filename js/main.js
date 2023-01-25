var text=prompt("enter the text");
var letter=prompt("enter the letter");
var count=0;

for(i=0;i<text.length;i++){
	if(letter==text.toLocaleLowerCase().charAt(i)){
		++count;
	}
}

document.write(`The letter ${letter} is ${count} times in ${text}`);