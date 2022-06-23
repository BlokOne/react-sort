

function NavigationLink(props) {
  const { fun, value, state, index } = props
  const id = index + 1;

  return (
    <li className={`categories__link ${state[id] ? 'active' : " "}`} onClick={fun(index)}>{value}</li>
  )
}

export default NavigationLink
