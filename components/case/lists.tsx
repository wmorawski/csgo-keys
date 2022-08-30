import {FC, Fragment} from "react";
import {Case} from "@own-types/case";
import CaseComponent from "@components/case/case";
import {loadCases} from "@lib/load-cases";


const CaseList: FC<{cases: Case[]}> = ({cases}) => {
    return (<Fragment>{
        cases.map(caseP => <CaseComponent case={caseP} key={caseP.name} />)}
    </Fragment>)
}

export default CaseList;