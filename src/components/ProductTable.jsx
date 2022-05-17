import { Card, DataTable, Page } from "@shopify/polaris";

export function ProductTable() {
  const rows = [
    ["Emerald Silk Gown", "$875.00"],
    ["Mauve Cashmere Scarf", "$230.00"],
    ["Navy Merino", "$445.00"],
  ];
  return (
    <Page>
      <Card>
        <DataTable
          columnContentTypes={["text", "numeric"]}
          headings={["Product", "Price"]}
          rows={rows}
        />
      </Card>
    </Page>
  );
}
