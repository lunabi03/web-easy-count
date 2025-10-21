// ==================== 4대보험 계산 함수 ====================

function calculateInsurance(monthlySalary) {
  // 2025년 기준 요율
  const rates = {
    nationalPension: 0.045,      // 국민연금 4.5%
    healthInsurance: 0.03545,    // 건강보험 3.545%
    longTermCare: 0.1295,        // 장기요양 (건강보험의 12.95%)
    employmentInsurance: 0.009   // 고용보험 0.9%
  };
  
  // 각 보험료 계산 (원 단위 내림)
  const nationalPension = Math.floor(monthlySalary * rates.nationalPension);
  const healthInsurance = Math.floor(monthlySalary * rates.healthInsurance);
  const longTermCare = Math.floor(healthInsurance * rates.longTermCare);
  const employmentInsurance = Math.floor(monthlySalary * rates.employmentInsurance);
  
  return {
    nationalPension,
    healthInsurance,
    longTermCare,
    employmentInsurance,
    total: nationalPension + healthInsurance + longTermCare + employmentInsurance
  };
}

// ==================== 소득세 계산 함수 ====================

function calculateIncomeTax(monthlySalary, dependents) {
  // 2025년 간이세액표 기준
  // 부양가족 수에 따라 공제액 차이
  
  let tax = 0;
  const yearlyIncome = monthlySalary * 12;
  
  // 누진세율 적용
  if (yearlyIncome <= 14000000) {
    tax = yearlyIncome * 0.06;
  } else if (yearlyIncome <= 50000000) {
    tax = 840000 + (yearlyIncome - 14000000) * 0.15;
  } else if (yearlyIncome <= 88000000) {
    tax = 6240000 + (yearlyIncome - 50000000) * 0.24;
  } else if (yearlyIncome <= 150000000) {
    tax = 15360000 + (yearlyIncome - 88000000) * 0.35;
  } else {
    tax = 37060000 + (yearlyIncome - 150000000) * 0.38;
  }
  
  // 부양가족 공제 (간소화)
  const deduction = (dependents - 1) * 150000 * 12;
  tax = Math.max(0, tax - deduction);
  
  const monthlyTax = Math.floor(tax / 12);
  const localTax = Math.floor(monthlyTax * 0.1); // 지방소득세 10%
  
  return {
    incomeTax: monthlyTax,
    localTax: localTax,
    total: monthlyTax + localTax
  };
}

// ==================== 전체 계산 함수 ====================

function calculateNetSalary(annualSalary, dependents) {
  const monthlySalary = Math.floor(annualSalary / 12);
  
  // 4대보험 계산
  const insurance = calculateInsurance(monthlySalary);
  
  // 소득세 계산
  const tax = calculateIncomeTax(monthlySalary, dependents);
  
  // 총 공제액
  const totalDeduction = insurance.total + tax.total;
  
  // 실수령액
  const netSalary = monthlySalary - totalDeduction;
  
  return {
    monthlySalary,
    insurance,
    tax,
    totalDeduction,
    netSalary,
    annualNet: netSalary * 12
  };
}

// ==================== 숫자 포맷팅 함수 ====================

function formatNumber(num) {
  return num.toLocaleString('ko-KR');
}

// ==================== 결과 표시 함수 ====================

function displayResult(result) {
  const resultDiv = document.getElementById('result');
  
  resultDiv.innerHTML = `
    <div class="result-container">
      <h3>📊 계산 결과</h3>
      
      <div class="summary">
        <div class="summary-item">
          <span class="label">월 세전 급여</span>
          <span class="value">${formatNumber(result.monthlySalary)}원</span>
        </div>
      </div>
      
      <div class="deductions">
        <h4>───── 공제 내역 ─────</h4>
        <table>
          <thead>
            <tr>
              <th>항목</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>국민연금 (4.5%)</td>
              <td>${formatNumber(result.insurance.nationalPension)}원</td>
            </tr>
            <tr>
              <td>건강보험 (3.545%)</td>
              <td>${formatNumber(result.insurance.healthInsurance)}원</td>
            </tr>
            <tr>
              <td>장기요양보험</td>
              <td>${formatNumber(result.insurance.longTermCare)}원</td>
            </tr>
            <tr>
              <td>고용보험 (0.9%)</td>
              <td>${formatNumber(result.insurance.employmentInsurance)}원</td>
            </tr>
            <tr>
              <td>소득세</td>
              <td>${formatNumber(result.tax.incomeTax)}원</td>
            </tr>
            <tr>
              <td>지방소득세</td>
              <td>${formatNumber(result.tax.localTax)}원</td>
            </tr>
            <tr class="total-row">
              <td><strong>총 공제액</strong></td>
              <td><strong>${formatNumber(result.totalDeduction)}원</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="net-salary">
        <div class="net-item monthly">
          <span class="label">💰 월 실수령액</span>
          <span class="amount">${formatNumber(result.netSalary)}원</span>
        </div>
        <div class="net-item yearly">
          <span class="label">💵 연 실수령액</span>
          <span class="amount">${formatNumber(result.annualNet)}원</span>
        </div>
      </div>
      
      <div class="info">
        <p>※ 2025년 기준 간이세액표 적용</p>
        <p>※ 실제 금액과 다소 차이가 있을 수 있습니다</p>
      </div>
    </div>
  `;
}

// ==================== 이벤트 리스너 ====================

document.getElementById('calculateBtn').addEventListener('click', () => {
  const annualSalary = parseInt(document.getElementById('annualSalary').value);
  const dependents = parseInt(document.getElementById('dependents').value);
  
  // 입력값 검증
  if (!annualSalary || annualSalary <= 0) {
    alert('연봉을 올바르게 입력해주세요!');
    return;
  }
  
  if (!dependents || dependents < 1) {
    alert('부양가족 수는 최소 1명(본인)입니다!');
    return;
  }
  
  // 계산 및 결과 표시
  const result = calculateNetSalary(annualSalary, dependents);
  displayResult(result);
});


