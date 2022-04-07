export const iconsConfig = {
    ICONS: {
        store: 'storefront',
        web: 'web',
        app: 'apps',
        tpv: 'contactless',
        social_media: 'group_work',
        phone: 'phone_iphone',
        marketplace: 'ballot',
    },
};

export function getIconName(str) {
    return iconsConfig.ICONS[str] || '';
}
