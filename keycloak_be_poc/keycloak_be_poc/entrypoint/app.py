from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from keycloak_be_poc.entrypoint.routers import helloworld_router, health_router

app = FastAPI(
    title="Authentication Service",
)


def include_routers():
    app.include_router(health_router.router, tags=["health"])
    app.include_router(helloworld_router.router, tags=["aggregate1"])


def configure_cors():
    origins = ["http://localhost:4200"]
    app.add_middleware(
        CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"]
    )


include_routers()
configure_cors()
