var powers ={
	"Absorption":{
		"name": "Absorption",
		"type":["Adjustment"],
		"duration": "constant",
		"target": "self",
		"range": "self",
		"costsEnd": "yes",
		
		"baseCost":0,
		"activeCost":0,
		"realCost":0,
		
		"cost": function(){
			
		},
		"costDes": "1 CP per Body Absorbed",
		
		"generateAdders": function (x){
			
		},
		"generateAdvantages": function (x){
			
		},
		"generateLimitations": function (x){
			
		},
		"add":function(x){
			addNewPower(this.name,x);
		},
		
		"adders":[],
		"advantages":[],
		"limitations":[],
		
		"pAdders":{},
		"pAdvantages":{
			"Defensive Absorption":{
				"name":"Defensive Absorption",
				"value":function(){
					return 1/2;
				},
				"req": function(x){
					var bool = true;
					bool = !(variables.powers.x["advantages"].includes("Defensive Absorption"));
					bool = !(variables.powers.x["advantages"].includes("Resistent Defensive Absorption"));
					return bool;
				},
				"add":function(x){
					addAdvantage(x,this.name);
				}
			},
			"Resistent Defensive Absorption":{
				"name":"Resistent Defensive Absorption",
				"value":function(x){
					return 1;
				},
				"req": function(x){
					var bool = true;
					bool = !(variables.powers.x.advantages.includes(this.name));
					bool = !(variables.powers.x.advantages.includes("Resistent Defensive Absorption"));
					return bool;
				},
				"add":function(x){
					addAdvantage(x,this.name);
				}
			},
			"Increased Maximum":{
				"name":"Increased Maximum",
				"value":function(x){
					return 1/4;
				},
				"req":function(x){return true},
				"add":function(x){
					addAdvantage(x,this.name);
				}
			},
			"Varying Effect":{
				"name":"Varying Effect",
				"value":function(x){
					return 3/4;
				},
				"req":function(x){return true},
				"add":function(x){
					addAdvantage(x,this.name);
				}
			}
		},
		"pLimitations":{
			"Limited Phenomenon":{
				"name":"Limited Phenomenon",
				"value":function(x){
					return -1/4*variables.powers.x.limitations["Limited Phenomenon"].level;
				},
				"level":0,
				"req":function(x){return variables.powers.x.limitations[this.name].level<=4},
				"add":function(x){
					addLimitation(x,this.name);
					variables.powers.x.limitations[this.name].level++;
				}
			}
		},
	}
	
	
	
	
	
}

function addNewPower(power,title){
	addPowerToPool(power,title,title)
}

function addPowerToPool(power,title,pool){
	if(variables.powers[title] == undefined){
		var p = powers[power];
		p.pool = pool;
		p.title = title;
		variables.powers[title] = p;
		//TODO cost
	}else{
		//TODO
		console.log("title is used");
	}
}

function movePowerToPool(title,pool){
	
}

function addAdder(title,adder){
	
}
function addAdvantage(title,adv){
	variables.powers[title].advantages.push(adv);
}
function addLimitation(title,lim){
	
}
/*
ADJUSTMENT POWERS
Absorption
Aid
Drain
Healing

ATTACK POWERS
Blast
Change Environment
Characteristics (STR only)
Darkness
Dispel
Drain
Entangle
Flash
Hand-To-Hand Attack (HA)
Images
Killing Attack
Mental Blast
Mental Illusions
Mind Control
Reflection
Telekinesis
Transform
Powers with the Usable As Attack Advantage

AUTOMATON POWERS
Cannot Be Stunned
Does Not Bleed
No Hit Locations
Takes No STUN

BODY-AFFECTING POWERS
Density Increase
Desolidification
Duplication
Extra Limbs
Growth
Multiform
Shape Shift
Shrinking
Stretching

DEFENSE POWERS
Barrier
Characteristics (PD and ED only)
Damage Negation
Damage Reduction
Deflection
Flash Defense
Knockback Resistance
Mental Defense
Power Defense
Resistant Protection

MENTAL POWERS
Mental Blast
Mental Illusions
Mind Control
Mind Link
Mind Scan
Telepathy

MOVEMENT POWERS
Extra-Dimensional Movement
Faster-Than-Light (FTL) Travel
Flight
Leaping
Running
Swimming
Swinging
Teleportation
Tunneling

SENSE-AFFECTING POWERS
Darkness
Flash
Images
Invisibility

SENSORY POWERS
Clairsentience
Enhanced Senses
Mind Scan

SIZE POWERS
Growth
Shrinking

SPECIAL POWERS
Duplication
Endurance Reserve
Enhanced Senses
Extra Limbs
Flash Defense
Knockback Resistance
Luck
Mental Defense
Power Defense
Regeneration
Skills

STANDARD POWERS
Barrier
Blast
Characteristics
Clairsentience
Clinging
Change Environment
Damage Negation
Damage Reduction
Darkness
Deflection
Density Increase
Desolidification
Dispel
Entangle
Flash
Hand-to-Hand Attack (HA)
Images
Invisibility
Killing Attack
Life Support (LS)
Multiform
Reflection
Resistant Protection
Shape Shift
Stretching
Summon
Telekinesis
Transform
*/