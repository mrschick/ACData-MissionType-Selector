var type = [
	"none",
	"DCA",
	"BARCAP",
	"HAVCAP",
	"TARCAP",
	"Rescort",
	"Ambush CAP",
	"Sweep",
	"Alert / Scramble / QRA",
	"Intercept",
	"Escort",
	"DEAD",
	"SEAD",
	"OCA Strike",
	"Interdiction Strike",
	"Strike",
	"Deep strike",
	"Stealth Strike",
	"STRAT Strike",
	"FAC(A)",
	"On Call CAS",
	"Pre-Plan CAS",
	"CAS",
	"SAD - Search and Destroy",
	"Interdiction (supply line)",
	"BAI (Battlefield Area Interdiction)",
	"AEW/ABCCC",
	"ELINT",
	"Air Refuel",
	"Recce",
	"BDA",
	"EWS/ESJ",
	"Airmobile",
	"AirLift",
	"CSAR",
	"ASW",
	"TASMO",
	"Patrol",
	"Recce Patrol",
	"Abort",
	"Training"
];

var ALL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41];
var AA = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var AG = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

function select(arr, mode) // mode 0 to unselect, 1 to select
{
	for(i = 1; i <= 41; i++)
	{
		if(arr.includes(i))
		{
			if(mode == 0)
				document.getElementById(i).checked = false;
			if(mode == 1)
				document.getElementById(i).checked = true;
		}
	}
}

function writeCheckboxes()
{
	for(i = 1; i <= 41; i++)
		document.write('<input type="checkbox" id="'+i+'"> '+i+': '+type[i-1]+'<br>');
}

function importMissionTypes(inputId)
{
	input = document.getElementById(inputId).value;
	arr = input.split(" ");

	for(i = 1; i <= 41; i++)
	{
		if(arr[i+1] == "0")
			document.getElementById(i).checked = false;
		else
			document.getElementById(i).checked = true;
	}
}

function exportMissionTypes(outputId)
{
	output = "misTypeCapability 41";

	for(i = 1; i <= 41; i++)
	{
		if(document.getElementById(i).checked)
			output = output + " 100";
		else
			output = output + " 0";
	}

	document.getElementById(outputId).innerHTML = output;
	document.getElementById(outputId).value = output;
}

function clearText(id)
{
	document.getElementById(id).innerHTML = "";
	document.getElementById(id).value = "";
}

function copyClip(id)
{
	document.getElementById(id).select();
	document.execCommand("copy");
}