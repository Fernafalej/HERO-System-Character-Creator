var variables = {
	"characteristics":{
		"Dexterity":{
			"name": "Dexterity",
			"abr" : "DEX",
			"base": 10,
			"cost": 1,
			"secondary": false,			
			"value": 10,
			
			"test":9,
			"totalV":8,
			"totalMods": [
			],
			"totalR" : "11-",
			"totalRMods":[
			],
			"pings":[
				["skills","Acrobatics"],
				
			],
			"update":function(){
				updateCharacteristic(this);
			}
		},
		"Strength":{}
	},
	"skills":{
		"Acrobatics":{
			"name":"Acrobatics",
			"type": "Agility",
			"basedOn": "Dexterity",
			"baseCost":3,
			"perLevel":2,
			"level":0,
			"totalCost":3,
			
			"update": function(){
				//TODO
			}
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
	ch.totalRoll = temp.toString() +"-";
	redrawChar(ch.name);
	ping(ch["pings"]);
}

function redrawChar(name){
	//TODO
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