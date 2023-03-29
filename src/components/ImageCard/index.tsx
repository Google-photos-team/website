import CustomLink from '../CustomLink'
import Tag from '../Tag'
import { H5 } from '../Typography'
import Style from './style'

interface IProps {
    id: string,
    img: string,
    title: string,
    tags: string[],
    select?:{
        active: boolean,
        selectedItems: string[]
    },
    setSelect?:(obj:{active?:boolean,selectedItems?:string[]}) => void
}

const ImageCard = ({ id, img, tags, title, select,setSelect }: IProps) => {
    return (
        <Style>
            <CustomLink to={select?.active?"":`/image/${id}`}>
                <div className="mainImage"
                     onClick={() => {
                        if(select?.active && !select.selectedItems.find(x => x === id) && setSelect){
                            setSelect({selectedItems:[id,...select.selectedItems]})
                        }else if(select?.active && select.selectedItems.find(x => x === id) && setSelect){
                            setSelect({selectedItems:[...select.selectedItems.filter(x => x !== id)]})
                        }
                    }}
                >
                    <img src={img} alt="" />

                    {
                        select && select.active &&
                        <label className="inputLabel" htmlFor={id} key={id}>
                            <input
                            name={title}
                            type="checkbox"
                            id={id}
                            className={select.selectedItems.find(x => x === id) ? 'checked' : ''}
                            value={select.selectedItems.find(x => x === id)}
                            />
                        </label>
                    }
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