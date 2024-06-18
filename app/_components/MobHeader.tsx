import {FiHeart, FiHome, FiUser} from "react-icons/fi";
import {HiBars3, HiEnvelope} from "react-icons/hi2";

export const MobHeader = () => {
    return (
        // <div className="">
            <nav className="min-[900px]:hidden z-[1000] text-foreground fixed bottom-0 left-[50%] right-0 py-2 px-4 bg-white/5 backdrop-blur rounded-lg  w-full border border-border  -translate-x-[50%] max-w-[500px]">
                <div className="flex justify-between text-[28px] py-2 space-x-4">
                    <FiHome/>
                    <FiUser/>
                    <HiEnvelope/>
                    <HiBars3/>
                </div>
            </nav>
        // </div>
    )
}