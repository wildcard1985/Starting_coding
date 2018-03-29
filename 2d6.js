var d6 = [1, 2, 3, 4, 5, 6];

var dice = d6 [Math.floor(Math.random() * d6.length)];

var dice02 = d6 [Math.floor(Math.random() * d6.length)];

var total = dice + dice02;

document.write(dice + ',' + dice02);
document.write(' Total = ');
document.write(total);
document.write('<br />');

	if(total == 12)
{	x = 1;
	document.write(' A hit to the cockpit rocks the mech!!');
}
else if (total == 2)
{	x = 0;
	document.write(' Fire wildly causing the mech to slip leaving you open to attack!!');
}
else if (total >= 6)
{	x = 1;
	document.write(' The hit is solid on their chasis ripping armor off');
}
else if (total <= 5)
{	x = 0;
	document.write(' Shot misses but you are preparing for return fire');
}
document.write('<br />');
document.write('<hr />');

var d6 = [1, 2, 3, 4, 5, 6];

var dice = d6 [Math.floor(Math.random() * d6.length)];

var dice02 = d6 [Math.floor(Math.random() * d6.length)];

var total = dice + dice02;

document.write(dice + ',' + dice02);
document.write(' Total = ');
document.write(total);
document.write('<br />');

//success

	if(x == 1 && total == 12)
{	y = 1;
	document.write(' The second shot hits the enemy solidly in the chest causing it to slump over');
}
else if (x == 1 && total == 2)
{	y = 0;
	document.write(' The first shot hit but the follow up misses');
}
else if (x == 1 && total >= 6)
{	y = 1;
	document.write(' Second shot hits a reactor causeing power failure');
}
else if (x == 1 && total <= 5)
{	y = 0;
	document.write(' Shot goes wild due to kickback from the previous hit, your mech might tip');
}

//fail
	if(x == 0 && total == 12)
{	y = 1;
	document.write(' You manage to fire a shot hitting the mech before a shot got out');
}
else if (x == 0 && total == 2)
{	y = 0;
	document.write(' You barly remember what happened as you float in the air in your escape pod seeing your mech below you explode');
}
else if (x == 0 && total >= 6)
{	y = 1;
	document.write(' you manage to move out of the way as several lasers are fired near you');
}
else if (x == 0 && total <= 5)
{	y = 0;
	document.write(' sparks fly wildly as you are pepered with missles, warnings all over the cockpit tell you that youre in trouble');
}


//total
document.write('<br />');
document.write('<hr />');
	if(x == 1 && y == 1){
	document.write(' the smoldering wreckage behind you, the radio turns on "how did it go?" you smile, open a beer, and tally one more kill on your board');
}
else if (x == 0 && y == 0){
	document.write(' You are decending back to the planet, you hope to get picked up by allies, that being said you pull your survice pistol and survival kit from under the seat');
}
else {
document.write(' The situation is tense, after trading blows you hope the new radar blips are friends and not foes');
}
