import { useState, useEffect } from "react";
import s from "./widgets.module.css";

function Widget() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const updateDate = () => {
            setDate(new Date(), 1000);
        };
        const timer = setInterval(updateDate, 1000 * 60);

        const cleanUp = () => {
            clearInterval(timer);
        }
        return cleanUp;
    }, []);


    return (
        <div>
            <h1 className={s.widget_timer}>{date.getHours() + ":" + date.getMinutes()}</h1>
            <h4 className={s.widget_date}>{date.toDateString()}</h4>
        </div>
    );
}
export default Widget;