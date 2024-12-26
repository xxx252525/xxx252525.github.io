import type { InjectionKey, Ref } from 'vue';
export type DarkModeRef = Ref<boolean>;
export declare const darkModeSymbol: InjectionKey<DarkModeRef>;
export declare function useDarkMode(): {
    isDarkMode: DarkModeRef;
    toggleMode: () => void;
};
export declare function setupDarkMode(): void;
