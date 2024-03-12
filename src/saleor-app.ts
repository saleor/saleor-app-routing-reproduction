import { SaleorApp } from "@saleor/app-sdk/saleor-app";
import { FileAPL } from "@saleor/app-sdk/APL";

export const saleorApp = new SaleorApp({
  apl: new FileAPL(),
});
