import React, {useEffect, useState} from 'react'

import './SpotySidebar.css'
import {
    Icon, Image, Item,
    Menu,
    Sidebar,
} from 'semantic-ui-react'

const SpotySidebar = () => {
    let [visible, setVisible] = useState()

    //animation
    //make visible become true after 300ms
    useEffect(() => {
        setVisible(false)
        setTimeout(() => {
            setVisible(true)
        }, 350)
    }, [])



    return (
        <>
            <Sidebar className={'SpotySidebar'}
                     as={Menu}
                     animation='push'
                     direction='left'
                     icon='labeled'
                     inverted
                     vertical
                     visible={visible}
                     width='wide'
            >
                <Item as='a'>
                    <Image src='assets/spofystrive-logo.png' size='medium' wrapped />
                </Item>
                <Menu.Item as='a'>
                    <span><Icon name='home'/>    Home </span>
                </Menu.Item>
                <Menu.Item as='a'>
                    <span><Icon name='search'/>    Search</span>
                </Menu.Item>
                <Menu.Item as='a'>
                    <span><Icon name='book'/>    Library</span>
                </Menu.Item>
            </Sidebar>
        </>
    )
}

export default SpotySidebar