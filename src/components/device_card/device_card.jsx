import s from "./device-card.module.css";
import PropTypes from "prop-types";
import { PowerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function DeviceCard(props) {
    const handleClick = () => {
        alert("Button was clicked!!!" + props.name);
    }

    return (
        <div className= {s.device_card}>
            <img className={s.device_card_img} src= {props.image} alt="Light " />
            <div className={s.device_card_info}>
                <div className={s.device_card_info_container}>
                    <h3 className={s.device_card_text}>{props.name}</h3>
                        <button type="button"
                            onMouseEnter={handleClick}
                            className={s.device_card_icon_off}>
                            <PowerIcon width={36} height={36} />
                        </button>
                </div>
            </div>
        </div>
    )
}

export default DeviceCard;