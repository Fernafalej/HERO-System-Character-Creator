var monobinding={
	"Strength":function(){
		for(var i in spt){
			for(var s in spt[i]){
				if(spt[i][s].basedOn == "Strength"){}
			}
		}
	},
	"Dexterity":function(){
		for(var i in spt){
			for(var s in spt[i]){
				if(spt[i][s].basedOn == "Dexterity"){
					spt[i][s].update();
				}
			}
		}
	},
	"Constitution":function(){
		for(var i in spt){
			for(var s in spt[i]){
				if(spt[i][s].basedOn == "Constitution"){
					spt[i][s].update();
				}
			}
		}
	},
	"Intelligence":function(){
		for(var i in spt){
			for(var s in spt[i]){
				if(spt[i][s].basedOn == "Intelligence"){
					spt[i][s].update();
				}
			}
		}
	},
	"Ego":function(){
		for(var i in spt){
			for(var s in spt[i]){
				if(spt[i][s].basedOn == "Ego"){
					spt[i][s].update();
				}
			}
		}
	},
	"Presence":function(){
		for(var i in spt){
			for(var s in spt[i]){
				if(spt[i][s].basedOn == "Presence"){
					spt[i][s].update();
				}
			}
		}
	},
	"Offensive Combat Value":function(){},
	"Defensive Combat Value":function(){},
	"Offensive Mental Combat Value":function(){},
	"Defensive Mental Combat Value":function(){},
	"Speed":function(){},
	"Physical Defense":function(){},
	"Energy Defense":function(){},
	"Recovery":function(){},
	"Endurance":function(){
		document.getElementById("currentStatusEnd").innerHTML = stats["Endurance"].value;
	},
	"Body":function (){
		document.getElementById("currentStatusBody").innerHTML = stats["Body"].value
	},
	"Stun":function(){
		document.getElementById("currentStatusStun").innerHTML = stats["Stun"].value
	}
};
var nameOfObject ={};
var stats = {};
var spt = {
	skills:{},
	perks:{},
	talents:{}
}
var statsTotalCost = 0;
var sptTotalCost = 0;
var exp = {
	"startEXP":150,
	"expEarned":0,
	"startComp":50,
	"compEarned":0,
}

window.onload = function (){
	//console.log(exp);
	//console.log(document.getElementById("startingExp"));
	variables["characteristics"]["Dexterity"].update();
	generateStats();
	generateEXP();
	redrawSpt();
	skills.acrobatics.add();
	
}
function generateStats(){
	var str = new Stat("Strength", "STR",10,10,1,false);
	var dex = new Stat("Dexterity", "DEX",10,10,2,false);
	var con = new Stat("Constitution", "CON",10,10,1,false);
	var inte = new Stat("Intelligence", "INT",10,10,1,false);
	var ego = new Stat("Ego", "EGO",10,10,1,false);
	var pre = new Stat("Presence", "PRE",10,10,1,false);
	var ocv = new Stat("Offensive Combat Value", "OVC",3,3,5,true);
	var dcv = new Stat("Defensive Combat Value", "DCV",3,3,5,true);
	var omcv = new Stat("Offensive Mental Combat Value", "OMCV",3,3,3,true);
	var dmcv = new Stat("Defensive Mental Combat Value", "DMCV",3,3,3,true);
	var spd = new Stat("Speed", "SPD",2,2,10,true);
	var pd = new Stat("Physical Defense", "PD",2,2,1,true);
	var ed = new Stat("Energy Defense", "ED",2,2,1,true);
	var rec = new Stat("Recovery", "REC",4,4,1,true);
	var end = new Stat("Endurance", "END",20,20,0.2,true);
	var body = new Stat("Body", "BODY",10,10,1,true);
	var stun = new Stat("Stun", "STUN",20,20,0.5,true);
}

function generateEXP(){
	//Starting EXP
	var input = document.getElementById("startingExp");
	input.value = exp.startEXP;
	input.addEventListener("input",function(){
			exp.startEXP = this.valueAsNumber;
			updateTotalExp();
		}
	)
	//Earned EXP
	input = document.getElementById("earnedExp");
	input.value = exp.expEarned;
	input.addEventListener("input",function(){
			exp.expEarned = this.valueAsNumber;
			updateTotalExp();
		}
	)
	
	//EXP Spent
	updateAllCost();
	//Total Comp
	updateTotalComp();
	//Starting Comp
	input = document.getElementById("startingComp");
	input.value = exp.startComp;
	input.addEventListener("input",function(){
			exp.startComp = this.valueAsNumber;
			updateTotalComp();
		}
	)
	
	//Earned Comp
	input = document.getElementById("earnedComp");
	input.value = exp.compEarned;
	input.addEventListener("input",function(){
			exp.compEarned = this.valueAsNumber;
			updateTotalComp();
		}
	)
	//Comp To EXP
	updateCompToExp();
	//Total Comp
	updateTotalExp();
	//Unspent EXP
	updateUnspentExp();
	//UnspentComp
	updateUnspentComp();
}

function getStatCost(){
	var i = 0;
	for(var s in stats){
		i += stats[s].totalCost;
	}
	return i;
}
function getSPTCost(){
	var sum = 0;
	for(var i in spt){
		for(var s in spt[i]){
			sum += spt[i][s].totalCost;
		}
	}
	return sum;
}
function updateTotalExp(){
	exp.totalExp = exp.startEXP+exp.expEarned+exp.cte;//TODO Comp
	document.getElementById("totalExp").innerHTML = exp.totalExp;
	updateUnspentExp();
}
function updateTotalComp(){
	exp.totalComp = exp.startComp+exp.compEarned;
	document.getElementById("totalComp").innerHTML = exp.totalComp;
	updateUnspentComp();
}
function updateAllCost(){
	exp.expSpent = statsTotalCost+sptTotalCost;//TODO all costs
	document.getElementById("totalExpSpent").innerHTML = exp.expSpent;
	updateUnspentExp();
	//TODO
}
function updateCompToExp(){
	exp.cte = 0;//TODO
	document.getElementById("cte").innerHTML = exp.cte;
	updateTotalExp();
}
function updateUnspentExp(){
	exp.unspentExp = exp.totalExp - exp.expSpent;
	document.getElementById("unspentExp").innerHTML = exp.unspentExp;
}
function updateUnspentComp(){
	exp.unspentComp = exp.totalComp-exp.cte;
	document.getElementById("unspentComp").innerHTML = exp.unspentComp;
}
function updateStatCost(){
	statsTotalCost = getStatCost();
	updateAllCost();
	document.getElementById("statCost").innerHTML = "Total Cost : " +statsTotalCost;
	//TODO
}
function updateSPTCost(){
	sptTotalCost = getSPTCost();
	updateAllCost();
	document.getElementById("sptCost").innerHTML = "Total Cost : " +sptTotalCost;
}

function redrawSpt(){
	var list = document.getElementById("listOfSPT");
	list.innerHTML = "";
	var row = document.createElement("DIV");
	var name = document.createElement("DIV");
	var level = document.createElement("DIV");
	var cost = document.createElement("DIV");
	var roll = document.createElement("DIV");
	row.className="tableHead";
	name.className = "cell";
	level.className = "cell";
	cost.className = "cell";
	roll.className = "cell";
	name.style.width = "55%";
	level.style.width = "15%";
	cost.style.width = "15%";
	roll.style.width = "15%";
	name.innerHTML = "Name";
	level.innerHTML = "LvL";
	cost.innerHTML = "CP";
	roll.innerHTML = "Roll";
	row.appendChild(name);
	row.appendChild(level);
	row.appendChild(cost);
	row.appendChild(roll);
	list.appendChild(row);
	for(var i in spt){
		for(var s in spt[i]){
			addSPTRow(i,s);
		}
	}
}
function addSPTRow(i,s){
	var row = document.createElement("DIV");
	row.id = "row"+i+s;
	var list = document.getElementById("listOfSPT");
	row.className = "row";
	list.appendChild(row);
	var name = document.createElement("DIV");
	name.id = i+s;
	name.className = "cell";
	name.innerHTML = spt[i][s].description();
	row.appendChild(name);
	var level = document.createElement("DIV");
	level.className = "cell";
	var levelInput = document.createElement("INPUT");
	levelInput.value = spt[i][s].level;
	levelInput.type="number";
	levelInput.min = -2;
	levelInput.id = "input"+i+"_"+s;
	level.appendChild(levelInput);
	levelInput.addEventListener("input",function(){
		var type = this.id.substring(5);
		type = type.slice(0,type.indexOf("_"));
		var name = this.id.substring(this.id.indexOf("_")+1);
		spt[type][name].level = this.valueAsNumber;
		spt[type][name].update();
		//TODO update cost
	});
	row.appendChild(level);
	var cost = document.createElement("DIV");
	cost.id = i+s+"cost";
	cost.className = "cell";
	row.appendChild(cost);
	var roll = document.createElement("DIV");
	roll.id = i+s+"roll";
	roll.className = "cell";
	row.appendChild(roll);
	spt[i][s].update();
}
function removeSPTRow(i,s){
	document.getElementById("row"+i+s);
}
//Display
function showId(id){
	document.getElementById(id).style.display = document.getElementById(id).defaultDisplay;
}
function hideId(id){
	document.getElementById(id).style.display = "none";
}
function showElement(element){
	element.style.display = element.defaultDisplay;
}
function hideElement(element){
	element.style.display = "none";
}
