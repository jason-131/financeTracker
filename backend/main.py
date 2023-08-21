from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from models import (entry_pydantic,entry_pydanticIn,Entry)

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins= [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]

)

@app.get("/")
def home():
    return{"Data":"Test"}

@app.get("/about")
def about():
    return {"Data":"About"}

@app.post('/entry/')
async def add_entry(entry_details: entry_pydanticIn):
    entry_details = entry_details.dict(exclude_unset = True)
    entry_obj = await Entry.create(**entry_details)
    response = await entry_pydantic.from_tortoise_orm(entry_obj)
    return{"status":"ok","data":response}

@app.get('/entry')
async def all_entries():
    response = await entry_pydantic.from_queryset(Entry.all())
    return {"status": "ok", "data": response}

@app.get('/entry/{id}')
async def specific(id:int):
    response = await entry_pydantic.from_queryset_single(Entry.get(id = id))
    return{"status":"ok","data":response}

@app.delete('/entry/{id}')
async def delete_entry(id:int):
    await Entry.filter(id=id).delete()
    return {"status":"ok"}

register_tortoise(
    app,
    db_url="sqlite://database.sqlite3",
    modules={"models": ["models"]},
    generate_schemas=True,
    add_exception_handlers=True
)
