import CounterLayout from "../components/CounterLayout";
import Footer from "../components/Footer";
import '../styles/index.scss'

function Counter() {
    return (
        <div className="bg-teal-900 text-white text-center min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-7xl pt-12 text-white">Counter App</h2>
            <CounterLayout />
            <Footer />
        </div>
    )
}

export default Counter;