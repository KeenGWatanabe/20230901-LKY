//const Fuse = require('fuse.js');
// >-1 means any character after accepted, "i " must be only I in a sentence
function lky() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
		} 
	else if(inputText.toLowerCase().indexOf("thank you")>-1){
			document.getElementById("answer").innerHTML="You are welcome.不用客气。";
		}
    else if(inputText.toLowerCase().indexOf("civil service")>-1&&inputText.toLowerCase().indexOf("singapore")>-1){
        	document.getElementById("answer").innerHTML=`Everything works, whether its water, electricity, gas, telephone, telexes, it just has to work.  If it doesn't work, I want to know why, and if I am not satisfied, and I often was not, the chief goes, and I have to find another chief.  Firing the chief is very simple." 1984`;
		}
    else if(inputText.toLowerCase().indexOf("interfering")>-1&&inputText.toLowerCase().indexOf("lives")>-1||inputText.toLowerCase().indexOf("interfering")>-1&&inputText.toLowerCase().indexOf("citizens")>-1){
        	document.getElementById("answer").innerHTML=`“I am often accused of interfering in the private lives of citizens. Yes, if I did not, had I not done that, we wouldn't be here today. And I say without the slightest remorse, that we wouldn't be here, we would not have made economic progress, if we had not intervened on very personal matters - who your neighbour is, how you live, the noise you make, how you spit, or what language you use. We decide what is right. Never mind what the people think.”The Straits Times, 20 April 1987`;
        }
	else if(inputText.toLowerCase().indexOf("men")>-1&&inputText.toLowerCase().indexOf("equal")>-1||inputText.toLowerCase().indexOf("equality")>-1){
			document.getElementById("answer").innerHTML=`I started off believing all men were equal. I now know that's the most unlikely thing ever to have been, because millions of years have passed over evolution, people have scattered across the face of this earth, been isolated from each other, developed independently, had different intermixtures between races, peoples, climates, soils... I didn't start off with that knowledge. But by observation, reading, watching, arguing, asking, and then bullying my way to the top, that is the conclusion I've come to.Memoirs of LKY,1998`;
		}
	else if(inputText.toLowerCase().indexOf("polling")>-1||inputText.toLowerCase().indexOf("polls")>-1||inputText.toLowerCase().indexOf("opinion")>-1){
			document.getElementById("answer").innerHTML=`I ignore polling as a method of government. I think that shows a certain weakness of mind - an inability to chart a course whichever way the wind blows, whichever way the media encourages the people to go, you follow. If you can't force or are unwilling to force your people to follow you, with or without threats, you are not a leader.Memoirs of LKY,1998`;
		}	
	else if(inputText.toLowerCase().indexOf("great")>-1&&inputText.toLowerCase().indexOf("nation")>-1){
			document.getElementById("answer").innerHTML=`A nation is great not by its size alone. It is the will, the cohesion, the stamina, the discipline of its people and the quality of their leaders which ensure it an honourable place in history.Memoirs of LKY,1998`;
		}
	else if(inputText.toLowerCase().indexOf("dealing")>-1||inputText.toLowerCase().indexOf("kind of society")>-1||inputText.toLowerCase().indexOf("gracious")>-1&&inputText.toLowerCase().indexOf("society")>-1){
			document.getElementById("answer").innerHTML=`Mine is a very matter-of-fact approach to the problem. If you can select a population and they're educated and they're properly brought up, then you don't have to use too much of the stick because they would already have been trained. It's like with dogs. You train it in a proper way from small. It will know that it's got to leave, go outside to pee and to defecate. No, we are not that kind of society. We had to train adult dogs who even today deliberately urinate in the lifts.Memoirs of LKY,1998`;
		}
	else if(inputText.toLowerCase().indexOf("life")>-1||inputText.toLowerCase().indexOf("abortion")>-1){
			document.getElementById("answer").innerHTML=`I believe that life is a process of continuous change and a constant struggle to make that change one for the better.<br>Every person, genius or moron, has a right to reproduce himself." Speech on the Abortion Bill, 29 December 1969, Lee Kuan Yew in his own words, 1959-1970<br>Life is not just eating, drinking, television and cinema...The human mind must be creative, must be self-generating; it cannot depend on just gadgets to amuse itself." Speech at Chinese New Year and Hari Raya Haji Celebrations held at Joo Seng Community Centre, 28th Feb 1970, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("task")>-1||inputText.toLowerCase().indexOf("job")>-1&&inputText.toLowerCase().indexOf("leader")>-1){
			document.getElementById("answer").innerHTML=`The task of the leaders must be to provide or create for them a strong framework within which they can learn, work hard, be productive and be rewarded accordingly. And this is not easy to achieve.<br>No, your job as a leader is to inspire and to galvanize, not to share your distraught thoughts. You make your people dispirited.<br>I do not yet know of a man who became a leader as a result of having undergone a leadership course." 1957, The Wit & Wisdom of Lee Kuan Yew<br>Amazingly, throughout most of the contemporary Western world leaders in government require no special training or qualification. Many get elected because they sound and look good on television. The results have been unhappy for their voters." 1996, The Wit & Wisdom of Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("success")>-1&&inputText.toLowerCase().indexOf("society")>-1){
			document.getElementById("answer").innerHTML=`A society to be successful must maintain a balance between nurturing excellence and encouraging the average to improve.Memoirs of LKY,1998`;
		}					
	else if(inputText.toLowerCase().indexOf("shoot")>-1||inputText.toLowerCase().indexOf("tianan")>-1||inputText.toLowerCase().indexOf("deng xiaopin")>-1){
			document.getElementById("answer").innerHTML=`He took over, and he said: 'If I have to shoot 200,000 students to save China from another 100 years of disorder, so be it.'" - Recalling how former Chinese leader Deng Xiaoping dealt with the 1989 Tiananmen Square protests.Memoirs of LKY,1998`;
		}
	else if(inputText.toLowerCase().indexOf("reform")>-1||inputText.toLowerCase().indexOf("liberali")>-1){
			document.getElementById("answer").innerHTML=`Political reform need not go hand in hand with economic liberalisation. I do not believe that if you are libertarian, full of diverse opinions, full of competing ideas in the market place, full of sound and fury, therefore you will succeed.Memoirs of LKY,1998`;
		}
	else if(inputText.toLowerCase().indexOf("catherine lim")>-1|inputText.toLowerCase().indexOf("chinese")>-1&&inputText.toLowerCase().indexOf("govern")>-1){
			document.getElementById("answer").innerHTML=`Supposing Catherine Lim was writing about me and not the prime minister...She would not dare, right? Because my posture, my response has been such that nobody doubts that if you take me on, I will put on knuckle-dusters and catch you in a cul de sac...Anybody who decides to take me on needs to put on knuckle dusters. If you think you can hurt me more than I can hurt you, try. There is no other way you can govern a Chinese society. Memoirs of LKY,1998`;
		}
	else if(inputText.toLowerCase().indexOf("million")>-1
		||inputText.toLowerCase().indexOf("pay")>-1&&inputText.toLowerCase().indexOf("minister")>-1){
			document.getElementById("answer").innerHTML=`You know, the cure for all this talk is really a good dose of incompetent government. You get that alternative and you'll never put Singapore together again: Humpty Dumpty cannot be put together again... my asset values will disappear, my apartments will be worth a fraction of what they were, my ministers' jobs will be in peril, their security will be at risk and their women will become maids in other people's countries, foreign workers. I cannot have that!" - Justifying million-dollar pay hike for Singapore ministers. Hard Truths, LKY`;
		}	
	else if(inputText.toLowerCase().indexOf("ruin")>-1&&inputText.toLowerCase().indexOf("singapore")>-1||inputText.toLowerCase().indexOf("freak election")>-1){
			document.getElementById("answer").innerHTML=`When you're Singapore's leader and your existence depends on performance - extraordinary performance, better than your competitors - when that performance disappears because the system on which it's been based becomes eroded, then you've lost everything... I try to tell the younger generation that and they say the old man is playing the same record, we've heard it all before. I happen to know how we got here and I know how we can unscramble it." - On one freak election result ruining Singapore. LKY`;
		}	
	else if(inputText.toLowerCase().indexOf("pragmati")>-1||inputText.toLowerCase().indexOf("ideology")>-1||inputText.toLowerCase().indexOf("bullshit")>-1){
			document.getElementById("answer").innerHTML=`We are pragmatists. We don't stick to any ideology. Does it work? Let's try it, and if it does work, fine, let's continue it. If it doesn't work, toss it out, try another one. We are not enamored with any ideology. LKY`;
		}	
	else if(inputText.toLowerCase().indexOf("singapore")>-1&&inputText.toLowerCase().indexOf("govern")>-1){
			document.getElementById("answer").innerHTML=`Whoever governs Singapore must have that iron in him. Or give it up. This is not a game of cards! This is your life and mine! I've spent a whole lifetime building this and as long as I'm in charge, nobody is going to knock it down. LKY<br>If I were in authority in Singapore indefinitely, without having to ask those who are governing whether they like what is being done, then I have not the slightest doubt that I could govern much more effectively in their own interests." May, 1962, at the Royal Society of International Affairs, London, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("oxley")>-1||inputText.toLowerCase().indexOf("house")>-1){
			document.getElementById("answer").innerHTML=`With the Japanese out of the way, many houses became vacant,..we came across two identical houses - Numbers 38 and 40 - built by a Jewish merchant, who named them Castor and Pollux. They were empty except for some heavy furniture, and we decided to make a bid for the tenancy of Number 38. During the 1940s<br>The house will “be demolished immediately after my death or if my daughter, Wei Ling, would prefer to continue living in the original house, immediately after she moves out of the House”.

			“I would ask each of my children to ensure our wishes with respect to the demolition of the House be carried out...My view on this has been made public before and remains unchanged.” The Straits Times, April 12, 2015`;
		}	
	else if(inputText.toLowerCase().indexOf("duds")>-1||inputText.toLowerCase().indexOf("opposition")>-1){
			document.getElementById("answer").innerHTML=`What we are preventing is duds getting into Parliament and government. Any person of quality, we welcome him but we don't want duds. We don't want Chee Soon Juan, or J.B. Jeyaretnam. They're not going to build the country." Hard Truths to Keep Singapore Going<br>If we had considered them serious political figures, we would not have kept them politically alive for so long. We could have bankrupt them earlier.” - Straits Times, Sept 14 2003<br>And I don't think it's the numbers in the opposition which counts. It's the quality of the alternative which you put before the people". Transcript of ABC "Four Corners" Segment No.855, For Assembly in Sydney, recorded in Melbourne, Australia. Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("US presi")>-1&&inputText.toLowerCase().indexOf("great")>-1||inputText.toLowerCase().indexOf("worst")>-1){
			document.getElementById("answer").innerHTML=`Great:But for the misfortune of Watergate, I would say Richard Nixon. He had a realistic view of the world. He was a great analyst, realistic, but also a tactician to get things done. But this need with wanting to know everything and to make sure he got re-elected became obsessive.<br>worst: My name is Jimmy Carter, I'm a peanut farmer, I'm running for president. The next thing you know, he was the president!`;
		}	
	else if(inputText.toLowerCase().indexOf("deng xiao")>-1){
			document.getElementById("answer").innerHTML=`I would say the greatest was Deng Xiaoping. At his age, to admit that he was wrong, that all these ideas, Marxism, Leninism, Maoism, they are just not working and have to be abandoned, you need a great man to do that...`;
		}
	else if(inputText.toLowerCase().indexOf("xi jinpin")>-1||inputText.toLowerCase().indexOf("xi jingpin")>-1){
			document.getElementById("answer").innerHTML=` would put him in Nelson Mandela's class of persons. A person with enormous emotional stability who does not allow his personal misfortunes or sufferings to affect his judgement. In other words, he is impressive." TIME Nov 19, 2007`;
		}
	else if(inputText.toLowerCase().indexOf("goh keng swee")>-1||inputText.toLowerCase().indexOf("challenge")>-1){
			document.getElementById("answer").innerHTML=`Of all my Cabinet colleagues, it was Goh Keng Swee who made the greatest difference to the outcome for Singapore...When he held a contrary view, he would challenge my decisions and make me reexamine the premises on which they were made. As a result, we reached better decisions for Singapore." Eulogy at the State Funeral service for Goh Keng Swee, May 23, 2010`;
		}
	else if(inputText.toLowerCase().indexOf("afraid")>-1||inputText.toLowerCase().indexOf("fear")>-1||inputText.toLowerCase().indexOf("weak")>-1){
			document.getElementById("answer").innerHTML=`What I fear is complacency. When things always become better, people tend to want more for less work." Speech at the 10th Anniversary Celebrations of the Jalan Tenteram Community Centre, 27th June 1970 Lee Kuan Yew in his own words, 1959-1970<br>I have never been over concerned or obsessed with opinion polls or popularity polls. Between being loved and being feared, I have always believed Machiavelli was right. If nobody is afraid of me, I’m meaningless. The Singapore story: memoirs of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("no")>-1&&inputText.toLowerCase().indexOf("say")>-1||inputText.toLowerCase().indexOf("fool")>-1){
			document.getElementById("answer").innerHTML=`You lose nothing by being polite. The answer is 'No', but please say it politely and give the reasons... Explain to me why 'No'. Don't change 'No' to 'Yes'. Don't be a fool. If there was a good reason why it is 'No', it must remain 'No', but the man must be told politely." to Civil Servants at the Victoria Theatre, 30 Sep 1965, Lee Kuan Yew in his own words, 1959-1970`;
		}	
	else if(/\bns\b/.test(inputText.toLowerCase())||inputText.toLowerCase().indexOf("national service")>-1||inputText.toLowerCase().indexOf("enlistment")>-1){
			document.getElementById("answer").innerHTML=`I have read several books written by generals about wars fought by other generals. The thing I am constantly reminded of is that from the moment the commander has pressed the button, control of the events goes over to the local commanders until the battle was over. During the heat of battle it is the captain, the lieutenant, the sergeant, the corporal, who makes the decisions." Speech at the Opening Ceremony of Outram Park Complex, on NS, 8th May 1970, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("eugenic")>-1||inputText.toLowerCase().indexOf("israel")>-1||inputText.toLowerCase().indexOf("doctor")>-1||inputText.toLowerCase().indexOf("gene")>-1){
			document.getElementById("answer").innerHTML=`There are many sons of doctors who have married doctors. Those who married spouses who are not as bright are tearing their hair out because their children can’t make it. I have lived long enough to see all this play out.”

			“So when the graduate man does not want to marry a graduate woman, I tell him he’s a fool, stupid. You marry a non-graduate, you’re going to have problems, some children bright, some not bright. You’ll be tearing your hair out. you can’t miss. It’s like two dice. One is Jack, Queen, King, Ace, other also Jack, Queen, King, Ace. You throw a Jack, Queen, King, Ace against dice two, three, four, five, six, what do you get? You can’t get high pairs, let alone a full flush.” Hard Truths to Keep Singapore Going.<br>The Israelis are very smart... the rabbi in any Jewish society was often the most intelligent and well-read, most learned of all...the rabbi's children are much sought-after by successful Jews to bring good genes into the family. That's how they multiply, the bright ones multiply. That sums it up." Tom Plate's Conversations with Lee Kuan Yew `;
		}			
	else if(/\bmalays\b/.test(inputText.toLowerCase())||inputText.toLowerCase().indexOf("muslim")>-1){
			document.getElementById("answer").innerHTML=`No, I’m not saying that. I think the Muslims socially do not cause any trouble, but they are distinct and separate.The generation that worked with me – Othman Wok, Rahim Ishak – that was before the wave came sweeping back, sweeping them; that generation integrated well. We drank beer, we went canvassing, we went electioneering, we ate together. Now they say, “Are the plates clean?” I said, “You know, same washing machine.” Halal, non-halal and so on, I mean, they are all divisive. They are distinguishing me from you: “I’m a believer, you are not.” That’s that. Nobody doubts the hygiene. It’s got nothing to do with hygiene, it’s got to do with the religious conviction that this is not something you do.”

			“In those days, you didn’t have a school tuckshop, so you bought two cents of nasi lemak and you ate it. And there was a kway teow man and so on. But now, you go to schools with Malay and Chinese, there’s a halal and non-halal segment and so too, the universities. And they tend to sit separately, not to be contaminated. All that becomes a social divide. Now I’m not saying right or wrong, I’m saying that’s the demands of the religion but the consequences are a veil across and I think it was designed to be so. Islam is exclusive.” Hard Truths to Keep Singapore Going.<br>We could not have held the society together if we had not made adjustments to the system that gives the Malays, although they are not as hardworking and capable as the other races, a fair share of the cake". Tom Plate's Conversations with Lee Kuan Yew `;
		}	
	else if(inputText.toLowerCase().indexOf("youth")>-1&&inputText.toLowerCase().indexOf("singapore")>-1){
			document.getElementById("answer").innerHTML=`No (it is not possible to influence young people), you can influence the basic attitudes from the day they are born to about 16 or 17. [..] They have a mind of their own and they are influenced by what they see around them and by their peers." One Man's View of the World.`;
		}
	else if(inputText.toLowerCase().indexOf("heaven")>-1||inputText.toLowerCase().indexOf("afterlife")>-1){
			document.getElementById("answer").innerHTML=`I wish I can meet my wife in the hereafter, but I don’t think I will. I just cease to exist just as she has ceased to exist – otherwise the other world would be overpopulated." One Man's View of the World.
			<br>john-lennon-imagine - Because there is no Heaven. So John Lennon.`;
		}	
	else if(inputText.toLowerCase().indexOf("fiction")>-1||inputText.toLowerCase().indexOf("biograph")>-1||inputText.toLowerCase().indexOf("read")>-1){
			document.getElementById("answer").innerHTML=`Usually, I read biographies of interesting people. I am not attracted to novels – make-believe, or recreations of what people think life should be. " One Man's View of the World.`;
		}
	else if(inputText.toLowerCase().indexOf("truth")>-1&&/\bthe\b/.test(inputText.toLowerCase())){
			document.getElementById("answer").innerHTML=`I prefer Frederick Hayek's The Road to Serfdom: "I believe Hayek was a very clear thinker and that he hit upon the eternal truth, explaning that the free market is necessary to get the economy right" LKY`;
		}
	else if(inputText.toLowerCase().indexOf("golf")>-1||inputText.toLowerCase().indexOf("cost benefit")>-1){
			document.getElementById("answer").innerHTML=` I used to play golf, but found it did not give me vitality because it’s a slothful game… Nine holes of golf will take you one and a half, two hours. I run in 20 minutes, I feel better off. So the cost benefit made me drop golf. Hard Truths to Keep Singapore Going`;
		}	
	else if(inputText.toLowerCase().indexOf("love")>-1&&inputText.toLowerCase().indexOf("believe")>-1){
			document.getElementById("answer").innerHTML=`I don’t believe in love at first sight. I think it’s a grave mistake. You’re attracted by physical characteristics and you will regret it. Hard Truths to Keep Singapore Going`;
		}
	else if(inputText.toLowerCase().indexOf("corporal")>-1||inputText.toLowerCase().indexOf("harsh")>-1&&inputText.toLowerCase().indexOf("punishment")>-1){
			document.getElementById("answer").innerHTML=`I have never understood why Western educationists are so much against corporal punishment. It did my fellow students and me no harm." 1998, The Wit & Wisdom of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("meditat")>-1||inputText.toLowerCase().indexOf("stress")>-1){
			document.getElementById("answer").innerHTML=` I used to meditate. I started meditation about 1992 when my friend, who was speaker of Parliament, retired, and was dying of lung cancer...I found my breathing slows down and I think my heartbeat goes down and my blood pressure goes down. So, I use that as a kind of escape from stress.`;
		}	
	else if(inputText.toLowerCase().indexOf("write")>-1&&inputText.toLowerCase().indexOf("book")>-1){
			document.getElementById("answer").innerHTML=`Well, my purpose in writing my books is to get the average 'O' level graduates, which is Grade 10 graduates, to read it and understand it.<br>Five years after stepping down as prime minister, his old friend, Lim Kim San, chairman of Singapore Press Holdings (SPH), convinced him that the young would read his memoirs since they were interested in his book of old speeches that SPH had published. LKY`;
		}	
	else if(inputText.toLowerCase().indexOf("homo")>-1||inputText.toLowerCase().indexOf("gay")>-1){
			document.getElementById("answer").innerHTML=`No it’s not a lifestyle. You can read the books you want, all the articles. You know that there’s a genetic difference. They are born that way and that’s that. So if two men or two women are that way, just leave them alone." Hard Truths to Keep Singapore Going<br>If in fact it is true, and I have asked doctors this, that you are genetically born a homosexual - because that's the nature of the genetic random transmission of genes - you can't help it. So why should we criminalise it?" 2007, The Wit & Wisdom of Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("media")>-1||inputText.toLowerCase().indexOf("the press")>-1){
			document.getElementById("answer").innerHTML=`Freedom of the press, freedom of the news media, must be subordinated to the overriding needs of the integrity of Singapore, and to the primacy of purpose of an elected government", Address To The General Assembly Of The International Press Institute At Helsinki, 9th June, 1971`;
		}	
	else if(/\bmp\b/.test(inputText.toLowerCase())||inputText.toLowerCase().indexOf("estate")>-1){
			document.getElementById("answer").innerHTML=`An MP must now not only be good at speaking but also at getting things done. When an estate is dirty, out of order, and rubbish not regularly and properly collected, that is when residents realise that without regular maintenance, the value of their flats will drop." 1992, The Wit & Wisdom of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("americans")>-1){
			document.getElementById("answer").innerHTML=`The Americans are great missionaries. They have an irrepressible urge to convert others.", 1992, The Wit & Wisdom of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("fashion")>-1||inputText.toLowerCase().indexOf("judge")>-1){
			document.getElementById("answer").innerHTML=`I'm not interested in changing either my suit or my car or whatver with every change in fashion. That's irrelevant. I don't judge myself or my friends by their fashions. Of course, I don't approve of people who are sloppy and unnecessarily shabby or dishevelled... But I'm not impressed by a $5,000 or $10,000 Armani suit." 1995,  The Wit & Wisdom of Lee Kuan Yew`;
		}	
	else if(inputText.toLowerCase().indexOf("democracy")>-1||inputText.toLowerCase().indexOf("free")>-1){
			document.getElementById("answer").innerHTML=`But we either believe in democracy or we not. If we do, then, we must say categorically, without qualification, that no restraint from the any democratic processes, other than by the ordinary law of the land, should be allowed… If you believe in democracy, you must believe in it unconditionally. If you believe that men should be free, then, they should have the right of free association, of free speech, of free publication. Then, no law should permit those democratic processes to be set at nought.” - as an opposition leader, April 27, 1955`;
		}
	else if(inputText.toLowerCase().indexOf("habit")>-1||inputText.toLowerCase().indexOf("control")>-1||/\brepression\b/.test(inputText.toLowerCase())){
			document.getElementById("answer").innerHTML=`Repression, Sir is a habit that grows. I am told it is like making love-it is always easier the second time! The first time there may be pangs of conscience, a sense of guilt. But once embarked on this course with constant repetition you get more and more brazen in the attack. All you have to do is to dissolve organizations and societies and banish and detain the key political workers in these societies. Then miraculously everything is tranquil on the surface. Then an intimidated press and the government-controlled radio together can regularly sing your praises, and slowly and steadily the people are made to forget the evil things that have already been done, or if these things are referred to again they’re conveniently distorted and distorted with impunity, because there will be no opposition to contradict.” - as an opposition PAP member speaking to David Marshall, Singapore Legislative Assembly, Debates, 4 October, 1956`;
		}
	else if(inputText.toLowerCase().indexOf("headline")>-1){
			document.getElementById("answer").innerHTML=`I have no headline material to offer you tonight. In fact, I believe that the art of Government is, in part, the art of not creating headlines in the world press." Speech at Foreign Correspondents Association, 16th Sep, 1959, Lee Kuan Yew in his own words, 1959-1970`;
		}	
	else if(inputText.toLowerCase().indexOf("sleep")>-1||inputText.toLowerCase().indexOf("late")>-1){
			document.getElementById("answer").innerHTML=`Today, I was a bit late because I took some time in getting up; slept late last night; some work to be done; two functions in the evening. But that is important. I like to tell you this because I think this is what we all must do: 'sleep well of nights'. You know Shakespeare, 'Give me men that sleep well of nights'. That is what he said. I think it right. Men who worry, you know, read all this, and they start shouting all this they get worried themselves, night time comes, they can't sleep. Next morning they wake up, mind befuddled, wrong decisions, more trouble!" Tanjong Katong School, during tour of Mountbatten Constituency, 13th June, 1965 Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("funny")>-1||inputText.toLowerCase().indexOf("hearted")>-1&&inputText.toLowerCase().indexOf("light")>-1||inputText.toLowerCase().indexOf("humour")>-1){
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
	else if(/\btussaud\b/.test(inputText.toLowerCase())){
			document.getElementById("answer").innerHTML=`When I visited Madame Tussaud's as a student in the 1940s...there were two groups of figures: the famous and the notorious, either British kings and famous leaders, or notorious murderers. I hope Madame Tussaud's will not put my likeness too close to the notorious." 1998 The Wit & Wisdom of Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("anger")>-1||inputText.toLowerCase().indexOf("temper")>-1){
			document.getElementById("answer").innerHTML=`I have never, I never try to lose my temper. Maybe I have occasionally, but I try to control it...If I am really angry, my body language will show that I am most dissatisfied" Tom Plate's Conversations with Lee Kuan Yew`;
		}
	else if(inputText.toLowerCase().indexOf("critic")>-1||inputText.toLowerCase().indexOf("oppose")>-1){
			document.getElementById("answer").innerHTML=`Not all who oppose the PAP are communists; some are communists, some reactionaries, some opportunists and some merely confused." 1961, The Wit & Wisdom of Lee Kuan Yew`;
		}			
	else if(inputText.toLowerCase().indexOf("elect")>-1&&inputText.toLowerCase().indexOf("get")>-1||inputText.toLowerCase().indexOf("keep going")>-1){
			document.getElementById("answer").innerHTML=`You've got to do one of two things when you've got to keep people happy: either, give them something that will satisfy them, better food, better clothes, better homes; or if you can't do that, then give them the vision of greatness to come". Luncheon held by the Australian Institue of Management at the Australia Hotel, Sydney, Australia, 22 March, 1965, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("multiparty")>-1){
			document.getElementById("answer").innerHTML=`If all the 300 (top civil servants and political elite) were to crash in one jumbo jet, then Singapore will disintegrate". 197`;
		}
	else if(inputText.toLowerCase().indexOf("no")>-1&&inputText.toLowerCase().indexOf("news")>-1||inputText.toLowerCase().indexOf("good")>-1){
			document.getElementById("answer").innerHTML=`I have always thought it strange that a country figures prominently in the world press mainly when it is in trouble...Nobody in the rest of the world heard much about Singapore until it was captured by the Japanese in 1942 or again until there were riots in 1955 and 1956 in the course of one of which two members of your fraternity were killed. I have come to believe that, so far as the foreign press is concerned, no news is good news." Speech at Foreign Correspondents Association, 16th Sep, 1959, Lee Kuan Yew in his own words, 1959-1970`;
		}
	else if(inputText.toLowerCase().indexOf("when")>-1&&inputText.toLowerCase().indexOf("rest")>-1||inputText.toLowerCase().indexOf("retire")>-1){
			document.getElementById("answer").innerHTML=`Rest on laurels? I wish I could do that. No, you rest when you're dead". 1978, The Wit & Wisdom`;
		}	
	else if(inputText.toLowerCase().indexOf("correct")>-1){
			document.getElementById("answer").innerHTML=`I always tried to be correct, not politically correct." 2000 The Wit & Wisdom `;
		}
	else if(inputText.toLowerCase().indexOf("nanny")>-1&&inputText.toLowerCase().indexOf("state")>-1){
			document.getElementById("answer").innerHTML=`If Singapore is a nanny state, then I am proud to have fostered one. (From Third World to First, The Singapore Story: 1965-2000)`;
		}
	else if(inputText.toLowerCase().indexOf("state")>-1&&inputText.toLowerCase().indexOf("democratic")>-1||inputText.toLowerCase().indexOf("elected by")>-1){
			document.getElementById("answer").innerHTML=`The theory of the democratic state is that there is a good motor car in good mechanical condition, with mechanics, fitters and so on to keep it sound. And there is a driver there to take the minister where he wants to go. It is for the minister, having been yelected by the people, to decide where the driver is to go and how and by what route. It is the business of the civil service - the driver, the fitters and the rest - to keep that car in sound mechanical condition." The Wit & Wisdom of LKY`;
		}	
		else if(inputText.toLowerCase().indexOf("the poor")>-1){
			document.getElementById("answer").innerHTML=`The poor know that you don't get manna falling from heaven, not in Singapore anyway", 1976, The Wit & Wisdom `;
		}
		else if(inputText.toLowerCase().indexOf("friends with")>-1||inputText.toLowerCase().indexOf("affiliat")>-1||inputText.toLowerCase().indexOf("pro-china")>-1||inputText.indexOf("pro-US")>-1){
			document.getElementById("answer").innerHTML=`I am nobody's stooge. I am not here to play somebody else's game. I have a few million people's lives to account for. And Singapore will survive will trade with the whole world and will remain non Communist", Press Conference at City Hall, 26th August 1965, Lee Kuan Yew in his own words, 1959-1970`;
		}
		else if(inputText.toLowerCase().indexOf("focus")>-1||inputText.toLowerCase().indexOf("priorit")>-1){
			document.getElementById("answer").innerHTML=`What are our priorities? First, the welfare, the survival of the people. Then, democratic norms and processes which from time to time we have to suspend.”- 1986 National Day Rally`;
		}
		else if(/\bpap\b/.test(inputText.toLowerCase())){
			document.getElementById("answer").innerHTML=` I make no apologies that the PAP is the Government and the Government is the PAP. Petir, 1982`;
		}
		else if(inputText.toLowerCase().indexOf("grave")>-1||inputText.toLowerCase().indexOf("sick bed")>-1||inputText.toLowerCase().indexOf("wrong")>-1&&inputText.toLowerCase().indexOf("something")>-1){
			document.getElementById("answer").innerHTML=`Even from my sick bed, even if you are going to lower me into the grave and I feel something is going wrong, I will get up. (1988 National Day Rally)`;
		}
		else if(inputText.toLowerCase().indexOf("repent")>-1||inputText.toLowerCase().indexOf("aljunied")>-1){
			document.getElementById("answer").innerHTML=` If Aljunied decides to go that way, well Aljunied has five years to live and repent, General Elections 2011<br>At the end of the day, if you are in Aljunied, ask yourself: Do you want one MP, one Non-Constituency MP, one celebrity who has been away 30 years, and two unknowns to look after you? Or would you prefer me and my hand-picked colleagues?" General Elections 2011`;
		}
		else if(inputText.toLowerCase().indexOf("colleague")>-1||inputText.toLowerCase().indexOf("intimidat")>-1||inputText.toLowerCase().indexOf("attack")>-1){
			document.getElementById("answer").innerHTML=`My colleagues are not intimidated by me. Far from it. They speak their minds. Nothing has happened to them. But if we allow vicious, evil attacks to pass unchallenged - then the whole system must be undermined." 1988 The Wit & Wisdom`;
		}
		else if(inputText.toLowerCase().indexOf("accused")>-1||inputText.toLowerCase().indexOf("speak")>-1){
			document.getElementById("answer").innerHTML=`I have been accused of many things in my life, but not even my worst enemy has ever accused me of being afraid to speak my mind." 1955, The Wit & Wisdom`;
		}
		else if(inputText.toLowerCase().indexOf("vote")>-1||inputText.toLowerCase().indexOf("voting")>-1){
			document.getElementById("answer").innerHTML=`One-man-one-vote is a most difficult form of government.. Results can be erratic.” -  19 Dec 1984`;
		}
		else if(inputText.toLowerCase().indexOf("hard truths")>-1){
			document.getElementById("answer").innerHTML=`Hard Truths was a book based on 32 hours of interviews over a period of two years. I made this one comment on the Muslims integrating with other communities probably two or three years ago. Ministers and MPs, both Malay and non-Malay, have since told me that Singapore Malays have indeed made special efforts to integrate with the other communities, especially since 9/11, and that my call is out of date. I stand corrected, but only just this instance! I hope that this trend will continue in the future.`;
		}			
		else if(inputText.toLowerCase().indexOf("grew up")>-1||/\bstory\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("name")>-1){
			document.getElementById("answer").innerHTML=`This is not an official history. It is the story of the Singapore I grew up in, the placid years of British colonial rule, the shock of war, the cruel years of Japanese occupation, communist insurrection and terrorism against the returning British, communal riots and intimidation during Malaysia, and the perils of independence. Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("earliest")>-1&&inputText.toLowerCase().indexOf("memor")>-1||inputText.toLowerCase().indexOf("recollection")>-1){
			document.getElementById("answer").innerHTML=`Born in Singapore on 16 September 1923, in a two-storey bungalow at 92 Kampong Java Road. My earliest and most vivid recollection was of being held by my ears over a well, now Tembeling Road in Singapore. I was about 4 years old.||After having messed up an expensive jar of my father's pale green scented brilliantine. My father's rage went through the roof. "How could my ears have been so tough that they were not ripped off, dropping me into that well?" he thought. Fifty years later, in the 1970s, I read in the Scientific American an article explaining how pain and shock released neuropeptides in the brain, stamping the new experience into the brain cells and thus ensuring that the experience would be remembered for a long time afterwards. Memoirs of LKY,1998`;
		}
		else if(/\bfather\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("your")>-1){
			document.getElementById("answer").innerHTML=`My father had been brought up a rich man's son. He used to boast to us that, when he was young, his father allowed him a limitless account at Robinsons and John Little, the two top department stores in Raffles Place, where he could charge to this account any suit or other items he fancied. He was educated in English at St Joseph's Institution, a Catholic mission school founded by the De La Salle Brothers in 1852. He said he completed his Junior School Certificate, after which he ended his formal education - to his and my mother's eternal regret.. Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("parents")>-1&&inputText.toLowerCase().indexOf("your")>-1){
			document.getElementById("answer").innerHTML=`My mother, Chua Jim Neo, was then 16 years old. My father, Lee Chin Koon, was 20. Their parents had arranged the marriage a year previously. Both families must have thought it an excellent match, for they later married my father's younger sister to my mother's younger brother. Memoirs of LKY,1998`;
		}
		else if(/\bfather\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("job")>-1||/\bfather\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("career")>-1||/\bfather\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("work")>-1){
			document.getElementById("answer").innerHTML=`Being without a profession, he could only get a job as a storekeeper with the Shell Oil Company when the fortunes of both families were destroyed in the Great Depression. Memoirs of LKY,1998`;
		}
		else if(/\borigin\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("china")>-1||/\borigin\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("chinese")>-1){
			document.getElementById("answer").innerHTML=`My family history in Singapore began with my paternal great­ grandfather, Lee Bok Boon, a Hakka. The Hakkas are Han Chinese from the northern and central plains of China who migrated to Fujian, Guangdong and other provinces in the south some 700 to 1,000 years ago, and as latecomers were only able to squeeze themselves into the less fertile and more hilly areas unoccupied by the local inhabitants. According to the inscription on the tombstone on his grave behind the house he built in China, Lee Bok Boon was born in 1846 in the village of Tangxi in the Dabu prefecture of Guangdong. He had migrated to Singapore on a Chinese junk. Little is known of him after that until 1870, when he married a Chinese girl, Seow Huan Neo, born in Singapore to a Hakka shopkeeper. Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("grandfather")>-1&&inputText.toLowerCase().indexOf("your")>-1){
			document.getElementById("answer").innerHTML=`My grandfather, Lee Hoon Leong - whom I addressed as Kung or "grandfather" in Chinese - was born in Singapore in 1871, and according to my father was educated at Raffles Institution up to standard V, which would be today's lower secondary school. He himself told me he worked as a dispenser (an unqualified pharmacist) when he left school, but after a few years became a purser on board a steamer plying between Singapore and the Dutch East lndies. The ship was part of a fleet belonging to the Heap Eng Moh Shipping Line, which was owned by the Chinese millionaire sugar king of Java, Oei Tiong Ham. ln between his travels he married my grandmother, Ko Liem Nia, in Semarang, a city in central Java. .Memoirs of LKY,1998`;
		}
		else if(/\bgrandfather\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("fortune")>-1){
			document.getElementById("answer").innerHTML=`His fortunes rose as he gained the confidence of Oei Tiong Ham, who appointed him his attorney to manage his affairs in Singapore. Kung told me how he was so trusted that in 1926, on his own authority, he donated $150,000, then a princely sum, from Oei's funds towards the foundation of Raffles College. Between my father and my grandfather, there was no question as to whom I admired more. My grandfather loved and pampered me. My father, the disciplinarian in the family, was tough with me. My grandfather had acquired great wealth. My father was just a rich man's son, with little to show for himself. Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("great depression")>-1){
			document.getElementById("answer").innerHTML=`When the family fortunes declined during the Great Depression, which caused rubber prices to fall from a high of 80 cents per pound to some 20 cents between 1927 and 1930, Kung was badly hit. He must have had less business sense than my mother's father, Chua Kim Teng. The Chua fortunes also suffered because Chua had invested in rubber estates and had speculated on the rubber market. But he had gone into property as well. He owned markets and shophouses and he was not wiped out, as Kung was. So it was that by 1929 my parents had moved from Kung's home to Chua's large rambling house in Telok Kurau. Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("grandfather")>-1&&/\bbritish\b/.test(inputText.toLowerCase())){
			document.getElementById("answer").innerHTML=`Kung was very Westernised, the result of his years as a purser on board ships with British captains, first officers and chief engineers. He used to recount to me his experiences, stories of how rigidly discipline was maintained on board a ship. For example, despite the heat and humidity of the tropics, the captain, the other officers and he, as purser, dressed in buttoned-up white cotton drill suits for dinner, which was served with plates, forks, knives and napkins, all properly laid out. From his accounts of his journeys in the region, the British officers left him with a lasting impression of order, strength and efficiency.Memoirs of LKY,1998`;
		}
				
		else if(inputText.toLowerCase().indexOf("after the war")>-1&&inputText.toLowerCase().indexOf("soldiers")>-1||inputText.toLowerCase().indexOf("after the war")>-1&&inputText.toLowerCase().indexOf("british")>-1){
			document.getElementById("answer").innerHTML=`they were out of touch with the changes that had taken place. The men now in charge - majors, colonels, brigadiers - knew they would be in power only until they were demobilised, when their wartime commissions would vanish like Cinderella's coach. The pumpkin of civilian Life to which they would then be reduced was at the back of their minds, and many made the most of their temporary authority. Their needs, alas, were similar to those of Japanese officers - something small, valuable and easy to secrete on the person to take home to England when their time was up. So the same items were in demand. ln return, they granted permits and supplies of scarce materials to the locals, and therefore opportunities to make money. But they were not bullies and oppressors like the Japanese. Memoirs of LKY,1998`;
		}	
		else if(/\bcar\b/.test(inputText.toLowerCase())||/\bcars\b/.test(inputText.toLowerCase())){
			document.getElementById("answer").innerHTML=`But in November 1945, I could afford to buy a second-hand car, a prewar Morris refurbished with spares now available from the British army. As my business improved, I sold it at a profit after a few months and bought a pre-war Ford V8, restored to good condition. It must have been used by a Japanese general during the occupation.Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("kwa geok choo")>-1){
			document.getElementById("answer").innerHTML=`Choo asked if I knew she was two and a half years older than I was. I said I knew, and had considered this carefully. I was mature for my age.  After the Liberation
			and most of my friends were older than me anyway. Moreover, I wanted someone my equal, not someone who was not really grown up and needed looking after, and I was not likely to find another girl who was my equal and who shared my interests.Memoirs of LKY,1998`;
		}	
		else if(inputText.toLowerCase().indexOf("wife")>-1&&inputText.toLowerCase().indexOf("background")>-1||inputText.toLowerCase().indexOf("wife")>-1&&inputText.toLowerCase().indexOf("family")>-1){
			document.getElementById("answer").innerHTML=`Choo's father, Kwa Siew Tee, a banker at the Oversea-Chinese Banking Corporation, was a Java-born Chinese like my father. Choo had been educated at Methodist Girls' School, and having passed her Senior Cambridge examinations, was only 16 when she went to the special class at Raffles Institution for students competing for the Queen's scholarship, but she did not get it.Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("obscen")>-1||inputText.toLowerCase().indexOf("make love")>-1){
			document.getElementById("answer").innerHTML=` I was shocked to see the unabashed promiscuity of some 40 or 50 servicewomen, non-commissioned officers and other ranks, who flirted with the officers. One night, a Hong Kong student, his eyes popping out of his head, told me they were unashamedly making love on the lifeboat deck. I was curious and went up to see for myself. What a sight it was! The deck was a hive of activity, with couples locked in passionate embraces scattered all over it. Some were a little less indelicate.<br>I received another shock when the ship passed through the Suez Canal. It proceeded slowly so that the waves would not wash down the loose sand on the banks. As we passed, a group of Arab workers on the shore started shouting obscenities and lifted their gallabiya - long gar­ ments like nightshirts - to flaunt their genitals at the British servicewomen. Memoirs of LKY,1998`;
		}
		else if(/\bshocked\b/.test(inputText.toLowerCase())){
			document.getElementById("answer").innerHTML=`The most active in canvassing among the colonial students were the communists. They masqueraded under the name Socialist Club, but I soon discovered their Marxist colours and their trick of having attractive British women students on hand to lobby African, Caribbean and the few Asian undergraduates. I steered clear of them all. I was suffering from culture shock before the phrase was coined. Memoirs of LKY,1998`;
		}		
		else if(inputText.toLowerCase().indexOf("remorse")>-1||inputText.toLowerCase().indexOf("let down")>-1){
			document.getElementById("answer").innerHTML=`I wrote to Professor Hughes Parry I had decided to leave the LSE and go to Cambridge instead. I got an angry reply. "I would remind you that I went out of my way to persuade the authorities of this school to accept you when we had turned others away," he wrote. "Your conduct shows that I was wrong in my estimate of you and that I should not have been so ready to help." On getting this letter, I decided to see him personally, to face him and take my medicine...But I have always felt remorse at having let him down after the special favour he extended to me. When he became vice-chancellor of London University in the late 1970s and I was prime minister of Singapore, I thought of writing to him but decided it might be better to let it pass. Perhaps I should have, just to tell him I had not forgotten his kindness.Memoirs of LKY,1998 `;
		}	
		else if(inputText.toLowerCase().indexOf("socialism")>-1){
			document.getElementById("answer").innerHTML=`Laski's lectures that I attended were my first introduction to the general theory of socialism, and I was immediately attracted to it. It struck me as manifestly fair that everybody in this world should be given an equal chance in life, that in a just and well-ordered society there should not be a great disparity of wealth between persons because of their position or status, or that of their parents. I made no distinction between different races and peoples. We were part of the British Empire, and I believed the British lived well at the expense of all their subjects.Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("wealth")>-1&&inputText.toLowerCase().indexOf("independence")>-1||inputText.toLowerCase().indexOf("wealth")>-1&&inputText.toLowerCase().indexOf("people")>-1||inputText.toLowerCase().indexOf("wealth")>-1&&inputText.toLowerCase().indexOf("ability")>-1){
			document.getElementById("answer").innerHTML=`We all wanted our independence so that we could keep our wealth for ourselves. I thought then that wealth depended mainly on the possession of territory and natural resources, whether fertile land with abundant rainfall for agriculture or forestry, or valuable minerals, or oil and gas. It was only after I had been in office for some years that I recognised that performance varied substantially between the different races in Singapore, and among different categories within the same race. After trying out a number of ways to reduce inequalities and failing, I was gradually forced to conclude that the decisive factors were the people, their natural abilities, education and training. Knowledge and the possession of technology were vital for the creation of wealth.Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("marxis")>-1&&inputText.toLowerCase().indexOf("view")>-1||inputText.toLowerCase().indexOf("communis")>-1&&inputText.toLowerCase().indexOf("view")>-1){
			document.getElementById("answer").innerHTML=`I agreed with the Marxists that man did exploit his fellow men through his possession of greater capital/power, and that because a man's output was more than he needed to consume to stay alive, there was a surplus for the employer or landlord to cream off. <br>I was revolted by the way Jan Masaryk, the foreign minister of Czechoslovakia, was killed, found dead after having conveniently "fallen" from a window so that the communists could take over; by the harassment of Cardinal Mindszenty of Hungary, who had to take refuge in the American embassy in Budapest after standing up to them for his Catholic beliefs. Jack Hamson, a Cambridge Law School lecturer and himself a Catholic, was so outraged and sickened by what had happened that he spent a whole hour's lecture on the morning the news broke not on the law of contract, but on the evils of Soviet commu­nism. It made a deep impression on me and increased my antipathy.Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("ideal")>-1&&inputText.toLowerCase().indexOf("state")>-1||inputText.toLowerCase().indexOf("flawless")>-1&&inputText.toLowerCase().indexOf("state")>-1){
			document.getElementById("answer").innerHTML=`But the idea of an equal, just and fair society appealed to all colonial students, and the British Fabians recommended a step-by-step approach to this ideal state that would make it unnecessary to behead the rich and expropriate their riches. By stages, and without disrupting the economy or creating a social upheaval, the rich would be deprived of their wealth through taxation in their lifetime, and through heavy estate duties when they died. Their children would then have to start out in the world on the same basis as those of poorer parents. I could see no flaw in that. I was too young to know how ingenious British lawyers were in con­structing trust deeds that made it difficult for the government to get too much out of estate duty.Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("sad")>-1||inputText.toLowerCase().indexOf("independence")>-1&&inputText.toLowerCase().indexOf("singapore")>-1){
			document.getElementById("answer").innerHTML=`He uttered no recriminations, but simply expressed his regret that I had not informed him or his government of what was happening. On my part, I was filled with sadness for having had to conceal from him the final developments of the past three weeks that had ended in separation. I thought he looked sad too. But if I had told Head that the Tunku wanted us out of Malaysia, although what I wanted was a looser federation, he would have found a way to stop the Tunku as it was against British interests to have Singapore separated and independent.Memoirs of LKY,1998`;
		}
		else if(inputText.toLowerCase().indexOf("separated")>-1||inputText.toLowerCase().indexOf("merger")>-1&&/\bmalaysia\b/.test(inputText.toLowerCase())){
			document.getElementById("answer").innerHTML=`For Singapore, 9 August 1965 was no ceremonial occasion. We had never sought independence. In a referendum less than three years ago, we had persuaded 70 per cent of the electorate to vote in favour of merger with Malaya. Since then, Singapore's need to be part and parcel of the Federation in one political, economic, and social polity had not changed. Nothing had changed - except that we were out. We had said that an independent Singapore was simply not viable. Now it was our unenviable task to make it work. How were we to create a nation out of a polyglot collection of migrants from China, India, Malaysia, Indonesia and several other parts of Asia? Memoirs of LKY,1998`;
		}
	
	else if(inputText.toLowerCase().indexOf("economy")>-1&&/\bcolonial\b/.test(inputText.toLowerCase())||/\bbritish\b/.test(inputText.toLowerCase())){
		document.getElementById("answer").innerHTML=`For our strategic value to Britain in holding the empire together was vanishing as the empire dissolved. Singapore's economy would be hard hit by any sudden scaling down of the British presence. British defence spending in Singapore accounted for about 20 per cent of our GDP; their military gave employment, directly to 30,000 workers, and indirectly to another 10,000 domestic help, besides those who catered to their other needs. They created employment for more than 10 per cent of the work force at a time when a high population growth of 2.5 per cent per annum was putting enormous pressure on the government for jobs as well as education, health services and housing.Memoirs of LKY,1998`;
	}
	else if(inputText.toLowerCase().indexOf("kempeitai")>-1||inputText.toLowerCase().indexOf("massacre")>-1||inputText.toLowerCase().indexOf("sook ching")>-1){
		document.getElementById("answer").innerHTML=`On 18 February, the Japanese put up notices and sent soldiers with loudspeakers around the town to inform the Chinese that all men between the ages of 18 and 50 were to present themselves at five collection areas for inspection. The much -feared Kempeitai went from house to house to drive Chinese||forced to walk towards the sea. As they did so, Japanese machine-gunners massacred them. Later, to make sure they were dead, each corpse was kicked, bayoneted and abused in other ways. There was no attempt to bury the bodies, which decomposed as they were washed up and down the shore. It estimated the number massacred to be between 50,000 and 100,000.Memoirs of LKY,1998`;
	}
	else if(inputText.toLowerCase().indexOf("comfort women")>-1||inputText.toLowerCase().indexOf("geylang")>-1){
		document.getElementById("answer").innerHTML=`Within two weeks of the surrender, I heard that the Japanese had put up wooden fencing around the town houses at Cairnhill Road||I cycled past and saw long queues of Japanese soldiers snaking along outside the fence. I heard from nearby residents that inside there were Japanese and Korean women who followed the army to service the soldiers before and after battle. It was an amazing sight, one or two hundred men queuing up, waiting their turn. I thought then that the Japanese army had a practical and realistic approach to such problems, totally different -from that of the British army. I remembered the prostitutes along Waterloo Street soliciting British soldiers stationed at Fort Canning. The Japanese high command recognised the sexual needs of the men and provided for them. As a consequence, rape was not frequent. Memoirs of LKY,1998`;
	}
	else if(inputText.toLowerCase().indexOf("atom bomb")>-1||inputText.toLowerCase().indexOf("hiroshima")>-1||inputText.toLowerCase().indexOf("nagasaki")>-1){
		document.getElementById("answer").innerHTML=`my generation who saw the Japanese soldiers in the flesh cannot forget their almost inhuman attitude to death in battle. They were not afraid to die. They made fearsome enemies and needed so little to keep going-the tin containers on their belts carried only rice, some soya beans and salt fish. Throughout the occupation, a common sight was of Japanese soldiers at bayonet practice on open fields. Their war cries as they stabbed their gunny-sack dummies were bloodcurdling.||  After seeing them at close quarters, I was sure that for sheer fighting spirit, they were among the world's finest. But they also showed a meanness and viciousness towards their enemies equal to the Huns'. Genghis Khan and his hordes could not have been more merciless. I have no doubts about whether the two atom bombs dropped on Hiroshima & Nagasaki were necessary.  Memoirs of LKY,1998`;
	}
	else if(inputText.toLowerCase().indexOf("learn")>-1&&inputText.toLowerCase().indexOf("japanese")>-1||inputText.toLowerCase().indexOf("learn")>-1&&inputText.toLowerCase().indexOf("chinese")>-1){
		document.getElementById("answer").innerHTML=`But I never learnt how they were pronounced. In Mandarin, each sound has one of four tones. My books did indicate them, but I did not know how to produce them and I had no one to teach me. In the face of these difficulties, my resistance to the Japanese lan­ guage lessened over the months. I discovered that it was not made up of Chinese characters alone. It had a syllabary system, written in two scripts: katakana and hiragana. If the Japanese were to be in Singapore as my lords and masters for the next few years, and I had not only to avoid trouble but make a living, I would have to learn their language.||I found Japanese much easier than Mandarin because it was not tonal, but more complicated in its intlex:ions and grammar. Memoirs of LKY,1998`;
	}
	else if(inputText.toLowerCase().indexOf("banana notes")>-1||inputText.toLowerCase().indexOf("work")>-1&&/\bjapanese\b/.test(inputText.toLowerCase())){
		document.getElementById("answer").innerHTML=`These "banana notes", as they were calJed, had no serial numbers, and were worth less and less every month. The value of my new job lay rather in the payment in kind that went with it - some 10 katis (about 15 pounds) of rice, sugar, oil and, most tradeable of alJ, cigarettes. These rations were better than Japanese money, for as the months went by they would get scarcer and cost more and more in banana notes. I worked in the kumiai for about eight months, until late in 1943 when I read an advertisement in the Syonan Shimbun inserted by the Japanese information or propaganda department calJed the Hodobu, which was located in Cathay Building. It wanted English-language editors. I turned up to be interviewed by an American-born Japanese, George Takemura. Memoirs of LKY,1998`;
	}
	else if(inputText.toLowerCase().indexOf("met")>-1&&inputText.toLowerCase().indexOf("wife")>-1||inputText.toLowerCase().indexOf("choo")>-1){
		document.getElementById("answer").innerHTML=`The gum turned a decent profit, and we made it in two centres. One was my home, with my mother and sister helping; the other was Nyuk Lin's home, where he was helped by his wife and his wife's younger sister, Kwa Geok Choo, the girl who had done better than me at Raffles College. I had seen her again when I first looked for Nyuk Lin in his flat in Tiong Bahru, riding my bicycle with its solid tyres. She was sitting on a veranda when I arrived, and when I asked where I could find him, she smiled and pointed out a staircase around the corner.||She was at home, at a loose end, doing domestic chores as there were no maids. Making gum was one chore that gave her pin money, and my visits to check on production led to a friendship that developed over the months. By September 1944, we knew each other well enough for me to invite Nyuk Lin, his wife and Geok Choo to my 21st birth­day. Memoirs of LKY,1998`;
	} 
	else if(inputText.toLowerCase().indexOf("how")>-1&&inputText.toLowerCase().indexOf("written")>-1||inputText.toLowerCase().indexOf("remember")>-1||inputText.toLowerCase().indexOf("recall")>-1){
		document.getElementById("answer").innerHTML=`I was fortunate in 1995 to gather a team of young researchers. Andrew Tan Kok Kiong, seconded to SPH from the Singapore Administrative Service, was helped by Pang Gek Choo, who worked for the Straits Times, and Alan Chong. They made a thorough search of government archives and ferreted out my correspondence, minutes of important meetings and other relevant documents.||The British Public Record Office in Kew, Richmond yielded Colonial Office and Commonwealth Office documents which gave interesting insights from a British perspective on events from 1955 to 1965. Dennis Bloodworth, an old friend, once foreign correspondent for the London Observer newspaper, went through my drafts. He was thorough in deleting repetitions and suggesting alternatives to my overworked favourite expressions. However, Bloodworth left me to decide what went into my book.Memoirs of LKY,1998.
		`;
	}
	else if(inputText.toLowerCase().indexOf("declar")>-1&&inputText.toLowerCase().indexOf("independence")>-1){
		document.getElementById("answer").innerHTML=`It was like any other Monday morning in Singapore until the music stopped. At 10 am, the pop tunes on the radio were cut off abruptly. Stunned listeners heard the announcer solemnly read out a proclamation - 90 words that changed the lives of the people of Singapore and Malaysia: "Whereas it is the inalienable right of a people to be free and independent, I, Lee Kuan Yew, prime minister of Singapore, do hereby proclaim and declare on behalf of the people and the government of Singapore that as from today, the ninth day of August in the year one thousand nine hundred and sixty-five, Singapore shall be forever a sovereign, democratic and indepen­dent nation, founded upon the principles of liberty and justice and ever seeking the welfare and happiness of her people in a more just and equal society." Memoirs of LKY,1998`;
	}
else if(inputText.toLowerCase().indexOf("talak")>-1||inputText.toLowerCase().indexOf("divorce")>-1){
	document.getElementById("answer").innerHTML=`Singapore was cast out. Under Malay-Muslim custom, a husband, but not the wife, can declare "Talak" (divorce thee) and the woman is divorced. They can reconcile and he can remarry her, but not after he has said "Talak" three times. The three readings in the two chambers of parliament were the three talaks with which Malaysia divorced Singapore.||Singapore went for the substance of the divorce, not its legal formalities. If there was to be separation, I wanted to ensure that the terms were practical, workable and final. To make certain there could be no doubt as to their finality, the Singapore government published the two proclamations in a special government gazette that morning.Memoirs of LKY,1998`;
}
else if(inputText.toLowerCase().indexOf("holidays")>-1||inputText.toLowerCase().indexOf("bullock")>-1||inputText.toLowerCase().indexOf("concorde")>-1){
	document.getElementById("answer").innerHTML=`For holidays, the family would spend up to a week at a wooden house in my grandfather Chua's rubber estate in Chai Chee. To get to the estate from Changi Road, we rode down a track in a bullock cart, its two bullocks driven by my grandmother's gardener. The cart had wooden wheels with metal rims and no shock absorbers, so that half mile ride on the rutted clay track was hilariously bumpy. Fifty years later, in 1977, as I travelled in a Concorde from London to New York and crossed the Atlantic in three hours, I wondered if any of my fellow passengers had ever experienced the joy of a bullock-cart ride.Memoirs of LKY,1998`;
}
else if(/\bchild\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("play")>-1){
		document.getElementById("answer").innerHTML=`The fishermen worked along Siglap beach, then about 200 yards away. It was a simpler world altogether. We played with fighting kites, tops, marbles and even fighting fish. These games nurtured a fighting spirit and the will to win.||We were not soft, nor were we spoilt. We were not poor, but we had no great abundance of toys, and there was no television. So we had to be resourceful, to use our imagination. We read, and this was good for our literacy, but there were few illustrated books for young children then, and these were expensive. I bought the usual penny dreadfuls,||. I waited eagerly for the mail boat from Britain, which arrived at Tanjong Pagar wharf every Friday, bringing British magazines and pictorials. When I was a little older, I used the Raffles Library, where books could be borrowed for two weeks at a time. I read eclectically but preferred westerns to detective thrillers.`;
	}
		//page 33 Sample codes*	
//else if(/\bgrandfather\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("")>-1){
//	document.getElementById("answer").innerHTML=``;}
//else if(inputText.toLowerCase().indexOf("")>-1||inputText.//toLowerCase().indexOf("")>-1){
//		document.getElementById("answer").innerHTML=``;
//	}	
//else if(inputText.toLowerCase().indexOf("xx")>-1&&inputText.//toLowerCase().indexOf("xx")>-1){
//		document.getElementById("answer").innerHTML=`<a href="">mt</a>`;
//								}	
//else if(inputText.toLowerCase().indexOf("xxx")>-1){
//		document.getElementById("answer").innerHTML=`<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>`; 	
////sample codes***
	 else {document.getElementById("answer").innerHTML='Please rephrase your question/<br>not in our database yet/<br> out-of-scope for FreeMindson/<br>email us what was your question for us to update<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>';      
	}

	
}