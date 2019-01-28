import { lazy } from 'react';
import { IRoute, IRouteList, IChild } from '../routes/index.d';

const home: IRoute = {
  key: 'home',
  title: '首页',
  path: '/',
  children: [
    {
      title: '首页',
      path: '',
      component: lazy(() => import(/*webpackChunkName: 'Home'*/ '../routes/Home/Home'))
    }
  ]
};

const login = {
  key: 'login',
  title: '用户登录',
  path: '/auth',
  children: [
    {
      title: '用户登录',
      path: '/login',
      component: lazy(() => import(/*webpackChunkName: 'Home'*/ '../routes/Login/Login'))
    }
  ]
};

const about = {
  key: 'about',
  title: '关于',
  path: '/about',
  children: [
    {
      title: '关于',
      path: '',
      component: lazy(() => import(/*webpackChunkName: 'Home'*/ '../routes/About/About'))
    }
  ]
};

const routeList: IRouteList = [about, home, login];

export default routeList;
