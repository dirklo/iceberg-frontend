import React from 'react'
import mockMessages from '../../assets/mockMessages.png'
import './Messages.css'

export default function Messages() {
    return (
        <div className='messages'>
            <img src={mockMessages} alt="" />
        </div>
    )
}
