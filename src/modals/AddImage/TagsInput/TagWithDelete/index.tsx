import Style from './style'
import deleteIcon from "../../../../assets/icons/delete_white.svg"

interface IProps {
    tag: string,
    onDelete: () => void
}

const TagWithDelete = ({ tag, onDelete }: IProps) => {
    return (
        <Style>
            {tag}
            <button className="delete_button" onClick={onDelete}>
                <img src={deleteIcon} alt="delete_button_image" />
            </button>
        </Style>
    )
}

export default TagWithDelete