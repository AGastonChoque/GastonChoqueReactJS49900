import { useState, createContext, useContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'


export const NotificationContext = createContext()


export const NotificationProvider = ({ children }) => {

    const [notificationData, setNotificationData] = useState({
        text: ""
    })

    const showNotification = (text) => {
        setNotificationData({
            text
        })
    }

    useEffect(() => {
        const getNotification = () => toast(notificationData.text);
        if(notificationData.text) {
            getNotification()
        }
    })

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
                theme="dark"
            />
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}