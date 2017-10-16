(function(){

	'use-strict'

var stepvar = 3

var innovation_text = document.getElementById("innovation_text");
var innovation_text_shadow = document.getElementById("innovation_text_shadow");
var awareness_text = document.getElementById("awareness_text");
var awareness_text_shadow = document.getElementById("awareness_text_shadow");
var awareness_hub = document.getElementById("awareness_hub");
var awareness_line_inner = document.getElementById("awareness_line_inner");
var awareness_line_middle = document.getElementById("awareness_line_middle");
var awareness_line_outer = document.getElementById("awareness_line_outer");
var awareness_text = document.getElementById("awareness_text");
var trialrepeat_text = document.getElementById("trialrepeat_text");
var trialrepeat_text_shadow = document.getElementById("trialrepeat_text_shadow");
var trialrepeat_line_inner = document.getElementById("trialrepeat_line_inner");
var trialrepeat_line_middle = document.getElementById("trialrepeat_line_middle");
var trialrepeat_line_outer = document.getElementById("trialrepeat_line_outer");
var manage_text = document.getElementById("manage_text");
var manage_text_shadow = document.getElementById("manage_text_shadow");
var innovation_hub = document.getElementById("innovation_hub");

var innovation_hub_mask = document.getElementById("innovation_hub_mask");

var trialrepeat_hub = document.getElementById("trialrepeat_hub");
var manage_hub = document.getElementById("manage_hub");
var manage_line_inner = document.getElementById("manage_line_inner");
var manage_line_middle = document.getElementById("manage_line_middle");
var manage_line_outer = document.getElementById("manage_line_outer");

var menuFrame = document.getElementById("menuFrame");
var menuFramebackground = document.getElementById("menuFramebackground");
var menuHub = document.getElementById("menuHub");
var menuTextShadow = document.getElementById("menuTextShadow");
var menuText = document.getElementById("menuText");
var menu_line_top = document.getElementById("menu_top");
var menu_line_middle = document.getElementById("menu_middle");
var menu_line_bottom = document.getElementById("menu_bottom");
var menu_bars = document.getElementById("menu_bars");
var headerTextFrame = document.getElementById("headerTextFrame");
var headerText = document.getElementById("headerText");
var sky_background = document.getElementById("landing_background_sky");
var night_background = document.getElementById("landing_background_night");


var speedVar = 2.5;
var hubState = 'main'
var menuState = 'services'
var screenState = ''
var active_page = ''
var extend_func = awareness_text
var extend_func_colour = 'white'
var extend_func_shadow = awareness_text_shadow
var extend_func_shadow_colour = 'black'

var extend_func_x = awareness_text.getAttribute('x')
var extend_func_y = awareness_text.getAttribute('y')
var extend_func_shadow_x = awareness_text_shadow.getAttribute('x')
var extend_func_shadow_y = awareness_text_shadow.getAttribute('y')

var contactPage = document.getElementById("contactPage");
var portfolioPage = document.getElementById("portfolioPage");
var aboutPage = document.getElementById("aboutPage");

var webSite1 = document.getElementById("webSite1");
var marketSite = document.getElementById("marketSite");
var solutionsSite = document.getElementById("solutionsSite");


/* portal menu items array */
var portalMenuItems = document.getElementsByClassName("portalImagesMenu");
var portalImageItems = document.getElementsByClassName("portalImages");
var portalBackItems = document.getElementsByClassName("portalImagesBack");
var portalImageInfo = document.getElementsByClassName("informationIconRow");

/* discog menu items array */
var discogMenuItems = document.getElementsByClassName("discogImagesMenu");
var discogImageItems = document.getElementsByClassName("discogImages");
var discogBackItems = document.getElementsByClassName("discogImagesBack");
var discogImageInfo = document.getElementsByClassName("discoginformationIconRow");

/* plan menu items array */
var planMenuItems = document.getElementsByClassName("planImagesMenu");
var planImageItems = document.getElementsByClassName("planImages");
var planBackItems = document.getElementsByClassName("planImagesBack");
var planImageInfo = document.getElementsByClassName("planinformationIconRow");

/* vars for website1 */
var standOutText = document.getElementById("standoutTextMain");
var standOutFrame = document.getElementById("webSiteStandout");
var webServicesFrame = document.getElementById("websiteServices");
var websiteServicesText = document.getElementById("websiteServicesText");


var webSiteCaroselFrame = document.getElementById("webSiteCarosel");
var caroselObject = document.getElementById("carousel");
var marketSite = document.getElementById("marketSite");


var websiteBbcFrame = document.getElementById("webSitebbc");
var bbcObjectTop = document.getElementById("bbcObjectTop");
var bbcObjectMiddle = document.getElementById("bbcObjectMiddle");
var bbcObjectBottom = document.getElementById("bbcObjectBottom");
var bbcObjectText = document.getElementById("bbcObjectText");
var bbcObjectMainHub = document.getElementById("bbcObjectMainHub");

/*
innovation_hub_mask.style.display = 'none'
*/



var tranScale = function(scaleType, scaleCount) {

	if (scaleType === 'linear') {
		scaleReturn =5
	} else if (scaleType === 'bezier1') {

		scaleReturn = Math.sin(Math.PI*count*speedVar/100) * Math.PI*speedVar/2 ;

	} else {


	}


	return scaleReturn
};

var close_menu_phase1 = function() {
	count = 1


	var frame_opacity = 1;
	var font_size = 5
	var id = setInterval(frame, 5);


	function frame() {

	var stepvar	= tranScale('linear',count);

	if (count > 100/stepvar) {

	clearInterval(id)
	close_menu_phase2()


	} else {

	font_size = font_size - 0.00055*count*stepvar;
	frame_opacity = (100 - count*stepvar)/100;

	count++;
	awareness_text.style.opacity = frame_opacity;
	trialrepeat_text.style.opacity = frame_opacity;
	manage_text.style.opacity = frame_opacity;

	awareness_text_shadow.style.opacity = frame_opacity;
	trialrepeat_text_shadow.style.opacity = frame_opacity;
	manage_text_shadow.style.opacity = frame_opacity;
	headerTextFrame.style.opacity = frame_opacity;



	};
	
};
};

var close_menu_phase2 = function() {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 75
	var manage_y = 55

	var trialrepeat_x = 40
	var trialrepeat_y = 75


	var awareness_x = 15
	var awareness_y = 35
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);
	headerTextFrame.style.display = 'none';

	if (count > 100/speedVar) {

	clearInterval(id)
	manage_line_inner.style.opacity = 0;
	awareness_line_inner.style.opacity = 0;
	trialrepeat_line_inner.style.opacity = 0;
	close_menu_phase3();




	} else {

	innovation_x = innovation_x + 0.0*stepvar
	innovation_y = innovation_y - 0.0*stepvar
	awareness_x = awareness_x + 0.2*stepvar
	awareness_y = awareness_y - 0.0*stepvar
	manage_x = manage_x - 0.05*stepvar
	manage_y = manage_y - 0.05*stepvar

	trialrepeat_x = trialrepeat_x + 0.0*stepvar
	trialrepeat_y = trialrepeat_y - 0.1*stepvar



	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_inner.setAttribute('x1', manage_x + '%')
	manage_line_inner.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_inner.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_inner.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_inner.setAttribute('x1', awareness_x + '%')
	awareness_line_inner.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var close_menu_phase3 = function() {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 70
	var manage_y = 50
	var trialrepeat_x = 40
	var trialrepeat_y = 65
	var awareness_x = 35
	var awareness_y = 35
	var awareness_r = 1.5
	var trialrepeat_r = 3
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	manage_line_middle.style.opacity = 0;
	awareness_line_middle.style.opacity = 0;
	trialrepeat_line_middle.style.opacity = 0;
	close_menu_phase4()



	} else {

	innovation_x = innovation_x + 0.0*stepvar
	innovation_y = innovation_y - 0.0*stepvar
	awareness_x = awareness_x + 0.05*stepvar
	awareness_y = awareness_y + 0.15*stepvar
	manage_x = manage_x - 0.1*stepvar
	manage_y = manage_y - 0.00*stepvar
	trialrepeat_x = trialrepeat_x + 0.065*stepvar
	trialrepeat_y = trialrepeat_y - 0.1*stepvar



	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_middle.setAttribute('x1', manage_x + '%')
	manage_line_middle.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_middle.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_middle.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_middle.setAttribute('x1', awareness_x + '%')
	awareness_line_middle.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var close_menu_phase4 = function() {

	count = 1

	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 60
	var manage_y = 50
	var trialrepeat_x = 46.5
	var trialrepeat_y = 55
	var awareness_x = 40
	var awareness_y = 50
	var trialrepeat_r = 2.5
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	manage_line_outer.style.opacity = 0;
	awareness_line_outer.style.opacity = 0;
	trialrepeat_line_outer.style.opacity = 0;
	manage_hub.style.opacity = 0;
	trialrepeat_hub.style.opacity = 0;
	close_menu_phase5()






	} else {

	innovation_x = innovation_x + 0.0*stepvar
	innovation_y = innovation_y - 0.0*stepvar
	awareness_x = awareness_x + 0.1*stepvar
	awareness_y = awareness_y + 0.0*stepvar
	manage_x = manage_x - 0.1*stepvar
	manage_y = manage_y - 0.00*stepvar
	trialrepeat_x = trialrepeat_x + 0.035*stepvar
	trialrepeat_y = trialrepeat_y - 0.05*stepvar
	trialrepeat_r = trialrepeat_r - 0.005*stepvar


	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_outer.setAttribute('x1', manage_x + '%')
	manage_line_outer.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_outer.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_outer.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_outer.setAttribute('x1', awareness_x + '%')
	awareness_line_outer.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var close_menu_phase5 = function() {

	count = 1


	var frame_opacity = 1
	var id = setInterval(frame, 5);
	awareness_hub.style.opacity = 0;


	function frame() {

	var stepvar	= tranScale('linear',count);


	if (count > 100/speedVar) {
	/*
	innovation_hub_mask.style.display = 'block'
	*/

	if (menuText.textContent == 'website') {
		standoutTextFunction();

	} else if (menuText.textContent == 'eCommerce') {

		carouselFunction()

	} else if (menuText.textContent == 'solutions') {

		bbcFunction()

	} else {

	close_menu_phase6()

	};

	clearInterval(id)


	} else {


	count++;
	frame_opacity = (100 - count*stepvar)/100;
	innovation_text.style.opacity = frame_opacity;
	innovation_text_shadow.style.opacity = frame_opacity;
	innovation_hub.style.opacity = frame_opacity;






	};
	
};
};


var close_menu_phase6 = function() {

	count = 1
	menuFrame.style.display = 'block'
	menu_bars.style.display = 'none'
	menuFrameBackground.style.display = 'block'
	activePage.style.display = 'block'
	activePage.style.opacity = '0'

	var frame_opacity = 0
	var reduce_fontSize = 4.5

	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('linear',count);

	if (count > 100/stepvar) {
	clearInterval(id)


	hubState = 'menu'






	} else {


	count++;
	frame_opacity = (count*stepvar)/100;
	reduce_fontSize = reduce_fontSize + 0.025*stepvar

	menuFrame.style.opacity = frame_opacity;
	menu_bars.style.opacity = frame_opacity;

	menuFrameBackground.style.opacity = frame_opacity;
	activePage.style.opacity = frame_opacity;
	menuTextShadow.style.fontSize = reduce_fontSize +'vh';
	menuText.style.fontSize = reduce_fontSize +'vh';



	};
	
};
};

var open_menu_phase1 = function() {
	count = 1

	var id = setInterval(frame, 10);
	var frame_opacity = 1

	function frame() {

	var stepvar	= tranScale('linear',count);

	if (count > 100/stepvar) {
	clearInterval(id)

	activePage.style.display = 'none';
	activePage.style.opacity = '1';
	menuFrame.style.display = 'none';
	menu_bars.style.display = 'none';
	menuFrameBackground.style.display = 'none';
	hubState = 'menu';
	open_menu_phase2()




	} else {

	count++;
	frame_opacity = (100 - count*stepvar)/100;

	menuFrame.style.opacity = frame_opacity;
	menu_bars.style.opacity = frame_opacity;
	menuFrameBackground.style.opacity = frame_opacity;
	activePage.style.opacity = frame_opacity;


	};
	
};
};

/*


var open_menu_phase1 = function() {


	count = 1

	innovation_hub.setAttribute('cx', '90%')
	innovation_hub.setAttribute('cy', '10%')
	innovation_text.setAttribute('x', '80%')
	innovation_text.setAttribute('y', '5%')
	innovation_hub.style.opacity = 0;
	awareness_hub.style.opacity = 0;
	
	innovation_hub_mask.style.display = 'none'
	


	var id = setInterval(frame, 5);
	var frame_opacity = 1

	function frame() {

	var stepvar	= tranScale('linear',count);

	if (count > 100/stepvar) {
	activePage.style.display = 'none'
	clearInterval(id)
	extend_func.style.fontSize = '4vh'
	extend_func_shadow.style.fontSize = '4vh'
	open_menu_phase2()


	} else {


	count++;
	frame_opacity = (100 - count*stepvar)/100;
	innovation_hub.style.opacity = frame_opacity;
	menu_line_top.style.opacity = frame_opacity;
	menu_line_middle.style.opacity = frame_opacity;
	menu_line_bottom.style.opacity = frame_opacity;
	extend_func.style.opacity = frame_opacity;
	extend_func_shadow.style.opacity = frame_opacity;

	};
	
};
};

*/



var open_menu_phase2 = function() {

	count = 1


	var frame_opacity = 1
	innovation_hub.setAttribute('cx', '50%')
	innovation_hub.setAttribute('cy', '50%')
	innovation_text.setAttribute('x', '46%')
	innovation_text.setAttribute('y', '43%')
	innovation_text_shadow.setAttribute('x', '46%')
	innovation_text_shadow.setAttribute('y', '43%')
	awareness_line_outer.setAttribute('x1', '50%');
	awareness_line_outer.setAttribute('y1', '50%');
	awareness_line_outer.setAttribute('x2', '50%');
	awareness_line_outer.setAttribute('y2', '50%');
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('linear',count);


	if (count > 100/speedVar) {

	clearInterval(id)
	open_menu_phase3()


	} else {


	count++;
	frame_opacity = (count*stepvar)/100;

	innovation_text.style.opacity = frame_opacity;
	innovation_text_shadow.style.opacity = frame_opacity;
	innovation_hub.style.opacity = frame_opacity;
	};
	
};
};

var open_menu_phase3 = function() {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 50
	var manage_y = 50
	var trialrepeat_x = 50
	var trialrepeat_y = 50
	var trialrepeat_r = 2
	var awareness_x = 50
	var awareness_y = 50
	manage_line_outer.style.opacity = 1;
	awareness_line_outer.style.opacity = 1;
	trialrepeat_line_outer.style.opacity = 1;
	manage_hub.style.opacity = 1;
	trialrepeat_hub.style.opacity = 1;
	awareness_hub.style.opacity = 1;
	var trialrepeat_r = 2
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	open_menu_phase4()

	} else {

	innovation_x = innovation_x - 0.0*stepvar
	innovation_y = innovation_y + 0.0*stepvar
	awareness_x = awareness_x - 0.1*stepvar
	awareness_y = awareness_y - 0.0*stepvar
	manage_x = manage_x + 0.1*stepvar
	manage_y = manage_y + 0.00*stepvar
	trialrepeat_x = trialrepeat_x - 0.035*stepvar
	trialrepeat_y = trialrepeat_y + 0.05*stepvar



	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_outer.setAttribute('x1', manage_x + '%')
	manage_line_outer.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_outer.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_outer.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_outer.setAttribute('x1', awareness_x + '%')
	awareness_line_outer.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var open_menu_phase4 = function() {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 60
	var manage_y = 50
	var trialrepeat_x = 46.5
	var trialrepeat_y = 55
	var trialrepeat_r = 2.5
	var awareness_x = 40
	var awareness_y = 50
	var awareness_r = 2
	manage_line_middle.style.opacity = 1;
	awareness_line_middle.style.opacity = 1;
	trialrepeat_line_middle.style.opacity = 1;
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	open_menu_phase5()

	} else {

	innovation_x = innovation_x - 0.0*stepvar
	innovation_y = innovation_y + 0.0*stepvar
	awareness_x = awareness_x - 0.05*stepvar
	awareness_y = awareness_y - 0.15*stepvar
	manage_x = manage_x + 0.1*stepvar
	manage_y = manage_y + 0.00*stepvar
	trialrepeat_x = trialrepeat_x - 0.065*stepvar
	trialrepeat_y = trialrepeat_y + 0.1*stepvar
	awareness_r = awareness_r - 0.005*stepvar
	trialrepeat_r = trialrepeat_r + 0.005*stepvar



	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_middle.setAttribute('x1', manage_x + '%')
	manage_line_middle.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_middle.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_middle.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_middle.setAttribute('x1', awareness_x + '%')
	awareness_line_middle.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var open_menu_phase5 = function(extend_func, extend_func_shadow) {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 70
	var manage_y = 50
	var manage_r = 2
	var trialrepeat_x = 40
	var trialrepeat_y = 65
	var trialrepeat_r = 3
	var awareness_x = 35
	var awareness_y = 35
	manage_line_inner.style.opacity = 1;
	awareness_line_inner.style.opacity = 1;
	trialrepeat_line_inner.style.opacity = 1;
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	open_menu_phase6()

	} else {

	innovation_x = innovation_x - 0.0*stepvar
	innovation_y = innovation_y + 0.0*stepvar
	awareness_x = awareness_x - 0.2*stepvar
	awareness_y = awareness_y + 0.0*stepvar
	manage_x = manage_x + 0.05*stepvar
	manage_y = manage_y + 0.05*stepvar

	trialrepeat_x = trialrepeat_x - 0.0*stepvar
	trialrepeat_y = trialrepeat_y + 0.1*stepvar
	trialrepeat_r = trialrepeat_r + 0.005*stepvar


	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')

	manage_line_inner.setAttribute('x1', manage_x + '%')
	manage_line_inner.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_inner.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_inner.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_inner.setAttribute('x1', awareness_x + '%')
	awareness_line_inner.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var open_menu_phase6 = function() {
	count = 1


	var frame_opacity = 0;
	var font_size = 5
	extend_func.setAttribute('x',extend_func_x)
	extend_func.setAttribute('y',extend_func_y)
	extend_func.style.fill = "white"
	extend_func_shadow.setAttribute('x',extend_func_shadow_x)
	extend_func_shadow.setAttribute('y',extend_func_shadow_y)
	extend_func_shadow.style.fill = "black"
	headerTextFrame.style.display = 'block';
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('linear',count);

	if (count > 100/stepvar) {

	clearInterval(id)

	hubState === 'main'


	} else {

	font_size = font_size - 0.00055*count*stepvar;
	frame_opacity = (count*stepvar)/100;

	count++;
	awareness_text.style.opacity = frame_opacity;
	trialrepeat_text.style.opacity = frame_opacity;
	manage_text.style.opacity = frame_opacity;

	awareness_text_shadow.style.opacity = frame_opacity;
	trialrepeat_text_shadow.style.opacity = frame_opacity;
	manage_text_shadow.style.opacity = frame_opacity;
	headerTextFrame.style.opacity = frame_opacity;



	};
	
};
};


var change_menu_phase1 = function() {
	count = 1


	var frame_opacity = 1;
	var font_size = 5
	var id = setInterval(frame, 5);


	function frame() {

	var stepvar	= tranScale('linear',count);

	if (count > 100/stepvar) {

	clearInterval(id)
	change_menu_phase2()

	} else {

	font_size = font_size - 0.00055*count*stepvar;
	frame_opacity = (100 - count*stepvar)/100;

	count++;
	innovation_text.style.opacity = frame_opacity;
	awareness_text.style.opacity = frame_opacity;
	trialrepeat_text.style.opacity = frame_opacity;
	manage_text.style.opacity = frame_opacity;

	innovation_text_shadow.style.opacity = frame_opacity;
	awareness_text_shadow.style.opacity = frame_opacity;
	trialrepeat_text_shadow.style.opacity = frame_opacity;
	manage_text_shadow.style.opacity = frame_opacity;

	};
	
};
};

var change_menu_phase2 = function() {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 75
	var manage_y = 55

	var trialrepeat_x = 40
	var trialrepeat_y = 75


	var awareness_x = 15
	var awareness_y = 35
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);


	if (count > 100/speedVar) {

	clearInterval(id)
	manage_line_inner.style.opacity = 0;
	awareness_line_inner.style.opacity = 0;
	trialrepeat_line_inner.style.opacity = 0;
	change_menu_phase3()




	} else {

	innovation_x = innovation_x + 0.0*stepvar
	innovation_y = innovation_y - 0.0*stepvar
	awareness_x = awareness_x + 0.2*stepvar
	awareness_y = awareness_y - 0.0*stepvar
	manage_x = manage_x - 0.05*stepvar
	manage_y = manage_y - 0.05*stepvar

	trialrepeat_x = trialrepeat_x + 0.0*stepvar
	trialrepeat_y = trialrepeat_y - 0.1*stepvar



	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_inner.setAttribute('x1', manage_x + '%')
	manage_line_inner.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_inner.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_inner.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_inner.setAttribute('x1', awareness_x + '%')
	awareness_line_inner.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var change_menu_phase3 = function() {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 70
	var manage_y = 50
	var trialrepeat_x = 40
	var trialrepeat_y = 65
	var awareness_x = 35
	var awareness_y = 35
	var awareness_r = 1.5
	var trialrepeat_r = 3
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	manage_line_middle.style.opacity = 0;
	awareness_line_middle.style.opacity = 0;
	trialrepeat_line_middle.style.opacity = 0;

	change_menu_phase4()



	} else {

	innovation_x = innovation_x + 0.0*stepvar
	innovation_y = innovation_y - 0.0*stepvar
	awareness_x = awareness_x + 0.05*stepvar
	awareness_y = awareness_y + 0.15*stepvar
	manage_x = manage_x - 0.1*stepvar
	manage_y = manage_y - 0.00*stepvar
	trialrepeat_x = trialrepeat_x + 0.065*stepvar
	trialrepeat_y = trialrepeat_y - 0.1*stepvar



	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_middle.setAttribute('x1', manage_x + '%')
	manage_line_middle.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_middle.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_middle.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_middle.setAttribute('x1', awareness_x + '%')
	awareness_line_middle.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var change_menu_phase4 = function() {

	count = 1

	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 60
	var manage_y = 50
	var trialrepeat_x = 46.5
	var trialrepeat_y = 55
	var awareness_x = 40
	var awareness_y = 50
	var trialrepeat_r = 2.5
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	manage_line_outer.style.opacity = 0;
	awareness_line_outer.style.opacity = 0;
	trialrepeat_line_outer.style.opacity = 0;
	manage_hub.style.opacity = 0;
	trialrepeat_hub.style.opacity = 0;
	awareness_hub.style.opacity = 0;
	change_menu_phase5()


	} else {

	innovation_x = innovation_x + 0.0*stepvar
	innovation_y = innovation_y - 0.0*stepvar
	awareness_x = awareness_x + 0.1*stepvar
	awareness_y = awareness_y + 0.0*stepvar
	manage_x = manage_x - 0.1*stepvar
	manage_y = manage_y - 0.00*stepvar
	trialrepeat_x = trialrepeat_x + 0.035*stepvar
	trialrepeat_y = trialrepeat_y - 0.05*stepvar
	trialrepeat_r = trialrepeat_r - 0.005*stepvar


	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_outer.setAttribute('x1', manage_x + '%')
	manage_line_outer.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_outer.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_outer.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_outer.setAttribute('x1', awareness_x + '%')
	awareness_line_outer.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var change_menu_phase5 = function() {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 50
	var manage_y = 50
	var trialrepeat_x = 50
	var trialrepeat_y = 50
	var trialrepeat_r = 2
	var awareness_x = 50
	var awareness_y = 50
	manage_line_outer.style.opacity = 1;
	awareness_line_outer.style.opacity = 1;
	trialrepeat_line_outer.style.opacity = 1;
	manage_hub.style.opacity = 1;
	trialrepeat_hub.style.opacity = 1;
	awareness_hub.style.opacity = 1;
	var trialrepeat_r = 2
	var id = setInterval(frame, 5);

	if (menuState == 'personal') {
	changeLineColor( "#d0d0e1","url(#button_surface_brown)","#1f1f2e")
	} else {
	changeLineColor("#cce1ff", "url(#button_surface_blue)",'#002d6b')

	}


	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)

	change_menu_phase6()


	} else {

	innovation_x = innovation_x - 0.0*stepvar
	innovation_y = innovation_y + 0.0*stepvar
	awareness_x = awareness_x - 0.1*stepvar
	awareness_y = awareness_y - 0.0*stepvar
	manage_x = manage_x + 0.1*stepvar
	manage_y = manage_y + 0.00*stepvar
	trialrepeat_x = trialrepeat_x - 0.035*stepvar
	trialrepeat_y = trialrepeat_y + 0.05*stepvar



	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_outer.setAttribute('x1', manage_x + '%')
	manage_line_outer.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_outer.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_outer.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_outer.setAttribute('x1', awareness_x + '%')
	awareness_line_outer.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var change_menu_phase6 = function() {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 60
	var manage_y = 50
	var trialrepeat_x = 46.5
	var trialrepeat_y = 55
	var trialrepeat_r = 2.5
	var awareness_x = 40
	var awareness_y = 50
	var awareness_r = 2
	manage_line_middle.style.opacity = 1;
	awareness_line_middle.style.opacity = 1;
	trialrepeat_line_middle.style.opacity = 1;
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	change_menu_phase7()

	} else {

	innovation_x = innovation_x - 0.0*stepvar
	innovation_y = innovation_y + 0.0*stepvar
	awareness_x = awareness_x - 0.05*stepvar
	awareness_y = awareness_y - 0.15*stepvar
	manage_x = manage_x + 0.1*stepvar
	manage_y = manage_y + 0.00*stepvar
	trialrepeat_x = trialrepeat_x - 0.065*stepvar
	trialrepeat_y = trialrepeat_y + 0.1*stepvar
	awareness_r = awareness_r - 0.005*stepvar
	trialrepeat_r = trialrepeat_r + 0.005*stepvar



	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')
	manage_line_middle.setAttribute('x1', manage_x + '%')
	manage_line_middle.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_middle.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_middle.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_middle.setAttribute('x1', awareness_x + '%')
	awareness_line_middle.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var change_menu_phase7 = function(extend_func, extend_func_shadow) {

	count = 1


	var frame_opacity = 1
	var innovation_x = 50
	var innovation_y = 50
	var manage_x = 70
	var manage_y = 50
	var manage_r = 2
	var trialrepeat_x = 40
	var trialrepeat_y = 65
	var trialrepeat_r = 3
	var awareness_x = 35
	var awareness_y = 35
	manage_line_inner.style.opacity = 1;
	awareness_line_inner.style.opacity = 1;
	trialrepeat_line_inner.style.opacity = 1;
	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('bezier1',count);

	if (count > 100/speedVar) {

	clearInterval(id)
	change_menu_phase8()

	} else {

	innovation_x = innovation_x - 0.0*stepvar
	innovation_y = innovation_y + 0.0*stepvar
	awareness_x = awareness_x - 0.2*stepvar
	awareness_y = awareness_y + 0.0*stepvar
	manage_x = manage_x + 0.05*stepvar
	manage_y = manage_y + 0.05*stepvar

	trialrepeat_x = trialrepeat_x - 0.0*stepvar
	trialrepeat_y = trialrepeat_y + 0.1*stepvar
	trialrepeat_r = trialrepeat_r + 0.005*stepvar


	count++;

	innovation_hub.setAttribute('cx', innovation_x + '%')
	innovation_hub.setAttribute('cy', innovation_y + '%')
	manage_hub.setAttribute('cx', manage_x + '%')
	manage_hub.setAttribute('cy', manage_y + '%')

	manage_line_inner.setAttribute('x1', manage_x + '%')
	manage_line_inner.setAttribute('y1', manage_y + '%')
	trialrepeat_hub.setAttribute('cx', trialrepeat_x + '%')
	trialrepeat_hub.setAttribute('cy', trialrepeat_y + '%')

	trialrepeat_line_inner.setAttribute('x1', trialrepeat_x + '%')
	trialrepeat_line_inner.setAttribute('y1', trialrepeat_y + '%')
	awareness_hub.setAttribute('cx', awareness_x + '%')
	awareness_hub.setAttribute('cy', awareness_y + '%')
	awareness_line_inner.setAttribute('x1', awareness_x + '%')
	awareness_line_inner.setAttribute('y1', awareness_y + '%')




	};
	
};
};

var change_menu_phase8 = function() {
	count = 1

	changeMenuState();


	var frame_opacity = 0;
	var font_size = 5
	extend_func.setAttribute('x',extend_func_x)
	extend_func.setAttribute('y',extend_func_y)
	extend_func.style.fill = "white"
	extend_func_shadow.setAttribute('x',extend_func_shadow_x)
	extend_func_shadow.setAttribute('y',extend_func_shadow_y)
	extend_func_shadow.style.fill = "black"

	var id = setInterval(frame, 5);

	function frame() {

	var stepvar	= tranScale('linear',count);

	if (count > 100/stepvar) {

	clearInterval(id)

	hubState === 'main'


	} else {

	font_size = font_size - 0.00055*count*stepvar;
	frame_opacity = (count*stepvar)/100;

	count++;
	innovation_text.style.opacity = frame_opacity;
	awareness_text.style.opacity = frame_opacity;
	trialrepeat_text.style.opacity = frame_opacity;
	manage_text.style.opacity = frame_opacity;

	innovation_text_shadow.style.opacity = frame_opacity;
	awareness_text_shadow.style.opacity = frame_opacity;
	trialrepeat_text_shadow.style.opacity = frame_opacity;
	manage_text_shadow.style.opacity = frame_opacity;

	};
	
};
};


var changeMenuState = function() {

	if (menuState === 'services') {

		innovation_text.textContent='myProfile'
		innovation_text_shadow.textContent='myProfile'
		awareness_text.textContent='website'
		awareness_text_shadow.textContent='website'
		trialrepeat_text.textContent='eCommerce'
		trialrepeat_text_shadow.textContent='eCommerce'
		manage_text.textContent='solutions'
		manage_text_shadow.textContent='solutions'


	} else {

		innovation_text.textContent='backToServices'
		innovation_text_shadow.textContent='backToServices'
		awareness_text.textContent='contact'
		awareness_text_shadow.textContent='contact'
		trialrepeat_text.textContent='digitalCv'
		trialrepeat_text_shadow.textContent='digitalCv'
		manage_text.textContent='portfolio'
		manage_text_shadow.textContent='portfolio'




	};

};

var changeLineColor = function(colorline, colorhub, color_logo) {

manage_line_inner.style.stroke = colorline;
manage_line_middle.style.stroke = colorline;
manage_line_outer.style.stroke = colorline;
awareness_line_inner.style.stroke = colorline;
awareness_line_middle.style.stroke = colorline;
awareness_line_outer.style.stroke = colorline;
trialrepeat_line_inner.style.stroke = colorline;
trialrepeat_line_middle.style.stroke = colorline;
trialrepeat_line_outer.style.stroke = colorline;
headerText.style.borderColor = colorline;


awareness_hub.style.fill = colorhub
innovation_hub.style.fill = colorhub
trialrepeat_hub.style.fill = colorhub
manage_hub.style.fill = colorhub

menu_line_top.style.stroke = 'white';
menu_line_middle.style.stroke = 'white';
menu_line_bottom.style.stroke = 'white';




}






menuHub.onclick = function() {

	open_menu_phase1()

};




innovation_hub.onclick = function() {

	if (menuState === 'services') {

		menuState = 'personal';
		sky_background.style.opacity = 0;
		night_background.style.opacity = 1;			
	
	} else {

		menuState = 'services'
		sky_background.style.opacity = 1;
		night_background.style.opacity = 0;			
	};


	change_menu_phase1()

};



awareness_hub.onclick = function() {
	extend_func = awareness_text
	extend_func_shadow = awareness_text_shadow
	extend_func_colour = 'white'
	extend_func_x = awareness_text.getAttribute('x')
	extend_func_y = awareness_text.getAttribute('y')
	extend_func_shadow_colour = 'black'
	extend_func_shadow_x = awareness_text_shadow.getAttribute('x')
	extend_func_shadow_y = awareness_text_shadow.getAttribute('y')
	if (menuState == 'personal') {
		activePage = contactPage;
		menuTextShadow.textContent = 'contact'
		menuText.textContent = 'contact'
		menuHub.setAttribute('fill', "url(#button_surface_brown)")
		menuHub.style.stroke = stroke="#8686ac"
		menuFrameBackground.style.backgroundColor = 'rgba(31,31,45,0.7)'
	} else {
		activePage = webSite;
		menuTextShadow.textContent = 'website'
		menuText.textContent = 'website'
		menuHub.setAttribute('fill', "url(#button_surface_blue)")
		menuHub.style.stroke = stroke="#7ab2ff"
		menuFrameBackground.style.backgroundColor = 'rgba(0,21,51,0.7)'
	};
	close_menu_phase1()
};

manage_hub.onclick = function() {
	extend_func = manage_text
	extend_func_shadow = manage_text_shadow
	extend_func_colour = 'white'
	extend_func_x = manage_text.getAttribute('x')
	extend_func_y = manage_text.getAttribute('y')
	extend_func_shadow_colour = 'black'
	extend_func_shadow_x = manage_text_shadow.getAttribute('x')
	extend_func_shadow_y = manage_text_shadow.getAttribute('y')
	if (menuState == 'personal') {
		activePage = portfolioPage;
		menuTextShadow.textContent = 'portfolio'
		menuText.textContent = 'portfolio'
		menuHub.setAttribute('fill', "url(#button_surface_brown)")
		menuHub.style.stroke = stroke="#8686ac"
		menuFrameBackground.style.backgroundColor = 'rgba(31,31,45,0.7)'
	} else {
		activePage = solutionsSite;
		menuTextShadow.textContent = 'solutions'
		menuText.textContent = 'solutions'
		menuHub.setAttribute('fill', "url(#button_surface_blue)")
		menuHub.style.stroke = stroke="#7ab2ff"
		menuFrameBackground.style.backgroundColor = 'rgba(0,21,51,0.7)'
	};
	close_menu_phase1()
};

trialrepeat_hub.onclick = function() {
	extend_func = trialrepeat_text
	extend_func_shadow = trialrepeat_text_shadow
	extend_func_colour = 'white'
	extend_func_x = trialrepeat_text.getAttribute('x')
	extend_func_y = trialrepeat_text.getAttribute('y')
	extend_func_shadow_colour = 'black'
	extend_func_shadow_x = trialrepeat_text_shadow.getAttribute('x')
	extend_func_shadow_y = trialrepeat_text_shadow.getAttribute('y')
	if (menuState == 'personal') {
		activePage = aboutPage;
		menuTextShadow.textContent = 'digitalCv'
		menuText.textContent = 'digitalCv'
		menuHub.setAttribute('fill', "url(#button_surface_brown)")
		menuHub.style.stroke = stroke="#8686ac"
		menuFrameBackground.style.backgroundColor = 'rgba(31,31,45,0.7)'
	} else {
		activePage = marketSite;
		menuTextShadow.textContent = 'eCommerce'
		menuText.textContent = 'eCommerce'
		menuHub.setAttribute('fill', "url(#button_surface_blue)")
		menuHub.style.stroke = stroke="#7ab2ff"
		menuFrameBackground.style.backgroundColor = 'rgba(0,21,51,0.7)'

	};
	close_menu_phase1()
};



/* highlight menu window function */

var hightlightMenuWindowPortal = function(menu_item) {

	for (i = 0; i < portalMenuItems.length; i++) {
		portalMenuItems[i].style.border = 'none';
		portalMenuItems[i].style.marginLeft = '0px';
		portalMenuItems[i].style.marginTop = '0px';
		portalMenuItems[i].style.marginBottom = '10%';
		portalImageItems[i].style.display = 'none';
		portalBackItems[i].style.display = 'none';
		portalImageInfo[i].style.display = 'none';

	};

	menu_item.style.border = '2px solid white';
	menu_item.style.marginLeft = '-2px';
	menu_item.style.marginTop = '-2px';
	menu_item.style.marginBottom = 'calc(10% -2px)';
	document.getElementById(menu_item.getAttribute('id')).style.display = 'block'
	document.getElementById(menu_item.getAttribute('id') + 'Back').style.display = 'block'
	document.getElementById(menu_item.getAttribute('id') + 'Icon').style.display = 'inline-block'






};

var hightlightMenuWindowDiscog = function(menu_item) {

	for (i = 0; i < discogMenuItems.length; i++) {
		discogMenuItems[i].style.border = 'none';
		discogMenuItems[i].style.marginLeft = '0px';
		discogMenuItems[i].style.marginTop = '0px';
		discogMenuItems[i].style.marginBottom = '10%';
		discogImageItems[i].style.display = 'none';
		discogBackItems[i].style.display = 'none';
		discogImageInfo[i].style.display = 'none';

	};

	menu_item.style.border = '2px solid white';
	menu_item.style.marginLeft = '-2px';
	menu_item.style.marginTop = '-2px';
	menu_item.style.marginBottom = 'calc(10% -2px)';
	document.getElementById(menu_item.getAttribute('id')).style.display = 'block'
	document.getElementById(menu_item.getAttribute('id') + 'Back').style.display = 'block'
	document.getElementById(menu_item.getAttribute('id') + 'Icon').style.display = 'inline-block'


};

var hightlightMenuWindowPlan = function(menu_item) {

	for (i = 0; i < planMenuItems.length; i++) {
		planMenuItems[i].style.border = 'none';
		planMenuItems[i].style.marginLeft = '0px';
		planMenuItems[i].style.marginTop = '0px';
		planMenuItems[i].style.marginBottom = '10%';
		planImageItems[i].style.display = 'none';
		planBackItems[i].style.display = 'none';
		planImageInfo[i].style.display = 'none';

	};

	menu_item.style.border = '2px solid white';
	menu_item.style.marginLeft = '-2px';
	menu_item.style.marginTop = '-2px';
	menu_item.style.marginBottom = 'calc(10% -2px)';
	document.getElementById(menu_item.getAttribute('id')).style.display = 'block'
	document.getElementById(menu_item.getAttribute('id') + 'Back').style.display = 'block'
	document.getElementById(menu_item.getAttribute('id') + 'Icon').style.display = 'inline-block'


};
/* Rotate Portal information */

var rotateImageWindow = function(info_item) {



	imageElement = info_item.parentElement.previousElementSibling.previousElementSibling
	imageBackElement = info_item.parentElement.previousElementSibling
	opactity_front = imageElement.getAttribute("_opacity")


	if (opactity_front == '1') {

		imageElement.setAttribute("_opacity", '0');
		opactity_front = '0';
		opactity_back = '1';


	} else {

		imageElement.setAttribute("_opacity", '1');
		opactity_front = '1';
		opactity_back = '0';		
	};

	imageBackElement.style.opacity = opactity_back;
	imageElement.style.opacity = opactity_front;

};


/* set up portal hover function */
(function() {

	for (i = 0; i < portalMenuItems.length; i++) {
		portalImageItems[i].style.display = 'none';
		portalImageInfo[i].style.display = 'none';
		portalBackItems[i].style.display = 'none';
		portalImageItems[i].setAttribute("_opacity", '1');

		portalMenuItems[i].onclick = function(e) {
		hightlightMenuWindowPortal(e.target, i)
	};
		portalImageInfo[i].onclick = function(e) {
		rotateImageWindow(e.target)	
	};	

	portalMenuItems[0].style.border = '2px solid white';
	portalMenuItems[0].style.marginLeft = '-2px';
	portalMenuItems[0].style.marginBottom = 'calc(10% -2px)';
	portalMenuItems[0].style.marginTop = '-2px';
	portalImageItems[0].style.display = 'block';
	portalBackItems[0].style.display = 'block';
	portalImageInfo[0].style.display = 'inline-block';

};

	for (i = 0; i < discogMenuItems.length; i++) {
		discogImageItems[i].style.display = 'none';
		discogImageInfo[i].style.display = 'none';
		discogBackItems[i].style.display = 'none';
		discogImageItems[i].setAttribute("_opacity", '1');

		discogMenuItems[i].onclick = function(e) {
		hightlightMenuWindowDiscog(e.target, i)
	};
		discogImageInfo[i].onclick = function(e) {
		rotateImageWindow(e.target)	
	};	

	discogMenuItems[0].style.border = '2px solid white';
	discogMenuItems[0].style.marginLeft = '-2px';
	discogMenuItems[0].style.marginBottom = 'calc(10% -2px)';
	discogMenuItems[0].style.marginTop = '-2px';
	discogImageItems[0].style.display = 'block';
	discogBackItems[0].style.display = 'block';
	discogImageInfo[0].style.display = 'inline-block';

};

	for (i = 0; i < planMenuItems.length; i++) {
		planImageItems[i].style.display = 'none';
		planImageInfo[i].style.display = 'none';
		planBackItems[i].style.display = 'none';
		planImageItems[i].setAttribute("_opacity", '1');

		planMenuItems[i].onclick = function(e) {
		hightlightMenuWindowPlan(e.target, i)
	};
		planImageInfo[i].onclick = function(e) {
		rotateImageWindow(e.target)	
	};	

	planMenuItems[0].style.border = '2px solid white';
	planMenuItems[0].style.marginLeft = '-2px';
	planMenuItems[0].style.marginBottom = 'calc(10% -2px)';
	planMenuItems[0].style.marginTop = '-2px';
	planImageItems[0].style.display = 'block';
	planBackItems[0].style.display = 'block';
	planImageInfo[0].style.display = 'inline-block';

};

}());

var standoutTextFunction = function() {

	count = 1;
	shadowCount = 0
	webSiteStandout.style.display = "block"
	standOutText.style.fontSize = '6vh'
	standOutText.textContent = 'your words should, '
	standOutText.setAttribute("y", '51%' )
	var standoutFrameBack = document.getElementById('standoutRect')
	standoutFrameBack.setAttribute("fill-opacity", '0.8')

	var id = setInterval(frame, 10);

	function frame() {


		if (count > 270) {

		clearInterval(id)

		phaseInWebServices()

		} else if (count > 170) {

		count ++;

		} else if (count > 120) {

		count ++;
		shadowCount ++;

		standOutOpacity = (shadowCount/50).toString();
		standOutOpacityFrame = ((shadowCount/250)+0.8).toString();

		standOutText.style.fontSize = '13vh'

		standOutText.setAttribute("fill-opacity", standOutOpacity )
		standoutFrameBack.setAttribute("fill-opacity", standOutOpacityFrame )
		standOutText.setAttribute("y", '52%' )


		} else if (count > 100) {

		standOutText.textContent = 'stand out'
		standOutText.setAttribute("fill-opacity", '0' )
		count ++;

		} else {

		count ++;

		};

	};

};

var carouselFunction = function() {

	count = 0;
	webSiteCaroselFrame.style.display = 'block';
	var currdeg = 0;
	var id = setInterval(frame, 700);


	function frame() {

		if (count > 6) {

		clearInterval(id)
		caroselObject.style.transform = "rotateY("+"0"+"deg)"
		phaseInEcommerceServices();

		} else if  (count > 5) {

		count ++;

		} else {

		currdeg = currdeg - 60;

		caroselObject.style.transform = "rotateY("+currdeg+"deg)"
		count ++;



		};
	};
};

var bbcFunction = function() {


	count = 0;
	websiteBbcFrame.style.display = 'block'

	var id = setInterval(frame, 100);
	var bbcObjectXTop = 20;
	var bbcObjectYTop = 43;
	var bbcObjectXMiddle = 20;
	var bbcObjectYMiddle = 43;
	var bbcObjectXBottom = 20;
	var bbcObjectYBottom = 43;
	bbcObjectTop.setAttribute('cx', bbcObjectXTop + '%')
	bbcObjectTop.setAttribute('cy', bbcObjectYTop + '%')
	bbcObjectTop.style.fill = 'none';
	bbcObjectMiddle.setAttribute('cx', bbcObjectXMiddle + '%')
	bbcObjectMiddle.setAttribute('cy', bbcObjectYMiddle + '%')
	bbcObjectMiddle.style.fill = 'none';
	bbcObjectBottom.setAttribute('cx', bbcObjectXBottom + '%')
	bbcObjectBottom.setAttribute('cy', bbcObjectYBottom + '%')
	bbcObjectTop.style.fill = 'none';
	bbcObjectMiddle.style.fill = 'none';
	bbcObjectBottom.style.fill = 'none';
	bbcObjectText.textContent = 'business - business'



	function frame() {

		if (count > 49) {

		clearInterval(id)


		phaseInWebSolutions();

		} else if  (count > 39) {

		count ++;


		} else if  (count > 19) {

		bbcObjectText.textContent = 'business to customer'
		bbcObjectXTop = bbcObjectXTop + 1.5;
		bbcObjectYTop= bbcObjectYTop + 1;
		bbcObjectXMiddle = bbcObjectXMiddle + 1.5;
		bbcObjectYMiddle = bbcObjectYMiddle - 0;
		bbcObjectXBottom = bbcObjectXBottom + 1.5;
		bbcObjectYBottom = bbcObjectYBottom - 1;

		bbcObjectTop.setAttribute('cx', bbcObjectXTop + '%');
		bbcObjectTop.setAttribute('cy', bbcObjectYTop + '%');
		bbcObjectMiddle.setAttribute('cx', bbcObjectXMiddle + '%');
		bbcObjectMiddle.setAttribute('cy', bbcObjectYMiddle + '%');
		bbcObjectBottom.setAttribute('cx', bbcObjectXBottom + '%');
		bbcObjectBottom.setAttribute('cy', bbcObjectYBottom + '%');
		bbcObjectTop.style.fill = 'white';
		bbcObjectMiddle.style.fill = 'white';
		bbcObjectBottom.style.fill = 'white';
		bbcObjectTop.style.fill = '#004fbd';
		bbcObjectMiddle.style.fill = '#004fbd';
		bbcObjectBottom.style.fill = '#004fbd';
		bbcObjectMainHub.style.fill = 'url(#button_surface_blue)';
		bbcObjectMainHubText.style.fill = 'white';
		bbcObjectMainHub.style.stroke = 'white';

		count ++;

		} else if  (count > 14) {
		bbcObjectText.textContent = 'business'
		bbcObjectXTop = bbcObjectXTop + 1.5;
		bbcObjectYTop= bbcObjectYTop - 0;
		bbcObjectXMiddle = bbcObjectXMiddle + 1.5;
		bbcObjectYMiddle = bbcObjectYMiddle - 0;
		bbcObjectXBottom = bbcObjectXBottom + 1.5;
		bbcObjectYBottom = bbcObjectYBottom - 0;
		bbcObjectTop.setAttribute('cx', bbcObjectXTop + '%');
		bbcObjectTop.setAttribute('cy', bbcObjectYTop + '%');
		bbcObjectMiddle.setAttribute('cx', bbcObjectXMiddle + '%');
		bbcObjectMiddle.setAttribute('cy', bbcObjectYMiddle + '%');
		bbcObjectBottom.setAttribute('cx', bbcObjectXBottom + '%');
		bbcObjectBottom.setAttribute('cy', bbcObjectYBottom + '%');
		bbcObjectMainHub.style.fill = '#002d6b';


		count ++;

		} else {

		bbcObjectXTop = bbcObjectXTop + 1.5;
		bbcObjectYTop= bbcObjectYTop - 0;
		bbcObjectXMiddle = bbcObjectXMiddle + 1.5;
		bbcObjectYMiddle = bbcObjectYMiddle - 0;
		bbcObjectXBottom = bbcObjectXBottom + 1.5;
		bbcObjectYBottom = bbcObjectYBottom - 0;
		bbcObjectTop.setAttribute('cx', bbcObjectXTop + '%');
		bbcObjectTop.setAttribute('cy', bbcObjectYTop + '%');
		bbcObjectMiddle.setAttribute('cx', bbcObjectXMiddle + '%');
		bbcObjectMiddle.setAttribute('cy', bbcObjectYMiddle + '%');
		bbcObjectBottom.setAttribute('cx', bbcObjectXBottom + '%');
		bbcObjectBottom.setAttribute('cy', bbcObjectYBottom + '%');

		count ++;



		};
	};
};





var phaseInEcommerceServices = function() {

	count = 1;
	shadowCount = 0

	var id = setInterval(frame, 10);

	function frame() {

		if (count > 100) {
		webSiteCaroselFrame.style.display = 'none'
		webSiteCaroselFrame.style.opacity = '1'
		caroselObject.style.transform = "rotateY("+0+"deg)"

		close_menu_phase6()
		clearInterval(id)

		} else {

		count ++;
		shadowCount ++;

		CaroselOpacity = ((100 - shadowCount)/100).toString();

		webSiteCaroselFrame.style.opacity = CaroselOpacity;

		};

	};

};

var phaseInWebServices = function() {

	count = 1;
	shadowCount = 0

	var id = setInterval(frame, 10);

	function frame() {

		if (count > 100) {

		standOutFrame.style.display = 'none'
		standOutFrame.style.opacity = '1'
		webSite.style.display = 'block'
		close_menu_phase6()
		clearInterval(id)

		} else {

		count ++;
		shadowCount ++;

		standOutOpacity = ((100 - shadowCount)/100).toString();

		standOutFrame.style.opacity = standOutOpacity;

		};

	};

};

var phaseInWebSolutions = function() {

	count = 1;
	shadowCount = 0

	var id = setInterval(frame, 10);

	function frame() {

		if (count > 100) {

		websiteBbcFrame.style.display = 'none'
		websiteBbcFrame.style.opacity = '1'
		close_menu_phase6()
		clearInterval(id)

		} else {

		count ++;
		shadowCount ++;

		standOutOpacity = ((100 - shadowCount)/100).toString();

		websiteBbcFrame.style.opacity = standOutOpacity;

		};

	};

};


var intervalReadyState = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(intervalReadyState);
   		document.getElementById('loadingPage').style.opacity = '0';
   		document.getElementById('loadingText').style.display = 'none';

   		setTimeout(function() {
   			document.getElementById('loadingPage').style.display = 'none';

   			}

   		,2000);
    }    
}, 100);

window.addEventListener("scroll", function(event) {
    var top = this.scrollY



    if (top > 102) {

    menuFrame.style.opacity = '0';
    menuFrameBackground.style.opacity = '0';
    menu_bars.style.opacity = '0';



    } else if (top > 0) {

    menuFrame.style.height = (30 - top/10).toString() + '%';
    menuFrameBackground.style.height = (15 - top/20).toString() + '%';
    menu_bars.style.top = 'calc(' + (15 - top/20).toString() + '%' + ' + -5vh)';
    menuFrame.style.opacity = (1 - top*0.01).toString();
    menuFrameBackground.style.opacity = (1 - top*0.01).toString();
    menu_bars.style.opacity = (1 - top*0.01).toString();

	} else if (top < 15) {

	menuFrame.style.height = '30%';
    menuFrameBackground.style.height = '15%';
    menu_bars.style.top = 'calc(15% + -5vh)';
    menuFrame.style.opacity = '1';
    menuFrameBackground.style.opacity = '1';
    menu_bars.style.opacity = '1';


	} else {


	};

	}, false);


/*
alert(document.documentElement.clientWidth);
*/






}());	
