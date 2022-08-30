import {Case} from "@own-types/case";

export const loadCases = async (): Promise<Case[]> => {
    return <Case[]>(await import('@data/cases.json')).default.cases;
}