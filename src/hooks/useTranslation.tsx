import { useTranslation as useI18nextTranslation } from 'react-i18next';

export function useTranslation() {
    const { t, ...rest } = useI18nextTranslation();

    return { t, ...rest };
}