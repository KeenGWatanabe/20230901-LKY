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
    else if(inputText.toLowerCase().indexOf("everything works")>-1||inputText.toLowerCase().indexOf("broken")>-1){
        	document.getElementById("answer").innerHTML=`Everything works, whether its water, electricity, gas, telephone, telexes, it just has to work.  If it doesn't work, I want to know why, and if I am not satisfied, and I often was not, the chief goes, and I have to find another chief.  Firing the chief is very simple." 1984`;
        }
    else if(inputText.toLowerCase().indexOf("interfering")>-1||inputText.toLowerCase().indexOf("private lives")>-1){
        	document.getElementById("answer").innerHTML=`“I am often accused of interfering in the private lives of citizens. Yes, if I did not, had I not done that, we wouldn't be here today. And I say without the slightest remorse, that we wouldn't be here, we would not have made economic progress, if we had not intervened on very personal matters - who your neighbour is, how you live, the noise you make, how you spit, or what language you use. We decide what is right. Never mind what the people think.”`;
        }
	else if(inputText.toLowerCase().indexOf("men")>-1&&inputText.toLowerCase().indexOf("equal")>-1||inputText.toLowerCase().indexOf("most unlikely")>-1){
			document.getElementById("answer").innerHTML=`I started off believing all men were equal. I now know that's the most unlikely thing ever to have been, because millions of years have passed over evolution, people have scattered across the face of this earth, been isolated from each other, developed independently, had different intermixtures between races, peoples, climates, soils... I didn't start off with that knowledge. But by observation, reading, watching, arguing, asking, and then bullying my way to the top, that is the conclusion I've come to.`;
		}
	else if(inputText.toLowerCase().indexOf("polling")>-1||inputText.toLowerCase().indexOf("weakness")>-1){
			document.getElementById("answer").innerHTML=`I ignore polling as a method of government. I think that shows a certain weakness of mind - an inability to chart a course whichever way the wind blows, whichever way the media encourages the people to go, you follow. If you can't force or are unwilling to force your people to follow you, with or without threats, you are not a leader.`;
		}	
	else if(inputText.toLowerCase().indexOf("great")>-1&&inputText.toLowerCase().indexOf("nation")>-1){
			document.getElementById("answer").innerHTML=`A nation is great not by its size alone. It is the will, the cohesion, the stamina, the discipline of its people and the quality of their leaders which ensure it an honourable place in history.`;
		}
	else if(inputText.toLowerCase().indexOf("dogs")>-1||	inputText.toLowerCase().indexOf("train adult")>-1){
			document.getElementById("answer").innerHTML=`Mine is a very matter-of-fact approach to the problem. If you can select a population and they're educated and they're properly brought up, then you don't have to use too much of the stick because they would already have been trained. It's like with dogs. You train it in a proper way from small. It will know that it's got to leave, go outside to pee and to defecate. No, we are not that kind of society. We had to train adult dogs who even today deliberately urinate in the lifts.`;
		}
	else if(inputText.toLowerCase().indexOf("life")>-1||inputText.toLowerCase().indexOf("continuous")>-1){
			document.getElementById("answer").innerHTML=`I believe that life is a process of continuous change and a constant struggle to make that change one for the better.`;
		}
	else if(inputText.toLowerCase().indexOf("task")>-1||inputText.toLowerCase().indexOf("job")>-1&&inputText.toLowerCase().indexOf("leader")>-1){
			document.getElementById("answer").innerHTML=`The task of the leaders must be to provide or create for them a strong framework within which they can learn, work hard, be productive and be rewarded accordingly. And this is not easy to achieve.<br>No, your job as a leader is to inspire and to galvanize, not to share your distraught thoughts. You make your people dispirited.`;
		}
	else if(inputText.toLowerCase().indexOf("successful")>-1&&inputText.toLowerCase().indexOf("society")>-1){
			document.getElementById("answer").innerHTML=`A society to be successful must maintain a balance between nurturing excellence and encouraging the average to improve.`;
		}					
	else if(inputText.toLowerCase().indexOf("shoot")>-1||inputText.toLowerCase().indexOf("Tiananmen")>-1){
			document.getElementById("answer").innerHTML=`He took over, and he said: 'If I have to shoot 200,000 students to save China from another 100 years of disorder, so be it.'" - Recalling how former Chinese leader Deng Xiaoping dealt with the 1989 Tiananmen Square protests.`;
		}
	else if(inputText.toLowerCase().indexOf("inequalities")>-1||inputText.toLowerCase().indexOf("wealth")>-1){
			document.getElementById("answer").innerHTML=`After trying out a number of ways to reduce inequalities and failing, I was gradually forced to conclude that the decisive factors were the people, their natural abilities, education and training. Knowledge and the possession of technology were vital for the creation of wealth.`;
		}	
	else if(inputText.toLowerCase().indexOf("political reform")>-1||inputText.toLowerCase().indexOf("liberalisation")>-1){
			document.getElementById("answer").innerHTML=`Political reform need not go hand in hand with economic liberalisation. I do not believe that if you are libertarian, full of diverse opinions, full of competing ideas in the market place, full of sound and fury, therefore you will succeed.`;
		}
	else if(inputText.toLowerCase().indexOf("cul de sac")>-1||inputText.toLowerCase().indexOf("chinese")>-1){
			document.getElementById("answer").innerHTML=`Supposing Catherine Lim was writing about me and not the prime minister...She would not dare, right? Because my posture, my response has been such that nobody doubts that if you take me on, I will put on knuckle-dusters and catch you in a cul de sac...Anybody who decides to take me on needs to put on knuckle dusters. If you think you can hurt me more than I can hurt you, try. There is no other way you can govern a Chinese society.`;
		}
		else if(inputText.toLowerCase().indexOf("millions")>-1
		||inputText.toLowerCase().indexOf("pay")>-1&&inputText.toLowerCase().indexOf("minister")>-1){
			document.getElementById("answer").innerHTML=`You know, the cure for all this talk is really a good dose of incompetent government. You get that alternative and you'll never put Singapore together again: Humpty Dumpty cannot be put together again... my asset values will disappear, my apartments will be worth a fraction of what they were, my ministers' jobs will be in peril, their security will be at risk and their women will become maids in other people's countries, foreign workers. I cannot have that!" - Justifying million-dollar pay hike for Singapore ministers`;
		}	
	else if(inputText.toLowerCase().indexOf("ruining singapore")>-1||inputText.toLowerCase().indexOf("freak election")>-1){
			document.getElementById("answer").innerHTML=`When you're Singapore's leader and your existence depends on performance - extraordinary performance, better than your competitors - when that performance disappears because the system on which it's been based becomes eroded, then you've lost everything... I try to tell the younger generation that and they say the old man is playing the same record, we've heard it all before. I happen to know how we got here and I know how we can unscramble it." - On one freak election result ruining Singapore`;
		}	
	else if(inputText.toLowerCase().indexOf("pragmatist")>-1||inputText.toLowerCase().indexOf("ideology")>-1){
			document.getElementById("answer").innerHTML=`We are pragmatists. We don't stick to any ideology. Does it work? Let's try it, and if it does work, fine, let's continue it. If it doesn't work, toss it out, try another one. We are not enamored with any ideology.`;
		}	
	else if(inputText.toLowerCase().indexOf("singapore")>-1&&inputText.toLowerCase().indexOf("govern")>-1){
			document.getElementById("answer").innerHTML=`Whoever governs Singapore must have that iron in him. Or give it up. This is not a game of cards! This is your life and mine! I've spent a whole lifetime building this and as long as I'm in charge, nobody is going to knock it down`;
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