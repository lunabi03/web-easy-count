// ==================== 공통 함수 ====================

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
  today.setHours(0, 0, 0, 0);
  
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  
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

// ==================== 커플 기념일 계산기 ====================

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

// 커플 기념일 결과 표시 함수
function displayCoupleResult(result) {
  const resultDiv = document.getElementById('coupleResult');
  resultDiv.innerHTML = `
    <div class="result-box">
      <h3>💕 우리의 기념일</h3>
      <p>💯 100일: ${formatDate(result.day100)} (${getDday(result.day100)})</p>
      <p>💯 200일: ${formatDate(result.day200)} (${getDday(result.day200)})</p>
      <p>🎉 500일: ${formatDate(result.day500)} (${getDday(result.day500)})</p>
      <p>🎊 1000일: ${formatDate(result.day1000)} (${getDday(result.day1000)})</p>
    </div>
  `;
}

// 커플 계산기 버튼 클릭 이벤트 리스너
document.getElementById('coupleBtn').addEventListener('click', () => {
  const startDate = document.getElementById('coupleStartDate').value;
  
  // 입력값 유효성 검증
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
  displayCoupleResult(result);
});

// ==================== 살아온 날 계산기 ====================

// 살아온 날 계산 함수
function calculateLivedDays(birthday) {
  const birth = new Date(birthday);
  const today = new Date();
  
  // 밀리초 차이 계산
  const diff = today - birth;
  
  // 일수 계산
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  // 주수 계산
  const weeks = Math.floor(days / 7);
  
  // 개월수 계산 (대략)
  const months = Math.floor(days / 30.44);
  
  // 년수 계산
  const years = Math.floor(days / 365.25);
  
  // 다음 생일까지 남은 일수
  const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  const daysToNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  
  return { days, weeks, months, years, daysToNextBirthday };
}

// 살아온 날 결과 표시 함수
function displayLivedDays(result) {
  const resultDiv = document.getElementById('livedResult');
  resultDiv.innerHTML = `
    <div class="result-box">
      <h3>🎂 당신은 지금까지...</h3>
      <p class="stat">📅 총 <strong>${result.days.toLocaleString()}일</strong>을 살았습니다</p>
      <p class="stat">📆 약 <strong>${result.weeks.toLocaleString()}주</strong>를 살았습니다</p>
      <p class="stat">🗓️ 약 <strong>${result.months}개월</strong>을 살았습니다</p>
      <p class="stat">🎉 약 <strong>${result.years}년</strong>을 살았습니다</p>
      <p class="next-birthday">다음 생일까지 ${result.daysToNextBirthday}일 남았습니다!</p>
    </div>
  `;
}

// 살아온 날 계산기 버튼 클릭 이벤트 리스너
document.getElementById('livedBtn').addEventListener('click', () => {
  const birthday = document.getElementById('birthday').value;
  
  // 입력값 유효성 검증
  if (!birthday) {
    alert('생년월일을 입력해주세요!');
    return;
  }
  
  // 미래 날짜 입력 시 경고 메시지
  const birthDate = new Date(birthday);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (birthDate > today) {
    alert('미래 날짜는 입력할 수 없습니다!');
    return;
  }
  
  // 살아온 날 계산 및 결과 표시
  const result = calculateLivedDays(birthday);
  displayLivedDays(result);
});


