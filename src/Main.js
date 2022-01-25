function Main() {
  return (
    <div className='main'>

      <div className='center'>
        <div className='menu'>
          <div className='logo'>
            <h3>Landing-Page</h3>
          </div>
          <div className='item-menu'>
            <a href='link'>Login</a>
          </div>
        </div>
        <div className='form'>
          <h2>Entre em Contato</h2>
          <form>

            <div className='items-form'>
              <input placeholder='Nome' type="text" />
              <input placeholder='Nome' type="text" />
              <input placeholder='Nome' type="text" />
              <input placeholder='Nome' type="text" />
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Main;