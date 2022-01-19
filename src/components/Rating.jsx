import { useContext, useState,useEffect } from "react"
import FeedbackContext from './context/FeedbackContext'

const Rating = ({ select }) => {
	const { feedbackEdit } = useContext(FeedbackContext)
    const [selected, setSelected] = useState(10)
    function handleChange(e) {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
	}
	useEffect(() => {
		if (feedbackEdit.edit) {
			setSelected(feedbackEdit.item.rating)
		}
	},[feedbackEdit])
	return (
		<ul className='rating'>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num1'
					value='1'
					checked={selected === 1}
				/>
				<label htmlFor='num1'>1</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num2'
					value='2'
					checked={selected === 2}
				/>
				<label htmlFor='num2'>2</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num3'
					value='3'
					checked={selected === 3}
				/>
				<label htmlFor='num3'>3</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num4'
					value='4'
					checked={selected === 4}
				/>
				<label htmlFor='num4'>4</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num5'
					value='5'
					checked={selected === 5}
				/>
				<label htmlFor='num5'>5</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num6'
					value='6'
					checked={selected === 6}
				/>
				<label htmlFor='num6'>6</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num7'
					value='7'
					checked={selected === 7}
				/>
				<label htmlFor='num7'>7</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num8'
					value='8'
					checked={selected === 8}
				/>
				<label htmlFor='num8'>8</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num9'
					value='9'
					checked={selected === 9}
				/>
				<label htmlFor='num9'>9</label>
			</li>
			<li>
				<input
					onChange={handleChange}
					type='radio'
					name='rating'
					id='num10'
					value='10'
					checked={selected === 10}
				/>
				<label htmlFor='num10'>10</label>
			</li>
		</ul>
	)
}

export default Rating
