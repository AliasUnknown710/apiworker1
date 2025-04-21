export default {
    async fetch(request: Request): Promise<Response> {
        const url = new URL(request.url);

        // Forward API requests to HelioHost
        if (url.pathname.startsWith("/api")) {
            const backendUrl = `https://api.infosecbyalex.xyz${url.pathname}`;
            return fetch(backendUrl, request);
        }

        // Default response for non-API requests
        return new Response("Not Found", { status: 404 });
    }
};
