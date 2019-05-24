$(function(){
	// 문서가 준비가 완료되면~

	// 슬라이더를 움직여 주는 함수
	function moveSlider(index){
		// console.log(index);
			// 넘겨받은 index가 어떠한 값을 가지고 있는지 확인해보자.

		// 4-1. 슬라이더 이동
		var willMoveLeft = -(index * 600);
		console.log(willMoveLeft);
			// 클릭 이벤트가 일어나서 넘겨받은 index 값에 600을 곱하고 나온 값을 음수로 만들어 준다.
		$(".img_wrap").animate({left : willMoveLeft},"slow");

		// 4-2. css에 정의한 임의의 클래스 'active' 를 줬다 뺐다
		$('.control_btn[data-index=' + index + ']').addClass('active');
			// control_btn 의 속성중 data-index 가 뭐뭐 인 control_btn 은 클래스명 active를 부여해 주겠다.
		$('.control_btn[data-index!=' + index + ']').removeClass('active');
			// control_btn 의 속성중 data-index 가 뭐뭐 가 아닌 control_btn 은 클래스명 active를 제거해 주겠다.


		// 4-3. 글자 이동
		$('.slider_text[data-index=' + index + ']').show().animate({left : 0},"slow");
			// slider_text속성중 data-index 가 뭐뭐 인 slider_text 은 -300 의 위치해 있던 위치값을 0 으로 바꿔주며 보여지게 하겠다
		$('.slider_text[data-index!=' + index + ']').hide('slow', function(){
			// slider_text속성중 data-index 가 뭐뭐 가 아닌 slider_text 은 숨겨지게 하겠다. 숨겨지는 모션이 끝나면~
			$(this).css('left', -300);
				// 이것의 위치값을 -300 으로 맞춰서 나중에 포커스가 왔을 경우 왼쪽에서 오른쪽으로 나오는 애니메이션 효과를 볼 수 있게 만들어 주겠다.
		})
	}


	/* 1. 초기 텍스트 위치 지정 과 data-index 할당 */
	$(".slider_text").css('left', -300).each(function(index){
		// slider_text 모든 요소의 위치를 좌측으로 -300 만큼 밀어버리겠다. 그리고~ 반복문을 돌면서~
		$(this).attr("data-index",index);
			// 현재 이것의 data-index 속성으로 현재 이것의 순번을 넣어주겠다.
	});

	/* 컨트롤 버튼의 클릭 핸들러 지정과 data-index 할당 */
	$('.control_btn').each(function(index){
		// control_btn 에 반복문이 돌아가면서~
		$(this).attr('data-index',index)
			// 2. 현재 이것의 data-index 속성을 control_btn 에 할당해준다.

	}).click(function(){
		// 3. control_btn 을 클릭하게 되면
		var index = $(this).attr('data-index');
			// index 라는 변수에 현재 누른 control_btn 의 data-index 속성의 속성값을 읽어온다.
		moveSlider(index);
			// 그리고 moveSlider 라는 선언적 함수를 호출하게 되는데 호출할때에 매개변수로
			// 위에 정의한 index 변수에 담긴 내용을 보내준다.
	});


	// 5. 시작하자마자 매개변수 0을 담아서 moveSlider 함수를 호출한다.
	moveSlider(0);

		
})