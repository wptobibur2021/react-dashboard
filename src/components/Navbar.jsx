import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from './index'
import { useStateContext } from '../context/ContextProvider'
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{ background: dotColor }} className="absolute inline-flex text-3xl rounded-full h-2 w-2 right-2 top-2">
                {icon}
            </span>
        </button>
    </TooltipComponent>
)
const Navbar = () => {
    const { setActiveMenu, checked, handleClick, screenSize, setScreenSize } = useStateContext()
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    })
    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])
    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} />
            <div className="flex">
                <NavButton
                    title="Cart"
                    color="blue"
                    icon={<FiShoppingCart />}
                    customFunc={() => handleClick('Cart')}
                />
                <NavButton
                    title="Chat"
                    color="blue"
                    icon={<BsChatLeft />}
                    customFunc={() => handleClick('Chat')}
                    dotColor="#03C9D7"
                />
                <NavButton
                    title="Notification"
                    color="blue"
                    icon={<RiNotification3Line />}
                    customFunc={() => handleClick('Notification')}
                    dotColor="#03C9D7"
                />
                <TooltipComponent
                    content="Profile"
                    position='BottomCenter'
                >
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
                        <img onClick={() => handleClick('userProfile')} className="rounded-full w-8 h-8" src={avatar} alt="Avatar" />
                        <p>
                            <span>Hi, </span>
                            <span className="text-gray-400 font-bold ml-1 text-14">Tobibur</span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14" />
                    </div>
                </TooltipComponent>
                {checked.chat && <Chat />}
                {checked.cart && <Cart />}
                {checked.userProfile && <UserProfile />}
                {checked.notification && <Notification />}
            </div>
        </div>
    )
}

export default Navbar