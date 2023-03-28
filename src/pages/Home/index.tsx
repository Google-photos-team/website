import {useState} from 'react'
import Style from './style'
import data from "../../mock/folders.json"
import FolderImg from "../../assets/FolderImg.svg"
import AddIcon from "../../assets/AddIcon.svg"
import Modal from '../../components/Modal'
import AddFolder from '../../modals/AddFolder'
import CustomLink from '../../components/CustomLink'
import Operations from '../../components/Operations'

interface stateProps{
    active: boolean,
    selectedItems: string[]
}

const Home = () => {
    const [addFileModal,setAddFileModal] = useState(false);

    const [select,setSelects] = useState<stateProps>({
        active: false,
        selectedItems:[],
    });

    const setSelect = (obj:{active?:boolean,selectedItems?:string[]}) => setSelects(prev => ({...prev,...obj}))
    return (
        <>
            <Operations data={data} select={select} setSelect={setSelect} hideDelete />
            <Style className='containerWidth'>
                <div className="addFolder" onClick={() => setAddFileModal(true)}>
                    <img src={AddIcon} alt="" />
                </div>
                {data.map(item => (
                    <CustomLink key={item.id} to={select.active?"":`/folder/${item.id}`}>
                        <div className="folder"
                            onClick={() => {
                                if(select.active && !select.selectedItems.find(x => x === item.id)){
                                    setSelect({selectedItems:[item.id,...select.selectedItems]})
                                }else if(select.active && select.selectedItems.find(x => x === item.id)){
                                    setSelect({selectedItems:[...select.selectedItems.filter(x => x !== item.id)]})
                                }
                            }}
                        >
                            <img src={FolderImg} alt="" />
                            {item.name}

                            {
                                select.active &&
                                <label className="inputLabel" htmlFor={item.id} key={item.id}>
                                    <input
                                    name={item.name}
                                    type="checkbox"
                                    id={item.id}
                                    className={select.selectedItems.find(x => x === item.id) ? 'checked' : ''}
                                    value={select.selectedItems.find(x => x === item.id)}
                                    />
                                </label>
                            }
                        </div>
                    </CustomLink>
                ))}
            </Style>
            <Modal
                close={() => setAddFileModal(false)}
                isOpen={addFileModal}
                Content={AddFolder}
            />
        </>
    )
}

export default Home