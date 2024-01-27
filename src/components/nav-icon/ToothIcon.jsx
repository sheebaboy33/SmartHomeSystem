import  s  from './nav-icon.module.css'
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

function ToothIcon() {
    return (
      <div className={`${s.container}`}>
        <Cog6ToothIcon width={30} height={30} />
      </div>
    );
}
export default ToothIcon;