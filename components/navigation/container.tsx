import styles from '@components/navigation/navigation.module.scss';
import {FC} from "react";
import {NavigationItem, NavigationItemProps} from "@components/navigation/item";

const Container: FC = () => {
    const navigationItems: NavigationItemProps[] = [{
        label: 'Home',
        routerLink: '/'
    }]
    return <header className={styles.navigation}>
        {navigationItems.map(item => (<NavigationItem label={item.label} routerLink={item.routerLink} key={item.label} />))}
    </header>
}

export { Container as NavigationContainer}