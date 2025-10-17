import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from "react";

type BottomSheetContextType = {
    isOpen: boolean;
    openSheet: () => void;
    closeSheet: () => void;
    toggleSheet: () => void;
    hideTabBar: () => void;
    showTabBar: () => void;
    isTabHidden: boolean;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
    undefined
);

export const BottomSheetProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTabHidden, setIsTabHidden] = useState(false);

    const openSheet = useCallback(() => setIsOpen(true), []);
    const closeSheet = useCallback(() => setIsOpen(false), []);
    const toggleSheet = useCallback(() => setIsOpen((prev) => !prev), []);

    const hideTabBar = useCallback(() => setIsTabHidden(true), []);
    const showTabBar = useCallback(() => setIsTabHidden(false), []);

    return (
        <BottomSheetContext.Provider
            value={{
                isOpen,
                openSheet,
                closeSheet,
                toggleSheet,
                hideTabBar,
                showTabBar,
                isTabHidden,
            }}
        >
            {children}
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheet = (): BottomSheetContextType => {
    const context = useContext(BottomSheetContext);
    if (!context) {
        throw new Error("useBottomSheet must be used within a BottomSheetProvider");
    }
    return context;
};
