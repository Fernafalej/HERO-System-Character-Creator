window.onload = function (){
	generateHidden();
	loadEventListeners();
	generateEXP();
	generateCharacteristics();
	
	//variables["characteristics"]["Dexterity"].update();
	//generateCharacteristics();
	//generateStats();
	generateEXP();
	skills.Acrobatics.add();
	generateAddSkillSelects();
	redrawSkills();	
}

function loadEventListeners(){
	loadShowable();
	loadHideable();
}

function generateCharacteristics(){
	for(var i in variables["characteristics"]){
		var stat = variables["characteristics"][i];
		var div = document.createElement("DIV");
		div.id = stat.name;
		div.className = "stat row";
		var row=[];
		document.getElementById("charTable").appendChild(div);	
		for(var i = 0; i <= 5; i++){
			row[i] = document.createElement("DIV");
			//row[i].innerHTML = "HI";
			row[i].className = "cell";
			div.appendChild(row[i]);
		}
		
		row[0].innerHTML=stat.abr;
		
		var input = document.createElement("INPUT");
		input.type="number";
		input.min = 0;
		input.value = stat.value;
		input.id = "input"+stat.name;
		input.addEventListener("input",function(){
			//TODO
				var stat = variables["characteristics"][this.id.substring(5)];
				stat.value = this.valueAsNumber;
				stat.update();
			}
		)
		row[1].appendChild(input);
		row[2].id = stat.name+"Total";
		row[3].id = stat.name+"CP";
		row[4].id = stat.name+"Roll";
		row[5].id = stat.name+"TotalRoll";
		stat.update();
	}
}

function generateEXP(){
	//Starting EXP
	var input = document.getElementById("startEXP");
	input.value = variables.exp.startEXP;
	input.addEventListener("input",function(){
			variables.exp.startEXP = this.valueAsNumber;
			variables.exp.update();
		}
	)
	//Earned EXP
	input = document.getElementById("expEarned");
	input.value = variables.exp.expEarned;
	input.addEventListener("input",function(){
			variables.exp.expEarned = this.valueAsNumber;
			variables.exp.update();
		}
	)
	input = document.getElementById("startComp");
	input.value = variables.exp.startComp;
	input.addEventListener("input",function(){
			variables.exp.startComp = this.valueAsNumber;
			variables.exp.update();
		}
	)
	
	//Earned Comp
	input = document.getElementById("compEarned");
	input.value = variables.exp.compEarned;
	input.addEventListener("input",function(){
			variables.exp.compEarned = this.valueAsNumber;
			variables.exp.update();
		}
	)
}


function redrawSkills(){
	var list = document.getElementById("listOfSkills");
	list.innerHTML = "";
	var row = document.createElement("DIV");
	var name = document.createElement("DIV");
	var base = document.createElement("DIV");
	var total = document.createElement("DIV");
	var cost = document.createElement("DIV");
	var roll = document.createElement("DIV");
	var tRoll = document.createElement("DIV");
	row.className="tableHead";
	name.className = "cell";
	base.className = "cell";
	total.className = "cell";
	cost.className = "cell";
	roll.className = "cell";
	tRoll.className = "cell";
	name.style.width = "40%";
	base.style.width = "12%";
	total.style.width = "12%";
	cost.style.width = "12%";
	roll.style.width = "12%";
	tRoll.style.width = "12%";
	name.innerHTML = "Name";
	base.innerHTML = "Base";
	total.innerHTML = "Total";
	cost.innerHTML = "CP";
	roll.innerHTML = "Roll";
	tRoll.innerHTML = "Total Roll";
	row.appendChild(name);
	row.appendChild(base);
	row.appendChild(total);
	row.appendChild(cost);
	row.appendChild(roll);
	row.appendChild(tRoll);
	list.appendChild(row);
	for(var i in variables["skills"]){
		addSkillRow(i);
	}
}
function addSkillRow(i){
	if(variables.skills[i].noRoll){
		console.log("hi");
	}
	var row = document.createElement("DIV");
	row.id = "row"+i;
	var list = document.getElementById("listOfSkills");
	row.className = "row";
	list.appendChild(row);
	var name = document.createElement("DIV");
	name.id = i;
	name.className = "cell";
	var s = variables.skills[i];
	name.innerHTML = s.description();
	row.appendChild(name);
	var level = document.createElement("DIV");
	level.className = "cell";
	var levelInput = document.createElement("INPUT");	
	levelInput.type="number";
	levelInput.value = variables.skills[i].level;
	levelInput.min = s.min;
	if(s.max > 0)levelInput.max = s.max;
	levelInput.id = "input"+i;
	level.appendChild(levelInput);
	levelInput.addEventListener("input",function(){
		var id = this.id.substring(5);
		variables.skills[id].level = this.valueAsNumber;
		variables.skills[id].update();
		variables.totalCosts.skills.update();
	});
	row.appendChild(level);
	var total = document.createElement("DIV");
	total.id = i+"total";
	total.className = "cell";
	row.appendChild(total);
	var cost = document.createElement("DIV");
	cost.id = i+"cost";
	cost.className = "cell";
	row.appendChild(cost);
	var roll = document.createElement("DIV");
	roll.id = i+"roll";
	roll.className = "cell";
	row.appendChild(roll);
	var troll = document.createElement("DIV");
	troll.id = i+"tRoll";
	troll.className = "cell";
	row.appendChild(troll);
	variables.totalCosts.skills.update();
	variables.skills[i].update();
}
function removeSkillRow(i){
	document.getElementById("row"+i);
}
function generateAddSkillSelects(){
	//Skill Selects
	var selects = [
		"Agility",
		"Intellect",
		"Interaction",
		"Background",
		"Combat"
	];
	for(var i = 0; i < selects; i++){
		document.getElementById("selectskills"+i).innerHTML = "";
	}
	for(var i in skills){
		if(variables["skills"][i] == undefined){
			var opt = document.createElement("option");
			opt.innerHTML = skills[i]["name"];
			opt.id = "option" + skills[i]["type"] + skills[i]["name"];
			var sel = document.getElementById("selectskills"+skills[i]["type"]);
			sel.appendChild(opt);
		}
	}
	for(var i = 0; i < selects.length;i++){
		var sel = document.getElementById("selectskills"+selects[i]);
		if(skills[sel.value] != undefined){
			skills[sel.value].show();
		}
		sel.addEventListener("input",function(){
				//var name = this.id.substring(12);
				//console.log(name);
				//console.log(this.value);
				//selected[name] = this.value;
				//document.getElementById(name+"Selected").innerHTML = this.value;
				//skills[selected[name]].show();
				skills[this.value].show();
			}
		)
	}
	for(let s in variables["skills"]){
		generateDeleteSkillOptions(s);
	}
}
function generateDeleteSkillOptions(skill){
	var opt = document.createElement("option");
	opt.innerHTML = variables.skills[skill]["name"];
	opt.id = "selectDelete" + variables.skills[skill]["name"];
	var sel = document.getElementById("selectskillsDelete");
	sel.appendChild(opt);
}

//Display
function generateHidden(){
	var hide = document.getElementsByClassName("hidden");
	for(var j = 0; j < hide.length; j++){
			var elem = hide[j];
			elem.defaultDisplay = window.getComputedStyle(elem, null).getPropertyValue("display");
			elem.style.display = "none";
		}
}
function loadShowable(){
	var showables = document.getElementsByClassName("showable");
	for(var i = 0; i < showables.length; i++){
		var elem = showables[i];
		elem.addEventListener("click", function(){
			var str = this.id;
			str = str.slice((str.indexOf("show")+4),str.length);
			showId(str);
		});
	}
}

function loadHideable(){
	var hideables = document.getElementsByClassName("hideable");
	for(var i = 0; i < hideables.length; i++){
		var elem = hideables[i];
		elem.addEventListener("click", function(){
			var str = this.id;
			str = str.slice((str.indexOf("hide")+4),str.length);
			hideId(str);
		});
	}	
}
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
