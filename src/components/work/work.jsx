import { useState } from "react";
import useEventListener from '@use-it/event-listener'

function Work(props) {
  const mobile = props.mobile;
  const setWorkArr = props.fan;
  const setFilter = props.setFilter;
  const workArr = props.arr;
  const { nameWork, categories, background, id, category } = props.props;
  const [focus, setFocus] = useState(false)
  const setState = props.setState
  const state = props.state
  const switchCategory = function () {
    let id = category
    const clone = [...state]
    clone.splice(id += 1, 1, true)
    if (JSON.stringify(clone) !== JSON.stringify(state)) {
      clone.splice(0, 1, false)
      setState(clone)
      setFilter(id -= 1)
    } else {
      setState([true, false, false, false, false])
      setFilter('all')
    }
  }
  const handleChangeFocus = () => {
    if (!mobile) {
      setFocus(!focus)
    }
  }

  function deleteItem(id) {
    if (!mobile && focus) {
      workArr.find((value, index) => {
        if (value.id == id) {
          setWorkArr([...workArr.slice(0, index), ...workArr.slice(index + 1)])
        }
      })
      setFocus(!focus)
    }

  }

  const DELETE_KEYS = ['46', 'Delete'];

  function handler({ key }) {
    if (DELETE_KEYS.includes(String(key))) {
      deleteItem(id)
    }
  }
  useEventListener('keydown', handler);


  return (
    <div className="works__item item" onClick={handleChangeFocus} >
      <div
        className={`item__wrapper ${focus ? 'active' : ""}`}
        style={{ backgroundImage: `url(./img/${background})` }}
      >
        <button className="item__button" data-key={id} onClick={switchCategory}>
          {categories}
        </button>
        <div className="item__title">
          <h2>{nameWork}</h2>
        </div>
      </div>
    </div>
  )
}

export default Work

