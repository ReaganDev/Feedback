import { useContext, useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import Rating from './Rating'
import FeedbackContext from './context/FeedbackContext'

const FeedbackForm = ({ handleAdd }) => {
	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext)
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [isDisabled, setIsDisabled] = useState(true)
	const [message, setMessage] = useState('')

	useEffect(() => {
		if (feedbackEdit.edit) {
			setRating(feedbackEdit.item.rating)
			setText(feedbackEdit.item.text)
			setIsDisabled(false)
		}
	}, [feedbackEdit])
	function handleTextChange(e) {
		if (text === null) {
			setIsDisabled(true)
			setMessage('')
		} else if (text !== null && text.trim().length < 10) {
			setIsDisabled(true)
			setMessage('Text must be at least 10 characters')
		} else {
			setIsDisabled(false)
			setMessage('')
		}
		setText(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newItem = {
				text,
				rating,
			}
			if (feedbackEdit.edit) {
				updateFeedback(feedbackEdit.item.id, newItem)
			} else {
				addFeedback(newItem)
			}
		}
		setText('')
	}
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>Rate our service</h2>
				<Rating select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button isDisabled={isDisabled} type='submit'>
						Submit
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
