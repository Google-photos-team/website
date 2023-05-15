import CustomLink from '../CustomLink'
import Tag from '../Tag'
import { H5 } from '../Typography'
import Style from './style'

interface IProps {
    _id: string,
    name: string, // image_name
    image: string, // base64 image
    tags: string[],
    select?: {
        active: boolean,
        selectedItems: string[]
    },
    setSelect?: (obj: { active?: boolean, selectedItems?: string[] }) => void
}


const ImageCard = ({ _id, name, image, tags, select, setSelect }: IProps) => {
    return (
        <Style>
            <CustomLink to={select?.active ? "" : `/image/${_id}`}>
                <div className="mainImage"
                    onClick={() => {
                        if (select?.active && !select.selectedItems.find(x => x === _id) && setSelect) {
                            setSelect({ selectedItems: [_id, ...select.selectedItems] })
                        } else if (select?.active && select.selectedItems.find(x => x === _id) && setSelect) {
                            setSelect({ selectedItems: [...select.selectedItems.filter(x => x !== _id)] })
                        }
                    }}
                >
                    <img src={image} alt="" />

                    {
                        select && select.active &&
                        <label className="inputLabel" htmlFor={_id} key={_id}>
                            <input
                                name={name}
                                type="checkbox"
                                id={_id}
                                className={select.selectedItems.find(x => x === _id) ? 'checked' : ''}
                                value={select.selectedItems.find(x => x === _id)}
                            />
                        </label>
                    }
                </div>
            </CustomLink>
            <CustomLink to={`/image/${_id}`}>
                <H5 transform='capitalize'>{name}</H5>
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