import {useState} from 'react';
import styles from './index.scss';
import Menu from './menu';
function BasicLayout(props) {
    const [menuDisplay, setMenuDisplay] = useState(false);
    return (
        <div >
            <div className={styles.head}>
                100ARTS
                <span className={styles.icon} onClick={()=>{setMenuDisplay(true)}}>
                    123
                </span>
            </div>
            <h1 className={styles.title}>Yay! Welcome</h1>
            { props.children }
            {
                menuDisplay&&<Menu />
            }
        </div>
    );
}

export default BasicLayout;
