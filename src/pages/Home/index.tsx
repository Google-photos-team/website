import React from 'react'
import Button from '../../components/Button'

const Home = () => {
    return (
        <div>
            <div>
                <Button margin='16px 8px' size='large'>CLICK ME</Button>
                <Button margin='16px 8px' color='secondary' size='large'>CLICK ME</Button>
            </div>
            <div>
                <Button margin='16px 8px' size='medium'>CLICK ME</Button>
                <Button margin='16px 8px' color='secondary' size='medium'>CLICK ME</Button>
            </div>
            <div>
                <Button margin='16px 8px' size='small'>CLICK ME</Button>
                <Button margin='16px 8px' color='secondary' size='small'>CLICK ME</Button>
            </div>
            <Button fullWidth>CLICK ME</Button>
        </div>
    )
}

export default Home