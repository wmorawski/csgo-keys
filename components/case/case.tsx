import {FC} from "react";
import {Case} from "@own-types/case";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-top: 1rem;
`

const CaseComponent: FC<{ case: Case }> = ({case: caseProp}) => {
    return (
        <Wrapper>
            <Link href={`/case/${encodeURIComponent(caseProp.name)}`}>
                <a>
                    <Image src={caseProp.image} width={128} height={"100%"}></Image>
                </a>
            </Link>
            <Title>{caseProp.name}</Title>
        </Wrapper>
    )
}

export default CaseComponent;