import {FC} from "react";
import {CaseItem} from "@own-types/case";
import styled from "styled-components";
import {CaseItemRarityColor} from "@utils/case";
import Image from "next/image";

const ItemWrapper = styled.div`
  display: inline-flex;
  width: 128px;
  height: 100%;
  margin: 0 1rem;
  filter: drop-shadow(5px 3px 0 ${props => props.color});
`


export const Item: FC<{item: CaseItem}> = ({item}) => {
    return <ItemWrapper color={CaseItemRarityColor[item.rarity.kind]}>
        <Image src={item.image} width={128} height={64}></Image>
    </ItemWrapper>
}