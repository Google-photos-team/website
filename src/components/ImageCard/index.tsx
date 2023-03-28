import CustomLink from '../CustomLink'
import Tag from '../Tag'
import { H5 } from '../Typography'
import Style from './style'

interface IProps {
    id: string,
    img: string,
    title: string,
    tags: string[]
}

const ImageCard = ({ id, img, tags, title }: IProps) => {
    return (
        <Style>
            <CustomLink to={`/image/${id}`}>
                <div className="mainImage">
                    <img src={img} alt="" />
                </div>
            </CustomLink>
            <CustomLink to={`/image/${id}`}>
                <H5 transform='capitalize'>{title}</H5>
            </CustomLink>
            <div className="tags">
                {tags.map((tag, index) => (
                    <Tag className="card_tag" key={index}>#{tag}</Tag>
                ))}
            </div>
        </Style>
    )
}

export default ImageCard