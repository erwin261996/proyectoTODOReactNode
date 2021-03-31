import React from 'react'
import { todoServices } from '../services'

export const ListaTodos = (props) => {

    const actionCheckBox = (id, checl) => {
        todoServices.todoCheckBox({
            codigo: id,
            active: checl
        }).then(data => {}).catch(err => console.log('SQL:: ',err))
    }
    return (
        <div className="lista-todo" id={props.cod}>
            <div>
            <label className="c-check">
                <input type="checkbox" defaultChecked={(props.isActive===1)?true:false} onChange={(e)=>actionCheckBox(props.cod, e.target.checked?1:0)} />
                <span className="checkmark"></span>
            </label>
            <span className="texto">{ props.texto }</span>
            </div>
            <button type="button" className="btn-icon btn-danger" onClick={() => props.mhandleDelete(props.cod)}>Eliminar</button>
        </div>
    )
}