import '@styles/Landing.css'
import Navbar from '@components/Navbar'
import Card from '@components/Card'
import Sidebar from '@components/Sidebar'


const Landing = () => {
    return (<>
        <Navbar />
        <div className='main-a'>
            <Sidebar />
            <div className='display-a'>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    </>)
}

export default Landing