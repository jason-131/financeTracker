from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator

class Entry(Model):
    id = fields.IntField(pk=True)
    category = fields.CharField(max_length=30,nullable=False)
    amount = fields.DecimalField(max_digits=100,decimal_places=2,default=0.00)
    description = fields.CharField(max_length=1000)
    date = fields.DateField()

#create pydantic models
entry_pydantic = pydantic_model_creator(Entry, name ="Entry")
entry_pydanticIn = pydantic_model_creator(Entry,name="ProductIn",exclude_readonly=True)




