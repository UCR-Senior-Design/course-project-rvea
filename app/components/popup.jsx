'use client'
import styles from "../styles/Popup.module.css"

export default function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.container}>
            <div className={styles.popup}>
                <img className={styles.img} onClick={() => { props.setTrigger(false); document.body.style.overflow = "unset" }} src="/exit_icon.png" width="30" height="30"></img>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    ) : <></>;
}