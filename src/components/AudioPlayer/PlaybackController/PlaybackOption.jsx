import classNames from 'classnames'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { RootContext } from '../../../context/RootContext'
import DotsIcon from '../../icons/DotsIcon'
import DownloadIcon from '../../icons/DownloadIcon'
import ViewListsIcon from '../../icons/ViewListsIcon'
import XIcons from '../../icons/XIcons'
import { ButtonSmall } from './PlaybackController'

const PlaybackOption = ({onClickReset}) => {
    const { audioId, setAudioId } = useContext(RootContext)

    const [isHidden, setHidden] = useState(true)

    return (
        <>
            <ButtonSmall onClick={() => setHidden(!isHidden)} className="relative">
                <DotsIcon  className="h-6 transform rotate-90"/>
            </ButtonSmall>
            <div className={
                    classNames(
                        'p-2 dark:bg-slate-500 bg-white dark:text-slate-100 shadow-lg rounded-md w-52 absolute bottom-14 right-0 translate-x-9 transform transition-all',
                        {"opacity-0 invisible translate-y-7": isHidden},
                        {"opacity-100 visible translate-y-0": !isHidden},
                    )}>
                <div className='py-1 px-1 hover:bg-emerald-500 flex items-center rounded cursor-pointer'>
                    <ViewListsIcon className="h-5 mr-2"/>
                    <span>Pilih Qari</span>
                </div>
                <Link download={true} target="_blank" href={`https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${audioId}.mp3`}>
                    <a>
                        <div className='py-1 px-1 hover:bg-emerald-500 flex items-center rounded cursor-pointer'>
                            <DownloadIcon className="h-5 mr-2"/>
                            <span>Unduh file Audio</span>
                        </div>
                    </a>
                </Link>
                <div  
                    className='py-1 px-1 hover:bg-emerald-500 flex items-center rounded cursor-pointer'
                    onClick={onClickReset}
                >
                    <XIcons className="h-5 mr-2"/>
                    <span>Tutup Pemutar Audio</span>
                </div>  
            </div>
        </>
    )
}

export default PlaybackOption