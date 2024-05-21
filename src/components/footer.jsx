function Footer() {
    return <footer className="page-footer blue lighten-3 accent-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Дельцова Полина Максимовна
      <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
      </div>
    </div>
  </footer>
}
export { Footer };