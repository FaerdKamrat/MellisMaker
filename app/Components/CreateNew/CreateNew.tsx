"use client"
import './edit-create.css'
import { useState } from 'react'
const CreateNew = ()=> {
    const [form, update_form] = useState({
        name              : "",
        cost              : 0,
        extra_cost        : 0,
        ingredients       : new Array<string>(),
        extra_ingredients : new Array<string>()
    })
    const handleEvent = (e:any) =>{
        switch (e.target.name) {
            case "name":
                update_form({...form, name: e.target.value})
                break
           
        }
    }
    const TheInput = ({props}:any) => {
        const [input_form, update_input_form] = useState({
            name : "",
            cost : 0,
        })
        const handleEvent = (e:any) =>{
            switch (e.target.name) {
                case "text":
                    update_input_form({...input_form, name: e.target.value})
                    break
                case "cost":
                    update_input_form({...input_form, cost: e.target.value})
                    break
                case "submit":
                    if(props.type === true) {
                        let new_list = [...form.ingredients, input_form.name]
                        update_form({...form, ingredients : new_list})
                        update_form({...form, cost: form.cost+input_form.cost})
                    } else {
                        let new_list = [...form.extra_ingredients, input_form.name]
                        update_form({...form, extra_ingredients : new_list})
                        update_form({...form, extra_cost: form.extra_cost+input_form.cost})
                    }
                    console.log(form)

                    break
               
            }
            console.log(input_form)

        }
        return (
            <div className='edit-create-inputs'>
                <input  className="edit-create-title" onChange={handleEvent} type="text" name="text" placeholder="Ingridenser"/>
                <input  className="edit-create-cost"  onChange={handleEvent} type="number" name="cost"/>
                <button className="edit-create-add"   onClick={handleEvent}  name="submit">+</button>

            </div>
        )
    }
    return (
        <div className="edit-create-container">
            <input type="text" name="name" placeholder="namn på maträtt"/>
            <div className="edit-create-row">
                <div className="edit-create-form">
                    <TheInput props={{type:true}}/>
                    <TheInput props={{type:false}}/>
                </div>

                <div className="edit-create-list">
                    <div className="edit-create-list-in">
                        <h3>Indgridenser:</h3>
                        {form.ingredients.map((index,key)=><p key={key}>&#x2022; {index},<br /></p>)}
                        <p>pris: {form.cost}</p>
                    </div>
                    <div className="edit-create-list-ext-in">
                        <h3>Extra Indgridenser:</h3>
                        {form.extra_ingredients.map((index,key)=><p key={key}>&#x2022; {index},<br /></p>)}
                        <p>pris: {form.cost}</p>
                    </div>
                </div>

            </div>
            <button className="edit-create-submit"><img src="/truck.svg" alt="" /></button>
        </div>
    )
}
export default CreateNew