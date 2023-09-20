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
        	document.getElementById("answer").innerHTML=`“I am often accused of interfering in the private lives of citizens. Yes, if I did not, had I not done that, we wouldn't be here today. And I say without the slightest remorse, that we wouldn't be here, we would not have made economic progress, if we had not intervened on very personal matters - who your neighbour is, how you live, the noise you make, how you spit, or what language you use. We decide what is right. Never mind what the people think.”The Straits Times, 20 April 1987`;
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
	else if(inputText.toLowerCase().indexOf("dogs")>-1||inputText.toLowerCase().indexOf("train adult")>-1){
			document.getElementById("answer").innerHTML=`Mine is a very matter-of-fact approach to the problem. If you can select a population and they're educated and they're properly brought up, then you don't have to use too much of the stick because they would already have been trained. It's like with dogs. You train it in a proper way from small. It will know that it's got to leave, go outside to pee and to defecate. No, we are not that kind of society. We had to train adult dogs who even today deliberately urinate in the lifts.`;
		}
	else if(inputText.toLowerCase().indexOf("life")>-1||inputText.toLowerCase().indexOf("continuous")>-1){
			document.getElementById("answer").innerHTML=`I believe that life is a process of continuous change and a constant struggle to make that change one for the better.<br>Every person, genius or moron, has a right to reproduce himself." Speech on the Abortion Bill, 29 December 1969, Lee Kuan Yew in his own words, 1959-1970<br>Life is not just eating, drinking, television and cinema...The human mind must be creative, must be self-generating; it cannot depend on just gadgets to amuse itself." Speech at Chinese New Year and Hari Raya Haji Celebrations held at Joo Seng Community Centre, 28th Feb 1970, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("task")>-1||inputText.toLowerCase().indexOf("job")>-1&&inputText.toLowerCase().indexOf("leader")>-1){
			document.getElementById("answer").innerHTML=`The task of the leaders must be to provide or create for them a strong framework within which they can learn, work hard, be productive and be rewarded accordingly. And this is not easy to achieve.<br>No, your job as a leader is to inspire and to galvanize, not to share your distraught thoughts. You make your people dispirited.<br>I do not yet know of a man who became a leader as a result of having undergone a leadership course." 1957, The Wit & Wisdom of Lee Kuan Yew<br>Amazingly, throughout most of the contemporary Western world leaders in government require no special training or qualification. Many get elected because they sound and look good on television. The results have been unhappy for their voters." 1996, The Wit & Wisdom of Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("successful")>-1&&inputText.toLowerCase().indexOf("society")>-1){
			document.getElementById("answer").innerHTML=`A society to be successful must maintain a balance between nurturing excellence and encouraging the average to improve.`;
		}					
	else if(inputText.toLowerCase().indexOf("shoot")>-1||inputText.toLowerCase().indexOf("tianan")>-1){
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
	else if(inputText.toLowerCase().indexOf("oxley")>-1||inputText.toLowerCase().indexOf("house")>-1){
			document.getElementById("answer").innerHTML=`The house will “be demolished immediately after my death or if my daughter, Wei Ling, would prefer to continue living in the original house, immediately after she moves out of the House”.

			“I would ask each of my children to ensure our wishes with respect to the demolition of the House be carried out...My view on this has been made public before and remains unchanged.” The Straits Times, April 12, 2015`;
		}	
	else if(inputText.toLowerCase().indexOf("duds")>-1||inputText.toLowerCase().indexOf("opposition")>-1){
			document.getElementById("answer").innerHTML=`What we are preventing is duds getting into Parliament and government. Any person of quality, we welcome him but we don't want duds. We don't want Chee Soon Juan, or J.B. Jeyaretnam. They're not going to build the country." Hard Truths to Keep Singapore Going<br>If we had considered them serious political figures, we would not have kept them politically alive for so long. We could have bankrupt them earlier.” - Straits Times, Sept 14 2003<br>And I don't think it's the numbers in the opposition which counts. It's the quality of the alternative which you put before the people". Transcript of ABC "Four Corners" Segment No.855, For Assembly in Sydney, recorded in Melbourne, Australia. Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("us presi")>-1||inputText.toLowerCase().indexOf("great")>-1||inputText.toLowerCase().indexOf("worst")>-1){
			document.getElementById("answer").innerHTML=`Great:But for the misfortune of Watergate, I would say Richard Nixon. He had a realistic view of the world. He was a great analyst, realistic, but also a tactician to get things done. But this need with wanting to know everything and to make sure he got re-elected became obsessive.<br>worst: My name is Jimmy Carter, I'm a peanut farmer, I'm running for president. The next thing you know, he was the president!`;
		}	
	else if(inputText.toLowerCase().indexOf("deng xiao")>-1||inputText.toLowerCase().indexOf("met")>-1){
			document.getElementById("answer").innerHTML=`I would say the greatest was Deng Xiaoping. At his age, to admit that he was wrong, that all these ideas, Marxism, Leninism, Maoism, they are just not working and have to be abandoned, you need a great man to do that...`;
		}
	else if(inputText.toLowerCase().indexOf("xi Jinpin")>-1){
			document.getElementById("answer").innerHTML=` would put him in Nelson Mandela's class of persons. A person with enormous emotional stability who does not allow his personal misfortunes or sufferings to affect his judgement. In other words, he is impressive." TIME Nov 19, 2007`;
		}
	else if(inputText.toLowerCase().indexOf("goh keng swee")>-1){
			document.getElementById("answer").innerHTML=`Of all my Cabinet colleagues, it was Goh Keng Swee who made the greatest difference to the outcome for Singapore...When he held a contrary view, he would challenge my decisions and make me reexamine the premises on which they were made. As a result, we reached better decisions for Singapore." Eulogy at the State Funeral service for Goh Keng Swee, May 23, 2010`;
		}
	else if(inputText.toLowerCase().indexOf("complace")>-1){
			document.getElementById("answer").innerHTML=`What I fear is complacency. When things always become better, people tend to want more for less work." Speech at the 10th Anniversary Celebrations of the Jalan Tenteram Community Centre, 27th June 1970 Lee Kuan Yew in his own words, 1959-1970`;
		}	
	else if(inputText.toLowerCase().indexOf("say no")>-1||inputText.toLowerCase().indexOf("saying no")>-1){
			document.getElementById("answer").innerHTML=`You lose nothing by being polite. The answer is 'No', but please say it politely and give the reasons... Explain to me why 'No'. Don't change 'No' to 'Yes'. Don't be a fool. If there was a good reason why it is 'No', it must remain 'No', but the man must be told politely." to Civil Servants at the Victoria Theatre, 30 Sep 1965, Lee Kuan Yew in his own words, 1959-1970`;
		}	
	else if(inputText.toLowerCase().indexOf("national service")>-1||inputText.toLowerCase().indexOf("NS men")>-1){
			document.getElementById("answer").innerHTML=`I have read several books written by generals about wars fought by other generals. The thing I am constantly reminded of is that from the moment the commander has pressed the button, control of the events goes over to the local commanders until the battle was over. During the heat of battle it is the captain, the lieutenant, the sergeant, the corporal, who makes the decisions." Speech at the Opening Ceremony of Outram Park Complex, 8th May 1970, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("eugenics")>-1||inputText.toLowerCase().indexOf("israel")>-1){
			document.getElementById("answer").innerHTML=`There are many sons of doctors who have married doctors. Those who married spouses who are not as bright are tearing their hair out because their children can’t make it. I have lived long enough to see all this play out.”

			“So when the graduate man does not want to marry a graduate woman, I tell him he’s a fool, stupid. You marry a non-graduate, you’re going to have problems, some children bright, some not bright. You’ll be tearing your hair out. you can’t miss. It’s like two dice. One is Jack, Queen, King, Ace, other also Jack, Queen, King, Ace. You throw a Jack, Queen, King, Ace against dice two, three, four, five, six, what do you get? You can’t get high pairs, let alone a full flush.” Hard Truths to Keep Singapore Going.<br>The Israelis are very smart... the rabbi in any Jewish society was often the most intelligent and well-read, most learned of all...the rabbi's children are much sought-after by successful Jews to bring good genes into the family. That's how they multiply, the bright ones multiply. That sums it up." Tom Plate's Conversations with Lee Kuan Yew `;
		}			
	else if(inputText.toLowerCase().indexOf("muslim")>-1||inputText.toLowerCase().indexOf("malay")>-1){
			document.getElementById("answer").innerHTML=`No, I’m not saying that. I think the Muslims socially do not cause any trouble, but they are distinct and separate.The generation that worked with me – Othman Wok, Rahim Ishak – that was before the wave came sweeping back, sweeping them; that generation integrated well. We drank beer, we went canvassing, we went electioneering, we ate together. Now they say, “Are the plates clean?” I said, “You know, same washing machine.” Halal, non-halal and so on, I mean, they are all divisive. They are distinguishing me from you: “I’m a believer, you are not.” That’s that. Nobody doubts the hygiene. It’s got nothing to do with hygiene, it’s got to do with the religious conviction that this is not something you do.”

			“In those days, you didn’t have a school tuckshop, so you bought two cents of nasi lemak and you ate it. And there was a kway teow man and so on. But now, you go to schools with Malay and Chinese, there’s a halal and non-halal segment and so too, the universities. And they tend to sit separately, not to be contaminated. All that becomes a social divide. Now I’m not saying right or wrong, I’m saying that’s the demands of the religion but the consequences are a veil across and I think it was designed to be so. Islam is exclusive.” Hard Truths to Keep Singapore Going.<br>We could not have held the society together if we had not made adjustments to the system that gives the Malays, although they are not as hardworking and capable as the other races, a fair share of the cake". Tom Plate's Conversations with Lee Kuan Yew `;
		}	
	else if(inputText.toLowerCase().indexOf("youth")>-1&&inputText.toLowerCase().indexOf("singapore")>-1){
			document.getElementById("answer").innerHTML=`No (it is not possible to influence young people), you can influence the basic attitudes from the day they are born to about 16 or 17. [..] They have a mind of their own and they are influenced by what they see around them and by their peers." One Man's View of the World.`;
		}
	else if(inputText.toLowerCase().indexOf("heaven")>-1){
			document.getElementById("answer").innerHTML=`I wish I can meet my wife in the hereafter, but I don’t think I will. I just cease to exist just as she has ceased to exist – otherwise the other world would be overpopulated." One Man's View of the World.

			john-lennon-imagine
			
			Because there is no Heaven. So John Lennon.`;
		}	
	else if(inputText.toLowerCase().indexOf("fiction")>-1||inputText.toLowerCase().indexOf("biograph")>-1){
			document.getElementById("answer").innerHTML=`Usually, I read biographies of interesting people. I am not attracted to novels – make-believe, or recreations of what people think life should be. " One Man's View of the World.`;
		}
	else if(inputText.toLowerCase().indexOf("slave")>-1||inputText.toLowerCase().indexOf("serfdom")>-1){
			document.getElementById("answer").innerHTML=`He prefers Frederick Hayek's The Road to Serfdom: "I believe Hayek was a very clear thinker and that he hit upon the eternal truth, explaning that the free market is necessary to get the economy right"`;
		}
	else if(inputText.toLowerCase().indexOf("golf")>-1||inputText.toLowerCase().indexOf("sloth")>-1){
			document.getElementById("answer").innerHTML=` I used to play golf, but found it did not give me vitality because it’s a slothful game… Nine holes of golf will take you one and a half, two hours. I run in 20 minutes, I feel better off. So the cost benefit made me drop golf. Hard Truths to Keep Singapore Going`;
		}	
	else if(inputText.toLowerCase().indexOf("love")>-1||inputText.toLowerCase().indexOf("believe")>-1){
			document.getElementById("answer").innerHTML=`I don’t believe in love at first sight. I think it’s a grave mistake. You’re attracted by physical characteristics and you will regret it. Hard Truths to Keep Singapore Going`;
		}
	else if(inputText.toLowerCase().indexOf("corporal")>-1||inputText.toLowerCase().indexOf("harsh")>-1&&inputText.toLowerCase().indexOf("punishment")>-1){
			document.getElementById("answer").innerHTML=`I have never understood why Western educationists are so much against corporal punishment. It did my fellow students and me no harm." 1998, The Wit & Wisdom of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("meditat")>-1||inputText.toLowerCase().indexOf("stress")>-1){
			document.getElementById("answer").innerHTML=` I used to meditate. I started meditation about 1992 when my friend, who was speaker of Parliament, retired, and was dying of lung cancer...I found my breathing slows down and I think my heartbeat goes down and my blood pressure goes down. So, I use that as a kind of escape from stress.`;
		}	
	else if(inputText.toLowerCase().indexOf("write")>-1||inputText.toLowerCase().indexOf("book")>-1){
			document.getElementById("answer").innerHTML=`Well, my purpose in writing my books is to get the average 'O' level graduates, which is Grade 10 graduates, to read it and understand it.`;
		}	
	else if(inputText.toLowerCase().indexOf("homo")>-1||inputText.toLowerCase().indexOf("gay")>-1){
			document.getElementById("answer").innerHTML=`No it’s not a lifestyle. You can read the books you want, all the articles. You know that there’s a genetic difference. They are born that way and that’s that. So if two men or two women are that way, just leave them alone." Hard Truths to Keep Singapore Going<br>If in fact it is true, and I have asked doctors this, that you are genetically born a homosexual - because that's the nature of the genetic random transmission of genes - you can't help it. So why should we criminalise it?" 2007, The Wit & Wisdom of Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("media")>-1||inputText.toLowerCase().indexOf("press")>-1){
			document.getElementById("answer").innerHTML=`Freedom of the press, freedom of the news media, must be subordinated to the overriding needs of the integrity of Singapore, and to the primacy of purpose of an elected government", Address To The General Assembly Of The International Press Institute At Helsinki, 9th June, 1971`;
		}	
	else if(inputText.toLowerCase().indexOf("mp")>-1||inputText.toLowerCase().indexOf("estate")>-1){
			document.getElementById("answer").innerHTML=`An MP must now not only be good at speaking but also at getting things done. When an estate is dirty, out of order, and rubbish not regularly and properly collected, that is when residents realise that without regular maintenance, the value of their flats will drop." 1992, The Wit & Wisdom of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("american")>-1){
			document.getElementById("answer").innerHTML=`The Americans are great missionaries. They have an irrepressible urge to convert others.", 1992, The Wit & Wisdom of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("fashion")>-1){
			document.getElementById("answer").innerHTML=`I'm not interested in changing either my suit or my car or whatver with every change in fashion. That's irrelevant. I don't judge myself or my friends by their fashions. Of course, I don't approve of people who are sloppy and unnecessarily shabby or dishevelled... But I'm not impressed by a $5,000 or $10,000 Armani suit." 1995,  The Wit & Wisdom of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("democracy")>-1){
			document.getElementById("answer").innerHTML=`But we either believe in democracy or we not. If we do, then, we must say categorically, without qualification, that no restraint from the any democratic processes, other than by the ordinary law of the land, should be allowed… If you believe in democracy, you must believe in it unconditionally. If you believe that men should be free, then, they should have the right of free association, of free speech, of free publication. Then, no law should permit those democratic processes to be set at nought.” - as an opposition leader, April 27, 1955`;
		}
	else if(inputText.toLowerCase().indexOf("repression")>-1||inputText.toLowerCase().indexOf("easier")>-1){
			document.getElementById("answer").innerHTML=`Repression, Sir is a habit that grows. I am told it is like making love-it is always easier the second time! The first time there may be pangs of conscience, a sense of guilt. But once embarked on this course with constant repetition you get more and more brazen in the attack. All you have to do is to dissolve organizations and societies and banish and detain the key political workers in these societies. Then miraculously everything is tranquil on the surface. Then an intimidated press and the government-controlled radio together can regularly sing your praises, and slowly and steadily the people are made to forget the evil things that have already been done, or if these things are referred to again they’re conveniently distorted and distorted with impunity, because there will be no opposition to contradict.” - as an opposition PAP member speaking to David Marshall, Singapore Legislative Assembly, Debates, 4 October, 1956`;
		}
	else if(inputText.toLowerCase().indexOf("art of")>-1||inputText.toLowerCase().indexOf("governance")>-1){
			document.getElementById("answer").innerHTML=`I have no headline material to offer you tonight. In fact, I believe that the art of Government is, in part, the art of not creating headlines in the world press." Speech at Foreign Correspondents Association, 16th Sep, 1959, Lee Kuan Yew in his own words, 1959-1970<br>f I were in authority in Singapore indefinitely, without having to ask those who are governing whether they like what is being done, then I have not the slightest doubt that I could govern much more effectively in their own interests." May, 1962, at the Royal Society of International Affairs, London, Lee Kuan Yew in his own words, 1959-1970`;
		}	
	else if(inputText.toLowerCase().indexOf("sleep")>-1||inputText.toLowerCase().indexOf("late")>-1){
			document.getElementById("answer").innerHTML=`Today, I was a bit late because I took some time in getting up; slept late last night; some work to be done; two functions in the evening. But that is important. I like to tell you this because I think this is what we all must do: 'sleep well of nights'. You know Shakespeare, 'Give me men that sleep well of nights'. That is what he said. I think it right. Men who worry, you know, read all this, and they start shouting all this they get worried themselves, night time comes, they can't sleep. Next morning they wake up, mind befuddled, wrong decisions, more trouble!" Tanjong Katong School, during tour of Mountbatten Constituency, 13th June, 1965 Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("funny")>-1||inputText.toLowerCase().indexOf("light hearted")>-1){
			document.getElementById("answer").innerHTML=`I would not call myself 'fun-loving' or 'light-hearted'. But I am not serious all the time. Everyone needs to have a good laugh now and then, to see the funny side of things, and to laugh at himself`;
		}
	else if(inputText.toLowerCase().indexOf("singaporean")>-1||inputText.toLowerCase().indexOf("cowpeh")>-1){
			document.getElementById("answer").innerHTML=`You know the Singaporean. He is a hard-working, industrious, rugged individual. Or we would not have made the grade. But let us also recognise that he is a champion grumbler. 1977 The Wit & Wisdom of Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("talent")>-1&&inputText.toLowerCase().indexOf("local")>-1){
			document.getElementById("answer").innerHTML=`Often, I tell my Ministers in the Cabinet that perhaps they are kind to me and allowed me to become the Prime Minister because I was born in Singapore - for majority of them, 60% are born in Malaysia", To representatives of leading organisations of German Industry and Commerce at Hotel Konigshof, Germany, 28th September 1970, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("baby bonus")>-1){
			document.getElementById("answer").innerHTML=`If I were in charge of Singapore today, I would introduce a baby bonus equal to two years’ worth of the average Singaporean’s salary." One Man's View of the World.`;
		}	
	else if(inputText.toLowerCase().indexOf("Tussaud")>-1){
			document.getElementById("answer").innerHTML=`When I visited Madame Tussaud's as a student in the 1940s...there were two groups of figures: the famous and the notorious, either British kings and famous leaders, or notorious murderers. I hope Madame Tussaud's will not put my likeness too close to the notorious." 1998 The Wit & Wisdom of Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("anger")>-1||inputText.toLowerCase().indexOf("temper")>-1){
			document.getElementById("answer").innerHTML=`I have never, I never try to lose my temper. Maybe I have occasionally, but I try to control it...If I am really angry, my body language will show that I am most dissatisfied" Tom Plate's Conversations with Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("critics")>-1||inputText.toLowerCase().indexOf("oppose")>-1){
			document.getElementById("answer").innerHTML=`Not all who oppose the PAP are communists; some are communists, some reactionaries, some opportunists and some merely confused." 1961, The Wit & Wisdom of Lee Kuan Yew`;
		}			
	else if(inputText.toLowerCase().indexOf("people")>-1||inputText.toLowerCase().indexOf("vision")>-1){
			document.getElementById("answer").innerHTML=`You've got to do one of two things when you've got to keep people happy: either, give them something that will satisfy them, better food, better clothes, better homes; or if you can't do that, then give them the vision of greatness to come". Luncheon held by the Australian Institue of Management at the Australia Hotel, Sydney, Australia, 22 March, 1965, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("multiparty")>-1){
			document.getElementById("answer").innerHTML=`If all the 300 (top civil servants and political elite) were to crash in one jumbo jet, then Singapore will disintegrate". 197`;
		}
	else if(inputText.toLowerCase().indexOf("no")>-1||inputText.toLowerCase().indexOf("good")>-1&&inputText.toLowerCase().indexOf("news")>-1){
			document.getElementById("answer").innerHTML=`I have always thought it strange that a country figures prominently in the world press mainly when it is in trouble...Nobody in the rest of the world heard much about Singapore until it was captured by the Japanese in 1942 or again until there were riots in 1955 and 1956 in the course of one of which two members of your fraternity were killed. I have come to believe that, so far as the foreign press is concerned, no news is good news." Speech at Foreign Correspondents Association, 16th Sep, 1959, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("laurels")>-1&&inputText.toLowerCase().indexOf("rest")>-1){
			document.getElementById("answer").innerHTML=`Rest on laurels? I wish I could do that. No, you rest when you're dead". 1978, The Wit & Wisdom`;
		}	
	else if(inputText.toLowerCase().indexOf("correct")>-1){
			document.getElementById("answer").innerHTML=`I always tried to be correct, not politically correct." 2000 The Wit & Wisdom `;
		}
	else if(inputText.toLowerCase().indexOf("nanny")>-1&&inputText.toLowerCase().indexOf("state")>-1){
			document.getElementById("answer").innerHTML=`If Singapore is a nanny state, then I am proud to have fostered one. (From Third World to First, The Singapore Story: 1965-2000)`;
		}
	else if(inputText.toLowerCase().indexOf("afraid")>-1||inputText.toLowerCase().indexOf("weak")>-1){
			document.getElementById("answer").innerHTML=`I have never been over concerned or obsessed with opinion polls or popularity polls. I think a leader who is, is a weak leader. Between being loved and being feared, I have always believed Machiavelli was right. If nobody is afraid of me, I’m meaningless. The Singapore story: memoirs of Lee Kuan Yew`;
		}	
		else if(inputText.toLowerCase().indexOf("car")>-1||inputText.toLowerCase().indexOf("civil service")>-1){
			document.getElementById("answer").innerHTML=`The theory of the democratic state is that there is a good motor car in good mechanical condition, with mechanics, fitters and so on to keep it sound. And there is a driver there to take the minister where he wants to go. It is for the minister, having been elected by the people, to decide where the driver is to go and how and by what route. It is the business of the civil service - the driver, the fitters and the rest - to keep that car in sound mechanical condition." The Wit & Wisdom`;
		}	
		else if(inputText.toLowerCase().indexOf("poor")>-1||inputText.toLowerCase().indexOf("manna")>-1){
			document.getElementById("answer").innerHTML=`The poor know that you don't get manna falling from heaven, not in Singapore anyway", 1976, The Wit & Wisdom `;
		}
		else if(inputText.toLowerCase().indexOf("stooge")>-1||inputText.toLowerCase().indexOf("nobody")>-1){
			document.getElementById("answer").innerHTML=`I am nobody's stooge. I am not here to play somebody else's game. I have a few million people's lives to account for. And Singapore will survive will trade with the whole world and will remain non Communist", Press Conference at City Hall, 26th August 1965, Lee Kuan Yew in his own words, 1959-1970`;
		}
		else if(inputText.toLowerCase().indexOf("survival")>-1||inputText.toLowerCase().indexOf("priorities")>-1){
			document.getElementById("answer").innerHTML=`What are our priorities? First, the welfare, the survival of the people. Then, democratic norms and processes which from time to time we have to suspend.”

			- 1986 National Day Rally`;
		}
		else if(inputText.toLowerCase().indexOf("apologies")>-1||inputText.toLowerCase().indexOf("pap")>-1){
			document.getElementById("answer").innerHTML=` I make no apologies that the PAP is the Government and the Government is the PAP. Petir, 1982`;
		}
		else if(inputText.toLowerCase().indexOf("grave")>-1||inputText.toLowerCase().indexOf("sick bed")>-1){
			document.getElementById("answer").innerHTML=`Even from my sick bed, even if you are going to lower me into the grave and I feel something is going wrong, I will get up. (1988 National Day Rally)`;
		}
		else if(inputText.toLowerCase().indexOf("repent")>-1||inputText.toLowerCase().indexOf("aljunied")>-1){
			document.getElementById("answer").innerHTML=` If Aljunied decides to go that way, well Aljunied has five years to live and repent, General Elections 2011<br>At the end of the day, if you are in Aljunied, ask yourself: Do you want one MP, one Non-Constituency MP, one celebrity who has been away 30 years, and two unknowns to look after you? Or would you prefer me and my hand-picked colleagues?" General Elections 2011`;
		}
		else if(inputText.toLowerCase().indexOf("colleague")>-1||inputText.toLowerCase().indexOf("intimitat")>-1){
			document.getElementById("answer").innerHTML=`My colleagues are not intimidated by me. Far from it. They speak their minds. Nothing has happened to them. But if we allow vicious, evil attacks to pass unchallenged - then the whole system must be undermined." 1988 The Wit & Wisdom`;
		}
		else if(inputText.toLowerCase().indexOf("accused")>-1||inputText.toLowerCase().indexOf("speak")>-1){
			document.getElementById("answer").innerHTML=`I have been accused of many things in my life, but not even my worst enemy has ever accused me of being afraid to speak my mind." 1955, The Wit & Wisdom`;
		}
		else if(inputText.toLowerCase().indexOf("vote")>-1||inputText.toLowerCase().indexOf("erratic")>-1){
			document.getElementById("answer").innerHTML=`One-man-one-vote is a most difficult form of government.. Results can be erratic.” -  Dec 19 1984`;
		}
		else if(inputText.toLowerCase().indexOf("hard truths")>-1){
			document.getElementById("answer").innerHTML=`Hard Truths was a book based on 32 hours of interviews over a period of two years. I made this one comment on the Muslims integrating with other communities probably two or three years ago. Ministers and MPs, both Malay and non-Malay, have since told me that Singapore Malays have indeed made special efforts to integrate with the other communities, especially since 9/11, and that my call is out of date. I stand corrected, but only just this instance! I hope that this trend will continue in the future.`;
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