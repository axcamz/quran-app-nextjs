import Link from 'next/link'

const SurahInfo = ({verses_count, revelation_place, short_text, chapterId, className}) => {
    return (
        <div className={'text-left text-sm lg:text-xl transition-all ' + className}>
            <div className='mb-3'>
                <span><span className='font-bold'>Jumlah Ayah :  </span>{verses_count}</span>
                <br />
                <span className='capitalize'><span className='font-bold'>Tempat Wahyu :  </span>{revelation_place}</span>
                <br />
            </div>
            <p className='text-sm lg:text-xl'>{short_text}</p>
            <br />
            <Link href={`/surah/${chapterId}/info`}>
                <span className='text-blue-600 cursor-pointer decoration-blue-600 hover:underline absolute bottom-0'>Tampilkan lebih lengkap</span>
            </Link>
        </div>
    )
}

export default SurahInfo