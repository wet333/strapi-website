export const getApi = (path: string = ''): string => {
    const baseUrl: string = import.meta.env.API_URL || 'http://localhost:1337/api';
    return `${baseUrl}${path}`;
}

type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: any;
};

export const apiRequest = async <T>(
    url: string,
    options: RequestOptions = {}
): Promise<T> => {
    const {method = 'GET', headers = {}, body} = options;

    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(
                `API request failed with status ${response.status}: ${errorMessage}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
};