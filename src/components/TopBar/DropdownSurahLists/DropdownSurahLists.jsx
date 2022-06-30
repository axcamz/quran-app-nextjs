import classNames from 'classnames'
import React, { useState } from 'react'
import ArrowIcon from '../../icons/ArrowIcon'
import ChevronIcon from '../../icons/chevron'
import ChapterLists from './ChapterLists'
import IconWrapper from '../../icons/IconWrapper'
import IndexOfChapterLists from './IndexOfChapterLists'
import Link from 'next/link'

const DropdownSurahLists = ({chapterLists, chapterActive}) => {
    const [open, setOpen] = useState(false)

    if (chapterLists){
        return (   
            <div>
                <div className='flex items-center gap-3'>
                    <Link href="/">
                        <a>
                            <IconWrapper onHover='none' className="bg-emerald-400 text-white p-2">
                                <ArrowIcon className="h-5 w-5"/>
                            </IconWrapper>
                        </a>
                    </Link>
                    {/* Dropdown Toggle */}
                    <div 
                    onClick={() => setOpen(!open)}
                    className={classNames("p-2 cursor-pointer border border-transparent bg-white w-fit rounded-md  flex items-center relative", {"border-emerald-500 shadow-lg shadow-emerald-500/10": open})}>
                        <span className="font-bold text-sm text-emerald-500">{chapterLists[parseInt(chapterActive)-1].name_simple}</span>
                        <ChevronIcon className={classNames("h-5 ml-2 transition-all text-emerald-500 transform", {"rotate-180": open})}/>
                    </div>
                </div>
                {/* Dropdown Menu */}
                <div
                    className={classNames(
                    "absolute z-50 transition-all flex bg-white rounded-md shadow-lg shadow-emerald-700/20",
                    {"visible top-[70px] opacity-100" : open},
                    {"invisible opacity-0 top-[50px]" : !open}
                    )
                }
                >
                    <ChapterLists chapterLists={chapterLists}/>
                    <IndexOfChapterLists chapterLists={chapterLists} chapterId={chapterActive}/>
                </div>
            </div>      
        )

    }
}

export default DropdownSurahLists