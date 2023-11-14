import s from "./device-card.module.css";
import PropTypes from "prop-types";
import { PowerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function DeviceCard(props) {
    const [isOn, setIsOn] = useState(false);

    // Ternary expression
    const state = isOn ? "On" : "Off";

    const handleClick = () => {
        setIsOn(!isOn);// isOn ? setIsOn(false) : setIsOn(true);
    }

    return (
        <div className= {s.device_card}>
            <img className={s.device_card_img} src= {props.image} alt="Light " />
            <div className={s.device_card_info}>
                <div className={s.device_card_info_container}>
                    <h3 className={s.device_card_text}>{props.name}</h3>
                        <button type="button"
                            onClick={handleClick}
                            className={isOn == true ? s.device_card_icon_on  : s.device_card_icon_off}>
                            <PowerIcon width={25} height={25} />
                        </button>
                </div>
            </div>
        </div>
    )
}

export default DeviceCard;