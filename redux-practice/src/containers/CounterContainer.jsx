/* eslint-disable react-refresh/only-export-components */
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
	return (
		<Counter number={number} onIncrease={increase} onDecrease={decrease} />
	);
};

export default connect(
	(state) => ({
		number: state.counter.number,
	}),
	{
		increase,
		decrease,
	}
)(CounterContainer);

/*
// 컴포넌트를 리덕스와 연동
const mapStateToProps = (state) => ({
	number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
	increase: () => {
		dispatch(increase());
	}, 
	decrease: () => {
		dispatch(decrease());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/
