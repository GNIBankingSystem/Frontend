import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", {
  state: () => ({
    accountInfo: null,
    firstName: null,
    lastName: null,
    selectedAccountForTransfer: null,
  }),
  actions: {
    setAccountInfo(info) {
      this.accountInfo = info;
    },
    setFirstName(name) {
      this.firstName = name;
    },
    setLastName(name) {
      this.lastName = name;
    },
    setSelectedAccountForTransfer(account) {
      console.log(account);
      this.selectedAccountForTransfer = account;
    },
  },
});
