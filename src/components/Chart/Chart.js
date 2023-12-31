import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  //1년치 지출 총액이 필요하다 ( 그래야 비율을 설정 할 수 있으니까 ! )
  const dataPointValues = dataPoints.map((dp) => dp.value); // 지출액들만 월별로 추출.

  // 1년치 총액
  // a : 리턴결과에 대한 누적값, b: 배열에서 하나씩 꺼낸 값
  // a+b 반복해서 요소를 줄이겠다
  // 0 : 초기 index 0번부터 돌리겠다 ~
  // 배열의 첫번째 값부터 돌릴려면 0부터 줘여함
  const totalValue = dataPointValues.reduce((a, b) => a + b, 0);

  // 그 중에서 제일 지출이 높은 값
  //const maximiValue = Math.max(...dataPointValues);
  //console.log('maximum', maximiValue);

  return (
    <div className='chart'>
      {dataPoints.map(({ label, value }) => {
        console.log(value);
        return (
          <ChartBar
            key={label}
            label={label}
            currentValue={value}
            maxValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;

/*
  1년치 총액
  a : 리턴결과에 대한 누적값, b: 배열에서 하나씩 꺼낸 값
  const totalValue = dataPointValues.reduce((a, b) => {
  console.log(`a: ${a}, b: ${b}`);
  return a + b;
  }, 0);

  // 0: 초기값
  배열 내부의 값을 하나씩 줄여가면서 최종적으로 도출
  reduce 함수
  */
