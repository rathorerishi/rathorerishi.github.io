var nam=new Array();
nam[0]="Yaakov";
nam[1]="John";
nam[2]="Jen";
nam[3]="jason";
nam[4]="paul";
nam[5]="frank";
nam[6]="larry";
nam[7]="paula";
nam[8]="laura";
nam[9]="jim";


for (var i = 0; i < nam.length; i++) {
	if(nam[i].charAt(0)==='J'|| nam[i].charAt(0)==='j'){
        console.log("Goodbye "+ nam[i])
	}
	else{
		console.log("Hello "+ nam[i])
	}
}