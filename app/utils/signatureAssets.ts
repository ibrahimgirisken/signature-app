import { SignatureAssetItem } from "../_lib/signatures/types";

export const mapAssetsByType = (
  items: SignatureAssetItem[] 
): Record<string, SignatureAssetItem> => {
  return items.reduce((acc, item) => {
    if (item.isActive) {
      acc[item.type] = item;
    }
    return acc;
  }, {} as Record<string, SignatureAssetItem>);
};
