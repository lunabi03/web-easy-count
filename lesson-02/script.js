// 날짜 포맷팅 함수 (2025년 1월 15일 형식으로 변환)
function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}

// D-day 계산 함수 (남은 일수 또는 경과 일수 계산)
function getDday(targetDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 오늘 날짜의 시간을 0으로 설정
  
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0); // 목표 날짜의 시간을 0으로 설정
  
  const diff = target - today;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  
  if (days > 0) {
    return `D-${days}`;
  } else if (days === 0) {
    return "D-day!";
  } else {
    return `${Math.abs(days)}일 전`;
  }
}

// 기념일 계산 함수
function calculateAnniversaries(startDate) {
  const start = new Date(startDate);
  
  // 100일 기념일 계산
  const day100 = new Date(start);
  day100.setDate(start.getDate() + 100);
  
  // 200일 기념일 계산
  const day200 = new Date(start);
  day200.setDate(start.getDate() + 200);
  
  // 500일 기념일 계산
  const day500 = new Date(start);
  day500.setDate(start.getDate() + 500);
  
  // 1000일 기념일 계산
  const day1000 = new Date(start);
  day1000.setDate(start.getDate() + 1000);
  
  return { day100, day200, day500, day1000 };
}

// 결과 표시 함수
function displayResult(result) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h3>💕 우리의 기념일</h3>
    <p>💯 100일: ${formatDate(result.day100)} (${getDday(result.day100)})</p>
    <p>💯 200일: ${formatDate(result.day200)} (${getDday(result.day200)})</p>
    <p>🎉 500일: ${formatDate(result.day500)} (${getDday(result.day500)})</p>
    <p>🎊 1000일: ${formatDate(result.day1000)} (${getDday(result.day1000)})</p>
  `;
}

// 계산 버튼 클릭 이벤트 리스너
document.getElementById('calculateBtn').addEventListener('click', () => {
  const startDate = document.getElementById('startDate').value;
  
  // 입력값 유효성 검증 - 날짜가 비어있는지 체크
  if (!startDate) {
    alert('연애 시작일을 입력해주세요!');
    return;
  }
  
  // 미래 날짜 입력 시 경고 메시지
  const selectedDate = new Date(startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate > today) {
    alert('미래 날짜는 입력할 수 없습니다!');
    return;
  }
  
  // 기념일 계산 및 결과 표시
  const result = calculateAnniversaries(startDate);
  displayResult(result);
});


