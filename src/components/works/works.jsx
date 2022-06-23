import { works } from "../mocks/works";
import { nav } from "../mocks/nav";
import { useState } from 'react';
import Work from "../work/work";
import NavigationLink from "../navigation/navigation";

let ELEMENTS_COUNT = 9;
let IT_MOBILE = false;




function Works(props) {
  const setState = props.setState
  const state = props.state
  const width = props.props.props

  const [length, setLength] = useState(ELEMENTS_COUNT);
  const [active, setActive] = useState(false)
  const [category, setCategory] = useState('Show All')
  const [workArr, setWorkArr] = useState([...works])

  if (width < 1040) {
    IT_MOBILE = true;
    ELEMENTS_COUNT = 8;
  } else if (width > 1040) {
    IT_MOBILE = false;
    ELEMENTS_COUNT = 9;
  }

  const [filter, setFilter] = useState('all')
  const handleChangeFilter = (value) => (e) => {
    setCategory(e.target.innerText)
    setFilter(value)
    let id = value
    let clone = [...state]
    clone.splice(id += 1, 1, true)
    if (JSON.stringify(clone) !== JSON.stringify(state)) {
      clone = [false, false, false, false, false]
      clone.splice(id, 1, true)
      setState(clone)
    } else {
      setState([true, false, false, false, false])
      setFilter('all')
    }
  }
  const showAll = () => {
    if (length + ELEMENTS_COUNT <= workArr.length) {
      return setLength(length + ELEMENTS_COUNT);
    }
    return setLength(works.length)
  }

  const filteredWorks = workArr.slice(0, length).filter((value) => {
    if (filter === value.category) {
      return true;
    }
    else if (filter === 'all') {
      return true;
    }
  });

  const openList = (e) => {
    if (IT_MOBILE) {
      setActive(!active);
    }
  }



  return (
    <section className="works">
      <div className="works__container container">
        <div className="works__categories categories">
          <div
            className={`categories__list ${active ? 'active' : " "}`}
            onClick={openList}
          >
            <span>{category}</span>
            <ul className={`categories__links ${active ? 'active' : " "}`}>
              <li className={`categories__link ${state[0] ? 'active' : " "}`} onClick={handleChangeFilter('all')}>Show All</li>
              {nav.map((value, index) => {
                return <NavigationLink key={value} value={value} fun={handleChangeFilter} state={state} index={index} />
              })}
            </ul>
            <img src="./img/Triangle.svg" alt="" />
          </div>
        </div>
        <div className="works__items">
          {filteredWorks.map((value) => {
            return <Work key={value.id} props={value} setState={setState} state={state} setFilter={setFilter} fan={setWorkArr} arr={workArr} mobile={IT_MOBILE} />
          })}
        </div>
        <div className="works__load-more">
          {length !== works.length && (
            <button className="works__button" onClick={showAll}>Load More</button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Works
