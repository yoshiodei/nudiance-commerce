import React from 'react'
import MobileChatScreen from './components/MobileChatScreen'
import LargeChatScreen from './components/LargeChatScreen'

export default function Messages() {
  return (
        <div className="w-full flex justify-center">
          <div className="sm:block hidden">
            <div>
              <LargeChatScreen />  
            </div>
          </div>
          <div className="sm:hidden block">
            <MobileChatScreen />
          </div>
        </div>
  )
}
