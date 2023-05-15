import React, { useEffect, useState } from 'react'
import { H4, Body1 } from '../../components/Typography'
import menu from '../../assets/ImagePage/menu.png'
import Styles from './style'
import Hashtags from './components/Hashtags'
import Menu from './components/Menu'
import { useParams } from 'react-router'
import { getImageById } from '../../api/ImagesAPI'
import Loading from '../../components/Loading'

const Image: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const { id: image_id } = useParams();

    const [image, setImage] = useState<Image>({
        _id: image_id || "",
        folder_id: "",
        image: "",
        name: "",
        tags: []
    });

    const setFolderId = (folder_id: string) => {
        setImage(prev => ({ ...prev, folder_id: folder_id }))
    }

    useEffect(() => {
        setIsLoading(true);
        getImageById(image_id || "")
            .then((data) => {
                setImage(data)
                setIsLoading(false);
            }).catch(error => {
                console.log(error);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        <Loading />
    }

    return (
        <Styles className='containerWidth' >
            <div className="menu" onClick={() => setIsMenuOpen(prev => !prev)} tabIndex={0}>
                <img src={menu} alt="menu" />
                {isMenuOpen && <Menu
                    setFolderId={setFolderId}
                    closeMenu={() => { setIsMenuOpen(false) }}
                    image_id={image._id}
                    folder_id={image.folder_id}
                    className='dropMenu'
                    typeOne='MOVE'
                    typeTwo='DELETE'
                />}
            </div>

            <div className='item section__padding'>

                <div className="itemImage">
                    <img src={image.image} alt={image.name} />
                </div>

                <div className="item-content">
                    <div className="item-content-title">
                        <H4
                            weight={600}
                            margin="16px 16px"
                            align="center"
                            transform="capitalize"
                        >
                            {image.name}
                        </H4>
                    </div>

                    <div className="item-content-detail">
                        <Body1
                            color='black'
                            align='start'
                            weight={400}
                            transform="capitalize"
                            margin='16px 16px'
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </Body1>
                    </div>
                    <Hashtags tags={image.tags} />
                </div>
            </div>
        </Styles>
    )
}

export default Image