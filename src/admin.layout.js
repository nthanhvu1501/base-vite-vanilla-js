const AdminLayout = (content) => {
    const app = document.getElementById('app');
    app.innerHTML = `
    <header>
      <h1>Admin</h1>
    </header>
    <main>
      ${content}
    </main>
    <footer>
      <p>© 2024 My App</p>
    </footer>
    `;
}
export default AdminLayout