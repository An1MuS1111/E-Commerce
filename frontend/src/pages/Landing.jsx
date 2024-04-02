import '@styles/Landing.css'

import Card from '@components/Card'
import Sidebar from '@components/Sidebar'


const Landing = () => {
    return (<>
        <div className='main'>
            <Sidebar />
            <div className='display'>

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