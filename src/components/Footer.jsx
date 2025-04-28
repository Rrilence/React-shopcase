function Footer () {
    return <footer className="page-footer backGr1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} React ShopCase
      <a className="grey-text text-lighten-4 right" href="https://github.com/Rrilence/React-shopcase" target="_blank" rel="noreferrer">Repository Rrilence</a>
      </div>
    </div>
  </footer>
}

export {Footer}