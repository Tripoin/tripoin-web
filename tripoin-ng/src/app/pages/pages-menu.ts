import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'LATIHAN',
    group: true,
  },
  {
    title: 'Latihan',
    icon: 'nb-keypad',
    link: '/pages/latihan',
    children: [
      {
        title: 'Component',
        link: '/pages/latihan/component',
      },
      {
        title: 'Form Handling',
        link: '/pages/latihan/form-handling',
      },
      {
        title: 'Http Client',
        link: '/pages/latihan/http-client',
      },
      {
        title: 'Upload File',
        link: '/pages/latihan/upload-file',
      }
    ]
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'TASKS',
    group: true,
  },
  {
    title: 'Component',
    icon: 'nb-layout-sidebar-left',
    children: [
      {
        title: 'Selector',
        link: '/pages/tasks/task-selector',
      },
      {
        title: 'Interpolation',
        link: '/pages/tasks/task-interpolation',
      },
      {
        title: 'Looping',
        link: '/pages/tasks/task-looping',
      },
      {
        title: 'Conditional',
        link: '/pages/tasks/task-conditional',
      },
      {
        title: 'Task',
        link: '/pages/tasks/task-component',
        icon: 'nb-compose'
      }
    ],
  },
  {
    title: 'Form Handling',
    icon: 'nb-layout-sidebar-left',
    children: [
      {
        title: 'Event Handling',
        link: '/pages/tasks/task-event-handling',
      },
      {
        title: 'Validation',
        link: '/pages/tasks/task-validation',
      },
      {
        title: 'Change State',
        link: '/pages/tasks/task-change-state',
      }
    ],
  },
  {
    title: 'REST Backend',
    icon: 'nb-layout-sidebar-left',
    children: [
      {
        title: 'HTTP Client',
        link: '/pages/tasks/task-http-client',
      },
      {
        title: 'Upload File',
        link: '/pages/tasks/task-upload-file',
      }
    ],
  },
  {
    title: 'Authentication',
    icon: 'nb-layout-sidebar-left',
    children: [
      {
        title: 'Restricting Access',
        link: '/pages/tasks/task-restricting-access',
      },
      {
        title: 'Session Based Authentication',
        link: '/pages/tasks/task-session-based-authentication',
      },
      {
        title: 'OAuth2',
        link: '/pages/tasks/task-oauth2',
      }
    ],
  },
];
