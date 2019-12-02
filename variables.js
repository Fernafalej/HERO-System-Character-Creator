var variables = {
	"characteristics":{
		"Strength":{
			"name": "Strength",
			"abr" : "STR",
			"base": 10,
			"cost": 1,
			"secondary": false,			
			"value": 10,

			"totalV":8,
			"totalMods": [
			],
			"totalR" : "11-",
			"totalRMods":[
			],
			"pings":[
				["totalCosts","characteristics"],
			],
			"update":function(){
				updateCharacteristic(this);
			},
			"totalCost":function (){
				return Math.ceil((this.value-this.base)*this.cost); //returns the total CP cost
			},
			"roll": function(){
				if(this.secondary){
					return ""; //secondary have no roll
				}
				return (Math.round((9+this.value/5).toString()) +"-");
				//TODO rounding
			}
		},
		//TODO cost = 2
		"Dexterity":{
			"name": "Dexterity",
			"abr" : "DEX",
			"base": 10,
			"cost": 2,
			"secondary": false,			
			"value": 10,
			
			"totalV":10,
			"totalMods": [
			],
			"totalR" : "11-",
			"totalRMods":[
			],
			"pings":[
				["totalCosts","characteristics"],
			],
			"update":function(){
				updateCharacteristic(this);
			},
			"totalCost":function (){
				return Math.ceil((this.value-this.base)*this.cost); //returns the total CP cost
			},
			"roll": function(){
				if(this.secondary){
					return ""; //secondary have no roll
				}
				return (Math.round((9+this.value/5).toString()) +"-");
				//TODO rounding
			}
		},
	},
	"skills":{
		
	},
	"totalCosts":{
		"characteristics":{
			"name":"characteristics",
			"value" : 0,
			
			"update":function(){
				this.value = 0;
				for(var s in variables[this.name]){
					this.value += variables[this.name][s].totalCost();
				}
				document.getElementById(this.name +"Cost").innerHTML = "Total Cost : " +this.value;
				ping(this["pings"]);
			},
			"pings":[
				["exp"],
			],
		},
		"skills":{
			"name":"skills",
			"value" : 0,
			
			"update":function(){
				this.value = 0;
				for(var s in variables[this.name]){
					this.value += variables[this.name][s].totalCost();
				}
				document.getElementById(this.name +"Cost").innerHTML = "Total Cost : " +this.value;
				ping(this["pings"]);
			},
			"pings":[
				["exp"],
			],
		}
	},
	"exp":{
		"startEXP":150,
		"expEarned":0,
		"startComp":50,
		"compEarned":0,
		
		"pings":[
		
		],
		"update": function(){
			
			this.startEXP = document.getElementById("startEXP").valueAsNumber;
			this.expEarned = document.getElementById("expEarned").valueAsNumber;
			this.startComp = document.getElementById("startComp").valueAsNumber;
			this.compEarned = document.getElementById("compEarned").valueAsNumber;
			
			var totalComp = this.startComp+this.compEarned;
			var cte = 0; //TODO
			var totalEXP = this.startEXP+this.expEarned + cte;
			var expSpent = 0;
			for(var i in variables["totalCosts"]){
				expSpent += variables["totalCosts"][i].value;
			}
			var expUnspent = totalEXP-expSpent;
			var unspentComp = totalComp-cte;
			
			document.getElementById("totalExp").innerHTML = totalEXP;
			document.getElementById("totalExpSpent").innerHTML = expSpent;
			document.getElementById("unspentExp").innerHTML = expUnspent;
			document.getElementById("totalComp").innerHTML = totalComp;
			document.getElementById("cte").innerHTML = cte;
			document.getElementById("unspentComp").innerHTML = unspentComp;
		}
	}
}

function updateCharacteristic(ch){
	var temp = ch.value;
	var obj = variables;
	
	//Update totalV
	for(var i = 0; i < ch.totalMods.length;i++){
		for(var j = 0; j < ch.totalMods[i].length; j++){
			obj = obj[ch.totalMods[i][j]];
		}
		temp += obj;
		obj = variables;
	}
	ch.totalV = temp;
	
	//Update totalR
	temp = Math.round(9+ch.totalV/5);
	obj = variables;
	for(var i = 0; i < ch.totalRMods.length;i++){
		for(var j = 0; j <= v.length; j++){
			obj = obj[ch.totalRMods[i][j]];
		}
		temp += obj;
		obj = variables;
	}
	ch.totalR = temp.toString() +"-";
	redrawChar(ch);
	ping(ch["pings"]);
}

function redrawChar(ch){
	document.getElementById(ch.name+"Total").innerHTML = ch.totalV;
	document.getElementById(ch.name+"CP").innerHTML = ch.totalCost();
	document.getElementById(ch.name+"Roll").innerHTML = ch.roll();
	document.getElementById(ch.name+"TotalRoll").innerHTML = ch.totalR;
}

function ping(p){
	var obj = variables;
	for(var i = 0; i < p.length; i++){
		for(var j = 0; j<p[i].length;j++){
			obj = obj[p[i][j]];
		}
		obj.update();
		obj = variables;
	}
}