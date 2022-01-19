import { useContext } from "react"
import FeedbackContext from "./context/FeedbackContext"
import FeedbackItem from "./FeedbackItem"

const FeedbackList = () => {
    
    const { feedback} = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback to display</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map(feed =>  (
                <FeedbackItem key={feed.id} item={feed} />
            ))}
        </div>
    )
}



export default FeedbackList
