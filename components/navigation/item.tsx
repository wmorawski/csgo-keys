import {FC} from "react";
import Link from "next/link";

export type NavigationItemProps = {
    label: string;
    tooltip?: string;
    routerLink: string;
}

const Item: FC<NavigationItemProps> = (item) => {
    return (<Link href={item.routerLink} soft={true}><a>{item.label}</a></Link>);
}

export {Item as NavigationItem};