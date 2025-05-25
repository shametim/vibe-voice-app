import { serve } from "bun";
import index from "./index.html";

serve({
    port: 80,
    routes: {
        "/health": new Response("ok"),
        "/": index,
    },
    development: true,
    fetch(req) {
        const url = new URL(req.url);

        // Handle OPTIONS for /run (preflight)
        if (url.pathname === "/run" && req.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        // Handle /run endpoint
        if (url.pathname === "/run") {
            const instruction = url.searchParams.get("instruction");

            // Validate instruction parameter
            if (!instruction) {
                return new Response(JSON.stringify({ error: "Missing instruction parameter" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                });
            }

            // Proxy to FastAPI service
            return fetch("http://localhost:8000/run", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ instruction }),
            }).then(res => {
                // Forward response from FastAPI
                const headers = {};
                for (const [key, value] of res.headers.entries()) {
                    headers[key] = value;
                }

                return res.json().then(json => {
                    return new Response(JSON.stringify(json), {
                        status: res.status,
                        headers: {
                            ...headers,
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                        },
                    });
                }).catch(err => {
                    return new Response(JSON.stringify({ error: "Failed to parse response from FastAPI" }), {
                        status: 500,
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                        },
                    });
                });
            }).catch(err => {
                console.error("Error connecting to FastAPI:", err);
                return new Response(JSON.stringify({ error: "Failed to connect to coder service" }), {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            });
        }

        // Default fallback
        return new Response("Not found", { status: 404 });
    },
});

console.log('refreshed')