import React, { useState, useEffect } from 'react'
import './App.css';
import { ListaTodos } from './components'
import { todoServices } from './services'

const App = () => {

  const [ checkBox, setCheckBox ] = useState(0);
  const [ textoTodo, setTextoTodo ] = useState('');
  const [ dataTodo, setDataTodo ] = useState([]);

  const memoizedCallback = () => {
      todoServices.obtenemosTodos().then(data => {
        setCheckBox(0)
        setTextoTodo('');
        setDataTodo(data);
      }).catch(err => console.log('SQL:: ',err))
  }

  useEffect(() => {
    memoizedCallback();
  }, []);

  const handleSave = (e) => {
    e.preventDefault()
    todoServices.todoSave({ cod: 0, texto: textoTodo, valicompl: checkBox }).then(data => {
      setCheckBox(0)
      setTextoTodo('');
      setDataTodo([]);
      setDataTodo(data);
    }).catch(err => console.log('SQL:: ',err))
  }

  const handleDelete = (id) => {
    todoServices.todoDelete({ cod: id }).then(data => {
      setCheckBox(0)
      setTextoTodo('');
      setDataTodo([]);
      setDataTodo(data);
    }).catch(err => console.log('SQL:: ',err))
  }

  return (
    <div className="App">
        <h1 className="titulo">TODOS</h1>
        <form onSubmit={handleSave}>
        <div className="form-todo">
          <label className="c-check padre-check">
              <input type="checkbox" checked={(checkBox===1)?true:false} onChange={(e)=>setCheckBox(e.target.checked?1:0)}/>
              <span className="checkmark"></span>
          </label>
          <input type="text" className="input-custom" required={true} onChange={(e) => setTextoTodo(e.target.value)} value={textoTodo} />
          <button type="submit" className="btn-icon btn-primary">Guardar</button>
        </div>
        </form>
        <div className="contenedor-todo">
          {dataTodo.map((ite, idx)=>{
            return <ListaTodos key={idx} cod={ite.id} texto={ite.text} isActive={ite.completed} mhandleDelete={handleDelete} />
          })}
        </div>
    </div>
  );
}

export default App;
