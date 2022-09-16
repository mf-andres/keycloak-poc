import requests
from fastapi import APIRouter, Request, HTTPException

router = APIRouter()


@router.get(
    "/helloworld",
    status_code=201,
    response_model=None,
)
def get(request: Request):
    headers = {"Authorization": request.headers["Authorization"]}
    response = requests.get("http://localhost:8080/realms/myrealm/protocol/openid-connect/userinfo", headers=headers)
    print(response.status_code)
    print(response.json())
    if response.status_code != 200:
        raise HTTPException(status_code=403, detail="Access revoked")
    return "Hello world"
