// ===== IPL Player Database — 230+ Players =====
// P(name,team,role,country,hand,bowl,capt,wonIPL,pre2015,over30,under25,orange,purple,retired,emoji)
function P(n,t,r,c,h,b,cap,w,d,o3,u2,oc,pc,ret,e){
  return{name:n,team:t,role:r,country:c,overseas:c!=="India",battingHand:h,bowlingType:b,isCaptain:cap,hasWonIPL:w,debutBefore2015:d,isOver30:o3,isUnder25:u2,orangeCap:oc,purpleCap:pc,isRetired:ret,emoji:e};
}
const PLAYERS=[
// ─── INDIAN BATSMEN ───
P("Virat Kohli","RCB","batsman","India","right","none",true,true,true,true,false,true,false,false,"👑"),
P("Rohit Sharma","MI","batsman","India","right","none",true,true,true,true,false,false,false,false,"🌟"),
P("Shubman Gill","GT","batsman","India","right","none",true,true,false,false,false,false,false,false,"💫"),
P("Yashasvi Jaiswal","RR","batsman","India","left","none",false,false,false,false,true,false,false,false,"⚡"),
P("Ruturaj Gaikwad","CSK","batsman","India","right","none",true,true,false,false,false,true,false,false,"🦁"),
P("Suryakumar Yadav","MI","batsman","India","right","none",false,true,false,true,false,false,false,false,"🔥"),
P("Shreyas Iyer","KKR","batsman","India","right","none",true,true,false,true,false,false,false,false,"🎯"),
P("Prithvi Shaw","DC","batsman","India","right","none",false,false,false,false,false,false,false,false,"⭐"),
P("Sai Sudharsan","GT","batsman","India","left","none",false,false,false,false,true,false,false,false,"🌅"),
P("Tilak Varma","MI","batsman","India","left","none",false,true,false,false,true,false,false,false,"🏏"),
P("Rinku Singh","KKR","batsman","India","left","none",false,true,false,false,false,false,false,false,"💪"),
P("Shikhar Dhawan","PBKS","batsman","India","left","none",true,true,true,true,false,false,false,true,"🛡️"),
P("Virender Sehwag","DC","batsman","India","right","none",true,true,true,true,false,false,false,true,"💥"),
P("Ambati Rayudu","CSK","batsman","India","right","none",false,true,true,true,false,false,false,true,"🎓"),
P("Robin Uthappa","KKR","batsman","India","right","none",false,true,true,true,false,false,false,true,"☕"),
P("Manish Pandey","SRH","batsman","India","right","none",false,true,true,true,false,false,false,true,"🎭"),
P("Rahul Tripathi","SRH","batsman","India","right","none",false,false,false,true,false,false,false,false,"🎪"),
P("Mayank Agarwal","PBKS","batsman","India","right","none",true,false,false,true,false,true,false,false,"📈"),
P("Ajinkya Rahane","KKR","batsman","India","right","none",true,true,true,true,false,false,false,false,"🧘"),
P("Sachin Tendulkar","MI","batsman","India","right","none",true,true,true,true,false,false,false,true,"🏆"),
P("Gautam Gambhir","KKR","batsman","India","left","none",true,true,true,true,false,false,false,true,"🎖️"),
P("Suresh Raina","CSK","batsman","India","left","none",false,true,true,true,false,false,false,true,"💛"),
P("Rahul Dravid","RR","batsman","India","right","none",true,true,true,true,false,false,false,true,"🧱"),

// ─── INDIAN WICKETKEEPERS ───
P("MS Dhoni","CSK","wicketkeeper","India","right","none",true,true,true,true,false,false,false,false,"🚁"),
P("Rishabh Pant","LSG","wicketkeeper","India","left","none",true,false,false,false,false,false,false,false,"🐆"),
P("KL Rahul","DC","wicketkeeper","India","right","none",true,false,true,true,false,true,false,false,"🎩"),

P("Ishan Kishan","MI","wicketkeeper","India","left","none",false,true,false,false,false,false,false,false,"💥"),
P("Dinesh Karthik","RCB","wicketkeeper","India","right","none",true,true,true,true,false,false,false,true,"🎓"),
P("Wriddhiman Saha","GT","wicketkeeper","India","right","none",false,false,true,true,false,false,false,true,"🧤"),
P("Parthiv Patel","MI","wicketkeeper","India","left","none",false,true,true,true,false,false,false,true,"🐝"),
P("Dhruv Jurel","RR","wicketkeeper","India","right","none",false,false,false,false,true,false,false,false,"🌱"),


// ─── INDIAN ALL-ROUNDERS ───
P("Hardik Pandya","MI","allrounder","India","right","fast",true,true,false,true,false,false,false,false,"💎"),

P("Axar Patel","DC","allrounder","India","left","spin",false,false,false,true,false,false,false,false,"🔷"),
P("Abhishek Sharma","SRH","allrounder","India","left","spin",false,false,false,false,true,false,false,false,"🌀"),

P("Nitish Kumar Reddy","SRH","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🚀"),
P("Washington Sundar","GT","allrounder","India","left","spin",false,false,false,false,false,false,false,false,"🌊"),
P("Ravichandran Ashwin","CSK","allrounder","India","right","spin",false,true,true,true,false,false,false,true,"🧠"),
P("Yuvraj Singh","MI","allrounder","India","left","spin",false,true,true,true,false,false,false,true,"6️⃣"),

P("Shardul Thakur","CSK","allrounder","India","right","fast",false,true,false,true,false,false,false,false,"🦈"),
P("Deepak Hooda","LSG","allrounder","India","right","spin",false,false,false,true,false,false,false,false,"🔶"),
P("Irfan Pathan","DC","allrounder","India","left","fast",false,false,true,true,false,false,false,true,"🎖️"),
P("Yusuf Pathan","KKR","allrounder","India","right","spin",false,true,true,true,false,false,false,true,"💪"),
P("Riyan Parag","RR","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"🎮"),
P("Vijay Shankar","SRH","allrounder","India","right","fast",false,false,false,true,false,false,false,false,"🏗️"),

// ─── INDIAN FAST BOWLERS ───
P("Jasprit Bumrah","MI","bowler","India","right","fast",false,true,true,true,false,false,false,false,"🔥"),
P("Mohammed Shami","GT","bowler","India","right","fast",false,true,true,true,false,false,false,false,"🎳"),
P("Mohammed Siraj","RCB","bowler","India","right","fast",false,false,false,true,false,false,false,false,"🦅"),

P("Arshdeep Singh","PBKS","bowler","India","left","fast",false,false,false,false,false,false,false,false,"🏹"),
P("Umran Malik","SRH","bowler","India","right","fast",false,false,false,false,false,false,false,false,"⚡"),
P("Mayank Yadav","LSG","bowler","India","right","fast",false,false,false,false,true,false,false,false,"💨"),
P("T Natarajan","SRH","bowler","India","left","fast",false,false,false,true,false,false,false,false,"🎯"),
P("Deepak Chahar","CSK","bowler","India","right","fast",false,true,false,true,false,false,false,false,"🩺"),
P("Harshal Patel","PBKS","bowler","India","right","fast",false,false,false,true,false,false,true,false,"🎯"),
P("Avesh Khan","RCB","bowler","India","right","fast",false,false,false,false,false,false,false,false,"💪"),
P("Tushar Deshpande","CSK","bowler","India","right","fast",false,true,false,false,false,false,false,false,"🔨"),
P("Zaheer Khan","MI","bowler","India","left","fast",false,false,true,true,false,false,false,true,"🏏"),
P("Ashish Nehra","CSK","bowler","India","left","fast",false,false,true,true,false,false,false,true,"🧊"),
P("Harshit Rana","KKR","bowler","India","right","fast",false,true,false,false,true,false,false,false,"🚀"),
P("Prasidh Krishna","RR","bowler","India","right","fast",false,false,false,false,false,false,false,false,"📏"),
P("Navdeep Saini","RCB","bowler","India","right","fast",false,false,false,true,false,false,false,false,"🎳"),
P("Mukesh Kumar","DC","bowler","India","right","fast",false,false,false,false,false,false,false,false,"🏗️"),

// ─── INDIAN SPIN BOWLERS ───
P("Yuzvendra Chahal","RR","bowler","India","right","spin",false,false,true,true,false,false,true,false,"🌀"),
P("Kuldeep Yadav","DC","bowler","India","left","spin",false,false,false,true,false,false,false,false,"🔮"),
P("Varun Chakravarthy","KKR","bowler","India","right","spin",false,true,false,true,false,false,false,false,"🌪️"),
P("Harbhajan Singh","MI","bowler","India","right","spin",false,true,true,true,false,false,false,true,"🎭"),
P("Amit Mishra","DC","bowler","India","right","spin",false,false,true,true,false,false,false,true,"🐢"),
P("Piyush Chawla","CSK","bowler","India","right","spin",false,true,true,true,false,false,false,true,"🌀"),
P("Ravi Bishnoi","GT","bowler","India","right","spin",false,false,false,false,false,false,false,false,"🦊"),
P("Rahul Chahar","PBKS","bowler","India","right","spin",false,true,false,false,false,false,false,false,"💫"),

// ─── OVERSEAS BATSMEN ───
P("David Warner","DC","batsman","Australia","left","none",true,true,true,true,false,true,false,false,"🦘"),
P("AB de Villiers","RCB","batsman","South Africa","right","none",false,false,true,true,false,false,false,true,"🦸"),
P("Chris Gayle","RCB","batsman","West Indies","left","spin",false,false,true,true,false,true,false,true,"🌍"),
P("Devon Conway","CSK","batsman","New Zealand","left","none",false,false,false,true,false,false,false,false,"🥝"),
P("Travis Head","SRH","batsman","Australia","left","none",false,false,false,true,false,false,false,false,"🎩"),
P("Phil Salt","RCB","batsman","England","right","none",false,true,false,false,false,false,false,false,"🧂"),
P("Faf du Plessis","RCB","batsman","South Africa","right","none",true,true,true,true,false,false,false,false,"🦌"),
P("Kane Williamson","SRH","batsman","New Zealand","right","none",true,false,true,true,false,false,false,false,"🏔️"),
P("Steve Smith","RR","batsman","Australia","right","none",true,false,true,true,false,false,false,false,"🦗"),
P("Jonny Bairstow","PBKS","batsman","England","right","none",false,false,false,true,false,false,false,false,"🦁"),
P("Kevin Pietersen","DC","batsman","England","right","none",false,false,true,true,false,false,false,true,"🎯"),
P("Michael Hussey","CSK","batsman","Australia","left","none",false,true,true,true,false,false,false,true,"🏆"),
P("Brendon McCullum","KKR","batsman","New Zealand","right","none",false,false,true,true,false,false,false,true,"🥝"),
P("Hashim Amla","PBKS","batsman","South Africa","right","none",false,false,true,true,false,false,false,true,"🧔"),
P("Alex Hales","KKR","batsman","England","right","none",false,false,false,true,false,false,false,false,"🎯"),
P("David Miller","GT","batsman","South Africa","left","none",false,true,true,true,false,false,false,false,"🔨"),

// ─── OVERSEAS WICKETKEEPERS ───


P("Heinrich Klaasen","SRH","wicketkeeper","South Africa","right","none",false,false,false,true,false,false,false,false,"🔨"),
P("Nicholas Pooran","LSG","wicketkeeper","West Indies","left","none",false,false,false,true,false,false,false,false,"💣"),
P("Adam Gilchrist","DC","wicketkeeper","Australia","left","none",true,true,true,true,false,false,false,true,"🏆"),
P("Kumar Sangakkara","RR","wicketkeeper","Sri Lanka","left","none",false,false,true,true,false,false,false,true,"📚"),
P("Matthew Wade","GT","wicketkeeper","Australia","left","none",false,true,false,true,false,false,false,false,"🧤"),

// ─── OVERSEAS ALL-ROUNDERS ───
P("Glenn Maxwell","RCB","allrounder","Australia","right","spin",false,false,true,true,false,false,false,false,"🌪️"),
P("Andre Russell","KKR","allrounder","West Indies","right","fast",false,true,true,true,false,false,false,false,"💪"),
P("Sunil Narine","KKR","allrounder","West Indies","left","spin",false,true,true,true,false,false,false,false,"🎩"),
P("Sam Curran","PBKS","allrounder","England","left","fast",false,true,false,false,false,false,false,false,"🦁"),
P("Marcus Stoinis","LSG","allrounder","Australia","right","fast",false,false,false,true,false,false,false,false,"🏋️"),
P("Rachin Ravindra","CSK","allrounder","New Zealand","left","spin",false,false,false,false,true,false,false,false,"🥝"),
P("Liam Livingstone","RCB","allrounder","England","right","spin",false,false,false,true,false,false,false,false,"🏏"),
P("Moeen Ali","CSK","allrounder","England","left","spin",false,true,false,true,false,false,false,false,"✨"),
P("Ben Stokes","CSK","allrounder","England","left","fast",false,true,true,true,false,false,false,false,"🔥"),
P("Dwayne Bravo","CSK","allrounder","West Indies","right","fast",false,true,true,true,false,false,true,true,"🎶"),
P("Kieron Pollard","MI","allrounder","West Indies","right","fast",false,true,true,true,false,false,false,true,"🏔️"),
P("Jacques Kallis","KKR","allrounder","South Africa","right","fast",false,true,true,true,false,false,false,true,"🦁"),
P("Shane Watson","CSK","allrounder","Australia","left","fast",false,true,true,true,false,false,false,true,"💥"),
P("Mitchell Marsh","DC","allrounder","Australia","right","fast",true,false,false,true,false,false,false,false,"🏏"),
P("Shakib Al Hasan","KKR","allrounder","Bangladesh","left","spin",false,false,true,true,false,false,false,false,"🇧🇩"),
P("Chris Morris","RR","allrounder","South Africa","right","fast",false,false,false,true,false,false,false,true,"💰"),
P("Daniel Vettori","RCB","allrounder","New Zealand","left","spin",false,false,true,true,false,false,false,true,"🧠"),
P("Wanindu Hasaranga","RCB","allrounder","Sri Lanka","right","spin",false,false,false,false,false,false,false,false,"🇱🇰"),

// ─── OVERSEAS FAST BOWLERS ───
P("Pat Cummins","SRH","bowler","Australia","right","fast",true,true,false,true,false,false,false,false,"🦘"),
P("Kagiso Rabada","GT","bowler","South Africa","right","fast",false,false,false,true,false,false,true,false,"🐆"),
P("Trent Boult","MI","bowler","New Zealand","left","fast",false,true,true,true,false,false,false,false,"💨"),
P("Mitchell Starc","DC","bowler","Australia","left","fast",false,true,true,true,false,false,false,false,"⚡"),


P("Mark Wood","LSG","bowler","England","right","fast",false,false,false,true,false,false,false,false,"🚄"),
P("Jofra Archer","MI","bowler","England","right","fast",false,false,false,false,false,false,false,false,"🏹"),
P("Lasith Malinga","MI","bowler","Sri Lanka","right","fast",false,true,true,true,false,false,false,true,"🎯"),
P("Dale Steyn","RCB","bowler","South Africa","right","fast",false,true,true,true,false,false,false,true,"🔥"),
P("Brett Lee","KKR","bowler","Australia","right","fast",false,false,true,true,false,false,false,true,"⚡"),
P("Morne Morkel","DC","bowler","South Africa","right","fast",false,false,true,true,false,false,false,true,"🏔️"),
P("Josh Hazlewood","RCB","bowler","Australia","right","fast",false,true,false,true,false,false,false,false,"🧊"),
P("Marco Jansen","SRH","bowler","South Africa","left","fast",false,false,false,false,true,false,false,false,"🌊"),
P("Mustafizur Rahman","CSK","bowler","Bangladesh","left","fast",false,false,false,false,false,false,false,false,"🇧🇩"),
P("Matheesha Pathirana","CSK","bowler","Sri Lanka","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Gerald Coetzee","MI","bowler","South Africa","right","fast",false,false,false,false,true,false,false,false,"🐆"),
P("Nathan Coulter-Nile","MI","bowler","Australia","right","fast",false,true,true,true,false,false,false,true,"🦘"),
P("Chris Jordan","CSK","bowler","England","right","fast",false,true,false,true,false,false,false,false,"🏏"),

// ─── OVERSEAS SPIN BOWLERS ───
P("Rashid Khan","GT","bowler","Afghanistan","right","spin",false,true,false,false,false,false,false,false,"🇦🇫"),
P("Imran Tahir","CSK","bowler","South Africa","right","spin",false,true,true,true,false,false,false,true,"✈️"),
P("Adam Zampa","RCB","bowler","Australia","right","spin",false,false,false,true,false,false,false,false,"🦊"),
P("Noor Ahmad","CSK","bowler","Afghanistan","left","spin",false,false,false,false,true,false,false,false,"🌙"),

// ─── IPL 2026 ADDITIONS ───
// CSK 2026
P("Shivam Dube","CSK","allrounder","India","right","fast",false,true,false,true,false,false,false,false,"💪"),
P("Sarfaraz Khan","CSK","batsman","India","right","none",false,false,false,false,false,false,false,false,"🍔"),
P("Dewald Brevis","CSK","batsman","South Africa","right","spin",false,false,false,false,true,false,false,false,"🌪️"),
P("Matthew Short","CSK","allrounder","Australia","right","spin",false,false,false,false,false,false,false,false,"🏏"),
P("Sanju Samson","CSK","wicketkeeper","India","right","none",true,false,true,true,false,false,false,false,"🦅"),
P("Nathan Ellis","CSK","bowler","Australia","right","fast",false,false,false,true,false,false,false,false,"🎯"),
P("Jamie Overton","CSK","allrounder","England","right","fast",false,false,false,false,false,false,false,false,"🏋️"),
P("Matt Henry","CSK","bowler","New Zealand","right","fast",false,false,false,true,false,false,false,false,"🥝"),
P("Akeal Hosein","CSK","bowler","West Indies","left","spin",false,false,false,true,false,false,false,false,"🎭"),
P("Spencer Johnson","CSK","bowler","Australia","left","fast",false,false,false,false,false,false,false,false,"⚡"),
// MI 2026
P("Quinton de Kock","MI","wicketkeeper","South Africa","left","none",false,true,true,true,false,false,false,false,"🐆"),
P("Ryan Rickelton","MI","batsman","South Africa","left","none",false,false,false,false,false,false,false,false,"🇿🇦"),
P("Will Jacks","MI","allrounder","England","right","spin",false,false,false,false,false,false,false,false,"🎸"),
P("Naman Dhir","MI","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🌟"),
P("Mitchell Santner","MI","allrounder","New Zealand","left","spin",false,false,false,true,false,false,false,false,"🥝"),
P("Corbin Bosch","MI","allrounder","South Africa","right","fast",false,false,false,false,false,false,false,false,"🇿🇦"),
P("Keshav Maharaj","MI","bowler","South Africa","left","spin",false,false,false,true,false,false,false,false,"🎩"),
P("Allah Ghazanfar","MI","bowler","Afghanistan","right","spin",false,false,false,false,true,false,false,false,"🇦🇫"),
P("Sherfane Rutherford","MI","batsman","West Indies","right","none",false,false,false,true,false,false,false,false,"🏏"),
// RCB 2026
P("Rajat Patidar","RCB","batsman","India","right","none",true,false,false,true,false,false,false,false,"🛡️"),
P("Yash Dayal","RCB","bowler","India","left","fast",false,false,false,false,false,false,false,false,"🎯"),
P("Devdutt Padikkal","RCB","batsman","India","left","none",false,false,false,false,false,false,false,false,"🌿"),
P("Tim David","RCB","allrounder","Australia","right","none",false,false,false,false,false,false,false,false,"💥"),
P("Cameron Green","RCB","allrounder","Australia","left","fast",false,false,false,false,false,false,false,false,"🌿"),
P("Jacob Bethell","RCB","allrounder","England","left","spin",false,false,false,false,true,false,false,false,"⭐"),
P("Alzarri Joseph","RCB","bowler","West Indies","right","fast",false,false,false,true,false,false,false,false,"🔥"),
P("Jordan Cox","RCB","wicketkeeper","England","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Tom Curran","RCB","allrounder","England","right","fast",false,false,false,true,false,false,false,false,"🦁"),
P("Anuj Rawat","RCB","wicketkeeper","India","left","none",false,false,false,false,true,false,false,false,"🧤"),
P("Jitesh Sharma","RCB","wicketkeeper","India","right","none",false,false,false,false,false,false,false,false,"⚡"),
P("Venkatesh Iyer","RCB","allrounder","India","left","fast",false,true,false,false,false,false,false,false,"🏋️"),
P("Krunal Pandya","RCB","allrounder","India","left","spin",false,true,false,true,false,false,false,false,"🔵"),
P("Bhuvneshwar Kumar","RCB","bowler","India","right","fast",false,true,true,true,false,false,true,false,"🎯"),
P("Lockie Ferguson","RCB","bowler","New Zealand","right","fast",false,true,false,true,false,false,false,false,"🎯"),
P("Mahipal Lomror","RCB","allrounder","India","left","spin",false,false,false,false,true,false,false,false,"💥"),
P("Suyash S Prabhudessai","RCB","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Akash Deep","RCB","bowler","India","right","fast",false,false,false,false,false,false,false,false,"💨"),
P("Karn Sharma","RCB","bowler","India","right","spin",false,true,true,true,false,false,false,false,"🌀"),
P("Rasikh Dar","RCB","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Vyshak Vijaykumar","RCB","bowler","India","right","fast",false,false,false,false,false,false,false,false,"🔥"),
P("Reece Topley","RCB","bowler","England","left","fast",false,false,false,true,false,false,false,false,"⚡"),
P("Suyash Sharma","RCB","bowler","India","right","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Swapnil Singh","RCB","allrounder","India","right","spin",false,false,false,true,false,false,false,false,"🔵"),
P("Saurav Chauhan","RCB","batsman","India","left","none",false,false,false,false,true,false,false,false,"🏏"),
// KKR 2026
P("Finn Allen","KKR","batsman","New Zealand","right","none",false,false,false,false,false,false,false,false,"🥝"),
P("Rahmanullah Gurbaz","KKR","wicketkeeper","Afghanistan","right","none",false,false,false,false,false,false,false,false,"🇦🇫"),
P("Angkrish Raghuvanshi","KKR","batsman","India","left","none",false,false,false,false,true,false,false,false,"⭐"),
P("Ramandeep Singh","KKR","allrounder","India","right","fast",false,true,false,true,false,false,false,false,"🏋️"),
P("Blessing Muzarabani","KKR","bowler","Zimbabwe","right","fast",false,false,false,true,false,false,false,false,"🇿🇼"),
P("Tim Seifert","KKR","wicketkeeper","New Zealand","right","none",false,false,false,true,false,false,false,false,"🥝"),
P("Rovman Powell","KKR","batsman","West Indies","right","none",false,false,false,true,false,false,false,false,"💣"),
// DC 2026
P("Karun Nair","DC","batsman","India","right","none",false,false,true,true,false,false,false,false,"🏏"),
P("Ben Duckett","DC","batsman","England","left","none",false,false,false,true,false,false,false,false,"🦁"),
P("Tristan Stubbs","DC","allrounder","South Africa","right","fast",false,false,false,false,true,false,false,false,"🐆"),
P("Abishek Porel","DC","wicketkeeper","India","left","none",false,false,false,false,true,false,false,false,"🧤"),
P("Nitish Rana","DC","allrounder","India","left","spin",false,true,true,true,false,false,false,false,"🎭"),
P("Lungi Ngidi","DC","bowler","South Africa","right","fast",false,false,false,true,false,false,false,false,"🐆"),
P("Kyle Jamieson","DC","bowler","New Zealand","right","fast",false,false,false,true,false,false,false,false,"🏔️"),
P("Rehan Ahmed","DC","bowler","England","right","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Pathum Nissanka","DC","batsman","Sri Lanka","right","none",false,false,false,false,false,false,false,false,"🇱🇰"),
// SRH 2026
P("Jaydev Unadkat","SRH","bowler","India","left","fast",false,false,true,true,false,false,false,false,"🎳"),
P("Kamindu Mendis","SRH","allrounder","Sri Lanka","left","spin",false,false,false,false,false,false,false,false,"🇱🇰"),
P("Brydon Carse","SRH","bowler","England","right","fast",false,false,false,true,false,false,false,false,"🏏"),
P("Dilshan Madushanka","SRH","bowler","Sri Lanka","left","fast",false,false,false,false,true,false,false,false,"🇱🇰"),
// GT 2026
P("Rahul Tewatia","GT","allrounder","India","left","spin",false,false,false,true,false,false,false,false,"🎯"),
P("Shahrukh Khan","GT","batsman","India","right","none",false,false,false,true,false,false,false,false,"💥"),
P("Glenn Phillips","GT","wicketkeeper","New Zealand","right","spin",false,false,false,true,false,false,false,false,"⚡"),
P("Sai Kishore","GT","bowler","India","left","spin",false,false,false,false,false,false,false,false,"🌀"),
P("Ishant Sharma","GT","bowler","India","right","fast",false,false,true,true,false,false,false,false,"🏏"),
P("Jason Holder","GT","allrounder","West Indies","right","fast",false,false,true,true,false,false,false,false,"🏔️"),
P("Jos Buttler","GT","wicketkeeper","England","right","none",false,false,true,true,false,true,false,false,"🦁"),
P("Tom Banton","GT","batsman","England","right","none",false,false,false,false,false,false,false,false,"🏏"),
P("Luke Wood","GT","bowler","England","left","fast",false,false,false,true,false,false,false,false,"💨"),
// RR 2026
P("Shimron Hetmyer","RR","batsman","West Indies","left","none",false,false,false,true,false,false,false,false,"🌴"),
P("Ravindra Jadeja","RR","allrounder","India","left","spin",true,true,true,true,false,false,false,false,"⚔️"),
P("Dasun Shanaka","RR","allrounder","Sri Lanka","right","fast",false,false,false,true,false,false,false,false,"🇱🇰"),
P("Fazalhaq Farooqi","RR","bowler","Afghanistan","left","fast",false,false,false,false,false,false,false,false,"🇦🇫"),
P("Nandre Burger","RR","bowler","South Africa","left","fast",false,false,false,false,false,false,false,false,"🐆"),
P("Kwena Maphaka","RR","bowler","South Africa","left","fast",false,false,false,false,true,false,false,false,"🌟"),
P("Adam Milne","RR","bowler","New Zealand","right","fast",false,false,true,true,false,false,false,false,"🥝"),
P("Vaibhav Suryavanshi","RR","batsman","India","left","none",false,false,false,false,true,false,false,false,"🌟"),
P("Sandeep Sharma","RR","bowler","India","right","fast",false,false,true,true,false,false,false,false,"🎳"),
// PBKS 2026
P("Shashank Singh","PBKS","batsman","India","right","none",false,false,false,true,false,false,false,false,"🏏"),
P("Azmatullah Omarzai","PBKS","allrounder","Afghanistan","right","fast",false,false,false,false,false,false,false,false,"🇦🇫"),
P("Xavier Bartlett","PBKS","bowler","Australia","right","fast",false,false,false,false,false,false,false,false,"🦘"),
P("Musheer Khan","PBKS","batsman","India","left","none",false,false,false,false,true,false,false,false,"⭐"),
P("Harpreet Brar","PBKS","allrounder","India","left","spin",false,false,false,true,false,false,false,false,"🔵"),
P("Prabhsimran Singh","PBKS","wicketkeeper","India","right","none",false,false,false,false,false,false,false,false,"🧤"),
P("Cooper Connolly","PBKS","allrounder","Australia","left","spin",false,false,false,false,true,false,false,false,"🦘"),
P("Ben Dwarshuis","PBKS","bowler","Australia","left","fast",false,false,false,true,false,false,false,false,"🦘"),
P("Mitchell Owen","PBKS","allrounder","Australia","left","fast",false,false,false,false,true,false,false,false,"🦘"),
// LSG 2026
P("Ayush Badoni","LSG","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"🌟"),
P("Aiden Markram","LSG","batsman","South Africa","right","spin",false,false,false,true,false,false,false,false,"🐆"),
P("Mohsin Khan","LSG","bowler","India","left","fast",false,false,false,false,false,false,false,false,"💨"),
P("Abdul Samad","LSG","allrounder","India","right","spin",false,false,false,false,false,false,false,false,"🔥"),
P("Shahbaz Ahmed","LSG","allrounder","India","left","spin",false,false,false,false,false,false,false,false,"🔵"),
P("Josh Inglis","LSG","wicketkeeper","Australia","right","none",false,false,false,true,false,false,false,false,"🦘"),
P("Shamar Joseph","LSG","bowler","West Indies","right","fast",false,false,false,false,true,false,false,false,"🏹"),
P("Anrich Nortje","LSG","bowler","South Africa","right","fast",false,false,false,true,false,false,false,false,"🐍"),
P("George Linde","LSG","allrounder","South Africa","left","spin",false,false,false,true,false,false,false,false,"🇿🇦"),
P("Arjun Tendulkar","MI","bowler","India","left","fast",false,false,false,false,false,false,false,false,"🏏"),

// ─── COMPLETE SQUAD ADDITIONS (FRINGE & UNCAPPED) ───
// CSK
P("Urvil Patel","CSK","wicketkeeper","India","right","none",false,false,false,false,true,false,false,false,"🧤"),
P("Kartik Sharma","CSK","wicketkeeper","India","left","none",false,false,false,false,true,false,false,false,"🧤"),
P("Prashant Veer","CSK","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"🏏"),
P("Aman Khan","CSK","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"💥"),
P("Zak Foulkes","CSK","allrounder","New Zealand","right","fast",false,false,false,false,true,false,false,false,"🥝"),
P("Anshul Kamboj","CSK","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Mukesh Choudhary","CSK","bowler","India","left","fast",false,false,false,false,false,false,false,false,"💨"),
P("Shreyas Gopal","CSK","bowler","India","right","spin",false,false,false,false,false,false,false,false,"🌀"),
P("Gurjapneet Singh","CSK","bowler","India","left","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Akash Madhwal","CSK","bowler","India","right","fast",false,false,false,false,false,false,false,false,"🎯"),

// MI
P("Danish Malewar","MI","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Robin Minz","MI","wicketkeeper","India","left","none",false,false,false,false,true,false,false,false,"🧤"),
P("Raj Angad Bawa","MI","allrounder","India","left","fast",false,false,false,false,true,false,false,false,"🌟"),
P("Mayank Rawat","MI","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"🏏"),
P("Krish Bhagat","MI","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🏏"),
P("Ashwani Kumar","MI","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Raghu Sharma","MI","bowler","India","right","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Mohammad Izhar","MI","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Mayank Markande","MI","bowler","India","right","spin",false,false,false,false,false,false,false,false,"🌀"),

// KKR
P("Tejasvi Singh","KKR","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Sarthak Ranjan","KKR","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🏏"),
P("Daksh Kamra","KKR","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"🏏"),
P("Vaibhav Arora","KKR","bowler","India","right","fast",false,false,false,false,false,false,false,false,"🎯"),
P("Kartik Tyagi","KKR","bowler","India","right","fast",false,false,false,false,true,false,false,false,"⚡"),
P("Prashant Solanki","KKR","bowler","India","right","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Saurabh Dubey","KKR","bowler","India","left","fast",false,false,false,false,true,false,false,false,"🎯"),

// DC
P("Sahil Parakh","DC","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Sameer Rizvi","DC","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"💥"),
P("Ashutosh Sharma","DC","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"💥"),
P("Vipraj Nigam","DC","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"🏏"),
P("Ajay Mandal","DC","allrounder","India","left","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Tripurana Vijay","DC","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"🏏"),
P("Madhav Tiwari","DC","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Auqib Nabi Dar","DC","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🏏"),

// RR
P("Shubham Dubey","RR","batsman","India","left","none",false,false,false,false,true,false,false,false,"💥"),
P("Aman Rao Perala","RR","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Donovan Ferreira","RR","wicketkeeper","South Africa","right","none",false,false,false,false,true,false,false,false,"🇿🇦"),
P("Lhuan-dre Pretorius","RR","wicketkeeper","South Africa","left","none",false,false,false,false,true,false,false,false,"🇿🇦"),
P("Ravi Singh","RR","wicketkeeper","India","right","none",false,false,false,false,true,false,false,false,"🧤"),
P("Yudhvir Singh Charak","RR","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Kuldeep Sen","RR","bowler","India","right","fast",false,false,false,false,false,false,false,false,"💨"),
P("Sushant Mishra","RR","bowler","India","left","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Yash Raj Punja","RR","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Vignesh Puthur","RR","bowler","India","right","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Brijesh Sharma","RR","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),

// PBKS
P("Priyansh Arya","PBKS","batsman","India","left","none",false,false,false,false,true,false,false,false,"💥"),
P("Nehal Wadhera","PBKS","batsman","India","left","none",false,false,false,false,true,false,false,false,"🌟"),
P("Harnoor Pannu","PBKS","batsman","India","left","none",false,false,false,false,true,false,false,false,"🏏"),
P("Suryansh Shedge","PBKS","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Pyla Avinash","PBKS","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Vishnu Vinod","PBKS","wicketkeeper","India","right","none",false,false,false,false,false,false,false,false,"🧤"),
P("Yash Thakur","PBKS","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Praveen Dubey","PBKS","bowler","India","right","spin",false,false,false,false,false,false,false,false,"🌀"),
P("Vishal Nishad","PBKS","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),

// LSG
P("Himmat Singh","LSG","batsman","India","right","none",false,false,false,false,false,false,false,false,"🏏"),
P("Matthew Breetzke","LSG","batsman","South Africa","right","none",false,false,false,false,true,false,false,false,"🇿🇦"),
P("Akshat Raghuwanshi","LSG","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("Mukul Choudhary","LSG","wicketkeeper","India","right","none",false,false,false,false,true,false,false,false,"🧤"),
P("Arshin Kulkarni","LSG","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🌟"),
P("M Siddharth","LSG","bowler","India","left","spin",false,false,false,false,false,false,false,false,"🌀"),
P("Akash Singh","LSG","bowler","India","left","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Naman Tiwari","LSG","bowler","India","left","fast",false,false,false,false,true,false,false,false,"💨"),
P("Prince Yadav","LSG","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Digvesh Singh","LSG","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),

// SRH
P("Aniket Verma","SRH","batsman","India","right","none",false,false,false,false,true,false,false,false,"🏏"),
P("R Smaran","SRH","batsman","India","left","none",false,false,false,false,true,false,false,false,"🏏"),
P("Harsh Dubey","SRH","allrounder","India","left","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Shivang Kumar","SRH","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🏏"),
P("Krains Fuletra","SRH","allrounder","India","right","spin",false,false,false,false,true,false,false,false,"🏏"),
P("Amit Kumar","SRH","allrounder","India","right","fast",false,false,false,false,true,false,false,false,"🏏"),
P("Zeeshan Ansari","SRH","bowler","India","right","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Eshan Malinga","SRH","bowler","Sri Lanka","right","fast",false,false,false,false,true,false,false,false,"🇱🇰"),
P("Sakib Hussain","SRH","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Onkar Tarmale","SRH","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Praful Hinge","SRH","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),

// GT
P("Kumar Kushagra","GT","wicketkeeper","India","right","none",false,false,false,false,true,false,false,false,"🧤"),
P("Connor Esterhuizen","GT","batsman","South Africa","right","none",false,false,false,false,true,false,false,false,"🇿🇦"),
P("Nishant Sindhu","GT","allrounder","India","left","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Mohd Arshad Khan","GT","allrounder","India","left","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Jayant Yadav","GT","allrounder","India","right","spin",false,false,false,false,false,false,false,false,"🌀"),
P("Manav Suthar","GT","bowler","India","left","spin",false,false,false,false,true,false,false,false,"🌀"),
P("Gurnoor Singh Brar","GT","bowler","India","right","fast",false,false,false,false,true,false,false,false,"💨"),
P("Ashok Sharma","GT","bowler","India","right","fast",false,false,false,false,true,false,false,false,"🎯"),
P("Kulwant Khejroliya","GT","bowler","India","left","fast",false,false,false,false,false,false,false,false,"💨"),
P("Prithviraj Yarra","GT","bowler","India","left","fast",false,false,false,false,false,false,false,false,"🎯"),
];

// ─── CRICKET KNOWLEDGE BASE & TRAIT ENRICHMENT ───
(function enrichPlayersDatabase() {
  const IPL_CENTURIONS = new Set([
    "Virat Kohli", "Rohit Sharma", "Shubman Gill", "Yashasvi Jaiswal", "Ruturaj Gaikwad",
    "Suryakumar Yadav", "KL Rahul", "Virender Sehwag", "Ambati Rayudu", "Robin Uthappa",
    "Manish Pandey", "Mayank Agarwal", "Ajinkya Rahane", "Sachin Tendulkar", "Suresh Raina",
    "Rishabh Pant", "Sanju Samson", "Venkatesh Iyer", "Ishan Kishan", "Devdutt Padikkal",
    "Rajat Patidar", "Prabhsimran Singh", "Jos Buttler", "David Warner", "Chris Gayle",
    "AB de Villiers", "Shane Watson", "Quinton de Kock", "Faf du Plessis", "Jonny Bairstow",
    "Travis Head", "Heinrich Klaasen", "Harry Brook", "Sunil Narine", "Marcus Stoinis",
    "Cameron Green", "Glenn Maxwell", "Ben Stokes", "Brendon McCullum", "Michael Hussey",
    "Adam Gilchrist", "Shaun Marsh", "Mahela Jayawardene", "Sanath Jayasuriya", "David Miller",
    "Steve Smith", "Kane Williamson", "Wriddhiman Saha", "Paul Valthaty", "Hashim Amla",
    "Will Jacks", "Sai Sudharsan"
  ]);

  const IPL_5W_OR_HAT_TRICK = new Set([
    "Jasprit Bumrah", "Yuzvendra Chahal", "Bhuvneshwar Kumar", "Kuldeep Yadav", "Amit Mishra",
    "Sunil Narine", "Rashid Khan", "Harshal Patel", "Andre Russell", "Lasith Malinga",
    "Dwayne Bravo", "Ravichandran Ashwin", "Ravindra Jadeja", "Umesh Yadav", "Varun Chakaravarthy",
    "Mohammed Shami", "Mohammed Siraj", "Arshdeep Singh", "Trent Boult", "Kagiso Rabada",
    "Pat Cummins", "Sam Curran", "Alzarri Joseph", "Ishant Sharma", "Anil Kumble",
    "Pravin Tambe", "Sandeep Sharma", "Jaydev Unadkat", "Akash Madhwal", "Yuvraj Singh",
    "Rohit Sharma", "Axar Patel", "Shardul Thakur", "Lockie Ferguson", "Andrew Tye"
  ]);

  const WORLD_CUP_WINNERS = new Set([
    "Virat Kohli", "Rohit Sharma", "Jasprit Bumrah", "Suryakumar Yadav", "Hardik Pandya",
    "Axar Patel", "Kuldeep Yadav", "Rishabh Pant", "Ravindra Jadeja", "Arshdeep Singh",
    "Mohammed Siraj", "Yuzvendra Chahal", "Sanju Samson", "Shivam Dube", "MS Dhoni",
    "Sachin Tendulkar", "Virender Sehwag", "Gautam Gambhir", "Yuvraj Singh", "Suresh Raina",
    "Harbhajan Singh", "Zaheer Khan", "Ashish Nehra", "Yusuf Pathan", "Sreesanth",
    "Pat Cummins", "Travis Head", "Mitchell Starc", "Glenn Maxwell", "David Warner",
    "Steve Smith", "Josh Hazlewood", "Adam Zampa", "Marcus Stoinis", "Matthew Wade",
    "Mitchell Marsh", "Jos Buttler", "Ben Stokes", "Jofra Archer", "Moeen Ali",
    "Liam Livingstone", "Sam Curran", "Adil Rashid", "Mark Wood", "Chris Woakes",
    "Eoin Morgan", "Jason Roy", "Jonny Bairstow", "Liam Plunkett", "David Willey",
    "Reece Topley", "Phil Salt", "Andre Russell", "Sunil Narine", "Kieron Pollard",
    "Dwayne Bravo", "Chris Gayle", "Nicholas Pooran", "Shimron Hetmyer", "Alzarri Joseph",
    "Rovman Powell", "Shai Hope", "Romario Shepherd", "Shane Watson", "Michael Hussey",
    "Brad Hogg", "Shaun Tait", "Mitchell Johnson", "Lasith Malinga", "Mahela Jayawardene",
    "Muttiah Muralitharan", "Kumar Sangakkara", "Angelo Mathews", "Tillakaratne Dilshan",
    "Imran Tahir", "Faf du Plessis", "Quinton de Kock", "Kagiso Rabada", "David Miller",
    "Dale Steyn", "AB de Villiers", "Jacques Kallis", "Morne Morkel"
  ]);

  const EMERGING_PLAYERS = new Set([
    "Rohit Sharma", "Saurabh Tiwary", "Iqbal Abdulla", "Mandeep Singh", "Sanju Samson",
    "Axar Patel", "Shreyas Iyer", "Mustafizur Rahman", "Basil Thampi", "Rishabh Pant",
    "Shubman Gill", "Devdutt Padikkal", "Ruturaj Gaikwad", "Umran Malik", "Yashasvi Jaiswal",
    "Nitish Kumar Reddy"
  ]);

  const IPL_MVPS = new Set([
    "Shane Watson", "Adam Gilchrist", "Sachin Tendulkar", "Chris Gayle", "Sunil Narine",
    "Glenn Maxwell", "Andre Russell", "Virat Kohli", "Ben Stokes", "Jofra Archer",
    "Harshal Patel", "Jos Buttler", "Shubman Gill"
  ]);

  const OPENERS = new Set([
    "Virat Kohli", "Rohit Sharma", "Shubman Gill", "Yashasvi Jaiswal", "Ruturaj Gaikwad",
    "Prithvi Shaw", "Sai Sudharsan", "Shikhar Dhawan", "Virender Sehwag", "Robin Uthappa",
    "Mayank Agarwal", "Gautam Gambhir", "KL Rahul", "Ishan Kishan", "Wriddhiman Saha",
    "Parthiv Patel", "Abhishek Sharma", "Devdutt Padikkal", "Faf du Plessis", "Jos Buttler",
    "David Warner", "Travis Head", "Quinton de Kock", "Jonny Bairstow", "Phil Salt",
    "Chris Gayle", "Shane Watson", "Brendon McCullum", "Michael Hussey", "Adam Gilchrist",
    "Shaun Marsh", "Matthew Hayden", "Sanath Jayasuriya", "Rahmanullah Gurbaz", "Jake Fraser-McGurk",
    "Will Jacks", "Rachin Ravindra", "Ajinkya Rahane", "Manish Pandey", "Rahul Tripathi",
    "Venkatesh Iyer", "Prabhsimran Singh", "Anuj Rawat", "Priyansh Arya"
  ]);

  const ONE_FRANCHISE_ONLY = new Set([
    "Virat Kohli", "Jasprit Bumrah", "Sunil Narine", "Ruturaj Gaikwad", "Rinku Singh",
    "Sachin Tendulkar", "Lasith Malinga", "Kieron Pollard", "Umran Malik", "Tilak Varma",
    "Mayank Yadav", "Ayush Badoni", "Nehal Wadhera", "Matheesha Pathirana"
  ]);

  const MATCHES_100_PLUS = new Set([
    "Virat Kohli", "Rohit Sharma", "MS Dhoni", "Suresh Raina", "Dinesh Karthik",
    "Ravindra Jadeja", "Shikhar Dhawan", "Robin Uthappa", "Ambati Rayudu", "Ravichandran Ashwin",
    "Bhuvneshwar Kumar", "Sunil Narine", "AB de Villiers", "David Warner", "Kieron Pollard",
    "Sanju Samson", "Ajinkya Rahane", "Yuzvendra Chahal", "KL Rahul", "Hardik Pandya",
    "Jasprit Bumrah", "Andre Russell", "Faf du Plessis", "Gautam Gambhir", "Lasith Malinga",
    "Harbhajan Singh", "Piyush Chawla", "Umesh Yadav", "Amit Mishra", "Dwayne Bravo",
    "Wriddhiman Saha", "Manish Pandey", "Shreyas Iyer", "Rishabh Pant", "Suryakumar Yadav",
    "Axar Patel", "Mohit Sharma", "Sandeep Sharma", "Mohammed Shami", "Kagiso Rabada",
    "Trent Boult", "Shane Watson", "Chris Gayle", "Glenn Maxwell", "Jacques Kallis",
    "Yusuf Pathan", "Ishant Sharma", "Deepak Chahar", "Krunal Pandya", "Mohammed Siraj"
  ]);

  const LEFT_ARM_BOWLERS = new Set([
    "Ravindra Jadeja", "Axar Patel", "Arshdeep Singh", "Mitchell Starc", "Trent Boult",
    "Kuldeep Yadav", "Sam Curran", "Khaleel Ahmed", "Yash Dayal", "Mohsin Khan",
    "T Natarajan", "Mustafizur Rahman", "Marco Jansen", "Spencer Johnson", "Fazalhaq Farooqi",
    "Zaheer Khan", "Ashish Nehra", "Irfan Pathan", "RP Singh", "Pragyan Ojha",
    "Shakib Al Hasan", "Krunal Pandya", "Abhishek Sharma", "Sai Kishore", "Harpreet Brar",
    "Chetan Sakariya", "Sushant Mishra", "Arjun Tendulkar", "Akash Maharaj Singh", "Kwena Maphaka"
  ]);

  const WRIST_SPINNERS = new Set([
    "Yuzvendra Chahal", "Kuldeep Yadav", "Rashid Khan", "Ravi Bishnoi", "Rahul Chahar",
    "Wanindu Hasaranga", "Adam Zampa", "Noor Ahmad", "Suyash Sharma", "Mayank Markande",
    "Karn Sharma", "Piyush Chawla", "Amit Mishra", "Pravin Tambe", "Shreyas Gopal",
    "Tabraiz Shamsi", "Imran Tahir", "Brad Hogg", "Jhathavedh Subramanyan", "Vipraj Nigam", "Kumar Kartikeya"
  ]);

  const WICKETS_50_PLUS = new Set([
    "Yuzvendra Chahal", "Dwayne Bravo", "Piyush Chawla", "Bhuvneshwar Kumar", "Sunil Narine",
    "Ravichandran Ashwin", "Amit Mishra", "Lasith Malinga", "Jasprit Bumrah", "Umesh Yadav",
    "Ravindra Jadeja", "Harbhajan Singh", "Rashid Khan", "Mohammed Shami", "Sandeep Sharma",
    "Axar Patel", "Mohit Sharma", "Kagiso Rabada", "Trent Boult", "Harshal Patel",
    "Andre Russell", "Mohammed Siraj", "Ashish Nehra", "Vinay Kumar", "Zaheer Khan",
    "Shardul Thakur", "Dale Steyn", "Chris Morris", "Morne Morkel", "Albie Morkel",
    "Avesh Khan", "Arshdeep Singh", "Deepak Chahar", "Kuldeep Yadav", "Mitchell Starc"
  ]);

  const UNCAPPED_PLAYERS = new Set([
    "Vaibhav Suryavanshi", "Shubham Dubey", "Ravi Singh", "Harsh Dubey", "Shivang Kumar",
    "Amit Kumar", "Prince Yadav", "Digvesh Singh", "Vyshak Vijaykumar", "Kuldeep Sen",
    "Krish Bhagat", "Musheer Khan", "Priyansh Arya", "Harnoor Pannu", "Vishnu Vinod",
    "Mohammad Izhar", "Ashwani Kumar", "Sameer Rizvi", "Tripurana Vijay", "Swastik Chikara",
    "Angkrish Raghuvanshi", "Rasikh Salam", "Abhinav Manohar", "Shahrukh Khan",
    "Kumar Kushagra", "Robin Minz", "Ashutosh Sharma", "Shashank Singh", "Ramandeep Singh",
    "Anukul Roy", "Harpreet Bhatia", "Atharva Taide", "Vidwath Kaverappa", "Shivam Mavi",
    "Kamlesh Nagarkoti", "Kartik Tyagi", "Yash Thakur", "Yudhvir Singh", "Arshin Kulkarni",
    "Naman Dhir", "Anshul Kamboj", "Sumer Soni", "Manav Suthar", "Suyash Sharma",
    "Akash Madhwal", "Nehal Wadhera", "Ayush Badoni"
  ]);

  const TEENAGERS = new Set([
    "Vaibhav Suryavanshi", "Angkrish Raghuvanshi", "Musheer Khan", "Arshin Kulkarni", "Kwena Maphaka"
  ]);

  const FAST_50_SCORERS = new Set([
    "Yashasvi Jaiswal", "KL Rahul", "Pat Cummins", "Yusuf Pathan", "Nicholas Pooran",
    "Sunil Narine", "Suresh Raina", "Ishan Kishan", "Chris Gayle", "Hardik Pandya",
    "Jake Fraser-McGurk", "Abhishek Sharma", "Travis Head"
  ]);

  if (typeof PLAYERS !== 'undefined' && Array.isArray(PLAYERS)) {
    PLAYERS.forEach(p => {
      const isOverseas = p.country !== "India";
      p.isCapped = isOverseas || !UNCAPPED_PLAYERS.has(p.name);
      p.isOpener = OPENERS.has(p.name);
      p.bowlingArm = LEFT_ARM_BOWLERS.has(p.name) ? 'left' : 'right';
      p.spinType = WRIST_SPINNERS.has(p.name) ? 'wrist' : (p.bowlingType === 'spin' ? 'finger' : 'none');
      p.hasIPLCentury = IPL_CENTURIONS.has(p.name);
      p.has5WicketHaul = IPL_5W_OR_HAT_TRICK.has(p.name);
      p.worldCupWinner = WORLD_CUP_WINNERS.has(p.name);
      p.emergingPlayerAward = EMERGING_PLAYERS.has(p.name);
      p.iplMVP = IPL_MVPS.has(p.name);
      p.oneFranchiseOnly = ONE_FRANCHISE_ONLY.has(p.name);
      p.matches100Plus = MATCHES_100_PLUS.has(p.name);
      p.wickets50Plus = WICKETS_50_PLUS.has(p.name);
      p.teenager = TEENAGERS.has(p.name);
      p.fast50 = FAST_50_SCORERS.has(p.name);
    });
  }
})();
