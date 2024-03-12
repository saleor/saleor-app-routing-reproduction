import { createManifestHandler } from "@saleor/app-sdk/handlers/next";
import { type AppManifest } from "@saleor/app-sdk/types";

import packageJson from "../../../package.json";

export default createManifestHandler({
  async manifestFactory(context) {
    const manifest: AppManifest = {
      name: packageJson.name,
      tokenTargetUrl: `${context.appBaseUrl}/api/register`,
      appUrl: `${context.appBaseUrl}/config`,
      permissions: [],
      id: "app.saleor.routing.bug",
      version: packageJson.version,
      requiredSaleorVersion: `>=${packageJson.saleor.schemaVersion}`,
      webhooks: [],
      extensions: [],
    };

    return manifest;
  },
});
