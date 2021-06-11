import React, {useEffect, useState} from 'react'
import './SpotyPlayer.css'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'



const SpotySidebar = () => {
    return (
        <>
                <ReactJkMusicPlayer
                    state={{zIndex: 0}}
                    mode={'full'}
                    theme={'dark'}
                    showDownload={false}
                    showThemeSwitch={false}
                    showLyric={false}
                    showMediaSession={false}
                    defaultPosition={ {right:'20px', bottom:'20px'}}
                />

        </>
    )
}

export default SpotySidebar