import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/': [
    {
      text: '文档',
      icon: 'note',
      prefix: 'guide/',
      children: 'structure',
    },
  ],
});
