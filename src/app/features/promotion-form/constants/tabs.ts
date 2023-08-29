import { TabsEnum } from "../enum/tabs.enum";

export interface Tab {
    id: string;
    text: string;
    defaultDisabled: boolean;
}

export const Tabs: Tab[]= [
    {
      id: TabsEnum.DEFINITION,
      text: 'DEFINITION',
      defaultDisabled: false,
    },
    {
      id: TabsEnum.CHOOSE_PRODUCT,
      text: 'CHOOSE PRODUCT',
      defaultDisabled: true,
    },
    {
      id: TabsEnum.EXCLUDE_PRODUCT,
      text: 'EXCLUDE PRODUCT',
      defaultDisabled: true,
    },
    {
      id: TabsEnum.BONUS_PRODUCTS,
      text: 'BONUS PRODUCTS',
      defaultDisabled: true,
    },
    {
      id: TabsEnum.PRODUCT_LIMITS,
      text: 'PRODUCT LIMITS',
      defaultDisabled: true,
    },
    {
      id: TabsEnum.CHOOSE_CLIENTS,
      text: 'CHOOSE CLIENTS',
      defaultDisabled: true,
    },
    {
      id: TabsEnum.EXCLUDE_CLIENTS,
      text: 'EXCLUDE CLIENTS',
      defaultDisabled: true,
    },
    {
      id: TabsEnum.CLIENTS_LIMIT,
      text: 'CLIENTS LIMIT',
      defaultDisabled: true,
    },
    {
      id: TabsEnum.SUMMARY,
      text: 'SUMMARY',
      defaultDisabled: true,
    },
  ]