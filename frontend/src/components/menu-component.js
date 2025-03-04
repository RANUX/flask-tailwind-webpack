export default () => ({
  menuOpen: false,

  init() {
    // Any initialization logic can go here
  },

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  },
});
