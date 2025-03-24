// 创建一个简单的状态管理
const sidebarState = {
  isOpen: true,
  listeners: new Set(),

  toggle() {
    this.isOpen = !this.isOpen;
    this.notify();
  },

  subscribe(listener) {
    this.listeners.add(listener);
  },

  unsubscribe(listener) {
    this.listeners.delete(listener);
  },

  notify() {
    this.listeners.forEach(listener => listener(this.isOpen));
  }
};

export default sidebarState; 