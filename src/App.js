import { FeedbackProvider } from './components/context/FeedbackContext'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'

const App = () => {
		
	return (
		<FeedbackProvider>
			<>
				<Header />
				<div className='container'>
					<FeedbackForm />
					<FeedbackStats />
					<FeedbackList/>
				</div>
			</>
		</FeedbackProvider>
	)
}

export default App
