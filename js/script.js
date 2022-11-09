$(function(){
	
	//topBtn 감추기/보이기,header의 배경색 바꾸기
	
	$("#topBtn").fadeOut(); //slideup...
	
	$(window).scroll(function(){
		
		if($(this).scrollTop()>=400){ //if($(this:window).scrollTop()>=400:숫자는 내맘대로)
			$("#topBtn").fadeIn(500); //500->0.5s
			$("header").css("background","#2F3190");
			
		}else{
			$("#topBtn").fadeOut(500);
			$("header").css("background","rgba(255,255,255,0.3)");
		}
		
	});
	
	
	//모바일 환경에서 삼선메뉴 클릭 시 전체 메뉴 보이기/감추기
	//현재의 상태(삼선메뉴상태)를 s=1->개발자 맘대로 설정해도됨
	//삼선메뉴 클릭시 보이는 상태를 s=0
	
	var s=1;
	$(".mAllMenu>ul").click(function(){
		$(this).toggleClass("mX");
		
		if(s==1){
			$("nav").stop().animate({right:0},500); //stop->하던거 멈추고 이 기능해라.
			s=0; //나왔을때 x표 나오게
		}else{
			$("nav").stop().animate({right:"-50%"},500); //stop->하던거 멈추고 이 기능해라.
			s=1;
		}
		
	});
	
	//가로사이즈 자동 인식
	$(window).resize(function(){ //윈도우 재설정. 반응형일 때 맨 위에 써주면 좋음
	
		var w=$(window).width();
		
		if(w>=1200){
			$("nav").css({
				"right":"10%", //css 그대로 가져오고, 콜론 빼고 쌍따옴표 묶어주기->콤마
				"top":"50%",
				"transform":"translateY(-50%)"
			});
		}else{
			$("nav").css({
				"right":"-50%", //css 그대로 가져오고, 콜론 빼고 쌍따옴표 묶어주기->콤마
				"top":"0%",
				"transform":"translateY(0%)"

			});
	
		}

	
	});
	
	
	//주메뉴 클릭시 해당페이지로 이동할 때 메뉴 포커스 설정과 부드럽게 이동
	$("nav ul li a").click(function(){
		$("nav ul li a").removeClass("on"); //기존 설정되어 있는 on 클래스 삭제->내가 클릭한 위치에 on추가
		$(this).addClass("on");
		
		//제이쿼리 플러그인 설치후
		$("body").scrollTo($(this).attr("href"),500);
		return false;
		
		
	});
	
	$("#topBtn a").click(function(){
		$("body").scrollTo($(this).attr("href"),500);
		return false;
		
	});
	
	
	//마우스 스크롤시 해당페이지 메뉴의 포커스 설정
	$(window).scroll(function(){
		
		//스크롤 된 화면의 top의 값을 구하여 sct변수에 기억
		var sct=$(window).scrollTop();
		
		var menu=$("nav ul li a"); //색상 바꾼다.
		var content=$("#wrap>section"); //영역 위치에 따라서
		
		
		
		if(sct>=content.eq(0).offset().top){
			//home 값보다 크거나 같냐
			menu.removeClass("on"); //contact 위치에 있는 줄을 삭제하라
			menu.eq(0).addClass("on"); // 0번째 방(home)에 넣어라
		}
			
		if(sct>=content.eq(1).offset().top){
			//home 값보다 크거나 같냐
			menu.removeClass("on"); 
			menu.eq(1).addClass("on"); 
			
			$("#about .left").css("left","0");
			$("#about .right").css("right","0");
			
			}else{
				$("#about .left").css("left","-50%");
				$("#about .right").css("right","-50%");
			}
		
		if(sct>=content.eq(2).offset().top){
			//home 값보다 크거나 같냐
			menu.removeClass("on"); 
			menu.eq(2).addClass("on"); 
			$("#skills .left").css("transform","scale(1)");
			$("#skills .right").css("transform","scale(1)");
		}else{
			$("#skills .left").css("transform","scale(0)");
			$("#skills .right").css("transform","scale(0)");
		
		}
			
		if(sct>=content.eq(3).offset().top){
			//home 값보다 크거나 같냐
			menu.removeClass("on"); 
			menu.eq(3).addClass("on"); 
			$("#work .left").css("height","100%");
			$("#work .right").css("height","100%");
		}else{
			$("#work .left").css("height","0");
			$("#work .right").css("height","0");
		
		}
			
		if(sct>=content.eq(4).offset().top){
			//home 값보다 크거나 같냐
			menu.removeClass("on"); 
			menu.eq(4).addClass("on"); 
			$("#contact .left").css("width","45%");
			$("#contact .right").css("width","45%");
		}else{
			$("#contact .left").css("width","0");
			$("#contact .right").css("width","0");
		
		}
	});
	
	
});









