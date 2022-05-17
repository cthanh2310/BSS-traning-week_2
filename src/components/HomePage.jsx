import { useState, useCallback } from "react";
import {
  Card,
  Page,
  Layout,
  TextContainer,
  Stack,
  Link,
  FormLayout,
  Button,
  RadioButton,
  Select,
  TextField,
  DisplayText,
} from "@shopify/polaris";

import { ProductsCard } from "./ProductsCard";
import { ApplyProductModal } from "./ApplyProductModal";

import { ProductTable } from "./ProductTable";

export function HomePage() {
  const [isShowTable, setIsShowTable] = useState(false);
  const options = [
    { label: "Enalble", value: "enable" },
    { label: "Disable", value: "disable" },
  ];
  const [selected, setSelected] = useState("enable");
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const [valuePriority, setValuePriority] = useState("0");

  const handleChangePriority = useCallback((newValue) => {
    if (Number(newValue) < 0) {
      return setValuePriority("0");
    }
    return setValuePriority(newValue);
  }, []);
  // ApplyToProducts
  const [valueApplyToProducts, setValueApplyToProducts] = useState("all");
  const [isOpenApplyProductModal, setIsOpenApplyProductModal] = useState(false);
  const [selections, setSelections] = useState([]);

  const handleChangeApplyToProducts = useCallback((_checked, newValue) => {
    setValueApplyToProducts(newValue);
  }, []);

  const handleSearchProduct = useCallback(() => {
    console.log("ok");
  });
  const handleCloseApplyProduct = useCallback(() => {
    setIsOpenApplyProductModal(false);
  }, []);

  const handleSelections = useCallback((resources) => {
    console.log("resources homepage", resources);
    handleCloseApplyProduct();
    setSelections(resources.selection.map((product) => product.id));
  }, []);
  // Custom prices
  const [valueCustomPrices, setValueCustomPrices] = useState(1);

  const handleChangeCustomPrices = useCallback(
    (_checked, newValue) => setValueCustomPrices(newValue),
    []
  );
  const [valueAmount, setValueAmount] = useState("0");
  const handleChangeAmount = useCallback((newValue) => {
    if (Number(newValue) < 0) {
      return setValueAmount("0");
    }
    return setValueAmount(newValue);
  }, []);

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section threeThird>
          <Card sectioned>
            <Layout>
              <Layout.Section threeThird>
                <TextContainer spacing="loose">
                  <DisplayText size="large">General information</DisplayText>
                  <FormLayout>
                    <TextField
                      label="Name"
                      onChange={() => {}}
                      autoComplete="Name"
                    />
                    <TextField
                      label="Priority"
                      onChange={handleChangePriority}
                      value={valuePriority}
                      type="number"
                      helpText="Please enter an integer from 0 to 99. 0 is the highest priority"
                      autoComplete="off"
                    />
                    <Select
                      label="Status"
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </FormLayout>
                </TextContainer>
              </Layout.Section>
            </Layout>
          </Card>
          <Card sectioned>
            <Layout>
              <Layout.Section threeThird>
                <TextContainer spacing="loose">
                  <DisplayText size="large">Apply to Products</DisplayText>
                  <Stack vertical>
                    <RadioButton
                      label="All products"
                      checked={valueApplyToProducts === "all"}
                      id="all"
                      name="applyToProducts"
                      onChange={handleChangeApplyToProducts}
                    />
                    <RadioButton
                      label="Specific products"
                      id="specific"
                      name="applyToProducts"
                      checked={valueApplyToProducts === "specific"}
                      onChange={handleChangeApplyToProducts}
                    />
                    {valueApplyToProducts === "specific" && (
                      <>
                        <TextField
                          label="Search product"
                          autoComplete="off"
                          onFocus={() => setIsOpenApplyProductModal(true)}
                        />
                        <ApplyProductModal
                          onClose={handleCloseApplyProduct}
                          open={isOpenApplyProductModal}
                          handleSelections={handleSelections}
                        />
                        {selections.length > 0 ? (
                          <ProductsPage productIds={selections} />
                        ) : (
                          <EmptyStatePage setSelections={setSelections} />
                        )}
                      </>
                    )}

                    <RadioButton
                      label="Products collections"
                      id="collections"
                      name="applyToProducts"
                      checked={valueApplyToProducts === "collections"}
                      onChange={handleChangeApplyToProducts}
                    />
                    <RadioButton
                      label="Products tags"
                      id="tags"
                      name="applyToProducts"
                      checked={valueApplyToProducts === "tags"}
                      onChange={handleChangeApplyToProducts}
                    />
                  </Stack>
                </TextContainer>
              </Layout.Section>
            </Layout>
          </Card>
          <Card sectioned>
            <Layout>
              <Layout.Section threeThird>
                <TextContainer spacing="loose">
                  <DisplayText size="large">Custom prices</DisplayText>
                  <Stack vertical>
                    <RadioButton
                      label="Apply a price to selected products"
                      checked={valueCustomPrices === 1}
                      name="customPrices"
                      id={1}
                      onChange={handleChangeCustomPrices}
                    />
                    <RadioButton
                      label="Decrease a fixed amount of the original prices of selected products"
                      name="customPrices"
                      checked={valueCustomPrices === 2}
                      onChange={handleChangeCustomPrices}
                      id={2}
                    />
                    <RadioButton
                      label="Decrease the original price of selected products by a percentage (%)"
                      name="customPrices"
                      checked={valueCustomPrices === 3}
                      onChange={handleChangeCustomPrices}
                      id={3}
                    />
                    <TextField
                      label="Amount"
                      onChange={handleChangeAmount}
                      value={valueAmount}
                      type="number"
                      autoComplete="off"
                    />
                  </Stack>
                </TextContainer>
              </Layout.Section>
            </Layout>
          </Card>
        </Layout.Section>
        <Layout.Section oneThird>
          <div
            style={{
              padding: "0 20px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Button
              className="buttonCustom"
              onClick={() => setIsShowTable(!isShowTable)}
            >
              Show product pricing details
            </Button>
            <div style={{ height: "239px" }}>
              {isShowTable && <ProductTable />}
            </div>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
