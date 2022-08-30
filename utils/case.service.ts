import {CaseItem} from "@own-types/case";

export class CaseService {
  public prepareCase(items: CaseItem[]): CaseItem[] {
    const length = 1000;
    const arr: CaseItem[] = [];
    const factor = [...new Set(items.map(i => i.rarity))].reduce((acc, curr) => acc + curr.rate, 0);

    items.forEach(item => {
      const arrOfItem = Array<CaseItem>(
        this.normalize(item.rarity.rate, length, this.findOfKind(item, items), factor - 2)
      ).fill(item);
      arr.push(...arrOfItem);
    });
    return this.shuffleArray(arr);
  }

  private normalize(val, len, ofSameKind, factor) {
    return Math.floor((len * val) / ofSameKind / factor);
  }

  private shuffleArray = (arr: CaseItem[]) =>
    arr
      .map(a => [Math.random() * a.rarity.rate + Math.random(), a])
      .sort((a: [number, CaseItem], b: [number, CaseItem]) => a[0] - b[0])
      .map((a: [number, CaseItem]) => a[1]);

  private findOfKind(item: CaseItem, items: CaseItem[]): number {
    return items.filter(i => i.rarity.kind === item.rarity.kind).length;
  }
}
