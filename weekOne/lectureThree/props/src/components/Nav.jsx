const Nav = (props) => {
    const {firstName, lastName} = props;
  return (
    <nav>
        <h1>Hello {firstName} {lastName}</h1>
    </nav>
  )
}

export default Nav