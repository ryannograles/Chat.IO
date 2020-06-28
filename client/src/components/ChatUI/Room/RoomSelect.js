import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import components utilities
import Input from '../../Utils/Input';
import Inputholder from '../../Utils/Inputholder';
import Button from '../../Utils/Button';
// import icons
import { BsFillChatDotsFill } from 'react-icons/bs';
// import style sheet
import './RoomSelect.scss';

const RoomSelect = () => {
    /**
     * @desc SET hook state to empty strings 
     */
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return(
        <div className="outer-container">
            <div className="card-outer-holder">
                <BsFillChatDotsFill />
                <h3 className="header-center"><span>STALK</span> Messages</h3>
                <Inputholder classnames="form-container">
                    <Input 
                        classnames='form-input'
                        type="text"
                        outerClassname="form-holder"
                        onChange={(e) => setName(e.target.value)}
                        label='Name'
                    />
                </Inputholder>
                <Inputholder classnames="form-container">
                    <Input 
                        classnames='form-input'
                        type="text"
                        outerClassname="form-holder"
                        onChange={(e) => setRoom(e.target.value)}
                        label='Room'
                    />
                </Inputholder>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
                    <Button 
                        outerClassname='button-holder'
                        type="submit"
                        classnames='form-button'
                        onClick={() => {}}
                        buttonName='Join'
                    />
                </Link>
            </div>
        </div>
    )
}

export default RoomSelect;
