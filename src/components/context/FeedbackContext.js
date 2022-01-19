import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			rating: 7,
			text: 'This is feedback item one',
		},
		{
			id: 2,
			rating: 10,
			text: 'This is feedback item two',
		},
		{
			id: 3,
			rating: 5,
			text: 'This is feedback item three',
		},
	])

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})
	function handleDelete(id) {
		if (window.confirm('Are you sure?')) {
			setFeedback(feedback.filter((feed) => feed.id !== id))
		}
	}

    function updateFeedback(id, updItem) {
        setFeedback(feedback.map((item) => 
            (item.id === id ? { ...item, ...updItem } : item)
        ))
        
    }
	function addFeedback(newItem) {
		newItem.id = uuidv4()
		setFeedback([newItem, ...feedback])
	}

	function editFeedback(item) {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				handleDelete,
				addFeedback,
				editFeedback,
				updateFeedback,
				feedbackEdit,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
