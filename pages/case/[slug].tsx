import {loadCases} from "@lib/load-cases";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Case} from "@own-types/case";
import styled from "styled-components";
import {createRef, useEffect, useState} from "react";
import {CaseService} from "@utils/case.service";
import {Item} from "@components/case/item";
import {CaseItemRarityColor} from "@utils/case";
import {getRandomInt} from "@utils/numbers";

const Container = styled.div`
  width: 100%;
  height: 8rem;
  margin: 2rem;
  background: rgba(0,0,0,.25);
  border: 2px inset rgba(0,0,0,0.4);
  box-shadow: inset 0px 0px 15px 0px rgba(0,0,0,0.75);
  text-wrap: none;
  position: relative;
`

const Pointer = styled.div`
  width: 2px;
  height: 136px;
  position: absolute;
  left: 50%;
  top: -6px;
  background: goldenrod;
  z-index: 100;
`

const Items = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  white-space: nowrap;
  display: inline-block;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
`

const Button = styled.div`
  padding: 1rem 1.5rem;
  border-radius: .4rem;
  background: ${CaseItemRarityColor.exceedinglyRare};
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: large;
  cursor: pointer;
`

const CasePage = ({ case: caseP }: {case: Case}) => {
    const caseService = new CaseService();
    const [preparedCase, setPreparedCase] = useState(null)
    const itemsRef = createRef<HTMLHtmlElement>()
    useEffect(() => {
        setPreparedCase(caseService.prepareCase(caseP.items));
    }, [])

    const openCase = () => {
        itemsRef.current.scrollTo({left: 160, behavior: 'smooth'})
        setPreparedCase(caseService.prepareCase(caseP.items));
        const index = Math.min(Math.floor(Math.random() * preparedCase.length) + preparedCase.length * 0.25, preparedCase.length);
        const offset = getRandomInt(-32, 32);
        itemsRef.current.scrollTo({ left: (128 + 32) * index + 64 + offset, behavior: 'smooth' });
    };

    return (<><Container>
        <Pointer>
        </Pointer>
        <Items ref={itemsRef}>
            {preparedCase ? preparedCase.map((item, index) => <Item item={item} key={item.weapon + index} />) : null}
        </Items>

    </Container>
        <Button onClick={() => openCase()}>Open</Button>
   </> )
}

export default CasePage

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: 'Dragon' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const caseP = (await loadCases()).find(casep => casep.name === context.params.slug)

    return {props:{case: caseP}}
}