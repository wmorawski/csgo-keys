import {CaseItemRarity, CaseItemRarityKind} from "@own-types/case";

export const CaseItemRarityColor: Record< CaseItemRarityKind, string> = {
    [CaseItemRarityKind.Rare]: 'rgb(17, 85, 221)',
    [CaseItemRarityKind.Mythical]: 'rgb(136, 71, 255)',
    [CaseItemRarityKind.Legendary]: 'rgb(211, 44, 230)',
    [CaseItemRarityKind.Ancient]: 'rgb(235, 75, 75)',
    [CaseItemRarityKind.ExceedinglyRare]: 'rgb(202, 171, 5)'
}