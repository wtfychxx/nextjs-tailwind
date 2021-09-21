import create from "zustand";

export const useStoreModal = create((set) => ({
    open: false,
    dataId: "",
    tipeModalStore: "",
    showModal: (tipeModalStore, id) => set(() => ({ tipeModalStore, dataId: id, open: true })),
    hideModal: () => set(() => ({ open: false })),
}));

export const useStoreOption = create(set => ({
    dataGenre: [],
    setDataGenre: (data) => set(() => ({ dataGenre: data })),
}));