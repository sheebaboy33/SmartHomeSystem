import s from "./header.module.css";

function Header() {
    return (
        <div className={s.header}>
            <div>
                <h1 className={s.header_heading}>Hello, Sharm!</h1>
                <p className={s.header_tagline}>Your devices are under control.</p>
            </div>
            <div>
                <img src={"https://avatars.githubusercontent.com/u/120422796?v=4"} alt="" className={s.profile_img} />
            </div>
      </div>
    )
}
export default Header;