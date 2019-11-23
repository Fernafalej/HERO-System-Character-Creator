class Stat{
	//var div;
	constructor(name, abr, value,base,cost,sec){
		this.name = name;	//name of the stat
		this.abr = abr;		//abreviation of the stat
		this.value = value; //the char points you have
		this.base = base;	//the start value of a stat
		this.cost = cost;	//the cost per point
		this.secondary = sec;
		this.total;
		this.roll;
		this.totalRoll;
		this.mods = [[this, "value"]];	//list of mods through perks TODO
		this.rollMods = [[this, "value"]];	//list of mods through perks TODO
		stats[name] = this;
		this.generateDiv();
		nameOfObject[name] = this;
	}
	
	generateDiv(){
		this.div = document.createElement("DIV");
		this.div.id = this.name;
		this.div.className = "stat row"; //TODO Stat style
		var row=[];
		document.getElementById("charTable").appendChild(this.div);	
		var stat = this;
		
		for(var i = 0; i <= 5; i++){
			row[i] = document.createElement("DIV");
			//row[i].innerHTML = "HI";
			row[i].className = "cell";
			this.div.appendChild(row[i]);
		}
		
		row[0].innerHTML=this.abr;
		
		var input = document.createElement("INPUT");
		input.type="number";
		input.min = 0;
		input.value = this.value;
		input.id = "input"+this.name;
		input.addEventListener("input",function(){
				nameOfObject[this.id.substring(5)].value = this.valueAsNumber;
				Stat.update(nameOfObject[this.id.substring(5)]);
			}
		)
		row[1].appendChild(input);
		row[2].id = this.name+"Total";
		row[3].id = this.name+"CP";
		row[4].id = this.name+"Roll";
		row[5].id = this.name+"TotalRoll";
		this.update();
	}
	
	totalCost(){
		return Math.ceil((this.value-this.base)*this.cost); //returns the total CP cost
	}
	
	roll(){
		if(this.secondary){
			return ""; //secondary have no roll
		}
		return (Math.round((9+this.value/5).toString()) +"-");
		//TODO rounding
	}
	totalRoll(){
		if(this.secondary){
			return ""; //secondary have no roll
		}
		return (Math.round((9+this.total/5).toString()) +"-");
	}
	
	update(){
		this.totalCost = this.totalCost();
		//TODO in static
		this.total = 0;
		for(var i = 0; i < this.mods.length; i++){
			this.total += this.mods[i][0][this.mods[i][1]];
			//console.log(this.mods[i][0]);
			//console.log(this.mods[i][1]);
			//console.log(this.mods[i][0][this.mods[i][1]]);
		}
		document.getElementById(this.name+"Total").innerHTML = this.total;
		
		document.getElementById(this.name+"CP").innerHTML = this.totalCost;
		this.roll = this.roll();
		document.getElementById(this.name+"Roll").innerHTML = this.roll;
		if(monobinding[this.name] != undefined){
			//console.log(this.name);
			//console.log(monobinding);
			monobinding[this.name]();
		};
		/*if(monobinding[this.name] != null){
			for(var i = 0; i < monobinding[this.name].length;i++){
				document.getElementById(monobinding[this.name][i]).innerHTML = this.value;
			}
		}*/
		//TODO
	}
	
	setValue(value){
		if (value> 0) this.value = value;
		update()
	}
	static update(x){
		var y = Stat.totalCost(x);
		x.totalCost = y;
		document.getElementById(x.name+"CP").innerHTML = x.totalCost;
		x.roll = Stat.roll(x);
		document.getElementById(x.name+"Roll").innerHTML = x.roll;
		updateStatCost();
		monobinding[x.name]();
		if(monobinding[x.name] != undefined){
			monobinding[x.name]();
		}
		//TODO
	}
	static totalCost(x){
		return Math.ceil((x.value-x.base)*x.cost);
	}
	static roll(x){	
		if(x.secondary){
			return ""; //secondary have no roll
		}
		if(x.total != undefined){
			//console.log(x.total);
			return ((Math.round((9+x.total/5)).toString()) +"-");
		}
		return ((Math.round((9+x.value/5))).toString() +"-");
		//TODO rounding
	}
}



