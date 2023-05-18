import React, { useEffect, useMemo, useState } from 'react'
import Style from './style'
import { useLocation } from 'react-router'
import { H4, H5, Span } from '../../components/Typography'
import ImageCard from '../../components/ImageCard'
import { searchInImages } from '../../api/ImagesAPI'
import Loading from '../../components/Loading'
import { toast } from 'react-toastify'

const Search = () => {
    const { search } = useLocation();
    const searchValue = useMemo(() => decodeURI(search.split("=")[1]), [search])
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        searchInImages(searchValue)
            .then((images) => {
                setImages(images);
            }).catch((error) => {
                toast.error(error.message)
            }).finally(() => {
                setIsLoading(false);
            })
    }, [searchValue]);

    return (
        <Style className='containerWidth'>
            <H5 margin='0 0 1rem 0'>Search results for:
                <Span weight={600} color='lightBlue'> "{searchValue}"</Span>
            </H5>
            <div className="results_block">
                {isLoading ? <Loading /> : <>
                    {images.length > 0 ?
                        images.map((item) => <ImageCard {...item} />)
                        : <H4>your search query <Span color='lightBlue'>"{searchValue}"</Span> didn't match any image in you images storage</H4>
                    }
                </>
                }
            </div>
        </Style>
    )
}

export default Search