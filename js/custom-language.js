$(document).ready(function(){
	var totalSpan = $('.custom-language-box .ln').length;
	var totalln = ["অ","ফ","E"];
	if(totalSpan<totalln.length)
	{
		$('.custom-language-box').append('<div class="ln-select"></div>');
		$('.custom-language-box div').css({'display':'inline-block'});
			for(var i=0; i<totalln.length; i++)
		$('.custom-language-box .ln-select').append('<span class="ln">'+totalln[i]+'</span>');
		$('.custom-language-box .ln-select').css({'position':'absolute','bottom':'3px'});
	}
	$('.custom-language-box .ln-select').css({'position':'relative','display':'none', 'height':'1px'});
	$('.custom-language-box .ln-select .ln').css({'margin-right':'5px','margin-top':'-20px','padding':'3px 7px 3px 7px','font-size':'15px','background-color':'#000','color':'#FFF','cursor':'pointer'});
	$('.custom-language-box .ln-select .ln:first-child').css({'background':'#FF0000'});
	
	$('.custom-language-box .ln').click(function(){
		var par = $(this).parents('.custom-language-box');
		par.find('.ln').css({'background':'#000'});
		$(this).css({'background':'#FF0000'});
		var ran = $.now();
		var temp = '';
		if(par.find('.custom-language-text').attr('id'))
			temp = par.find('.custom-language-text').attr('id');
		else
		{
			par.find('.custom-language-text').attr('id',ran);
			temp = ran;
		}

		if($(this).index()==0)
		makeUnijoyEditor(temp);
		else if($(this).index()==1)
		makePhoneticEditor(temp);
		else if($(this).index()==2)
		$('.custom-language-box').find('.custom-language-text').removeAttr("id");
	});

	$('.custom-language-text').click(function(){
		var par = $(this).parents('.custom-language-box');
		par.children('.ln-select').fadeIn();
		var ran = $.now();

		if(!$(this).attr('id'))
		{
			$(this).attr('id',ran);
			makeUnijoyEditor(ran);
		}
		
		setTimeout(function(){
        	par.children('.ln-select').fadeOut();
		},5000);
	});
});
function checkKeyDown(e){var n=window.event?event.keyCode:e.which;"17"==n&&(ctrlPressed=!0)}function checkKeyUp(e){var n=window.event?event.keyCode:e.which;"17"==n&&(ctrlPressed=!1)}function parsePhonetic(e){var n=(document.getElementById(activeta),window.event?event.keyCode:e.which);if("113"==n&&ctrlPressed)return switched=!switched,!0;if(switched)return!0;ctrlPressed&&(n=0);var t=String.fromCharCode(n);return 8==n||32==n?(carry=" ",void(old_len=1)):(lastcarry=carry,carry+=""+t,bangla=parsePhoneticCarry(carry),tempBangla=parsePhoneticCarry(t),".."==tempBangla||".."==bangla?!1:"+"==t?"++"==carry?(insertJointAtCursor("+",old_len),old_len=1,!1):(insertAtCursor("্"),old_len=1,carry2=carry,carry="+",!1):0==old_len?(insertJointAtCursor(bangla,1),old_len=1,!1):"ao"==carry?(insertJointAtCursor(parsePhoneticCarry("ao"),old_len),old_len=1,!1):"ii"==carry?(insertJointAtCursor(phonetic.ii,1),old_len=1,!1):"oi"==carry?(insertJointAtCursor("ৈ",1),!1):"o"==t?(old_len=1,insertAtCursor("ো"),carry="o",!1):"ou"==carry?(insertJointAtCursor("ৌ",old_len),old_len=1,!1):""==bangla&&""!=tempBangla?(bangla=tempBangla,""==bangla?void(carry=""):(carry=t,insertAtCursor(bangla),old_len=bangla.length,!1)):""!=bangla?(insertJointAtCursor(bangla,old_len),old_len=bangla.length,!1):void 0)}function parsePhoneticCarry(e){return phonetic[e]?phonetic[e]:""}function insertAtCursor(e){var n=document.getElementById(activeta);if(document.selection)n.focus(),sel=document.selection.createRange(),sel.text=e,sel.collapse(!0),sel.select();else if(n.selectionStart||0==n.selectionStart){var t=n.selectionStart,o=n.selectionEnd,i=n.scrollTop;t=-1==t?n.value.length:t,n.value=n.value.substring(0,t)+e+n.value.substring(o,n.value.length),n.focus(),n.selectionStart=t+e.length,n.selectionEnd=t+e.length,n.scrollTop=i}else{var i=n.scrollTop;n.value+=e,n.focus(),n.scrollTop=i}}function insertJointAtCursor(e,n){var t=document.getElementById(activeta);if(document.selection)t.focus(),sel=document.selection.createRange(),t.value.length>=n&&sel.moveStart("character",-1*n),sel.text=e,sel.collapse(!0),sel.select();else if(t.selectionStart||0==t.selectionStart){t.focus();var o=t.selectionStart-n,i=t.selectionEnd,c=t.scrollTop;o=-1==o?t.value.length:o,t.value=t.value.substring(0,o)+e+t.value.substring(i,t.value.length),t.focus(),t.selectionStart=o+e.length,t.selectionEnd=o+e.length,t.scrollTop=c}else{var c=t.scrollTop;t.value+=e,t.focus(),t.scrollTop=c}}function makePhoneticEditor(e){activeTextAreaInstance=document.getElementById(e),activeTextAreaInstance.onkeypress=parsePhonetic,activeTextAreaInstance.onkeydown=checkKeyDown,activeTextAreaInstance.onkeyup=checkKeyUp,activeTextAreaInstance.onfocus=function(){activeta=e}}function makeVirtualEditor(e){activeTextAreaInstance=document.getElementById(e),activeTextAreaInstance.onfocus=function(){activeta=e}}function checkKeyDown(e){var n=window.event?event.keyCode:e.which;"17"==n&&(ctrlPressed=!0)}function checkKeyUp(e){var n=window.event?event.keyCode:e.which;"17"==n&&(ctrlPressed=!1)}function parseunijoy(e){var n=(document.getElementById(activeta),window.event?event.keyCode:e.which);if("113"==n&&ctrlPressed)return switched=!switched,!0;if(switched)return!0;ctrlPressed&&(n=0);var t=String.fromCharCode(n);return 8==n||32==n?(carry=" ",void(old_len=1)):(lastcarry=carry,carry+=""+t,bangla=parseunijoyCarry(carry),tempBangla=parseunijoyCarry(t),".."==tempBangla||".."==bangla?!1:"g"==t?"gg"==carry?(insertConjunction("্‌",old_len),old_len=1,!1):(insertAtCursor("্"),old_len=1,carry="g",!1):0==old_len?(insertConjunction(bangla,1),old_len=1,!1):"A"==t?(newChar=unijoy.v+"্",insertAtCursor(newChar),old_len=1,!1):""==bangla&&""!=tempBangla?(bangla=tempBangla,""==bangla?void(carry=""):(carry=t,insertAtCursor(bangla),old_len=bangla.length,!1)):""!=bangla?(insertConjunction(bangla,old_len),old_len=bangla.length,!1):void 0)}function parseunijoyCarry(e){return unijoy[e]?unijoy[e]:""}function insertAtCursor(e){lastInserted=e;var n=document.getElementById(activeta);if(document.selection)n.focus(),sel=document.selection.createRange(),sel.text=e,sel.collapse(!0),sel.select();else if(n.selectionStart||0==n.selectionStart){var t=n.selectionStart,o=n.selectionEnd,i=n.scrollTop;t=-1==t?n.value.length:t,n.value=n.value.substring(0,t)+e+n.value.substring(o,n.value.length),n.focus(),n.selectionStart=t+e.length,n.selectionEnd=t+e.length,n.scrollTop=i}else{var i=n.scrollTop;n.value+=e,n.focus(),n.scrollTop=i}}function insertConjunction(e,n){lastInserted=e;var t=document.getElementById(activeta);if(document.selection)t.focus(),sel=document.selection.createRange(),t.value.length>=n&&sel.moveStart("character",-1*n),sel.text=e,sel.collapse(!0),sel.select();else if(t.selectionStart||0==t.selectionStart){t.focus();var o=t.selectionStart-n,i=t.selectionEnd,c=t.scrollTop;o=-1==o?t.value.length:o,t.value=t.value.substring(0,o)+e+t.value.substring(i,t.value.length),t.focus(),t.selectionStart=o+e.length,t.selectionEnd=o+e.length,t.scrollTop=c}else{var c=t.scrollTop;t.value+=e,t.focus(),t.scrollTop=c}}function makeUnijoyEditor(e){activeTextAreaInstance=document.getElementById(e),activeTextAreaInstance.onkeypress=parseunijoy,activeTextAreaInstance.onkeydown=checkKeyDown,activeTextAreaInstance.onkeyup=checkKeyUp,activeTextAreaInstance.onfocus=function(){activeta=e}}var activeta,phonetic=new Array;phonetic.k="ক",phonetic[0]="০",phonetic[1]="১",phonetic[2]="২",phonetic[3]="৩",phonetic[4]="৪",phonetic[5]="৫",phonetic[6]="৬",phonetic[7]="৭",phonetic[8]="৮",phonetic[9]="৯",phonetic.i="ি",phonetic.I="ই",phonetic.ii="ী",phonetic.II="ঈ",phonetic.e="ে",phonetic.E="এ",phonetic.U="উ",phonetic.u="ু",phonetic.uu="ূ",phonetic.UU="ঊ",phonetic.r="র",phonetic.WR="ঋ",phonetic.a="া",phonetic.A="আ",phonetic.ao="অ",phonetic.s="স",phonetic.t="ট",phonetic.K="খ",phonetic.kh="খ",phonetic.n="ন",phonetic.N="ণ",phonetic.T="ত",phonetic.Th="থ",phonetic.d="ড",phonetic.dh="ঢ",phonetic.b="ব",phonetic.bh="ভ",phonetic.v="ভ",phonetic.R="ড়",phonetic.Rh="ঢ়",phonetic.g="গ",phonetic.G="ঘ",phonetic.gh="ঘ",phonetic.h="হ",phonetic.NG="ঞ",phonetic.j="জ",phonetic.J="ঝ",phonetic.jh="ঝ",phonetic.c="চ",phonetic.ch="চ",phonetic.C="ছ",phonetic.th="ঠ",phonetic.p="প",phonetic.f="ফ",phonetic.ph="ফ",phonetic.D="দ",phonetic.Dh="ধ",phonetic.z="য",phonetic.y="য়",phonetic.Ng="ঙ",phonetic.ng="ং",phonetic.l="ল",phonetic.m="ম",phonetic.sh="শ",phonetic.S="ষ",phonetic.O="ও",phonetic.ou="জ",phonetic.OU="ঔ",phonetic.Ou="ঔ",phonetic.Oi="ঐ",phonetic.OI="ঐ",phonetic.tt="ৎ",phonetic.H="ঃ",phonetic["."]="।",phonetic[".."]=".",phonetic.HH="্‌",phonetic.NN="ঁ",phonetic.Y="্য",phonetic.w="্ব",phonetic.W="ৃ",phonetic.wr="ৃ",phonetic.x="ক্স",phonetic.rY=phonetic.r+"‍্য",phonetic.L=phonetic.l,phonetic.Z=phonetic.z,phonetic.P=phonetic.p,phonetic.V=phonetic.v,phonetic.B=phonetic.b,phonetic.M=phonetic.m,phonetic.V=phonetic.v,phonetic.X=phonetic.x,phonetic.V=phonetic.v,phonetic.F=phonetic.f;var carry="",old_len=0,ctrlPressed=!1,len_to_process_oi_kar=0,first_letter=!1,carry2="";isIE=document.all?1:0;var switched=!1,activeta,unijoy=new Array;unijoy[0]="০",unijoy[1]="১",unijoy[2]="২",unijoy[3]="৩",unijoy[4]="৪",unijoy[5]="৫",unijoy[6]="৬",unijoy[7]="৭",unijoy[8]="৮",unijoy[9]="৯",unijoy.j="ক",unijoy.d="ি",unijoy.gd="ই",unijoy.D="ী",unijoy.gD="ঈ",unijoy.c="ে",unijoy.gc="এ",unijoy.gs="উ",unijoy.s="ু",unijoy.S="ূ",unijoy.gS="ঊ",unijoy.v="র",unijoy.a="ঋ",unijoy.f="া",unijoy.gf="আ",unijoy.F="অ",unijoy.n="স",unijoy.t="ট",unijoy.J="খ",unijoy.b="ন",unijoy.B="ণ",unijoy.k="ত",unijoy.K="থ",unijoy.e="ড",unijoy.E="ঢ",unijoy.h="ব",unijoy.H="ভ",unijoy.p="ড়",unijoy.P="ঢ়",unijoy.o="গ",unijoy.O="ঘ",unijoy.i="হ",unijoy.I="ঞ",unijoy.u="জ",unijoy.U="ঝ",unijoy.y="চ",unijoy.Y="ছ",unijoy.T="ঠ",unijoy.r="প",unijoy.R="ফ",unijoy.l="দ",unijoy.L="ধ",unijoy.w="য",unijoy.W="য়",unijoy.q="ঙ",unijoy.Q="ং",unijoy.V="ল",unijoy.m="ম",unijoy.M="শ",unijoy.N="ষ",unijoy.gx="ও",unijoy.X="ৌ",unijoy.gX="ঔ",unijoy.gC="ঐ",unijoy["\\"]="ঃ",unijoy["|"]="ৎ",unijoy.G="।",unijoy.g=" ",unijoy["&"]="ঁ",unijoy.Z="্য",unijoy.gh="্ব",unijoy.ga="ঋ",unijoy.a="ৃ",unijoy.vZ=unijoy.v+"‌্য",unijoy.z="্"+unijoy.v,unijoy.x="ো",unijoy.C="ৈ";var carry="",old_len=0,ctrlPressed=!1,first_letter=!1,lastInserted;isIE=document.all?1:0;var switched=!1;