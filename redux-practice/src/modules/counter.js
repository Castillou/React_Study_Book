// 1. Action Type 지정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. Action Type 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 3. 초기 상태 정의
const initialState = {
	number: 0,
};

// 4. Reducer 함수 정의 (state 매개변수의 default 값으로 initialState 할당)
export default function counter(state = initialState, action) {
	switch (action.type) {
		case INCREASE:
			return {
				number: state.number + 1,
			};
		case DECREASE:
			return {
				number: state.number - 1,
			};
		default:
			return state;
	}
}
