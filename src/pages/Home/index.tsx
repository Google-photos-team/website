import {useState, useEffect} from 'react'
import Style from './style'
import FolderImg from "../../assets/FolderImg.svg"
import AddIcon from "../../assets/AddIcon.svg"
import Modal from '../../components/Modal'
import AddFolder from '../../modals/AddFolder'
import CustomLink from '../../components/CustomLink'
import Operations from '../../components/Operations'
import { deleteFolders, getFolders } from '../../api/FoldersAPI'

interface stateProps{
    active: boolean,
    selectedItems: string[]
}

const Home = () => {
    const [data,setData] = useState<{_id:string,name:string}[]>([]);
    const [addFileModal,setAddFileModal] = useState(false);

    const [select,setSelects] = useState<stateProps>({
        active: false,
        selectedItems:[],
    });

    const setSelect = (obj:{active?:boolean,selectedItems?:string[]}) => setSelects(prev => ({...prev,...obj}))

    useEffect(() => {
        getFolders().then((folders) => setData(folders))
      return () => {}
    }, [])

    const handleDelete = async () => {
        await deleteFolders({ids:select.selectedItems}).then(() => {
            setData(prev => [...prev.filter(item => !select.selectedItems.find(x => x === item._id))])
        })
        setSelect({active:false,selectedItems:[]})
    }
    
    return (
        <>
            <Operations data={data} select={select} setSelect={setSelect} handleDelete={handleDelete} hideMove />
            <Style className='containerWidth'>
                <div className="addFolder" onClick={() => setAddFileModal(true)}>
                    <img src={AddIcon} alt="" />
                </div>
                {data.map(item => (
                    <CustomLink key={item._id} to={select.active?"":`/folder/${item._id}`}>
                        <div className="folder"
                            onClick={() => {
                                if(select.active && !select.selectedItems.find(x => x === item._id)){
                                    setSelect({selectedItems:[item._id,...select.selectedItems]})
                                }else if(select.active && select.selectedItems.find(x => x === item._id)){
                                    setSelect({selectedItems:[...select.selectedItems.filter(x => x !== item._id)]})
                                }
                            }}
                        >
                            <img src={FolderImg} alt="" />
                            {item.name}

                            {
                                select.active &&
                                <label className="inputLabel" htmlFor={item._id} key={item._id}>
                                    <input
                                    name={item.name}
                                    type="checkbox"
                                    id={item._id}
                                    className={select.selectedItems.find(x => x === item._id) ? 'checked' : ''}
                                    value={select.selectedItems.find(x => x === item._id)}
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
                handleAction={({_id,name}) => setData(prev => [...prev,{_id,name}])}
            />
        </>
    )
}

export default Home