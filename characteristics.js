var variables{
	"characteristics"{
		"Strength"{
			"name": "Strength",
			"abr" : "STR",
			"base": 10,
			"cost": 1,
			"secondary": false,
			
			"value": 10,
			"totalV":10,
			"totalMods": [
				["characteristics","Strength","value"]
			]
			"roll": "11-",
			"totalR" : "11-",
			"totalRMods":[
				["characteristics","Strength","totalV"]
			]
			"update":function(){
				updateCharacteristic(["characteristics",this.name]);
			}
		},
		
	}
}

function updateCharacteristic(v){
	var s = "";
	for(var i = 0; i < v.length;i++){
		s += v[i];
	}
	console.log(s);
	console.log(variables[])
	
}