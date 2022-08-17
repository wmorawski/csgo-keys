import {FC} from "react";

export type NavigationItemProps = {
    label: string;
    tooltip?: string;
    routerLink: string;
}

const Item: FC<NavigationItemProps> = (item) => {
    return (<a href={item.routerLink}>{item.label}</a>);
}

export {Item as NavigationItem};