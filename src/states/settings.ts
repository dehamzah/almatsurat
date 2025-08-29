import { atomWithStorage } from "jotai/utils";

function getDefaultValueFromLocalStorage<T>(key: string, fallback: T): T {
  // Check if window and localStorage are available
  if (
    typeof window === "undefined" ||
    typeof window.localStorage === "undefined"
  ) {
    return fallback;
  }

  try {
    const value = window.localStorage.getItem(key);

    if (value == null) {
      return fallback;
    }

    if (value === "true") {
      return true as T;
    } else if (value === "false") {
      return false as T;
    }

    return value as T;
  } catch (error) {
    // Handle any localStorage access errors
    console.warn(`Error accessing localStorage for key "${key}":`, error);
    return fallback;
  }
}

const SETTING_DARK_MODE = "settingDarkMode";
const SETTING_SHOW_LATIN = "settingShowLatin";
const SETTING_SHOW_TRANSLATION = "settingShowTranslation";
const SETTING_FONT_SIZE_ARABIC = "settingFontSizeArabic";

// Provide fallback values for each setting
export const settingDarkModeAtom = atomWithStorage(
  SETTING_DARK_MODE,
  getDefaultValueFromLocalStorage<boolean>(SETTING_DARK_MODE, false)
);
export const settingShowLatinAtom = atomWithStorage(
  SETTING_SHOW_LATIN,
  getDefaultValueFromLocalStorage<boolean>(SETTING_SHOW_LATIN, false)
);
export const settingShowTranslationAtom = atomWithStorage(
  SETTING_SHOW_TRANSLATION,
  getDefaultValueFromLocalStorage<boolean>(SETTING_SHOW_TRANSLATION, true)
);
export const settingFontSizeArabicAtom = atomWithStorage(
  SETTING_FONT_SIZE_ARABIC,
  Number(
    getDefaultValueFromLocalStorage<string>(SETTING_FONT_SIZE_ARABIC, "28")
  )
);
