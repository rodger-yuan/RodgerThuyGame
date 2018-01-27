$( document ).ready(function() {
	var url = "https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight=&callback=?"
	var rodger_players = ["James Harden", "Damian Lillard", "Russell Westbrook", "Kristaps Porzingis", "Stephen Curry"]
	var thuy_players = ["LeBron James", "Anthony Davis", "DeMar DeRozan", "Kevin Durant", "Giannis Antetokounmpo"]
	var rodger_players_2 = ["Karl-Anthony Towns", "Lonzo Ball", "John Wall", "Paul George", "DeMar DeRozan"]
	var thuy_players_2 = ["Jimmy Butler", "Joel Embiid", "Kyrie Irving", "Ben Simmons", "Victor Oladipo"]

//["Paul George", "Ben Simmons", "Draymond Green", "Karl-Anthony Towns", "Kevin Love", "Devin Booker", "John Wall", "Kyrie Irving", "Kyle Lowry", "Jimmy Butler", "DeMar DeRozan", "Joel Embiid", "Victor Oladipo"]

	$.getJSON(url,  // url
	    function (data) {  // success callback
	        rowSet = data.resultSets[0].rowSet;
	        rodger_total = new Array(15).fill(0);
	        rodger_total[0] = "Rodger Totals"
	        rodger_avg = new Array(15).fill(0);
	        rodger_avg[0] = "Rodger Averages"
	        thuy_total = new Array(15).fill(0);
	        thuy_total[0] = "Thuy Totals"
	        thuy_avg = new Array(15).fill(0);
	        thuy_avg[0] = "Thuy Averages"
	        thuy_score = new Array(3).fill(0);
	        thuy_score_avg = new Array(3).fill(0);
			for (var i = 0; i < rowSet.length; i++) {
				if (rodger_players.indexOf(rowSet[i][1]) > -1) {
					row = document.getElementById("rodger_total").insertRow(1); 
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = rowSet[i][10]; //FG
					row.insertCell(3).innerHTML = rowSet[i][11]; //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = rowSet[i][16]; //FT
					row.insertCell(6).innerHTML = rowSet[i][17]; //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = rowSet[i][29]; //PTS
					row.insertCell(9).innerHTML = rowSet[i][21]; //REB
					row.insertCell(10).innerHTML = rowSet[i][22]; //AST
					row.insertCell(11).innerHTML = rowSet[i][13]; //3p
					row.insertCell(12).innerHTML = rowSet[i][24]; //STL
					row.insertCell(13).innerHTML = rowSet[i][25]; //BLK
					row.insertCell(14).innerHTML = rowSet[i][23]; //TO
					rodger_total[1] += rowSet[i][5]; //GP
					rodger_total[2] += rowSet[i][10]; //FG
					rodger_total[3] += rowSet[i][11];
					rodger_total[5] += rowSet[i][16];
					rodger_total[6] += rowSet[i][17];
					rodger_total[8] += rowSet[i][29];
					rodger_total[9] += rowSet[i][21];
					rodger_total[10] += rowSet[i][22];
					rodger_total[11] += rowSet[i][13];
					rodger_total[12] += rowSet[i][24];
					rodger_total[13] += rowSet[i][25];
					rodger_total[14] += rowSet[i][23];

					GP = rowSet[i][5];
					row = document.getElementById("rodger_avg").insertRow(1);
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = Number(rowSet[i][10]/GP).toFixed(1); //FG
					row.insertCell(3).innerHTML = Number(rowSet[i][11]/GP).toFixed(1); //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = Number(rowSet[i][16]/GP).toFixed(1); //FT
					row.insertCell(6).innerHTML = Number(rowSet[i][17]/GP).toFixed(1); //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = Number(rowSet[i][29]/GP).toFixed(1); //PTS
					row.insertCell(9).innerHTML = Number(rowSet[i][21]/GP).toFixed(1); //REB
					row.insertCell(10).innerHTML = Number(rowSet[i][22]/GP).toFixed(1); //AST
					row.insertCell(11).innerHTML = Number(rowSet[i][13]/GP).toFixed(1); //3p
					row.insertCell(12).innerHTML = Number(rowSet[i][24]/GP).toFixed(1); //STL
					row.insertCell(13).innerHTML = Number(rowSet[i][25]/GP).toFixed(1); //BLK
					row.insertCell(14).innerHTML = Number(rowSet[i][23]/GP).toFixed(1); //TO
					rodger_avg[1] += rowSet[i][5]; //GP
					rodger_avg[2] += rowSet[i][10]/GP; //FG
					rodger_avg[3] += rowSet[i][11]/GP;
					rodger_avg[5] += rowSet[i][16]/GP;
					rodger_avg[6] += rowSet[i][17]/GP;
					rodger_avg[8] += rowSet[i][29]/GP;
					rodger_avg[9] += rowSet[i][21]/GP;
					rodger_avg[10] += rowSet[i][22]/GP;
					rodger_avg[11] += rowSet[i][13]/GP;
					rodger_avg[12] += rowSet[i][24]/GP;
					rodger_avg[13] += rowSet[i][25]/GP;
					rodger_avg[14] += rowSet[i][23]/GP;
				}
				if (thuy_players.indexOf(rowSet[i][1]) > -1) {
					row = document.getElementById("thuy_total").insertRow(1); 
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = rowSet[i][10]; //FG
					row.insertCell(3).innerHTML = rowSet[i][11]; //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = rowSet[i][16]; //FT
					row.insertCell(6).innerHTML = rowSet[i][17]; //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = rowSet[i][29]; //PTS
					row.insertCell(9).innerHTML = rowSet[i][21]; //REB
					row.insertCell(10).innerHTML = rowSet[i][22]; //AST
					row.insertCell(11).innerHTML = rowSet[i][13]; //3p
					row.insertCell(12).innerHTML = rowSet[i][24]; //STL
					row.insertCell(13).innerHTML = rowSet[i][25]; //BLK
					row.insertCell(14).innerHTML = rowSet[i][23]; //TO
					thuy_total[1] += rowSet[i][5]; //GP
					thuy_total[2] += rowSet[i][10]; //FG
					thuy_total[3] += rowSet[i][11];
					thuy_total[5] += rowSet[i][16];
					thuy_total[6] += rowSet[i][17];
					thuy_total[8] += rowSet[i][29];
					thuy_total[9] += rowSet[i][21];
					thuy_total[10] += rowSet[i][22];
					thuy_total[11] += rowSet[i][13];
					thuy_total[12] += rowSet[i][24];
					thuy_total[13] += rowSet[i][25];
					thuy_total[14] += rowSet[i][23];

					GP = rowSet[i][5];
					row = document.getElementById("thuy_avg").insertRow(1);
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = Number(rowSet[i][10]/GP).toFixed(1); //FG
					row.insertCell(3).innerHTML = Number(rowSet[i][11]/GP).toFixed(1); //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = Number(rowSet[i][16]/GP).toFixed(1); //FT
					row.insertCell(6).innerHTML = Number(rowSet[i][17]/GP).toFixed(1); //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = Number(rowSet[i][29]/GP).toFixed(1); //PTS
					row.insertCell(9).innerHTML = Number(rowSet[i][21]/GP).toFixed(1); //REB
					row.insertCell(10).innerHTML = Number(rowSet[i][22]/GP).toFixed(1); //AST
					row.insertCell(11).innerHTML = Number(rowSet[i][13]/GP).toFixed(1); //3p
					row.insertCell(12).innerHTML = Number(rowSet[i][24]/GP).toFixed(1); //STL
					row.insertCell(13).innerHTML = Number(rowSet[i][25]/GP).toFixed(1); //BLK
					row.insertCell(14).innerHTML = Number(rowSet[i][23]/GP).toFixed(1); //TO
					thuy_avg[1] += rowSet[i][5]; //GP
					thuy_avg[2] += rowSet[i][10]/GP; //FG
					thuy_avg[3] += rowSet[i][11]/GP;
					thuy_avg[5] += rowSet[i][16]/GP;
					thuy_avg[6] += rowSet[i][17]/GP;
					thuy_avg[8] += rowSet[i][29]/GP;
					thuy_avg[9] += rowSet[i][21]/GP;
					thuy_avg[10] += rowSet[i][22]/GP;
					thuy_avg[11] += rowSet[i][13]/GP;
					thuy_avg[12] += rowSet[i][24]/GP;
					thuy_avg[13] += rowSet[i][25]/GP;
					thuy_avg[14] += rowSet[i][23]/GP;
				}
			}

			rodger_total[4] = Number(rodger_total[2]*1.0/rodger_total[3]).toFixed(3);
			rodger_total[7] = Number(rodger_total[5]*1.0/rodger_total[6]).toFixed(3);
			rodger_avg[4] = Number(rodger_avg[2]*1.0/rodger_avg[3]).toFixed(3);
			rodger_avg[7] = Number(rodger_avg[5]*1.0/rodger_avg[6]).toFixed(3);
			thuy_total[4] = Number(thuy_total[2]*1.0/thuy_total[3]).toFixed(3);
			thuy_total[7] = Number(thuy_total[5]*1.0/thuy_total[6]).toFixed(3);
			thuy_avg[4] = Number(thuy_avg[2]*1.0/thuy_avg[3]).toFixed(3);
			thuy_avg[7] = Number(thuy_avg[5]*1.0/thuy_avg[6]).toFixed(3);

			for (var i = 0; i < rodger_total.length; i++) {
				jrow = document.getElementById("jt");
				rrow = document.getElementById("rt");
				javg = document.getElementById("j_avg");
				ravg = document.getElementById("r_avg");
				jrow.insertCell(i).innerHTML = thuy_total[i];
				rrow.insertCell(i).innerHTML = rodger_total[i];
				if (i > 1 && i != 4 && i != 7) {
					javg.insertCell(i).innerHTML = Number(thuy_avg[i]).toFixed(1);
					ravg.insertCell(i).innerHTML = Number(rodger_avg[i]).toFixed(1);
				}
				else {
					javg.insertCell(i).innerHTML = thuy_avg[i];
					ravg.insertCell(i).innerHTML = rodger_avg[i];
				}
				jcell = document.getElementById("jtt").insertCell(i);
				rcell = document.getElementById("rtt").insertCell(i);
				jcell.innerHTML = thuy_total[i];
				rcell.innerHTML = rodger_total[i];

				j_cell = document.getElementById("j_avg_total").insertCell(i);
				r_cell = document.getElementById("r_avg_total").insertCell(i);

				if (i > 1 && i != 4 && i != 7) {
					j_cell.innerHTML = Number(thuy_avg[i]).toFixed(1);
					r_cell.innerHTML = Number(rodger_avg[i]).toFixed(1);
				}
				else {
					j_cell.innerHTML = thuy_avg[i];
					r_cell.innerHTML = rodger_avg[i];
				}

				if (i > 7 && i != 14) {
					if (thuy_total[i] > rodger_total[i]) {
						jcell.style.backgroundColor = 'yellow'
						thuy_score[0] += 1;
					} 
					else if (thuy_total[i] < rodger_total[i]) {
						rcell.style.backgroundColor = 'yellow'
						thuy_score[1] += 1;
					}
					else {
						jcell.style.backgroundColor = 'lightgreen'
						rcell.style.backgroundColor = 'lightgreen'
						thuy_score[2] += 1;
					}
					if (thuy_avg[i] > rodger_avg[i]) {
						j_cell.style.backgroundColor = 'yellow'
						thuy_score_avg[0] += 1;
					} 
					else if (thuy_avg[i] < rodger_avg[i]) {
						r_cell.style.backgroundColor = 'yellow'
						thuy_score_avg[1] += 1;
					}
					else {
						j_cell.style.backgroundColor = 'lightgreen'
						r_cell.style.backgroundColor = 'lightgreen'
						thuy_score_avg[2] += 1;
					}
				}
				if (i == 14) {
					if (thuy_total[i] < rodger_total[i]) {
						jcell.style.backgroundColor = 'yellow'
						thuy_score[0] += 1;
					} 
					else if(thuy_total[i] > rodger_total[i]) {
						rcell.style.backgroundColor = 'yellow'
						thuy_score[1] += 1;
					}
					else {
						jcell.style.backgroundColor = 'lightgreen'
						rcell.style.backgroundColor = 'lightgreen'
						thuy_score[2] += 1;
					}
					if (thuy_avg[i] < rodger_avg[i]) {
						j_cell.style.backgroundColor = 'yellow'
						thuy_score_avg[0] += 1;
					} 
					else if(thuy_avg[i] > rodger_avg[i]) {
						r_cell.style.backgroundColor = 'yellow'
						thuy_score_avg[1] += 1;
					}
					else {
						j_cell.style.backgroundColor = 'lightgreen'
						r_cell.style.backgroundColor = 'lightgreen'
						thuy_score_avg[2] += 1;
					}
				}
			}

			js = document.getElementById("js");
			rs = document.getElementById("rs");

			j_s = document.getElementById("j_s");
			r_s = document.getElementById("r_s");

			js.insertCell(0).innerHTML = "Thuy"
			rs.insertCell(0).innerHTML = "Rodger"
			js.insertCell(1).innerHTML = thuy_score[0]
			rs.insertCell(1).innerHTML = thuy_score[1]
			js.insertCell(2).innerHTML = thuy_score[1]
			rs.insertCell(2).innerHTML = thuy_score[0]
			js.insertCell(3).innerHTML = thuy_score[2]
			rs.insertCell(3).innerHTML = thuy_score[2]

			if (thuy_score[0] > thuy_score[1]) {
				js.style.backgroundColor = 'yellow'
			}
			else if (thuy_score[0] < thuy_score[1]) {
				rs.style.backgroundColor = 'yellow'
			}

			j_s.insertCell(0).innerHTML = "Thuy"
			r_s.insertCell(0).innerHTML = "Rodger"
			j_s.insertCell(1).innerHTML = thuy_score_avg[0]
			r_s.insertCell(1).innerHTML = thuy_score_avg[1]
			j_s.insertCell(2).innerHTML = thuy_score_avg[1]
			r_s.insertCell(2).innerHTML = thuy_score_avg[0]
			j_s.insertCell(3).innerHTML = thuy_score_avg[2]
			r_s.insertCell(3).innerHTML = thuy_score_avg[2]

			if (thuy_score_avg[0] > thuy_score_avg[1]) {
				j_s.style.backgroundColor = 'yellow'
			}
			else if (thuy_score_avg[0] < thuy_score_avg[1]) {
				r_s.style.backgroundColor = 'yellow'
			}

			// Game 2

			rodger_total = new Array(15).fill(0);
	        rodger_total[0] = "Rodger Totals"
	        rodger_avg = new Array(15).fill(0);
	        rodger_avg[0] = "Rodger Averages"
	        thuy_total = new Array(15).fill(0);
	        thuy_total[0] = "Thuy Totals"
	        thuy_avg = new Array(15).fill(0);
	        thuy_avg[0] = "Thuy Averages"
	        thuy_score = new Array(3).fill(0);
	        thuy_score_avg = new Array(3).fill(0);
			for (var i = 0; i < rowSet.length; i++) {
				if (rodger_players_2.indexOf(rowSet[i][1]) > -1) {
					row = document.getElementById("rodger_total2").insertRow(1); 
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = rowSet[i][10]; //FG
					row.insertCell(3).innerHTML = rowSet[i][11]; //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = rowSet[i][16]; //FT
					row.insertCell(6).innerHTML = rowSet[i][17]; //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = rowSet[i][29]; //PTS
					row.insertCell(9).innerHTML = rowSet[i][21]; //REB
					row.insertCell(10).innerHTML = rowSet[i][22]; //AST
					row.insertCell(11).innerHTML = rowSet[i][13]; //3p
					row.insertCell(12).innerHTML = rowSet[i][24]; //STL
					row.insertCell(13).innerHTML = rowSet[i][25]; //BLK
					row.insertCell(14).innerHTML = rowSet[i][23]; //TO
					rodger_total[1] += rowSet[i][5]; //GP
					rodger_total[2] += rowSet[i][10]; //FG
					rodger_total[3] += rowSet[i][11];
					rodger_total[5] += rowSet[i][16];
					rodger_total[6] += rowSet[i][17];
					rodger_total[8] += rowSet[i][29];
					rodger_total[9] += rowSet[i][21];
					rodger_total[10] += rowSet[i][22];
					rodger_total[11] += rowSet[i][13];
					rodger_total[12] += rowSet[i][24];
					rodger_total[13] += rowSet[i][25];
					rodger_total[14] += rowSet[i][23];

					GP = rowSet[i][5];
					row = document.getElementById("rodger_avg2").insertRow(1);
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = Number(rowSet[i][10]/GP).toFixed(1); //FG
					row.insertCell(3).innerHTML = Number(rowSet[i][11]/GP).toFixed(1); //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = Number(rowSet[i][16]/GP).toFixed(1); //FT
					row.insertCell(6).innerHTML = Number(rowSet[i][17]/GP).toFixed(1); //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = Number(rowSet[i][29]/GP).toFixed(1); //PTS
					row.insertCell(9).innerHTML = Number(rowSet[i][21]/GP).toFixed(1); //REB
					row.insertCell(10).innerHTML = Number(rowSet[i][22]/GP).toFixed(1); //AST
					row.insertCell(11).innerHTML = Number(rowSet[i][13]/GP).toFixed(1); //3p
					row.insertCell(12).innerHTML = Number(rowSet[i][24]/GP).toFixed(1); //STL
					row.insertCell(13).innerHTML = Number(rowSet[i][25]/GP).toFixed(1); //BLK
					row.insertCell(14).innerHTML = Number(rowSet[i][23]/GP).toFixed(1); //TO
					rodger_avg[1] += rowSet[i][5]; //GP
					rodger_avg[2] += rowSet[i][10]/GP; //FG
					rodger_avg[3] += rowSet[i][11]/GP;
					rodger_avg[5] += rowSet[i][16]/GP;
					rodger_avg[6] += rowSet[i][17]/GP;
					rodger_avg[8] += rowSet[i][29]/GP;
					rodger_avg[9] += rowSet[i][21]/GP;
					rodger_avg[10] += rowSet[i][22]/GP;
					rodger_avg[11] += rowSet[i][13]/GP;
					rodger_avg[12] += rowSet[i][24]/GP;
					rodger_avg[13] += rowSet[i][25]/GP;
					rodger_avg[14] += rowSet[i][23]/GP;
				}
				if (thuy_players_2.indexOf(rowSet[i][1]) > -1) {
					row = document.getElementById("thuy_total2").insertRow(1); 
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = rowSet[i][10]; //FG
					row.insertCell(3).innerHTML = rowSet[i][11]; //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = rowSet[i][16]; //FT
					row.insertCell(6).innerHTML = rowSet[i][17]; //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = rowSet[i][29]; //PTS
					row.insertCell(9).innerHTML = rowSet[i][21]; //REB
					row.insertCell(10).innerHTML = rowSet[i][22]; //AST
					row.insertCell(11).innerHTML = rowSet[i][13]; //3p
					row.insertCell(12).innerHTML = rowSet[i][24]; //STL
					row.insertCell(13).innerHTML = rowSet[i][25]; //BLK
					row.insertCell(14).innerHTML = rowSet[i][23]; //TO
					thuy_total[1] += rowSet[i][5]; //GP
					thuy_total[2] += rowSet[i][10]; //FG
					thuy_total[3] += rowSet[i][11];
					thuy_total[5] += rowSet[i][16];
					thuy_total[6] += rowSet[i][17];
					thuy_total[8] += rowSet[i][29];
					thuy_total[9] += rowSet[i][21];
					thuy_total[10] += rowSet[i][22];
					thuy_total[11] += rowSet[i][13];
					thuy_total[12] += rowSet[i][24];
					thuy_total[13] += rowSet[i][25];
					thuy_total[14] += rowSet[i][23];

					GP = rowSet[i][5];
					row = document.getElementById("thuy_avg2").insertRow(1);
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = Number(rowSet[i][10]/GP).toFixed(1); //FG
					row.insertCell(3).innerHTML = Number(rowSet[i][11]/GP).toFixed(1); //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = Number(rowSet[i][16]/GP).toFixed(1); //FT
					row.insertCell(6).innerHTML = Number(rowSet[i][17]/GP).toFixed(1); //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = Number(rowSet[i][29]/GP).toFixed(1); //PTS
					row.insertCell(9).innerHTML = Number(rowSet[i][21]/GP).toFixed(1); //REB
					row.insertCell(10).innerHTML = Number(rowSet[i][22]/GP).toFixed(1); //AST
					row.insertCell(11).innerHTML = Number(rowSet[i][13]/GP).toFixed(1); //3p
					row.insertCell(12).innerHTML = Number(rowSet[i][24]/GP).toFixed(1); //STL
					row.insertCell(13).innerHTML = Number(rowSet[i][25]/GP).toFixed(1); //BLK
					row.insertCell(14).innerHTML = Number(rowSet[i][23]/GP).toFixed(1); //TO
					thuy_avg[1] += rowSet[i][5]; //GP
					thuy_avg[2] += rowSet[i][10]/GP; //FG
					thuy_avg[3] += rowSet[i][11]/GP;
					thuy_avg[5] += rowSet[i][16]/GP;
					thuy_avg[6] += rowSet[i][17]/GP;
					thuy_avg[8] += rowSet[i][29]/GP;
					thuy_avg[9] += rowSet[i][21]/GP;
					thuy_avg[10] += rowSet[i][22]/GP;
					thuy_avg[11] += rowSet[i][13]/GP;
					thuy_avg[12] += rowSet[i][24]/GP;
					thuy_avg[13] += rowSet[i][25]/GP;
					thuy_avg[14] += rowSet[i][23]/GP;
				}
			}

			rodger_total[4] = Number(rodger_total[2]*1.0/rodger_total[3]).toFixed(3);
			rodger_total[7] = Number(rodger_total[5]*1.0/rodger_total[6]).toFixed(3);
			rodger_avg[4] = Number(rodger_avg[2]*1.0/rodger_avg[3]).toFixed(3);
			rodger_avg[7] = Number(rodger_avg[5]*1.0/rodger_avg[6]).toFixed(3);
			thuy_total[4] = Number(thuy_total[2]*1.0/thuy_total[3]).toFixed(3);
			thuy_total[7] = Number(thuy_total[5]*1.0/thuy_total[6]).toFixed(3);
			thuy_avg[4] = Number(thuy_avg[2]*1.0/thuy_avg[3]).toFixed(3);
			thuy_avg[7] = Number(thuy_avg[5]*1.0/thuy_avg[6]).toFixed(3);

			for (var i = 0; i < rodger_total.length; i++) {
				jrow = document.getElementById("jt2");
				rrow = document.getElementById("rt2");
				javg = document.getElementById("j_avg2");
				ravg = document.getElementById("r_avg2");
				jrow.insertCell(i).innerHTML = thuy_total[i];
				rrow.insertCell(i).innerHTML = rodger_total[i];
				if (i > 1 && i != 4 && i != 7) {
					javg.insertCell(i).innerHTML = Number(thuy_avg[i]).toFixed(1);
					ravg.insertCell(i).innerHTML = Number(rodger_avg[i]).toFixed(1);
				}
				else {
					javg.insertCell(i).innerHTML = thuy_avg[i];
					ravg.insertCell(i).innerHTML = rodger_avg[i];
				}
				jcell = document.getElementById("jtt2").insertCell(i);
				rcell = document.getElementById("rtt2").insertCell(i);
				jcell.innerHTML = thuy_total[i];
				rcell.innerHTML = rodger_total[i];

				j_cell = document.getElementById("j_avg_total2").insertCell(i);
				r_cell = document.getElementById("r_avg_total2").insertCell(i);

				if (i > 1 && i != 4 && i != 7) {
					j_cell.innerHTML = Number(thuy_avg[i]).toFixed(1);
					r_cell.innerHTML = Number(rodger_avg[i]).toFixed(1);
				}
				else {
					j_cell.innerHTML = thuy_avg[i];
					r_cell.innerHTML = rodger_avg[i];
				}

				if (i > 7 && i != 14) {
					if (thuy_total[i] > rodger_total[i]) {
						jcell.style.backgroundColor = 'yellow'
						thuy_score[0] += 1;
					} 
					else if (thuy_total[i] < rodger_total[i]) {
						rcell.style.backgroundColor = 'yellow'
						thuy_score[1] += 1;
					}
					else {
						jcell.style.backgroundColor = 'lightgreen'
						rcell.style.backgroundColor = 'lightgreen'
						thuy_score[2] += 1;
					}
					if (thuy_avg[i] > rodger_avg[i]) {
						j_cell.style.backgroundColor = 'yellow'
						thuy_score_avg[0] += 1;
					} 
					else if (thuy_avg[i] < rodger_avg[i]) {
						r_cell.style.backgroundColor = 'yellow'
						thuy_score_avg[1] += 1;
					}
					else {
						j_cell.style.backgroundColor = 'lightgreen'
						r_cell.style.backgroundColor = 'lightgreen'
						thuy_score_avg[2] += 1;
					}
				}
				if (i == 14) {
					if (thuy_total[i] < rodger_total[i]) {
						jcell.style.backgroundColor = 'yellow'
						thuy_score[0] += 1;
					} 
					else if(thuy_total[i] > rodger_total[i]) {
						rcell.style.backgroundColor = 'yellow'
						thuy_score[1] += 1;
					}
					else {
						jcell.style.backgroundColor = 'lightgreen'
						rcell.style.backgroundColor = 'lightgreen'
						thuy_score[2] += 1;
					}
					if (thuy_avg[i] < rodger_avg[i]) {
						j_cell.style.backgroundColor = 'yellow'
						thuy_score_avg[0] += 1;
					} 
					else if(thuy_avg[i] > rodger_avg[i]) {
						r_cell.style.backgroundColor = 'yellow'
						thuy_score_avg[1] += 1;
					}
					else {
						j_cell.style.backgroundColor = 'lightgreen'
						r_cell.style.backgroundColor = 'lightgreen'
						thuy_score_avg[2] += 1;
					}
				}
			}

			js = document.getElementById("js2");
			rs = document.getElementById("rs2");

			j_s = document.getElementById("j_s2");
			r_s = document.getElementById("r_s2");

			js.insertCell(0).innerHTML = "Thuy"
			rs.insertCell(0).innerHTML = "Rodger"
			js.insertCell(1).innerHTML = thuy_score[0]
			rs.insertCell(1).innerHTML = thuy_score[1]
			js.insertCell(2).innerHTML = thuy_score[1]
			rs.insertCell(2).innerHTML = thuy_score[0]
			js.insertCell(3).innerHTML = thuy_score[2]
			rs.insertCell(3).innerHTML = thuy_score[2]

			if (thuy_score[0] > thuy_score[1]) {
				js.style.backgroundColor = 'yellow'
			}
			else if (thuy_score[0] < thuy_score[1]) {
				rs.style.backgroundColor = 'yellow'
			}

			j_s.insertCell(0).innerHTML = "Thuy"
			r_s.insertCell(0).innerHTML = "Rodger"
			j_s.insertCell(1).innerHTML = thuy_score_avg[0]
			r_s.insertCell(1).innerHTML = thuy_score_avg[1]
			j_s.insertCell(2).innerHTML = thuy_score_avg[1]
			r_s.insertCell(2).innerHTML = thuy_score_avg[0]
			j_s.insertCell(3).innerHTML = thuy_score_avg[2]
			r_s.insertCell(3).innerHTML = thuy_score_avg[2]

			if (thuy_score_avg[0] > thuy_score_avg[1]) {
				j_s.style.backgroundColor = 'yellow'
			}
			else if (thuy_score_avg[0] < thuy_score_avg[1]) {
				r_s.style.backgroundColor = 'yellow'
			}
	    });
});

function scrolly(name) {
	console.log(name)
    var elmnt = document.getElementById(name);
    elmnt.scrollIntoView();
}
