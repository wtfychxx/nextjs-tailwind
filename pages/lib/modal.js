import create from "zustand";

export const useStore = create((set) => ({
    open: false,
    dataId: "",
    showModal: id => set(() => ({ dataId: id, open: true })),
    hideModal: () => set(() => ({ open: false })),
}));

export const useStorePIN = create(set => ({
    pinStore: "",
    confirmPIN: false,
    changePINStore: (pin) => set(() => ({ pinStore: pin, confirmPIN: true })),
    clearPINStore: () => set(() => ({ pinStore: "", confirmPIN: false })),
}));