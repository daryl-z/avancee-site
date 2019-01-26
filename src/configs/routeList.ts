import { lazy } from 'react';

const home = {
  key: 'home',
  title: '首页',
  path: 'home',
  children: [
    {
      title: '首页',
      path: '/home',
      component: () => import(/*webpackChunkName: 'Home'*/ '../routes/Home/Home')
    }
  ]
};

const login = {
  key: 'login',
  title: '用户登录',
  path: 'login',
  children: [
    {
      title: '用户登录',
      path: '/login',
      component: () => import(/*webpackChunkName: 'Home'*/ '../routes/Login/Login')
    }
  ]
};

const about = {
  key: 'about',
  title: '关于',
  path: 'about',
  children: [
    {
      title: '关于',
      path: '/about',
      component: () => import(/*webpackChunkName: 'Home'*/ '../routes/About/About')
    }
  ]
};

const routeList = [about, home, login];

routeList.forEach(item => {
  item.children.forEach(child => {
    if (child.component) {
      lazy(() => child.component);
    }
  });
});
export default routeList;

// if (route.component) {
//     const LoadableComponent = Loadable({
//       loader: route.component,
//       loading: ({ retry, error }) => {
//         if (error) {
//           return <ChunkLoadFail error={error} retry={retry} />;
//         }
//         return <span />;
//       }
//     });

//     route.component = class Loadable extends React.Component {
//       render() {
//         return <LoadableComponent {...this.props} />;
//       }
//     };
//   } else {
//     route.component = _ => <span>NO</span>;
//   }
