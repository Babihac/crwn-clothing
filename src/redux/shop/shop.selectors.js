import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shop_data
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  (shop) => (shop ? Object.keys(shop).map((key) => shop[key]) : [])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (shop) =>
    shop ? shop[collectionUrlParam] : null
  );
