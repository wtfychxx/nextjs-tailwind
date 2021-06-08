import create from "zustand";

export const useStoreModal = create((set) => ({
    open: false,
    dataId: "",
    tipeModalStore: "",
    showModal: (tipeModalStore, id) => set(() => ({ tipeModalStore, dataId: id, open: true })),
    hideModal: () => set(() => ({ open: false })),
}));

export const useStorePIN = create(set => ({
    pinStore: "",
    confirmPIN: false,
    changePINStore: (pin) => set(() => ({ pinStore: pin, confirmPIN: true })),
    clearPINStore: () => set(() => ({ pinStore: "", confirmPIN: false })),
}));