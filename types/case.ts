export interface Case {
    name: string;
    items: CaseItem[];
    price: number;
    image: string;
}

export enum CaseItemRarityKind {
    Rare = 'rare',
    Mythical = 'mythical',
    Legendary = 'legendary',
    Ancient = 'ancient',
    ExceedinglyRare = 'exceedinglyRare'
}

export interface CaseItemRarity {
    kind: CaseItemRarityKind;
    rate: number;
}

export interface CaseItem {
    weapon: string;
    model: string;
    value: number;
    rarity: CaseItemRarity;
    image: string;
}