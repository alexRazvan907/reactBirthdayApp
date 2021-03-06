import React, { useState } from 'react'
import data from './data';

function App(){

const removeItem = (id) => {
  let newPeople = people.filter((person) => person.id !== id)
  setPeople(newPeople)
}
const List = ({people}) => {
  return (
    <>
    {people.map((person) => {
      const {id,name,age,image} = person;
      return (
        <article key={id} className="person">
          <img src={image} alt={name}/>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            <button className="removeBtn" onClick={() => removeItem(id)}>
              remove 
            </button>
          </div>
        </article>
      )
    })}
    </>
  )
}


const [people, setPeople] = useState(data)

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people}/>
          <button onClick={() => setPeople([])}>
            clear all
          </button>
        </section>
      </main>
    </>
  )
}
export default App;
