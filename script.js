const Fuse = require('fuse.js');
// >-1 means any character after accepted, "i " must be only I in a sentence
function myFunction() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
		} 
	else if(inputText.toLowerCase().indexOf("thank you")>-1){
		document.getElementById("answer").innerHTML="You are welcome.不用客气。";
		}
    else if(inputText.toLowerCase().indexOf("everything works")>-1){
        document.getElementById("answer").innerHTML=`Everything works, whether its water, electricity, gas, telephone, telexes, it just has to work.  If it doesn't work, I want to know why, and if I am not satisfied, and I often was not, the chief goes, and I have to find another chief.  Firing the chief is very simple." 1984`;
        }
    else if(inputText.toLowerCase().indexOf("interfering in")>-1||inputText.toLowerCase().indexOf("private lives")>-1){
        document.getElementById("answer").innerHTML=`“I am often accused of interfering in the private lives of citizens. Yes, if I did not, had I not done that, we wouldn't be here today. And I say without the slightest remorse, that we wouldn't be here, we would not have made economic progress, if we had not intervened on very personal matters - who your neighbour is, how you live, the noise you make, how you spit, or what language you use. We decide what is right. Never mind what the people think.”`;
        }
	else if(inputText.toLowerCase().indexOf("all men were equal")>-1||inputText.toLowerCase().indexOf("most unlikely thing")>-1){
				document.getElementById("answer").innerHTML=`I started off believing all men were equal. I now know that's the most unlikely thing ever to have been, because millions of years have passed over evolution, people have scattered across the face of this earth, been isolated from each other, developed independently, had different intermixtures between races, peoples, climates, soils... I didn't start off with that knowledge. But by observation, reading, watching, arguing, asking, and then bullying my way to the top, that is the conclusion I've come to.`;
					}
        //Sample codes	
	else if(inputText.toLowerCase().indexOf("x")>-1||inputText.toLowerCase().indexOf("xx")>-1){
		document.getElementById("answer").innerHTML=``;
		}	
	else if(inputText.toLowerCase().indexOf("xx")>-1&&inputText.toLowerCase().indexOf("xx")>-1){
		document.getElementById("answer").innerHTML=`<a href="">mt</a>`;
									}	
	else if(inputText.toLowerCase().indexOf("xxx")>-1){
			document.getElementById("answer").innerHTML=`<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>`; 	
	
	} else {document.getElementById("answer").innerHTML='Please rephrase your question,<br>not in our database yet, <br>or out-of-scope for FreeMindson<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>';      
	}

	
}