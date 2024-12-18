const {VITE_STRAPI_API, VITE_STRAPI_ROOT, VITE_STRAPI_TOKEN} = import.meta.env;

export function strapiQuery(url: string) {
    return fetch(`${VITE_STRAPI_API}/${url}`, {
        headers: {
            Authorization: `Bearer ${VITE_STRAPI_TOKEN}`,
        }
    }).then(res => res.json());
}

export function getStrapiURL(): string {
    return `${VITE_STRAPI_ROOT}`;
}