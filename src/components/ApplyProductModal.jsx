import { Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";

export function ApplyProductModal({
  handleSelections,
  setSelection,
  onClose,
  open,
}) {
  const handleSelection = (resources) => {
    onClose();
    setSelection(resources.selection.map((product) => product.id));
  };
  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: "Select products",
          onAction: () => setOpen(true),
        }}
      />
      <ResourcePicker // Resource picker component
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources) => handleSelections(resources)}
        onCancel={() => onClose()}
      />
    </Page>
  );
}
